module com.utils {

	/**
	 * 字符串处理工具
	 * @author cl 2018.4.11
	 */
	export class StringUtils {
		public static fillArray(arr: Array<any>, str: string, type: any = null): Array<any> {
			let temp: Array<any> = arr;
			if (flash.Boolean(str)) {
				let a: Array<any> = str.split(",");
				for (let i: number = flash.checkInt(0), n: number = flash.checkInt(Math.min(temp.length, a.length)); i < n; i++) {
					let value: string = <any>a[i];
					temp[i] = (value == "true" ? true : (value == "false" ? false : value));
					if (type != null) {
						temp[i] = value;
					}
				}
			}
			return temp;
		}

		public static rectToString(rect: egret.Rectangle): string {
			if (rect) {
				return rect.x + "," + rect.y + "," + rect.width + "," + rect.height;
			}
			return null;
		}

		public static getColorHtmlText(str: string, color: string = "#00ff00"): string {
			return "<font color=\'" + color + "\'>" + str + "</font>";
		}

		public static isEmail(char: string): boolean {
			if (char == null) {
				return false;
			}
			char = StringUtils.trim(char);
			let pattern: RegExp = /(\w|[_.\-])+@((\w|-)+\.)+\w{2,4}/;
			let result: any = <any>pattern.exec(char);
			if (result == null) {
				return false;
			}
			return true;
		}

		public static trim(char: string): string {
			if (char == null) {
				return null;
			}
			return StringUtils.rtrim(StringUtils.ltrim(char));
		}

		public static ltrim(char: string): string {
			if (char == null) {
				return null;
			}
			let pattern: RegExp = /^\s*/;
			return char.replace(pattern, "");
		}

		public static rtrim(char: string): string {
			if (char == null) {
				return null;
			}
			let pattern: RegExp = /\s*$/;
			return char.replace(pattern, "");
		}

		/**
		 * 删除HTML标签
		 * 
		 */		
		public static removeHTMLTag(text:string):string
		{
			if (text == null)
				return text;
			return text.replace(/<.*?>/g,"");
		}

	}
}

