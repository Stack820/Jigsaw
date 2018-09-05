module com.events {
	/**
	 **/
	export class PrayEvent 
	{
		public constructor() 
		{
		}

		/**祈福信息 */
		public static REFRESH_ALL:string = "PrayEvent.refresh_all";
		
		/**祈福结果 */
		public static PRAY_SUCESS:string = "PrayEvent.pray_sucess";
		
		public static PRAY_CRIT:string = "PrayEvent.pray_crit";
	}
}
