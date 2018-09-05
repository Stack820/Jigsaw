module com.events {

	/**
	 * 宠物事件
	 * @author cl 2018.5.8
	 */
	export class SurfaceEvent {
        
        /**更新宠物皮肤列表 */
        public static UPDATE_PETSKIN_LIST:string = "SurfaceEvent.updatePetSkinList";

        /**显示宠物外观 */
        public static SHOW_PET_SKIN:string = "SurfaceEvent.showPetSkin";

        /**宠物外观信息改变 */
        public static PET_SURFACE_CHANGE:string = "SurfaceEvent.petSurfaceChange";

        /**隐藏外观显示 */
        public static HIDE_SURFACE:string = "SurfaceEvent.hideSurface";

         /**外观改变 */
        public static CHANGE_SURFACE:string = "SurfaceEvent.changeSurface";
         /**显示初始化外观 */
        public static SHOW_INIT:string = "SurfaceEvent.SHOW_INIT";

    }
}