module fairui{

    import GLoader = fairygui.GLoader;

    /**
     * 进度条
     * @author cl 2018.3.31
     */
    export class ProgressBar extends BaseButton{
        protected bar:fairygui.GLoader;
        protected titleTxt:fairygui.GTextField;
        /**背景 */
        protected bg: GLoader;

        protected _progress:number = 0;
        protected _barWidth:number = 0;

        public constructor(){

            super();
            this.touchable = false;
        }

        protected constructFromXML(xml: any): void {

            super.constructFromXML(xml);
        }


        setup_afterAdd(xml: any): void {

            this.bg = this.getElement("bg");
            this.bar = this.getElement( "icon" );
            this.titleTxt = this.getElement("title");

            this._barWidth = this.bar.width;
            super.setup_afterAdd(xml);

            if (this.selectedIcon && this.selectedIcon.length > 0) {
                this.bg.url = this.selectedIcon;
            }
        }

        public set progress( value:number ){

            this._progress = value > 1 ? 1 : ( value < 0 ? 0 : value );

            if( this.bar ){
                this.bar.width = this._barWidth * this._progress;
            }
        }
        /**
         * 进度条
         */
        public get progress():number{

            return this._progress;
        }

        /**
         * 显示进度
         * @param value 当前值
         * @param max   最大值
         * @param isPer 是否显示百分比
         */
        public showProgress( value:number , max:number , isPer:boolean = false ):void{

            this.progress = max == 0 ? 0 : value / max;
            if( !isPer ){
                this.text = parseInt( value.toString() ) + "/" + parseInt( max.toString() );
            }else{
                this.text = parseInt( "" + (this.progress * 100) ) + "%" ;
            }            
        }

        public set text( value:string ){

            this.titleTxt.text = value;
        }
        /**进度显示文本 */
        public get text():string{

            return this.titleTxt.text;
        }

        public dispose():void{

            super.dispose();

            this.bar = null;
            this.titleTxt = null;
            this.bg = null;
        }
    }
}