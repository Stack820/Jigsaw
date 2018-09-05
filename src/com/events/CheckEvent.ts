module com.events {

	/**
	 * 关卡事件
	 * @author cl 2018.4.14
	 */
	export class CheckEvent extends egret.Event{

		/**关卡准备界面，选择英雄 */
		public static SELECT_HERO:string = "CheckEvent.SelectRole";
		/**关卡准备界面，取消选择英雄 */
		public static CANCEL_SELECT_HERO:string = "CheckEvent.CancelSelectRole";
		/**选择小关卡 */
		public static SELECT_SMALL_CHECK:string = "CheckEvent.SelectSmallCheck";
		/**更新当前最大通关关卡 */
		public static CHANGE_MAX_CHECK:string = "CheckEvent.ChangeMaxCheck";
		/**组队关卡准备完成 */
		public static TEAM_READY_COMPLATE:string = "CheckEvent.TeamReadyComplete";
		/**组队关卡邀请好友 */
		public static INVITE_FRIEND:string = "CheckEvent.InviteFriend";
		/**组队关卡取消邀请好友 */
		public static CANCEL_INVITE_FRIEND:string = "CheckEvent.CancelInviteFriend";
		/**退出组队 */
		public static QUIT_TEAM:string = "CheckEvent.QuitTeam";
		/**继续组队战斗 */
		public static GOON_TEAM_FIGHT:string = "CheckEvent.GoonTeamFight";
		/**队友选择英雄 */
		public static TEAM_SELECT_HERO:string = "CheckEvent.TeamSelectHero";
		/**队伍准备失败 */
		public static TEAM_READY_FAILED:string = "CheckEvent.TeamReadyFailed";
		/**匹配成功 */
		public static MATCH_SUCCESS:string = "CheckEvent.MatchSuccess";
		/**匹配失败 */
		public static MATCH_FAILED:string = "CheckEvent.MatchFailed";
		/**更新关卡信息 */
		public static UPDATE_CHECK_INFO:string = "CheckEvent.UpdateCheckInfo";
		/**好友邀请倒计时 */
		public static FRIEND_INVITE_TIMER:string = "CheckEvent.FriendInviteTime";
		/**移除好友倒计时 */
		public static DELETE_FRIEND_TIMER:string = "CheckEvent.DeleteFriendTimer";
		/**世界BOSS信息 */
		public static WORLD_BOSS_INFO:string = "CheckEvent.WorldBossInfo";
		/**获取所有世界BOSS信息 */
		public static GET_ALL_WORLD_BOSS_INFO:string = "CheckEvent.GetAllWorldBossInfo";
		/**世界BOSS帮助伤害排行 */
		// public static WORLD_BOSS_DAMAGE_RANK:string = "CheckEvent.WorldBossDamageRank";
		/**世界BOSS排行榜信息 */
		// public static WORLD_BOSS_RANK:string = "CheckEvent.WorldBossRank";
		/**购买世界BOSS BUFF */
		public static BUY_WORLD_BOSS_BUFF:string = "CheckEvent.BuyWorldBossBuff";
		/**挑战机器人 */
		public static FIGHT_ROBOT:string = "CheckEvent.FightRobot";
		/**跳转到最大组队关卡 */
		public static SKIP_TO_MAXTEAM:string = "CheckEvent.skipToMaxTeam";
		
		public constructor( type: string, data?: any, bubbles?: boolean, cancelable?: boolean ) {

			super( type , bubbles , cancelable , data );
		}
	}
}