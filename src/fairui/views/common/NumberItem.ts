module fairui {

	/**
	 * 数字组件
	 * @author cl 2018.4.21
	 */
	export class NumberItem extends BaseButton {

		private bg: fairygui.GLoader;
		private btn_add: EButton;
		private btn_bg: EButton;
		public btn_icon: EButton;

		private _data: any = null;

		private _isShowBg: boolean = true;
		private _isShowAdd: boolean = true;
		private _type: number = 0;
		/**点击回调方法 */
		public addFunction: Function;

		public constructor() {

			super();

			this.touchEnabled = false;
			this.touchChildren = true;
		}

		public setup_beforeAdd(xml: any): void {
			super.setup_beforeAdd(xml);
			//自定义数据
			if (this.data && this.data != undefined) {

				try {
					let json: Object = <any>JSON.parse(this.data);
					if (json.hasOwnProperty("isShowBg")) {
						this._isShowBg = json["isShowBg"];
					}
					if (json.hasOwnProperty("isShowAdd")) {
						this._isShowAdd = json["isShowAdd"];
					}
				} catch (error) {
					// App.log.error(App.lang.getLang("panel_error_3"));//解析数字条目自定义数据错误！
				}
			}
		}

		protected init(): void {

			super.init();

			this.isShowBg = this._isShowBg;
			this.isShowAdd = this._isShowAdd;

			this.btn_add.downEffect = 2;
			// this.btn_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchAddBtnHandler, this);
		}

		public show(data: any): void {

			this._data = null;
		}



		public set isShowBg(value: boolean) {

			this.btn_bg.visible = value;
		}

		public get isShowBg(): boolean {

			return this.btn_bg.visible;
		}

		public set icon(value: string) {

			this.btn_icon.icon = value;
		}

		public get icon(): string {

			return this.btn_icon.icon;
		}

		/**
		 * 设置货币图标
		 * @param pkName 	包名
		 * @param resName 	资源名
		 */
		public setIcon(pkName: string, resName: string) {

			this.icon = FairyTextureUtils.getUrl(pkName, resName);
		}

		public set text(value: string) {

			this.title = value;
		}
		/**显示文本 */
		public get text(): string {

			return this.title;
		}

		public set isShowAdd(value: boolean) {

			this.btn_add.visible = value;
		}
		/**是否显示增加按钮 */
		public get isShowAdd(): boolean {

			return this.btn_add.visible;
		}



		public dispose(): void {

			super.dispose();
		}
	}
}