module com.enums {
	export class EnumScene {
		/**无场景-0*/
		public static NO_SCENE: number = 0;
		/**主城场景-1*/
		public static MAIN_SCENE: number = 1;
		/**战斗场景-2*/
		public static FIGTH_SCENE: number = 2;

		public static DEFAULT: string = "default";
		public static HERO: string = "hero";
		public static MONSTER: string = "monster";
		public static MAGIC: string = "magic";
		public static BUFF: string = "buff";
		public static FABAO: string = "fabao";

		public static MAP_GRID_POINT: any[] = [
			[[380, 700], [380, 740], [380, 660], [380, 780], [380, 620], [380, 820]],
			[[540, 700], [540, 740], [540, 660], [540, 780], [540, 620], [540, 820]],
			[[700, 700], [700, 740], [700, 660], [700, 780], [700, 620], [700, 820]],
			[[830, 700], [830, 740], [830, 660], [830, 780], [830, 620], [830, 820]],
			[[990, 700], [990, 740], [990, 660], [990, 780], [990, 620], [990, 820]],
			[[1150, 700], [1150, 740], [1150, 660], [1150, 780], [1150, 620], [1150, 820]],
		];

		public static FABAO_GRID_POINT: any[] = [
			[[380, 750], [540, 750]],
			[[1150, 750], [990, 750]]
		];


		// public static fabaoPoint(ownerId: string, camp: number): egret.Point {
		// 	if (ownerId == Application.roleData.personId)
		// 		return new egret.Point(EnumScene.FABAO_GRID_POINT[1][camp][0], EnumScene.FABAO_GRID_POINT[1][camp][1]);
		// 	else
		// 		return new egret.Point(EnumScene.FABAO_GRID_POINT[0][camp][0], EnumScene.FABAO_GRID_POINT[0][camp][1]);
		// }
		public static fabaoPoint(poitonId: number, camp: number): egret.Point {
			return new egret.Point(EnumScene.FABAO_GRID_POINT[camp][poitonId - 1][0], EnumScene.FABAO_GRID_POINT[camp][poitonId - 1][1]);
		}
	}
}