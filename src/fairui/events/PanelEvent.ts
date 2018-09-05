module fairui{

    /**
     * 面板事件
     * @author cl 2018.3.22
     */
    export class PanelEvent extends egret.Event {

        /**显示离线时间 */
        public static SHOW_OFFLIN_TIME:string = "PanelEvent.ShowOfflinTime";

        /**显示农场下面部分按钮 */
        public static SHOW_BOTTOM_BUTTON:string = "PanelEvent.ShowBottomButton";
        /**显示主菜单下面部分按钮 */
        public static SHOW_MENU_BOTTOM_BUTTON:string = "PanelEvent.ShowMenuBottomButton";
        /**显示燃料 */
        public static SHOW_FUEL:string = "PanelEvent.ShowFuel";
        /**显示主界面 */
        public static SHOW_MAINUI:string = "PanelEvent.ShowMainPanel";
        /**关闭主界面 */
        public static HIDE_MAINUI:string = "PanelEvent.HideMainPanel";
        /**隐藏聊天面板 */
        public static HIDE_CHAT_VIEW:string = "PanelEvent.HideChatView";

        /**选择条目等 */
        public static SELECT:string = "PanelEvent.Select";

        public constructor( type: string, data?: any, bubbles?: boolean, cancelable?: boolean ) {

			super( type , bubbles , cancelable , data );
		}
    }
}