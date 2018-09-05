module com.events {

	/**
	 * 英雄事件
	 * @author cl 2018.4.19
	 */
	export class HeroEvent extends egret.Event {
		
		/**更新英雄列表 */
		public static UPDATE_HERO_LIST:string = "HeroEvent.UpdateHeroList";

		/**选中某个英雄*/
		public static SELECTED_HERO:string = "HeroEvent.selectedhero";

		public constructor( type: string, data?: any, bubbles?: boolean, cancelable?: boolean ) {

			super( type , bubbles , cancelable , data );
		}
	}
}