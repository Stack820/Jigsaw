class GameLogin extends base.GSprite {

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addtoStageHandler, this);
	}

	private addtoStageHandler(event: egret.Event) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addtoStageHandler, this);
		EventManager.addEventListener(EventType.ROLE_CREATE_COMPLETE, this.createRoleComplete, this);
		this.createFairuiData();
		EventManager.dispatchEvent(LoginEvent.SHOW_INIT_GAME_PROGRESS, 50, 100, "open login panel... ");
		// if (Config.isDebug) {
		// 	//打开登陆界面
		// }
		// else {
		// 	//@TODO 正式版进行登录
		// 	fairui.FairyUIManager.openPanel(com.enums.EnumPanelID.SERVER_LIST);
		// }
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
		RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
		RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
		RES.loadGroup("main", 4);
		RES.loadGroup("tip", 3);
		RES.loadGroup("home", 2);
		RES.loadGroup("fight", 1);
	}

	private createFairuiData() {
		EventManager.dispatchEvent(LoginEvent.SHOW_INIT_GAME_PROGRESS, 40, 100, "The game UI is being created... ");
		try {
			fairui.PanelRegister.init();
			fairui.FairyUIManager.init(App.mainUI.fairyUIView);
		}
		catch (error) {
			console.log(error);
			EventManager.dispatchEvent(LoginEvent.SHOW_INIT_GAME_PROGRESS, 40, 100, "The game UI created error:" + error);
		}
	}
	/**角色信息创建完成*/
	private createRoleComplete(): void {
		EventManager.dispatchEvent(LoginEvent.SHOW_GAME_LOADDING);
		this.showpreLoaderHandler();
		this.configLoadComplete();
	}

	private showpreLoaderHandler(param: any = null) {
		fairui.FairyUIManager.closePanel(com.enums.EnumPanelID.LOGIN, true);
		//App.mainUI.addLoadingUI();
	}
	/**
	 * preload资源组加载完成
	 * preload resource group is loaded
	 */
	private onResourceLoadComplete(event: RES.ResourceEvent): void {
		EventManager.dispatchEvent(LoginEvent.SHOW_INIT_GAME_PROGRESS, 90, 100, "Loading " + event.groupName + " group res complete.");
		switch (event.groupName) {
			case "fight":
				{
					RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
					RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
					RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
					RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
					if (Config.inGame) {
						EventManager.dispatchEvent(LoginEvent.SHOW_INIT_GAME_PROGRESS, 91, 100, "The game configuration file is being parsed.");
						//WebParams.setActionLog("onResourceLoadComplete groupName3:" + Config.inGame);
					}
					else {
						EventManager.dispatchEvent(LoginEvent.SHOW_INIT_GAME_PROGRESS, 91, 100, "Wait for the role landing to complete...");
						Config.inGame = true;
						//WebParams.setActionLog("onResourceLoadComplete groupName1:" + Config.inGame);
					}
					//new com.game.utils.DataConfigUtils().start(flash.bind(this.configLoadComplete, this));
                    this.createRoleComplete();
                    EventManager.dispatchEvent(LoginEvent.ROLE_LOGIN_TO_SECNE);
					break;
				}
		}
		// if (event.groupName == "main") {
		// 	RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
		// 	RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
		// 	RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
		// 	RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
		// 	new com.game.utils.DataConfigUtils().start(flash.bind(this.configLoadComplete, this));
		// }
	}
    /**
     * 资源组一个加载项加载出错
     *  The resource group loading failed
     */
	private onItemLoadError(event: RES.ResourceEvent): void {
		console.warn("Url:" + event.resItem.url + " has failed to load");
	}
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
	private onResourceLoadError(event: RES.ResourceEvent): void {
		//console.warn("Group:" + event.groupName + " has failed to load");
		EventManager.dispatchEvent(LoginEvent.SHOW_INIT_GAME_PROGRESS, event.itemsLoaded, event.itemsTotal, "Loading " + event.groupName + " group res has failed to load.");
		//忽略加载失败的项目 ignore loading failed projects
		this.onResourceLoadComplete(event);
	}
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
	private onResourceProgress(event: RES.ResourceEvent): void {
		//switch (event.groupName) {
		//	case "main":
		EventManager.dispatchEvent(LoginEvent.SHOW_INIT_GAME_PROGRESS, event.itemsLoaded, event.itemsTotal, "Loading " + event.groupName + " group res [" + event.itemsLoaded + "/" + event.itemsTotal + "]");
		//		break;
		//}
	}

	private configLoadComplete() {
		App.mainUI.createGameClient();
	}

	public dispose() {
		super.dispose();
		//EventManager.removeEventListener(com.events.LoginEvent.SHOW_PRE_LOADER, this.showpreLoaderHandler, this);
	}
}