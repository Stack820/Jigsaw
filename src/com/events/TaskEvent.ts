module com.events {

	/**
	 * 任务事件
	 * @author cl 2018.5.26
	 */
	export class TaskEvent {
		
		/**是否立即完成 */
		public static NOW_COMPLETE:string = "TaskEvent.NowComplete";

		/**点击任务条目 */
		public static TOUCH_TASK_ITEM:string = "TaskEvent.TouchTaskItem";

		/**获取任务列表 */
		public static GET_TASK_LIST:string = "TaskEvent.GetTaskList";

		/**任务完成 */
		public static TASK_COMPLETE:string = "TaskEvent.TaskComplete";

		/**添加任务 */
		public static TASK_ADD:string = "TaskEvent.TaskAdd";

		/**删除任务 */
		public static TASK_DELETE:string = "TaskEvent.TaskDelete";

		/**更新任务状态 */
		public static UPDATE_TASK_STATE:string = "TaskEvent.UpdateTaskState";

		/**点击番队任务条目 */
		public static TOUCH_HISTEAMTASK_ITEM:string = "TaskEvent.TouchHisteamTaskItem";

		/**更新番队任务 */
		public static UPDATE_HISTEAMTASK:string = "TaskEvent.UpdateTaskState";
	}
}