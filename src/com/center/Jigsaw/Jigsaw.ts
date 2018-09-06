module com.center {
    export class Jigsaw {
        public constructor(name:string) {
            this.name = name;
        }
        public name:string;
        public fragArr:Array<Jigsaw_frag>;
        /**
         * 初始化一张图的所有碎片坐标
         * */
        public init(picInfo:any):void {
            this.fragArr = new Array<Jigsaw_frag>();
            for (let i:number = 0; i < 16; i++) {
                let frag:Jigsaw_frag = new Jigsaw_frag(picInfo.coordinates[i][0], picInfo.coordinates[i][1]);
                frag.width = picInfo.per_width;
                frag.height = picInfo.per_height;
                frag.name = this.name + "_" + (i + 1).toString();
                this.fragArr.push(frag);
            }
        }
    }

    export class Jigsaw_frag {

        public constructor(x:number, y:number) {
            this.x = x;
            this.y = y;
        }
        public name:string
        public x:number;
        public y:number;
        public width:number;
        public height:number;

        /**
         *
         * */
        public judge(x:number, y:number):boolean {
            return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
        }
    }
}