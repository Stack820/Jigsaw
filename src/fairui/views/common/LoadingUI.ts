module fairui {

    /**
     * 加载界面
     * @author cl 2018.3.14
     */
    export class LoadingUI extends BasePanel {

        private txt: fairygui.GTextField;

        public constructor() {

            super("common", "Loading");
        }

        protected init(): void {

            super.init();

            this.openTapMask = false;
        }

        public show(data: any): void {
            if (data && data.hasOwnProperty("openTapMask")) {
                this.openTapMask = data["openTapMask"];
            }else{
                this.openTapMask = false;
            }
            super.show(data);
            if (data) {
                if (data.hasOwnProperty("text")) {
                    this.text = data["text"];
                }

            }
        }

        public hide(): void {
            super.hide();
            this.text = "";
            this.openTapMask = true;
        }


        public set text(value: string) {
            value = value || "";
            if (this.txt != null) {
                this.txt.text = "1111"
            }
        }

        public get text(): string {
            return this.txt ? this.txt.text : "";
        }

        public get width(): number {
            return 145;
        }

        public get height(): number {
            return 114;
        }

        public dispose(): void {
            super.dispose();
        }
    }
}