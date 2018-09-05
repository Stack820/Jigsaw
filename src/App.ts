class App {
	public static mainUI: Main;
	public static stage: egret.Stage;

	/**APP启动*/
	public static init(main: Main) {
		App.mainUI = main;
		App.stage = main.stage;
		//App.lang.addLangObject(RES.getRes("login_language"));
		//Config.playSound = false;
	}

	private static _stageX: number = 0;

	public static set stageX(value: number) {
		this._stageX = value;
	}

	public static get stageX(): number {
		return this._stageX;
	}

	private static _stageY: number = 0;

	public static set stageY(value: number) {
		this._stageY = value;
	}

	public static get stageY(): number {
		return this._stageY;
	}
	/**有效显示区域宽度 */
	public static get stageWidth(): number {
		return this.stage.stageWidth;
		//return window.innerWidth;
	}
	/**有效显示区域高度 */
	public static get stageHeight(): number {
		//return window.innerHeight;
		return this.stage.stageHeight;
	}
	/**刷新游戏*/
	public static refresh(): void {
		let url: string = location.href;
		if (Config.isDebug) {
			//测试版刷新
			if (url.indexOf("index.html") == -1) {
				url = url + "index.html";
			}
		} else {
			//正式版刷新
		}
		let search: string = location.search;//URL ?号后面部分
		let refreshStr: string = "kdlReloadGame=";
		if (search.length <= 1 || search == "?") {
			url = url + "?" + refreshStr + Math.random().toFixed(1);
		} else {
			if (url.indexOf(refreshStr) == -1) {
				url = url + "&" + refreshStr + Math.random().toFixed(1);
			} else {
				url = url.replace(refreshStr, refreshStr + Math.random().toFixed(1));
			}
		}
		location.href = url;
	}
}