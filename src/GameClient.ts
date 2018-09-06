
import PanelRegister = fairui.PanelRegister;
import MoneyEvent = com.events.MoneyEvent;
import TaskEvent = com.events.TaskEvent;
import ItemEvent = com.events.ItemEvent;
import PlayerAttributeEvent = com.events.PlayerAttributeEvent;
import HeroEvent = com.events.HeroEvent;
import FairyUIManager = fairui.FairyUIManager;
import EnumPanelID = com.enums.EnumPanelID;
import JigsawCenter = com.center.JigsawCenter;

class GameClient extends base.GSprite {

	private mainView: base.GSprite;

	private _sceneType: number = com.enums.EnumScene.NO_SCENE;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addtoStageHandler, this);
	}

	private addtoStageHandler(event: egret.Event) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addtoStageHandler, this);
		App.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHandler, this);
		App.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHandler, this);
		App.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHandler, this);
		JigsawCenter.Instance.init();
        FairyUIManager.openPanel(EnumPanelID.JIGSAW);
	}

	public changeScene(type: number, displayObject: base.GSprite) {
		if (this._sceneType != type) {
			if (this.mainView) {
				this.mainView.dispose();
				this.removeChild(this.mainView);
			}
			this.mainView = displayObject;
			this.addChild(this.mainView);
		}
		this._sceneType = type;
	}
	public removeScene(displayObject: base.GSprite) {
		if (this.mainView && this.contains(this.mainView) && this.mainView == displayObject)
			this.removeChild(this.mainView);
		this.mainView = null;
		this._sceneType = com.enums.EnumScene.NO_SCENE;
	}

	private touchTapHandler(event: egret.TouchEvent) {
		//App.log.debug(event.stageX,event.stageY);
	}

	private touchBeginHandler(event: egret.TouchEvent) {
		//App.log.debug(event.stageX,event.stageY);
		this.touchMoveHandler(event);
		EventManager.dispatchEvent(com.events.EventType.CLICK_STAGE_START);
	}

	private touchMoveHandler(event: egret.TouchEvent) {
		//App.log.debug(event.stageX,event.stageY);
		App.stageX = event.stageX;
		App.stageY = event.stageY;
	}

	private touchEndHandler(event: egret.TouchEvent): void {
		EventManager.dispatchEvent(com.events.EventType.CLICK_STAGE_END);
	}
} 