module fairui {
	export class LoginWaitPanel extends BasePanel {

		private txt: fairygui.GTextField;
		
		public constructor() {
			super("main", "LoginWaitView");
		}

		protected init(): void {
			super.init();
			this.openTapMask = false;
		}

		public show(value: any): void {
			if (value.hasOwnProperty("openTapMask")) {
				this.openTapMask = value["openTapMask"];
			}
			super.show(value);
			if (value) {
				if (value.hasOwnProperty("text")) {
					this.txt.text = value["text"];
				}
				if (value.hasOwnProperty("isConnected") && value["isConnected"]) {
				}
			}
			//this.ui_effect.playing = true;
		}

		public hide(): void {
			super.hide();
			//this.ui_effect.playing = false;
			this.txt.text = null;
		}


		public get width(): number {
			return 500;
		}

		public get height(): number {
			return 274;
		}
	}
}