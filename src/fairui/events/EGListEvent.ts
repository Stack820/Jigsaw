module fairui {

	/**
	 * EGList事件
	 * @author cl 2018.4.18
	 */
	export class EGListEvent extends egret.Event{

		/**渲染列表 */
		public static RENDER:string = "EGListEvent.Render";

		/**渲染完成 */
		public static COMPLETE:string = "EGListEvent.Complete";

		/**This对象 */
		public thisObject:any = null;

		/**渲染索引 */
		public index:number = 0;

		/**渲染对象 */
		public obj:fairygui.GObject = null;

		public constructor( type: string, data?: any, bubbles?: boolean, cancelable?: boolean ) {

			super( type , bubbles , cancelable , data );
		}
	}
}