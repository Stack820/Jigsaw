module com.events {

	/**
	 * 好友事件
	 * @author cl 2018.4.27
	 */
	export class FriendEvent {
		
		/**刷新好友列表 */
		public static UPDATE_FRIEND_LIST:string = "FriendEvent.UpdateFriendList";

		/**更新好友申请列表 */
		public static UPDATE_APPLY_FRIEND_LIST:string = "FriendEvent.UpdateApplyFriendList";

		/**删除好友 */
		public static DELETE_FRIEND:string = "FriendEvent.DeleteFriend";

		/**拜访好友 */
		public static VISIT_FRIEND:string = "FriendEvent.VisitFriend";

		/**添加好友 */
		public static ADD_FRIEND:string = "FriendEvent.AddFriend";

		/**拒绝好友 */
		public static REFUSE_FRIEND:string = "FriendEvent.RefuseFriend";

		/**一键帮助 */
		public static HELP_FRIEND:string = "FriendEvent.HelpFriend";
		
		/**获取其他好友信息 */
		public static GET_OTHER_PLAYER_INFO:string = "FriendEvent.GetOtherPlayerInfo";

		/**取消所有邀请 */
		public static CANCEL_ALL_INVITE:string = "FriendEvent.CancelAllInvite";

		/**更新好感度 */
		public static UPDATE_FRIEND_LOVE:string = "FriendEvent.UpdateFriendLove";
	}
}