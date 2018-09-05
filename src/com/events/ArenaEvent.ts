module com.events {
	/**
	 * 竞技场事件
	 * @author cl 2018.7.27
	 */
	export class ArenaEvent {
		
		/**重置 */
		public static ARENA_RESET:string = "ArenaEvent.Reset";

		/**换一批 */
		public static ARENA_CHANGE:string = "ArenaEvent.Change";

		/**回放 */
		public static ARENA_REPLAY:string = "ArenaEvent.Replay";

		/**兑换 */
		public static ARENA_EXCHANGE:string = "ArenaEvent.Exchange";

		/**获取排行榜信息 */
		public static ARENA_GET_RANK_INFO:string = "ArenaEvent.GetRankInfo";

		/**获取我的竞技场信息 */
		public static ARENA_GET_MYARENA_INFO:string = "ArenaEvent.GetMyArenaInfo";

		/**更新竞技场事件 */
		public static UPDATE_ARENA_CD:string = "ArenaEvent.UpdateArenaCd";

		/**竞技场历史记录 */
		public static ARENA_HISTORY:string = "ArenaEvent.History";

		/**竞技场战斗结束 */
		public static ARENA_FIGHT_FINISH:string = "ArenaEvent.FightFinsh";

	}
}