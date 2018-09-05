module com.events {

	/**
	 * 番队事件
	 * @author cl 2018.8.2
	 */
	export class HisteamEvent {

		public constructor() {
		}
		/**番队列表 */
		public static VILLAGE_LIST:string = "HisteamEvent.UpdataVillageList";

		/**创建番队 */
		public static VILLAGE_CREATE:string = "HisteamEvent.createHisteam";

		/**我的番队 */
		public static VILLAGE_MYVILLAGE:string = "HisteamEvent.myVillage";

		/**番队详情 */
		public static VILLAGE_DETAILS:string = "HisteamEvent.histeamInfo";
		
		/**番队成员 */
		public static VILLAGE_ROLE:string = "HisteamEvent.histeamRole";

		/**申请列表 */
		public static VILLAGE_APPLY:string = "HisteamEvent.histeamApply";

		/**番队等级改变 */
		public static VILLAGE_CHANGE_LEVEL:string = "HisteamEvent.VillageChangeLevel";

		/**番队通知改变 */
		public static VILLAGE_CHANGE_NOTICE:string = "HisteamEvent.VillageChangeNotice";

		/**番队图标改变 */
		public static VILLAGE_CHANGE_ICON:string = "HisteamEvent.ChangeIcon";

		/**选择番队图标*/
		public static VILLAGE_ICON_SELECTED:string = "HisteamEvent.VillageIconSelected";

		/**邀请玩家加入番队 */
		public static INVITE_PLAYER:string = "HisteamEvent.InvitePlayer";

		/**获取玩家邀请列表 */
		public static GET_INVITE_PLAYER_LIST:string = "HisteamEvent.GetInvitePlayerList";

		/**番队管理 */
		public static VILLAGE_MANAGER:string = "HisteamEvent.VillageManager";

		/**番队排行榜信息 */
		public static GET_RANK_INFO:string = "HisteamEvent.GetRankInfo";

		/**副本 */
		public static FIGHT_BOSS:string = "HisteamEvent.FightBoss";

		/**获取行会BOSS奖励 */
		public static GET_FIGHT_AWARD:string = "HisteamEvent.GetFightAward";

		/**更新副本信息 */
		public static UPDATE_FIGHT_BOSS:string = "HisteamEvent.UpdateFightBoss";

		/**捐献材料 */
		public static CONTRIBUTE_GOOD:string = "HisteamEvent.ContributeGood";

		/**捐献返回 */
		public static CONTRIBUTE_RETURN:string = "HisteamEvent.ContributeReturn";

		/**捐献信息 */
		public static CONTRIBUTE_INFO:string = "HisteamEvent.ContributeInfo";

		/**获取成就信息 */
		public static GET_ACHIEVE_INFO:string = "HisteamEvent.GetAchieveInfo";

		/**领取成就奖励 */
		public static GET_ACHIEVE_AWARD:string = "HisteamEvent.GetAchieveAward";

		/**刷新怪物 */
		public static REFRESH_MONSTERS:string = "HisteamEvent.RefreshMonsters";

		/**获取怪物信息 */
		public static GET_MONSTER_INFO:string = "HisteamEvent.GetMonsterInfo";

		/**获取怪物列表信息 */
		public static GET_MONSTER_LIST:string = "HisteamEvent.GetMonsterList";

		/**点击怪物 */
		public static CLICK_MONSTER:string = "HisteamEvent.clickMonster";
		
		/**监听番队申请信息状态 */
		public static GET_APPLIC:string = "HisteamEvent.ApplicationInformation";
		/**监听番队改名*/
		public static VILLAGE_RANAME:string = "HisteamEvent.Raname";
	}
}