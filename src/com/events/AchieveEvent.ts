module com.events {

	/**
	 * 成就事件
	 * @author cl 2018.8.6
	 */
	export class AchieveEvent {

		/** 成就信息列表刷新 **/
		public static REFRESH_ACHIEVE_LIST:string= "AchieveEvent.refreshAchieveList";
		
		/** 正在进行成就信息更新 **/
		public static REFRESH_ACHIEVE_JUSTDO_LIST:string= "AchieveEvent.refreshAchieveJustdoList";
		
		/** 成就奖励领取 **/
		public static ACHIEVE_RESULT:string= "AchieveEvent.achieveResult";
		
		/** 成就信息更新 **/
		public static ACHIEVE_UPDATE:string= "AchieveEvent.achieveUpdate";

		/** 成就信息增加 **/
		public static ACHIEVE_ADD:string= "AchieveEvent.achieveAdd";
		
		/** 成就列表高度改变 **/
		public static CHANGE_HEIGHT:string= "AchieveEvent.changeHeight";
		
		/** 成就活动解锁 **/
		public static ACHIEVE_UNLOCK:string= "AchieveEvent.achieveUnlock";

	}
}