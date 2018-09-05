module com.events {

	/**
	 * 货币改变
	 * @author cl 2018.4.23
	 */
	export class MoneyEvent extends egret.Event{

		/**
		 * 第一次同步数据时抛出
		 */		
		public static UPDATE:string = "MoneyEvent.UPDATE";
		
		/**
		 * 单个改变时抛出 
		 */		
		public static CHANGE:string = "MoneyEvent.CHANGE";
		
		/**
		 * 货币增加或减少时触发
		 */
		public static MONEY_ADD:string = "MoneyEvent.MoneyJinbiAdd";

		/**
		 * 体力改变
		 */
		public static ENERGY_CHNAGE:string = "MoneyEvent.EnergyChange";

		/**
		 * 体力恢复时间
		 */
		public static ENERGY_RECOVER_TIME:string = "MoneyEvent.EnergyRecoverTime";

		public constructor( type: string, data?: any, bubbles?: boolean, cancelable?: boolean ) {

			super( type , bubbles , cancelable , data );
		}
	}
}