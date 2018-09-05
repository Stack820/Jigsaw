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
import DisplayObject = egret.DisplayObject;
import LoginEvent = com.events.LoginEvent;
import EventType = com.events.EventType;

class Main extends egret.DisplayObjectContainer {
    /**加载进度界面*/
    private loadingView: view.LoginLoadingView;
    public mainView: base.GSprite;
    public fairyUIView: base.GSprite;

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.stage.addEventListener(egret.Event.RESIZE, this.resizeHandler, this);
        //this.stage.addEventListener(egret.Event.DEACTIVATE, this.deactivateHandler, this);
        //this.stage.addEventListener(egret.Event.ACTIVATE, this.activateHandler, this);
        // egret.lifecycle.addLifecycleListener((context) => {
        //     // custom lifecycle plugin
        //     context.onUpdate = () => {
        //     }
        // })
        egret.lifecycle.onPause = () => {
            // switch (egret.Capabilities.os) {
            //     case "iOS":// 苹果手机操作系统 “iOS”
            //     case "Android"://  安卓手机操作系统 “Android”
            //     case "Windows Phone"://  微软手机操作系统 “Windows Phone”
            //     case "Unknown":
            //         egret.ticker.pause();
            //         break;
            // }
            //egret.ticker.pause();
            this.deactivateHandler();
        }
        egret.lifecycle.onResume = () => {
            // switch (egret.Capabilities.os) {
            //     case "iOS":// 苹果手机操作系统 “iOS”
            //     case "Android"://  安卓手机操作系统 “Android”
            //     case "Windows Phone"://  微软手机操作系统 “Windows Phone”
            //     case "Unknown":
            //         egret.ticker.resume();
            //         break;
            // }
            egret.ticker.resume();
            this.activateHandler();
        }
        this.runGame().catch(e => {
            console.log(e);
        })
        //WebParams.setErrorLog(App.lang.getLang("lang_client_760"), "Windex.error:\n");
    }

    private resizeHandler() {
        EventManager.dispatchEvent(EventType.STGAE_RESIZE);
    }

    private deactivateHandler() {
        Config.isActivate = false;
        EventManager.dispatchEvent(EventType.DEACTIVATE);
        //Config.gotoHeartBeat();
    }

    private activateHandler() {
        //Config.isActivate = true;
        EventManager.dispatchEvent(EventType.ACTIVATE);
        //Config.clearHeartBeat();
    }

    private async runGame() {
        await this.loadResource()
        //const result = await RES.getResAsync("description_json");
        //await platform.login();
        //const userInfo = await platform.getUserInfo();
    }

    private async loadResource() {
        try {
            App.init(this);
            let default_res_json: string = "";
            default_res_json = "resource/default.res.json";
            RES.setMaxLoadingThread(8);
            await RES.loadConfig(default_res_json, "resource/");
            this.loadingView = new view.LoginLoadingView();
            this.addChild(this.loadingView);

            if (window['closeLoadingView']) {
                window['closeLoadingView']();
            }

            this.loadingView.onProgress(5, 100, "Loadding nationalized language txt[" + Config.releaseVersion + "].");
            RES.getResByUrl("locale/" + Config.locale + "/language.json?v=" + Config.releaseVersion, function loadJson(json: Object) {
                fairui.LoaderManager.disposeRes("locale/" + Config.locale + "/language.json?v=" + Config.releaseVersion);
                this.loadGroup();
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        catch (e) {
            console.error(e);
        }
    }

    private async loadGroup() {
        this.loadingView.onProgress(10, 100, "Loadding preload res.");
        await RES.loadGroup("preload", 0);
        this.loadingView.onProgress(20, 100, "Loadding version parser[" + Config.releaseVersion + "].");
        this.createGameScene();
    }
    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        this.loadingView.onProgress(30, 100, "The game scene is being created...");
        //this.hideGameLoadding();
        //this.removeChild(this.loadingView);
        this.startCreateScene();
    }
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected startCreateScene(): void {
        this.fairyUIView = new base.GSprite();
        this.mainView = new GameLogin();
        this.addChildAt(this.mainView, 0);
        this.addChildAt(this.fairyUIView, 1);
        //EventManager.addEventListener(com.events.LoginEvent.SHOW_INIT_GAME_PROGRESS, this.showLoadingUI, this);
        EventManager.addEventListener(LoginEvent.ROLE_LOGIN_TO_SECNE, this.onRoleToScene, this);
        EventManager.addEventListener(LoginEvent.SHOW_GAME_LOADDING, this.showGameLoadding, this);
        EventManager.addEventListener(LoginEvent.HIDE_GAME_LOADDING, this.hideGameLoadding, this);
    }
    /**显示加载进度界面*/
    private showGameLoadding() {
        if (this.loadingView && !this.contains(this.loadingView))
            this.addChild(this.loadingView);
        this.loadingView.show();
    }
    /**隐藏加载进度界面*/
    private hideGameLoadding() {
        if (this.loadingView && this.contains(this.loadingView))
            this.removeChild(this.loadingView);
        this.loadingView.hide();
    }

    private onRoleToScene() {
        //EventManager.removeEventListener(com.events.LoginEvent.SHOW_INIT_GAME_PROGRESS, this.showLoadingUI, this);
        EventManager.removeEventListener(LoginEvent.ROLE_LOGIN_TO_SECNE, this.onRoleToScene, this);
        EventManager.removeEventListener(LoginEvent.SHOW_GAME_LOADDING, this.showGameLoadding, this);
        EventManager.removeEventListener(LoginEvent.HIDE_GAME_LOADDING, this.hideGameLoadding, this);
        this.deleteLoadingUI();
    }

    private deleteLoadingUI() {
        this.hideGameLoadding();
        this.loadingView.dispose();
        this.loadingView = null;
    }

    public createGameClient() {
        this.loadingView.onProgress(96, 100, "Entering the game...");
        if (this.mainView) {
            this.mainView.dispose();
            this.removeChild(this.mainView);
        }
        this.mainView = new GameClient();
        this.addChildAt(this.mainView, 0);
    }

    public changeScene(type: number, displayObject: base.GSprite) {
        (<GameClient>this.mainView).changeScene(type, displayObject);
    }

    public removeScene(displayObject: base.GSprite) {
        (<GameClient>this.mainView).removeScene(displayObject);
    }
}