module com.events {

	export class EventType {
		/**舞台尺寸调整事件*/
		public static STGAE_RESIZE: string = "EventType.STGAE_RESIZE";
		/**主角创建完毕*/
		public static ROLE_CREATE_COMPLETE: string = "EventType.ROLE_CREATE_COMPLETE";
		/**功能提示*/
		public static FUNCTION_TIP: string = "EventType.FUNCTION_TIP";
		/**显示特殊功能的次数*/
		public static SHOW_SOME_FUNCTION_NUM: string = "EventType.SHOW_SOME_FUNCTION_NUM";
		/**显示或者隐藏按钮的小红点 */
		public static ShowOrHideButtonDot: string = "EventType.ShowOrHideButtonDot";
		/**舞台失去焦点*/
		public static DEACTIVATE: string = "EventType.DEACTIVATE";
		/**舞台获取焦点*/
		public static ACTIVATE: string = "EventType.ACTIVATE";
		/**点击按下舞台 */
		public static CLICK_STAGE_START:string = "EventType.ClickStageStart";
		/**点击弹起舞台 */
		public static CLICK_STAGE_END:string = "EventType.ClickStageEnd";
	}
}