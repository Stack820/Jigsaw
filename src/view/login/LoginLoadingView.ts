//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
module view {
    export class LoginLoadingView extends base.GSprite {

        private textField: base.GLabel;
        public constructor() {
            super();
            this.touchChildren = false;
            this.touchEnabled = false;
            this.createView();
        }

        private createView(): void {

            this.textField = new egret.TextField();
            this.addChild(this.textField);
            this.textField.width = 1000;
            this.textField.height = 34;
            this.textField.x = this.width - this.textField.width >> 1;
            this.textField.y = this.height - this.textField.height;
            this.textField.size = 18;
            this.textField.textAlign = "center";
            EventManager.addEventListener(EventType.STGAE_RESIZE, this.resizeHandler, this);
            EventManager.addEventListener(LoginEvent.SHOW_INIT_GAME_PROGRESS, this.onProgress, this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addtoStageHandler, this);
        }

        private addtoStageHandler(event: egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addtoStageHandler, this);
            if (document) {
                document.body.removeChild(document.getElementById("preloading"));
            }
            this.resizeHandler();
            this.show();
        }

        public show() {
            // this.bar_img.width = 16;
            // TweenLite.to(this.bar_img, 2, {
            //     width: 978, onComplete: function (thisObject: LoginLoadingView) {
            //         thisObject.show();
            //     }, onCompleteParams: [this]
            // });
        }

        public hide() {
        }

        public onProgress(current: number, total: number, txt: string): void {
            this.setProgressTxt(txt);
            if (DEBUG)
                egret.log(current, total, txt);
            //this.bar_img.width = 978 * (current / total);
            //this.textField.text = `Loading...${current}/${total}`;
        }

        private setProgressTxt(txt: string): void {
            this.textField.text = txt;
            //App.log.debug(text);
        }

        private resizeHandler() {
            if (this.stage) {
                this.x = this.stage.stageWidth - this.width >> 1;
                this.y = this.stage.stageHeight - this.height;
            }
            //this.x = App.stageWidth - 1920 >> 1;
            //this.y = App.stageHeight - 1080;
        }

        public get width(): number {
            return 1336;
        }

        public get height(): number {
            return 740;
        }

        public dispose(type?: boolean) {
            super.dispose(type);
            this.removeAllEventListener();
            this.hide();
            this.textField = null;
            let len: number = this.numChildren;
            for (let i: number = 0; i < len; i++) {
                this.removeChildAt(0);
            }
            EventManager.removeEventListener(EventType.STGAE_RESIZE, this.resizeHandler, this);
            EventManager.removeEventListener(LoginEvent.SHOW_INIT_GAME_PROGRESS, this.setProgressTxt, this);
        }
    }
}