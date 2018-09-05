module fairui {
	import EnumPanelID = com.enums.EnumPanelID;
	export class OpenUIManager {

		private static _instance: OpenUIManager;
		public static getInstance(): OpenUIManager {
			if (!this._instance) {
				this._instance = new OpenUIManager();
			}
			return this._instance;
		}

		public constructor() {
		}
		/**
		 * 打开错误日志UI
		 * @param str 错误日志信息
		 */
		public openDebugUI(str: string = undefined) {
			let panel: fairui.BasePanel = fairui.FairyUIManager.getShowPeanl(com.enums.EnumPanelID.DEBUG_VIEW);
			if (panel)
				panel.show(str ? "Error Log：" + str : str);
			else
				fairui.FairyUIManager.openPanel(com.enums.EnumPanelID.DEBUG_VIEW, str ? "Error Log：" + str : str);
		}
		/**
		 * 打开游戏内的Loading界面
		 * @param txt 显示文本
		 * @param showMask 是否显示遮罩
		 * @param openTapMask 是否允许遮罩点击关闭
		 */
		public openLoadingUI(txt: string, showMask: boolean = false, openTapMask: boolean = true) {
			let param: Object = { "text": txt, "showMask": showMask, "openTapMask": openTapMask };
			let loadPanel: LoadingUI = <LoadingUI>FairyUIManager.getShowPeanl(EnumPanelID.MAIN_LOADING);
			if (loadPanel) {
				loadPanel.show(param);
			}
			else
				FairyUIManager.openPanel(EnumPanelID.MAIN_LOADING, param);
		}
		/**关闭Loading界面*/
		public closeLoadingUI() {
			FairyUIManager.closePanel(EnumPanelID.MAIN_LOADING);
		}
		/**
		 * 打开等待界面
		 * @param txt 显示文本
		 * @param showMask 是否显示遮罩
		 * @param openTapMask 是否允许遮罩点击关闭
		 */
		public openWaitUI(txt: string, showMask: boolean = false, openTapMask: boolean = true, isConnected?: boolean) {
			let param: Object = { "text": txt, "showMask": showMask, "openTapMask": openTapMask, "isConnected": isConnected };
			let waitPanel: LoginWaitPanel = <LoginWaitPanel>FairyUIManager.getShowPeanl(EnumPanelID.WAIT_UI);
			if (waitPanel) {
				waitPanel.show(param);
			}
			else
				FairyUIManager.openPanel(EnumPanelID.WAIT_UI, param);
		}
		/**关闭等待界面*/
		public closeWaitUI() {
			FairyUIManager.closePanel(EnumPanelID.WAIT_UI);
		}


		/**打开主菜单界面*/
		public openMainMenuUI() {

		}
	}
}