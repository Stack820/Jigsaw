module com.utils {

	export class RantionDisplayObjectUtil {

		public static toPoint(display: egret.DisplayObject, mat: egret.Matrix, cx: number, cy: number, $angle: number) {
			let mat1: egret.Matrix = new egret.Matrix();
			mat1.translate(cx, cy);
			mat1.rotate($angle);
			mat1.concat(mat);
			mat1.translate(cx * -1, cy * -1);
			display.matrix = mat1;
		}
	}
}