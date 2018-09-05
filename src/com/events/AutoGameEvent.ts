module com.events {

	/**
	 * 自动游戏事件
	 * @author cl 2018.7.10
	 */
	export class AutoGameEvent {

		/**执行自动功能 */
		public static AUTO_DO_FUNCTION:string = "AutoGameEvent.AutoDoFunction";

		/**完成执行的任务 */
		public static DO_COMPLETE:string = "AutoGameEvent.DoComplete";

		/**暂停执行自动任务 */
		public static AUTO_PAUSE:string = "AutoGameEvent.AutoPause";

		/**执行功能完成一次 */
		public static DO_FUNCTION_COMPLETE = "AutoGameEvent.DoFunctionComplete";

		/**执行下一条 */
		public static DO_NEXT:string = "AutoGameEvent.DoNext";
	}
}