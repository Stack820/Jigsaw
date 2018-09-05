module com.events{

    /**
     * 资源线事件
     * @author cl 2018.4.25
     */
    export class ResLineEvent{

        
		/**增加祝福值*/
		public static BLESS_ADD:string = "ResLineEvent.bless_add";
		
		/**升级成功*/
		public static LEVEL_UP_SUCCESS:string = "ResLineEvent.level_up_success";
		
		/**请求面板数据*/
		public static UP_PANEL_DATA:string = "ResLineEvent.up_panel_data";
		
		/**展示图腾类型改变*/
		public static REFRESH_TYPE_TOTEMS:string = "ResLineEvent.refresh_type_totems";
		
		/**第一次激活*/
		public static FRIST_ACTIVE:string = "ResLineEvent.FRIST_ACTIVE";
		
		/**批量更新资源线type:适合更新魔戒这样的资源线*/
		public static UpdateGroupTypes:string = "ResLineEvent.UpdateGroupTypes";
		
		/**战神护盾切换显示*/
		public static SwitchShield:string = "ResLineEvent.SwitchShield";

		/**附身属性更新*/
		public static UPDATE_POSSESS_ATT:string = "ResLineEvent.UpdatePossessAtt";

		/**科技面板资源线更新*/
		public static RES_REF:string = "ResLineEvent.ResRef";

		/**选中或者减少斩魄刀碎片*/
		public static SELECT_OR_REMOVE_FRAGMENT:string = "ReslineEvent.SelectOrRemoveFragment";

		/**请求激活资源线*/
		public static RES_ACTIVE:string = "ResLineEvent.ResActive";

		/**选中斩魄刀*/
		public static ZAN_SELECTED_CHANGE:string = "ReslineEvent.ZanSelectedChange";
    }
}