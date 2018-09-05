module fairui {
    export class MenuPanel extends BasePanel {
        public constructor() {
            super("main", "MenuView");
        }


        public show(data: any): void {
            super.show(data);

            let jsonObj:any = RES.getRes("jigsaw_json");

        }
    }
}