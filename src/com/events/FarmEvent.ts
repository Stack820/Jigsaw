module com.events {

	/**
	 * 农场事件
	 * @author cl 2018.4.25
	 */
	export class FarmEvent {
		
		/**获取我的农场信息 */
		public static GET_MYFARM_INFO:string = "FarmEvent.GetMyFarmInfo";

		/**获取好友农场信息 */
		public static GET_FRIENDFARM_INFO:string = "FarmEvent.GetFriendFarmInfo";
		
		/**选择宠物 */
		public static SELECT_PET:string = "FarmEvent.SelectPet";

		/**取消选择宠物 */
		public static CANCEL_SELECT_PET:string = "FarmEvent.CancelSelectPet";

		/**更新灵子生成器信息 */
		public static UPATE_FARMMACHINE_INFO:string = "FarmEvent.UpdateFarmMachineInfo";

		/**更新我的宠物信息 */
		public static UPATE_MYPET_INFO:string = "FarmEvent.UpdateMypetInfo";

		/**选择燃料 */
		public static SELECT_FUEL:string = "FarmEvent.SelectFuel";

		/**取消选择燃料 */
		public static CANCEL_SELECT_FUEL:string = "FarmEvent.CancelSelectFuel";

		/**更新帮助次数 */
		public static UPDATE_HELP_COUNT:string = "FarmEvent.UpdateHelpCount";

		/**宠物升级 */
		public static PET_LEVEL_UP:string = "FarmEvent.PetLevelUp";

		/**激活宠物皮肤 */
		public static LIVE_PET_SKIN:string = "FarmEvent.LivePetSkin";

		/**点击宠物 */
		public static CLICK_PET:string = "FarmEvent.ClickPet";

		/**抚摸好友宠物 */
		public static TOUCH_FRIEND_PET:string = "FarmEvent.TouchFriendPet";

		/**显示燃料TIP */
		public static SHOW_FUEL_TIP:string = "FarmEvent.ShowFuelTip";

		/**隐藏燃料TIP */
		public static HIDE_FUEL_TIP:string = "FarmEvent.HideFuelTip";

		/**显示宠物提示 */
		public static SHOW_PET_TIP:string = "FarmEvent.showPetTip";

		/**宠物抚摸灵子 */
		public static PET_DAUT:string = "FarmEvent.petDaut";

		/**更新灵子生成器时间 */
		public static UPDATE_SPRITE_ITEM_TIME:string = "FarmEvent.UpdateSpriteItemTime";

		/**农场红点提示 */
		public static RED_TIP:string = "FarmEvent.RedTip";
	}
}