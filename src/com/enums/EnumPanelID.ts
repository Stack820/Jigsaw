module com {
	export module enums {
		export class EnumPanelID {
			/**-1错误日志面板*/
			public static DEBUG_VIEW: number = -1;
			/**登陆面板 1*/
			public static LOGIN: number = 1;
			/**创建角色界面 2*/
			public static SETUP_ROLE: number = 2;
			/**主界面-农场 3*/
			public static MAIN_FARM: number = 3;
			/**主界面-菜单 */
			public static MAIN_MENU: number = 4;
			/**主加载界面 5*/
			public static MAIN_LOADING: number = 5;
			/**弹出框 6*/
			public static ALERT: number = 6;
			/**活动面板 7*/
			public static ACTIVITY_PANEL: number = 7;
			/**资源追回面板 8*/
			public static RESBACK_PANEL: number = 8;
			/**资源追回确定面板 9*/
			public static RESBACK_CONFIRM_PANEL: number = 9;
			/**背包面板 10*/
			public static BAG_PANEL: number = 10;
			/**充值面板 11*/
			// public static Recharge_Panel: number = 11;
			/**材料副本扫荡 12*/
			// public static Material_Panel: number = 12;
			/**角色面板 13 */
			// public static ROLE_PANEL: number = 13;
			/**战斗界面 14*/
			public static FIGHT: number = 14;
			/**关卡界面 15*/
			public static CHECK: number = 15;
			/**关卡准备界面 16*/
			public static CHECK_READY: number = 16;
			/**关卡通过界面 17*/
			public static CHECK_PASSED: number = 17;
			/**战斗失败界面 18*/
			public static FIGHT_FAILED: number = 18;
			/**英雄界面 19*/
			public static HEROES_PANEL: number = 19;
			/**宠物界面 20*/
			public static PET: number = 20;
			/**好友界面 21*/
			public static FRIEND: number = 21;
			/**好友帮助弹框 */
			public static FRIEND_HELP_ALERT: number = 22;
			/**GM界面*/
			public static GM: number = 23;
			/**好友弹出框 24*/
			public static FALERT: number = 24;
			/**宠物日志面板 25*/
			public static PET_LOG: number = 25;
			/**料理面板 26*/
			public static FOOD: number = 26;
			/**头像外观 27*/
			public static HEAD_SURFACE: number = 27;
			/**技能升级面板 28*/
			public static SKILL_LV_UP: number = 28;
			/**关卡仅能选择界面 29*/
			public static CHECK_SKILL_SELECT: number = 29;
			/**详细聊天面板 30*/
			public static Chat_Panel: number = 30;
			/**英雄装备购买面板 31*/
			public static HERO_EQUIP_BUY: number = 31;
			/**组队关卡界面 32*/
			public static CHECK_TEAM: number = 32;
			/**好友邀请界面 33*/
			public static FRIEND_INVITE: number = 33;
			/**好友邀请弹框界面 34*/
			public static FRIEND_INVITE_ALERT: number = 34;
			/**搜魂面板 35*/
			public static ShouHun: number = 35;
			/**组队关卡战斗结算界面 36*/
			public static CHECK_TEAMBEOVER: number = 36;
			/**基础活动面板 37*/
			public static BASE_ACTIVITY: number = 37;
			/**vip面板*/
			public static VIP: number = 38;
			/**搜魂详情面板 39*/
			public static ShouHunInfo: number = 39;
			/**扫荡成功面板 40*/
			public static CHECK_SWEEP: number = 40;
			/**功能描述 41*/
			public static FUNCTION_DESC: number = 41;
			/**搜魂奖励结果 42*/
			public static ShouHunRewardResult: number = 42;
			/**购买搜魂卷 43*/
			public static ShouHunBuyJuan: number = 43;
			/**购买主题卷 44*/
			public static ShouHunBuyZHuTi: number = 44;
			/**任务界面 45*/
			public static TASK: number = 45;
			/**邮件面板 46*/
			public static Mail: number = 46;
			/**物品获得面板 47*/
			public static ITEM_GOT: number = 47;
			/**祈福-兑换面板 48*/
			public static Bless: number = 48;
			/**活动说明面板 49*/
			public static ACTIVITY_DESC: number = 49;
			/**月卡面板 50*/
			public static MOON_CARD: number = 50;
			/**获得外观面板 51*/
			public static SHOW_REWARD: number = 51;
			/**家园面板 52*/
			public static HOME: number = 52;
			/**限时任务面板 53*/
			public static TIME_LIM_TASK: number = 53;
			/**限购活动面板 54*/
			public static TIME_LIM_BUY: number = 54;
			// /**游戏服务器列表*/
			// public static SERVER_LIST: number = 55;
			/**世界BOSS 56*/
			public static WORLD_BOSS: number = 56;
			/**世界BOSS副本界面 57*/
			public static WORLD_BOSS_ZONE: number = 57;
			/**世界BOSS排行榜 58*/
			public static WORLD_BOSS_RANK: number = 58;
			/**世界BOSS规则说明 59*/
			public static WORLD_BOSS_RULE: number = 59;
			/**世界BOSS穿界匙 60*/
			public static WORLD_BOSS_LOCK: number = 60;
			/**充值面板 61*/
			public static RECHARGE: number = 61;
			/**世界BOSS战斗结算面板-62*/
			public static BOSS_BEOVER: number = 62;
			/**首冲界面-63*/
			public static FRIST_CHARGE: number = 63;
			/**首冲礼包界面-64*/
			public static FRIST_CHARGE_GIFT: number = 64;
			/**登陆等待UI-65*/
			public static WAIT_UI: number = 65;
			/**竞技场-66*/
			public static ARENA: number = 66;
			/**竞技场排行榜-67*/
			public static ARENA_RANK: number = 67;
			/**竞技场兑换-68*/
			public static ARENA_EXCHANGE: number = 68;
			/**竞技场记录-69*/
			public static ARENA_RECORD: number = 69;
			/**竞技场准备-70*/
			public static ARENA_READY: number = 70;
			/**番队面板-71*/
			public static HISTEAM: number = 71;
			/**开发局-72*/
			public static KAIFAJU: number = 72;
			/**番队副本-63*/
			public static VILLAGE_ZONE: number = 73;
			/**番队大厅-74*/
			public static VILLAGE_HALL: number = 74;
			/**祠堂-75*/
			public static VILLAGE_TEMPLE: number = 75;
			/**祠堂任务-76*/
			public static VILLAGE_TEMPLETASK: number = 76;
			/**番队更名面板*/
			public static VILLAGE_RENAME: number = 77;
			/**番队邀请面板*/
			public static VILLAGE_INVITATION: number = 78;
			/**番队管理面板*/
			public static VILLAGE_MANAGEMENT: number = 79;
			/**番队申请列表面板*/
			public static VILLAGE_LIST: number = 80;
			/**番队创建面板*/
			public static VILLAGE_CREATE: number = 81;			
			/**番队详情面板*/
			public static VILLAGE_DETAIL: number = 82;
			/**番队头像*/
			public static VILLAGE_HEAD: number = 83;
			/**番队邀请弹框*/
			public static VILLAGE_INVITE_ALERT: number = 84;	
			/**番队排行榜规则*/
			public static VILLAGE_RANK_RULE: number = 85;			
			/**JJC结算界面*/
			public static JJC_BEOVER:number = 86;
            /**开发局面板*/
            public static TECHS: number = 87;
            /**斩魄刀升级面板*/
            public static ZAN_LVUP:number = 88;
            /**新英雄解鎖面板*/
            public static NEW_HERO:number = 89;
			/**番队排行榜规则*/
			public static VILLAGE_RANK_DEMISE: number = 90;	

		}
	}
}

