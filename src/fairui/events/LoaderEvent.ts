module fairui.events{

    /**
     * 加载事件 cl 2018.3.7
     */
    export class LoaderEvent{

        /**
         * 加载进度
         */
        public static LOAD_PROGRESS:string = "LoaderEvent.loadProgress";

        /**
         * 加载完成
         */
        public static LOAD_COMPLETE:string = "LoaderEvent.loadComplete";
    }
}