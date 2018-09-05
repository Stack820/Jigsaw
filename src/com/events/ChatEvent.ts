module com.events{
	export class ChatEvent {
		/**
		 * 附近聊天消息
		 */
		public static NEARBY_CHAT_RESPONSE:string = "ChatEvent.nearby_chat_response";
		
		/**
		 * 聊天消息
		 */
		public static CHAT_RESPONSE:string = "ChatEvent.chat_response";
		
		/**
		 * 人物系统消息
		 */
		public static PERSON_NOTICE:string = "ChatEvent.person_notice";
		
		/**
		 * 点击人物名
		 */
		public static CLICK_USERNAME:string = "ChatEvent.click_username";
		
		/**
		 * 弹出菜单栏中的私聊
		 */
		public static MENU_SILIAO:string = "ChatEvent.menu_siliao";
		
		/**
		 * 展示物品
		 */
		public static SHOW_ITEM:string = "ChatEvent.show_item";
		
		/**
		 * 展示成就
		 */
		public static SHOW_ACHIEVE:string = "ChatEvent.show_achieve";
		
		/**
		 * 聊天框中输入当前位置
		 */
		public static SET_POSITION:string = "ChatEvent.set_position";
		
		/**
		 * 聊天框缩放
		 */
		public static CHANGE_SIZE:string = "ChatEvent.change_size";

		/**更新聊天限制次数 */
		public static UpdateChatRemainTime:string="ChatEvent.UpdateChatRemainTime";

		/**私聊消息提示改变*/
		public static PRIVATE_NOTICE:string = "ChatEvent.privateNotice";
	}
}