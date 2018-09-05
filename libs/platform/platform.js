
var PN_TW_GP = "andriontw_gp";//台湾谷歌平台
var PN_KDL = "kdl";//测试平台:酷哆啦
var Platform_loadAPI = false;//是否加载SDK完成
var platform_keyMap;//需要加载的SDK

/**
 * 加载平台SDK
 *
 */
(function startPlatform()
{
    if(window.location && window.location.href)
    {
        let url = window.location.href;
        platform_keyMap = new Object();
        let strs = url.split("?"); //分离浏览器参数
        if(strs.length<=1)
        {
            return;//URL地址中没有携带参数
        }
        let list = strs[1].split("&");//URL参数数组(key=value)
        let key;//参数名
        let value;//参数值
        let valueList;
        for(let i = 0,ilen=list.length;i <ilen;i++) 
        {
            valueList = list[i].split("=");
            key = valueList[0];//参数名
            value = valueList[1];//参数值
            platform_keyMap[key] = value;
        }

        //需要单独加载sdk 的平台列表
        let notLoadSdkAgentLists=[PN_TW_GP,PN_KDL];//不需要异步加载SDK的平台(这些平台使用了公共的SDK)
        let platform_agent=null;
        if(platform_keyMap.hasOwnProperty("agent")){
            platform_agent=platform_keyMap["agent"];
        }
        if (platform_agent!=null && notLoadSdkAgentLists.indexOf(platform_agent)==-1) 
        {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.id = platform_agent;
            script.async = true; //异步执行		
            script.src = "/sdk/" + platform_agent + "/" +platform_agent + ".min.js";
            document.head.appendChild(script);
            script.onload = script.onreadystatechange = function () 
            {
                Platform_loadAPI = true;
                switch (platform_agent) 
                {
                    
                }
            };
            script.onerror = function () 
            {
                Platform_loadAPI = false;
                alert("平台SDK加载失败！" + script.src);
            }
        }
        else 
        {
            //如果不用加载SDK 或者 需要从网络引用 SDK
            switch (platform_agent) 
            {
            }
        }
    }
    else
    {
    }
}());