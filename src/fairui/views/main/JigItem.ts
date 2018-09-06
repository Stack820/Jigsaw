module fairui {
    import Jigsaw_frag = com.center.Jigsaw_frag;
    import TouchEvent = egret.TouchEvent;

    export class JigItem extends BaseItem {

        private _frag:Jigsaw_frag;

        private eloader_frag:ELoader;

        protected init(): void {
            super.init();

            this.addPanelEventListener(TouchEvent.TOUCH_BEGIN, this.onClick, this, this);
        }

        public show(value: any = null): void {
            super.show(value);
        }

        public hide(): void {
            super.hide();
        }

        public dispose(): void {
            super.dispose();
        }

        public set frag(val:Jigsaw_frag) {
            this._frag = val;

            this.eloader_frag.url = JigsawCenter.RES_PATH + val.name + ".png";
        }

        private onClick(e:TouchEvent): void {
            console.log();
        }
    }
}