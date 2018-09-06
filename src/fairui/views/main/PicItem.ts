module fairui {
    import GGraph = fairygui.GGraph;
    import Jigsaw = com.center.Jigsaw;

    export class PicItem extends BaseItem {

        private _nameOfPic:string;
        private _idx:number;
        private _jig:Jigsaw;
        //comps
        private eloader_pic:ELoader;
        private graph_selected:GGraph;

        protected init(): void {
            super.init();
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

        private set picName(val:string) {
            this._nameOfPic = val;

            this.eloader_pic.url = JigsawCenter.RES_PATH + val + ".png";
        }

        public set select(val:boolean) {
            this.graph_selected.visible = val;
        }

        public get idx():number {
            return this._idx;
        }

        public set idx(val:number) {
            this._idx = val;
        }

        public set jig(val:Jigsaw) {
            this._jig = val;

            this.picName = val.name;
        }
    }
}