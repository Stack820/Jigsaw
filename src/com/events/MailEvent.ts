module com.events {
	/**
	 * 邮件事件
	 */
	export class MailEvent {
		/** 获得邮件列表返回 **/
		public static MAIL_QUERYLIST_MESSAGE: string = "mailQueryListMessage";
		/** 取邮件的内容**/
		public static MAIL_QUERYDETAIL_MESSAGE: string = "mailQueryDetailMessage";
		/** 新邮件数量**/
		public static NEW_MAIL_MESSAGE: string = "mewMailMessage";
		/** 邮件删除成功**/
		public static DEL_MAIL_MESSAGE: string = "delMailMessage";
		/** 未读邮件变更**/
		public static NOREAD_MAIL_CHANGE: string = "noreadMailChange";
		/** 是否有附件状态变更**/
		public static HAS_ACCESSORY_CHANGE: string = "hasAccessoryChange";
		/** 邮件选中事件*/
		public static SELECT_MAIL: string = "selectMail";
	}
}