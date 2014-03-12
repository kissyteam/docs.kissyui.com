YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Anim",
        "Features",
        "Loader",
        "UA",
        "Util"
    ],
    "modules": [
        "UA",
        "Util",
        "anim",
        "features",
        "loader"
    ],
    "allModules": [
        {
            "displayName": "anim",
            "name": "anim",
            "description": "提供Class Anim,动画支持"
        },
        {
            "displayName": "features",
            "name": "features",
            "description": "features模块提供了Features来进行硬件环境关键特性检测，直接通过KISSY全局对象调用"
        },
        {
            "displayName": "loader",
            "name": "loader",
            "description": "loader模块,定义KISSY初始对象及模块化机制用到的方法，所有方法都通过KISSY直接引用"
        },
        {
            "displayName": "UA",
            "name": "UA",
            "description": "UA模块将UA挂在在全局对象KISSY上，通过 KISSY.UA 的属性，你可以获取浏览器等用户代理的信息。"
        },
        {
            "displayName": "Util",
            "name": "Util",
            "description": "util模块，包含Class Util"
        }
    ]
} };
});