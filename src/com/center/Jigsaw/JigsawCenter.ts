module com.center {
    import MathUnit = com.utils.MathUnit;

    export class JigsawCenter {
        public constructor() {

        }

        public static RES_PATH:string = "resource/res/image/";

        private static _instance:JigsawCenter;
        public static get Instance():JigsawCenter {
            if (!this._instance) {
                this._instance = new JigsawCenter();
            }
            return this._instance;
        }

        private _jigsaws:Array<Jigsaw>;

        public getList():Array<Jigsaw> {
            return this._jigsaws;
        }

        //全局参数
        public org_x:number;
        public org_y:number;
        public width:number;
        public height:number;
        public per_width:number;
        public per_height:number;

        public init():void {
            let jsonObj:any = RES.getRes("jigsaw_json");
            let picInfos:Array<any> = jsonObj.picInfos;
            this._jigsaws = new Array<Jigsaw>();
            for (let i:number = 0; i < picInfos.length; i++) {
                let jig:Jigsaw = new Jigsaw(picInfos[i].name);
                jig.init(picInfos[i]);
                this._jigsaws.push(jig);
            }
        }

        public getStartFragArr(idx:number):Array<Jigsaw_frag> {
            let ans:Array<Jigsaw_frag> = new Array<Jigsaw_frag>();
            let dataArr:Array<Jigsaw_frag> = this._jigsaws[idx].fragArr;
            while (dataArr.length > 0) {
                let rand:number = MathUnit.randRange(0, dataArr.length - 1);
                ans.push(dataArr[rand]);
                dataArr.splice(rand, 1);
            }
            return ans;
        }
    }
}