module com {
	export module events {
		export class FightEvent {
			/**开始战斗*/
			public static START_FIGHTING: string = "FightEvent.START_FIGHTING";
			/**开始战斗失败*/
			public static START_FIGHTING_ERROR: string = "FightEvent.START_FIGHTING_ERROR";
			/**更新战斗角色头像数据*/
			public static UPDATA_HEADPORTRAIT_INFO: string = "FightEvent.UPDATA_HEADPORTRAIT_INFO";
			/**添加战斗角色头像数据*/
			//public static ADD_HEADPORTRAIT: string = "FightEvent.ADD_HEADPORTRAIT";
			/**显示战斗聊天信息*/
			public static SHOW_CHATINFO: string = "FightEvent.SHOW_CHATINFO";
			/**更新自动战斗状态*/
			public static UPDATA_AUTOFIGHT: string = "FightEvent.UPDATA_AUTOFIGHT";
			/**更新头像技能显示状态*/
			public static UPDATA_SKILL_TYPE: string = "FightEvent.UPDATA_SKILL_TYPE";

			public static UPDATA_FABAO_SKILL_TYPE: string = "FightEvent.UPDATA_FABAO_SKILL_TYPE";

			public static ADD_SKILL_NAME: string = "FightEvent.ADD_SKILL_NAME";

			public static PLAY_VIEW_FADEOUT: string = "FightEvent.PLAY_VIEW_FADEOUT";
			/**隐藏大招释放前等待状态*/
			public static HIDE_SKILL_WAIT: string = "FightEvent.HIDE_SKILL_WAIT";

			public static PAUSE_FIGHT_TIME: string = "FightEvent.PAUSE_FIGHT_TIME";

			public static UPDATA_BOSS_HP: string = "FightEvent.UPDATA_BOSS_HP";

			public static UPDATA_BOSS_HURT: string = "FightEvent.UPDATA_BOSS_HURT";
			/**引导释放大招,暂停游戏 */
			public static GuideSkill_StopGame: string = "FightEvent.GuideSkill_StopGame";

			public static SHOW_BLACKSCREEN: string = "FightEvent.SHOW_BLACKSCREEN";

			public static UPDATA_HEADPORTRAIT_DEAD:string = "FightEvent.UPDATA_HEADPORTRAIT_DEAD";

			public static ADD_HEROS_HEADPORTRAIT:string = "FightEvent.ADD_HEROS_HEADPORTRAIT";

			public constructor() {
			}
		}
	}
}