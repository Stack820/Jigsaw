module com {
	export module events {
		/**
		 * 活动事件
		 * @author cl 2018.3.21
		 */
		export class ActivityEvent {

			/**刷新活动简要信息 */
			public static REFRESH_BRIEF:string = "ActivityEvent.refresh_Brief";
			/**刷新活动详细信息 */
			public static REFRESH_DETAIL:string = "refresh_detail";
			/**更新活动详细列表完成 cl 2018.3.21 */
			public static REFRESH_DETAIL_COMPLETE:string = "refresh_detail_complete";
			/**奖励大厅签到成功 */
			public static SIGN_IN:string = "sign_in";
			/**奖励领取成功消息 */
			public static SUCCESS_AWARD_HALL:string = "success_award_hall";
			/**刷新开服活动 排行榜内容 */
			public static REFRESH_RANK:string = "refresh_rank";
			/**VIP按钮特效开启 */
			public static EFFECT_SHOW:string = "effect_show";
			/**VIP按钮特效关闭 */
			public static EFFECT_HIDE:string = "effect_hide";
			/**封测元宝卡活动 */
			public static CLOSED_BETA_CARD:string = "closed_beta_card";
			/**每日活动公告刷新 */
			public static ACTIVITIE_NOTICE_REFRESH:string = "activitie_Notice_Refresh";
			/**怪物攻城活动开启,不带参数是关闭 */
			public static MONSTER_ATTACK_OPEN:string = "monster_attack_open";
			/**获取充值返钱活动数据 */
			public static GET_CHARGE_BACK_ACTIVITY:string = "getChargeBackActivity";
			/**活动开启 */
			public static ACTIVITY_OPEN:string = "activity_open";
			/**活动关闭 */
			public static ACTIVITY_CLOSE:string = "activity_close";
			/**活动结束 */
			public static ACTIVITY_END:string = "activity_end";
			/**更新一元夺宝消息 */
			public static UPDATE_DUOBAO:string = "ActivityEvent.UpdateDuobao" ;
			/**更新夺宝面板动态信息 */
			public static UPDATE_DUOBAO_INFO:string = "ActivityEvent.UpdateDuobaoInfo";
			/**宝箱控件中 领取物品的事件  */
			public static BAOXIANG_LINGQU:string = "ActivityEvent.BaoXiangLingQu";
			/**寻龙诀面板更新事件 */
			public static UPDATE_XUNLONG:string = "ActivityEvent.UpdateXunLong";
			/**资源找回信息*/
			public static UPDATE_RESBACK:string = "ActivityEvent.updateresback";
			/**资源找回成功*/
			public static RESBACK_SUCC:string = "ActivityEvent.resbacksucc";
			/**领取奖励*/
			public static GET_AWARD:string = "ActivityEvent.getAward";
			
		}
	}
}

// com.events.ActivityEvent.REFRESH_DETAIL = "refresh_detail";
// com.events.ActivityEvent.REFRESH_BRIEF = "refresh_Brief";
// com.events.ActivityEvent.SIGN_IN = "sign_in";
// com.events.ActivityEvent.SUCCESS_AWARD_HALL = "success_award_hall";
// com.events.ActivityEvent.REFRESH_RANK = "refresh_rank";
// com.events.ActivityEvent.EFFECT_SHOW = "effect_show";
// com.events.ActivityEvent.EFFECT_HIDE = "effect_hide";
// com.events.ActivityEvent.CLOSED_BETA_CARD = "closed_beta_card";
// com.events.ActivityEvent.ACTIVITIE_NOTICE_REFRESH = "activitie_Notice_Refresh";
// com.events.ActivityEvent.MONSTER_ATTACK_OPEN = "monster_attack_open";
// com.events.ActivityEvent.GET_CHARGE_BACK_ACTIVITY = "getChargeBackActivity";
// com.events.ActivityEvent.ACTIVITY_OPEN = "activity_open";
// com.events.ActivityEvent.ACTIVITY_CLOSE = "activity_close";
// com.events.ActivityEvent.ACTIVITY_END = "activity_end";
// com.events.ActivityEvent.UPDATE_DUOBAO = "ActivityEvent.UpdateDuobao";
// com.events.ActivityEvent.UPDATE_DUOBAO_INFO = "ActivityEvent.UpdateDuobaoInfo";
// com.events.ActivityEvent.BAOXIANG_LINGQU = "ActivityEvent.BaoXiangLingQu";
// com.events.ActivityEvent.UPDATE_XUNLONG = "ActivityEvent.UpdateXunLong";
