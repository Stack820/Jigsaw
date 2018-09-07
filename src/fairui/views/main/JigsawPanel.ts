module fairui {
    import GRichTextField = fairygui.GRichTextField;
    import GComponent = fairygui.GComponent;
    import GLoader = fairygui.GLoader;
    import Jigsaw_frag = com.center.Jigsaw_frag;
    import TouchEvent = egret.TouchEvent;
    import GList = fairygui.GList;
    import GGraph = fairygui.GGraph;
    import Timer = egret.Timer;
    import TimerEvent = egret.TimerEvent;
    import getTimer = egret.getTimer;
    import GImage = fairygui.GImage;

    export class JigsawPanel extends BasePanel {

        private eglist_pics:EGList;
        private eglist_frag:EGList;
        private txt_title:GRichTextField;
        private txt_timeCount:GRichTextField;
        private txt_joinTimes:GRichTextField;
        private btn_up:EButton;
        private btn_down:EButton;
        private graph_frag_1:GGraph;
        private graph_frag_2:GGraph;
        private graph_frag_3:GGraph;
        private graph_scene:GGraph;
        private img_right:GImage;
        private img_wrong:GImage;


        private eloaderArr:Array<ELoader>;

        //game logics
        private currFragArr:Array<Jigsaw_frag>;
        /**当前拼图的idx*/
        private currPicIdx:number = 0;
        /**当前第一个碎片的idx*/
        private currFragIdx:number = 0;
        /**当前选中碎片在列表中的idx*/
        private currSelFragIdx:number = 0;
        /**当前选中的eloader*/
        private currSelEl:ELoader = null;
        /**当前选中的frag*/
        private currSelFrag:Jigsaw_frag;
        private currSelIdx:number;

        /**游玩计时器*/
        private timer:Timer;
        /**游戏启动后的参与次数*/
        private joinedTimes:number = -1;
        /**拼完后计时*/
        private gameOverTimer:Timer;

        public constructor() {
            super("main", "JigsawPanel");
        }

        protected init(): void {
            PanelRegister.registerClass("main", "PicItem", PicItem);
            PanelRegister.registerClass("main", "JigItem", JigItem);
            super.init();
            this.eloaderArr = new Array<ELoader>(17);

            for (let i:number = 1; i <= 16; i++) {
                this.eloaderArr[i] = this["eloader_" + i];
                this.eloaderArr[i].visible = false;
                this.addPanelEventListener(TouchEvent.TOUCH_END, flash.bind(this.onClick, this), this.eloaderArr[i].img, this);
            }
            this.addPanelEventListener(TouchEvent.TOUCH_MOVE, flash.bind(this.onClick, this), this, this);
            this.addPanelEventListener(TouchEvent.TOUCH_TAP, flash.bind(this.onClick, this), this.btn_up, this);
            this.addPanelEventListener(TouchEvent.TOUCH_TAP, flash.bind(this.onClick, this), this.btn_down, this);
            this.addPanelEventListener(TouchEvent.TOUCH_BEGIN, flash.bind(this.onClick, this), this.graph_frag_1, this);
            this.addPanelEventListener(TouchEvent.TOUCH_BEGIN, flash.bind(this.onClick, this), this.graph_frag_2, this);
            this.addPanelEventListener(TouchEvent.TOUCH_BEGIN, flash.bind(this.onClick, this), this.graph_frag_3, this);

            this.addPanelEventListener(EGListEvent.RENDER, this.listRender_pic, this.eglist_pics, this);
            this.eglist_pics.clickHandler = this.clickPic;
            this.addPanelEventListener(EGListEvent.RENDER, this.listRender_frag, this.eglist_frag, this);
            this.eglist_frag.touchEnabled = false;

            this.timer = new Timer(1000);
            this.addPanelEventListener(TimerEvent.TIMER, this.onTimer, this.timer, this);
        }

        public show(data: any): void {
            super.show(data);
            this.eglist_pics.array = JigsawCenter.Instance.getList();
            this.eglist_pics.clickIndex = 0;
        }

        public hide(): void {
            super.hide();
        }

        public dispose(): void {
            super.dispose();
        }

        /**游玩计时*/
        private onTimer() {
            let secs:number = this.timer.currentCount
            let sec:number = secs % 60;
            let hour:number = Math.round(secs / 3600);
            let min:number = Math.round((secs % 3600) / 60);
            this.txt_timeCount.text = hour + ":" + min + ":" + sec;
        }

        private gameRestart(idx:number): void {
            this.currPicIdx = idx;
            if (this.gameOverTimer) {
                this.gameOverTimer.removeEventListener(TimerEvent.TIMER_COMPLETE, this.gameOverTimerComp, this);
                this.gameOverTimer.stop();
            }
            this.resetEloaders();
            this.txt_title.text = JigsawCenter.Instance.getList()[idx].displayName;
            this.currFragArr = JigsawCenter.Instance.getStartFragArr(idx);
            this.eglist_frag.array = this.currFragArr;
            this.currFragIdx = 0;
            this.clickUpOrDown();
            this.timer.reset();
            this.timer.start();
            this.joinedTimes++;
            this.txt_joinTimes.text = this.joinedTimes.toString();
        }

        private resetEloaders(): void {
            for (let i:number = 1; i <= 16; i++) {
                this.eloaderArr[i].visible = false;
            }
        }

        private listRender_pic(e:EGListEvent): void {
            let item:PicItem = <PicItem>e.obj;
            item.idx = e.index;
            item.jig = this.eglist_pics.array[e.index];
        }

        private listRender_frag(e:EGListEvent): void {
            let item:JigItem = <JigItem>e.obj;
            item.frag = this.eglist_frag.array[e.index];
        }

        private clickPic(item:PicItem): void {
            this.gameRestart(item.idx);
        }

        private onClick(e:TouchEvent): void {
            if (e.type == TouchEvent.TOUCH_MOVE) {
                if (this.currSelEl) {
                    this.currSelEl.x = e.stageX - this.currSelEl.width / 2;
                    this.currSelEl.y = e.stageY - this.currSelEl.height / 2;
                }
            } else if (e.type == TouchEvent.TOUCH_BEGIN) {
                switch (e.target) {
                    case this.graph_frag_1:
                        if (this.currFragArr.length > 0) {
                            this.currSelFragIdx = this.currFragIdx;
                            this.currSelIdx = parseInt(this.currFragArr[this.currSelFragIdx].name.split("_")[1]);
                            this.currSelEl = this.eloaderArr[this.currSelIdx];
                            this.currSelEl.img.sortingOrder = 0;
                            this.currSelFrag = this.currFragArr[this.currSelFragIdx];
                            this.currSelEl.url = JigsawCenter.RES_PATH + this.currSelFrag.name + ".png";
                            this.currSelEl.x = e.stageX - this.currSelEl.width / 2;
                            this.currSelEl.y = e.stageY - this.currSelEl.height / 2;
                            this.currSelEl.visible = true;
                        }
                        break;
                    case this.graph_frag_2:
                        if (this.currFragArr.length > 1) {
                            this.currSelFragIdx = this.currFragIdx + 1;
                            this.currSelIdx = parseInt(this.currFragArr[this.currSelFragIdx].name.split("_")[1]);
                            this.currSelEl = this.eloaderArr[this.currSelIdx];
                            this.currSelEl.img.sortingOrder = 0;
                            this.currSelFrag = this.currFragArr[this.currSelFragIdx];
                            this.currSelEl.url = JigsawCenter.RES_PATH + this.currSelFrag.name + ".png";
                            this.currSelEl.x = e.stageX - this.currSelEl.width / 2;
                            this.currSelEl.y = e.stageY - this.currSelEl.height / 2;
                            this.currSelEl.visible = true;
                        }
                        break;
                    case this.graph_frag_3:
                        if (this.currFragArr.length > 2) {
                            this.currSelFragIdx = this.currFragIdx + 2;
                            this.currSelIdx = parseInt(this.currFragArr[this.currSelFragIdx].name.split("_")[1]);
                            this.currSelEl = this.eloaderArr[this.currSelIdx];
                            this.currSelEl.img.sortingOrder = 0;
                            this.currSelFrag = this.currFragArr[this.currSelFragIdx];
                            this.currSelEl.url = JigsawCenter.RES_PATH + this.currSelFrag.name + ".png";
                            this.currSelEl.x = e.stageX - this.currSelEl.width / 2;
                            this.currSelEl.y = e.stageY - this.currSelEl.height / 2;
                            this.currSelEl.visible = true;
                        }
                        break;
                }
            } else if (e.type == TouchEvent.TOUCH_END) {
                if (this.currSelEl) {
                    if (this.currSelFrag.judge(e.stageX, e.stageY)) {
                        this.currFragArr.splice(this.currSelFragIdx, 1);
                        this.eglist_frag.array = this.currFragArr;
                        this.currFragIdx = 0;
                        this.currSelEl.x = this.currSelFrag.x;
                        this.currSelEl.y = this.currSelFrag.y;
                        this.clickUpOrDown();
                        //TODO 播放正确效果
                        this.showRightOrWrong(1);
                        if (this.currFragArr.length == 0) {
                            this.gameOver();
                        }
                    } else {
                        //TODO 播放错误效果
                        this.showRightOrWrong(0);
                        this.currSelEl.visible = false;
                    }
                    this.currSelEl = null;
                }
            }
            switch (e.target) {

                case this.btn_up:
                    this.currFragIdx--;
                    this.clickUpOrDown();
                    break;
                case this.btn_down:
                    this.currFragIdx++;
                    this.clickUpOrDown();
                    break;
            }
        }

        private clickUpOrDown():void {
            this.btn_down.enabled = this.currFragIdx + 3 < this.currFragArr.length;
            this.btn_up.enabled = this.currFragIdx > 0 && this.currFragArr.length > 3;
            if (this.currFragArr.length > 0) {
                this.eglist_frag.scrollToView(this.currFragIdx, true, true);
            }
        }

        private gameOver(): void {
            this.gameOverTimer = new Timer(1000, 2);
            this.gameOverTimer.addEventListener(TimerEvent.TIMER_COMPLETE, this.gameOverTimerComp, this);
            this.gameOverTimer.start();
        }

        private gameOverTimerComp() {
            this.gameOverTimer.removeEventListener(TimerEvent.TIMER_COMPLETE, this.gameOverTimerComp, this);
            this.gameRestart(this.currPicIdx);
        }

        private onMove(e:TouchEvent): void {
        }

        private showRightOrWrong(type:number): void {
            if (type == 1) {
                TweenLite.to(this.img_right, 0.5, {alpha:1});
                TweenLite.to(this.img_right, 0.5, {alpha:0,delay:0.7});
            } else {
                TweenLite.to(this.img_wrong, 0.5, {alpha:1});
                TweenLite.to(this.img_wrong, 0.5, {alpha:0,delay:0.7});
            }
        }
    }
}