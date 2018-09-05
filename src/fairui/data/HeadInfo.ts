module fairui 
{
	/**头像信息 */
	export class HeadInfo 
	{
		/**头像外观ID */
		public headIconSurfaceId:number;
		/**Icon名字 */
		public headIconName:string;
		/**头像框外观ID */
		public headBorderSurfaceId:number;
		/**玩家名字 */
		public playerName:string;
		/**玩家id */
		public playerId:string="";

		public constructor() 
		{
		}
	}
}