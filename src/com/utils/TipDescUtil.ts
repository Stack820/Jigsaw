module com.utils {
	/**
	 * tip表描述
	 * @author cl 2018.3.27
	 * 
	 */
    export class TipDescUtil {
		/**
		 * 元宝tip 
		 * @return 
		 * 
		 */
        // public static getYuanbaoTipDesc(): string {
        //     return StringFormat.getSubstitute(
        //         this.getTextTipDesc(fairui.enums.EnumTipId.YUANBAO), //元宝：{0}  返利元宝：{1}  限时元宝：{2}赠送元宝：{3}
        //         StringFormat.formatNum(com.Application.getMoney(com.enums.EnumMoney.YUAN_BAO, false)),
        //         StringFormat.formatNum(com.Application.getMoney(com.enums.EnumMoney.FanLiYuanBao)),
        //         StringFormat.formatNum(com.Application.getMoney(com.enums.EnumMoney.XianShiYuanBao)),
        //         StringFormat.formatNum(com.Application.getMoney(com.enums.EnumMoney.ZengSongYuanBao))
        //     );
        // }

		/**
		 * 金币tip 
		 * @return 
		 * 
		 */
        // public static getJinbiTipDesc(): string {
        //     return StringFormat.getSubstitute(this.getTextTipDesc(fairui.enums.EnumTipId.JINBI), StringFormat.formatNum( com.Application.getMoney(com.enums.EnumMoney.BIND_JIN_BI)), StringFormat.formatNum(com.Application.getMoney(com.enums.EnumMoney.JIN_BI)));
        // }

		/**
		 * 灭魔令tip 
		 * @return 
		 * 
		 */
        public static getMiemolingTipDesc(): string {
            return "";//this.getTextTipDesc(com.enums.EnumTipId.MIE_MO_LING);
        }

		/**
		 * 阅历tip 
		 * @return 
		 * 
		 */
        public static getYueLiTipDesc(): string {
            // return com.enums.EnumMoney.getName(com.enums.EnumMoney.YUE_LI) + "：" + com.Application.getMoney(com.enums.EnumMoney.YUE_LI);
            return "";
        }

		/**
		 * 纯文本描述TIP
		 * @param id EnumTipId  常量
		 */
        public static getTextTipDesc(id:number): string {
            // var bean: com.game.data.bean.Q_tipExpandBean = com.Application.clientDataConfig.q_tipContainer.getDataBean(id);
            // if (bean == null) {
            //     //在TIPS表Q_tipExpandBean中找不到编号为{0}的数据
            //     fairui.view.Alert.show("" + App.lang.getLang("lang_client_512") +  id + App.lang.getLang("lang_client_513") );
            //     return "";
            // }
            // return bean.q_tipDesc;
            return "";
        }

		/**
		 * 获取物品tip描述,主要使用于区分货币
		 * @param id
		 * @return 
		 * 
		 */
        public static getItemTipDesc(id:number): string {
            var str: string = "";
            // if (id < 0) {
            //     var jinBi:number = com.Application.getMoney(com.enums.EnumMoney.JIN_BI);
            //     var bindJinBi:number = com.Application.getMoney(com.enums.EnumMoney.BIND_JIN_BI);
            //     var yuanBao:number = com.Application.getMoney(com.enums.EnumMoney.YUAN_BAO);
            //     var xianshiyuanbao:number = com.Application.getMoney(com.enums.EnumMoney.XianShiYuanBao);
            //     var fanliyuanBao:number = com.Application.getMoney(com.enums.EnumMoney.FanLiYuanBao);
            //     var zengsongyuanBao:number = com.Application.getMoney(com.enums.EnumMoney.ZengSongYuanBao);
            //     if (id == com.enums.EnumMoney.JIN_BI) {
            //         str = TipDescUtil.getJinbiTipDesc();
            //     } else if (id == com.enums.EnumMoney.BIND_JIN_BI) {
            //         str = TipDescUtil.getJinbiTipDesc();
            //     } else if (id == com.enums.EnumMoney.YUAN_BAO || id == com.enums.EnumMoney.FanLiYuanBao) //元宝|返利元宝 cl 2017.12.2
            //     {
            //         str = StringFormat.formatNum(yuanBao + fanliyuanBao, false);//@TODO 赵科:去掉省略显示
            //     } else if (id == com.enums.EnumMoney.XianShiYuanBao || id == com.enums.EnumMoney.ZengSongYuanBao)//限时元宝|赠送元宝 cl 2017.12.2
            //     {
            //         str = StringFormat.formatNum(xianshiyuanbao + zengsongyuanBao, false);
            //     } else if (id == com.enums.EnumMoney.BIND_YUAN_BAO) {
            //         str = StringFormat.formatNum( com.Application.getMoney(com.enums.EnumMoney.BIND_YUAN_BAO), false);
            //     } else {
            //         str = this.getTextTipDesc(id);
            //     }
            // } else {
            //     str = this.getTextTipDesc(id);
            // }
            return str;
        }
    }
}
