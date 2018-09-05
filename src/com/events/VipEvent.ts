module com.events {
	/**
	 * vip 事件
	 * 2018.5.22
	 * @author LinJ
	 **/
	export class VipEvent {
		public constructor() {
		}

		/**
		 * vip信息刷新 
		 */		
		public static VIP_INFO_REFRESH:string = "vip_info_refresh";

		/**
		 * vip等级变化 
		 */		
		public static VIP_LEVEL_UP:string = "vip_level_up";

		/**
		 * 月卡信息刷新
		 * */
		public static MOON_CARD_REFRESH:string = "moon_card_refresh";
	}
}
