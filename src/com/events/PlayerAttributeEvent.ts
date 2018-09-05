module com.events {

	/**玩家属性改变事件 */
	export class PlayerAttributeEvent extends egret.Event{

		/**经验改变 */
		public static EXP:string = "Player.EXP";

		/**主角等级改变 */
		public static CHARACTER_LEVEL:string = "Player.CHARACTER_LEVEL";

		/**经验改变的量 */
		public static EXP_CHANGE_VALUE:string = "Player.exp_change_value";

		/**GM等级改变 */
		public static GM_LEVEL_CHANGE:string = "PlayerAttributeEvent.GmLevelChange";

		public constructor( type: string, data?: any, bubbles?: boolean, cancelable?: boolean ) {

			super( type , bubbles , cancelable , data );
		}
	}
}