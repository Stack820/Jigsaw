module fairui {
	import EnumPanelID = com.enums.EnumPanelID;
	import EnumPanel = com.enums.EnumPanel;
	/**
	 * 面板注册 cl 2018.2.5
	 */
	export class PanelRegister {

		private static dmap: flash.Dictionary;

		public static init(): void {

			// let panelList:Array<Q_panel_registerExpandBean> = App.config.q_panel_registerContainer.getList();
			// let bean:Q_panel_registerExpandBean = null;
			// for( bean of panelList ){
			// 	let cls:any = egret.getDefinitionByName( bean.q_lassName );
			// 	PanelRegister.register( bean.q_id , new PanelInfo( bean.q_id , bean.q_type , bean.q_res , bean.q_loadingTip , cls , bean.q_canDispose == 1 , bean.showBottomBtn == 1 ) );
			// }
			PanelRegister.dmap = new flash.Dictionary();
			//主界面注册
			PanelRegister.register(EnumPanelID.JIGSAW, new PanelInfo(EnumPanelID.JIGSAW, EnumPanel.TYPE_WINDOW1, "main", "", JigsawPanel));
		}
		/**
		 * 注册面板
		 * @param id 	面板ID
		 * @param panel PanelInfo
		 */
		public static register(id: number, panel: any): void {
			PanelRegister.dmap.setItem(id, panel);
		}
		/**
		 * 获取对应面板
		 * @param id 面板ID
		 * @return PanelInfo
		 */
		public static getPanel(id: number): any {
			return PanelRegister.dmap.getItem(id);
		}
		/**
		 * 获取对应面板的panelid
		 * @param panel fairui.BasePanel
		 * @return 面板ID
		 */
		public static getPanelId(panel: any): number {
			let thisObj: any = this;
			let index: number = -1;
			if (egret.is(panel, "fairui.BasePanel")) {
				panel = (<fairui.BasePanel>panel).toClass();
				PanelRegister.dmap.forEach((key, pinfo: PanelInfo) => {
					if (pinfo && pinfo.className == panel) {
						index = parseInt("" + key);
						return;
					}
				}, this);
			}
			return index;
		}
		/**
		 * 移除注册
		 * @param panelid 面板ID
		 */
		public static removeRegister(panelid: number): void {

			if (PanelRegister.dmap.hasOwnProperty(panelid)) {
				let panelinfo: PanelInfo = PanelRegister.dmap.getItem(panelid);
				if (panelinfo != null) {
					PanelRegister.dmap.delItem(panelid);
					panelinfo = null;
				}
			}
		}
		/**
		 * 注册组件类与fairgui编辑器中类对应
		 * @param pkgName 包名
		 * @param resName 资源名
		 * @param cls	  对应包中类名	
		 */
		public static registerClass(pkgName: string, resName: string, cls: any): void {

			if (pkgName && !fairygui.UIPackage.getById(pkgName)) {
				fairygui.UIPackage.addPackage(pkgName);
			}
			let url: string = fairygui.UIPackage.getItemURL(pkgName, resName);
			fairygui.UIObjectFactory.setPackageItemExtension(url, cls);
		}
		/**
		 * 创建自定义组件，必须用此方式,与以上方法对应使用
		 * @param pkgName 包名
		 * @param resName 资源名
		 */
		public static createGObject(pkgName: string, resName: string): any {
			return fairygui.UIPackage.createObjectFromURL(fairygui.UIPackage.getItemURL(pkgName, resName));
		}
	}
}
