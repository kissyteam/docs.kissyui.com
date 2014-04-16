YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Align",
        "Anim",
        "Attribute",
        "Base",
        "Container",
        "Control",
        "Cookie",
        "Defer",
        "Dom",
        "Event",
        "Feature",
        "IO",
        "Json",
        "Loader",
        "Manager",
        "Node",
        "Path",
        "Promise",
        "Query",
        "Shim",
        "Target",
        "UA",
        "Uri",
        "Util"
    ],
    "modules": [
        "anim",
        "base",
        "component_container",
        "component_control",
        "component_extension_align",
        "component_extension_shim",
        "component_manager",
        "cookie",
        "dom",
        "event",
        "feature",
        "io",
        "json",
        "loader",
        "node",
        "path",
        "promise",
        "ua",
        "uri",
        "util"
    ],
    "allModules": [
        {
            "displayName": "anim",
            "name": "anim",
            "description": "提供类Anim,动画支持"
        },
        {
            "displayName": "base",
            "name": "base",
            "description": "鉴于不同浏览器对属性描述符的支持并不统一, KISSY 的 attribute 模块, 模拟实现了属性描述符, 提供属性的获取和设置操作, 即属性的 getter 和 setter 动作.\n\n而 KISSY 的base模块提供给我们一个基类Base, 整合了 attribute 功能, 让继承 Base 的子类自动具有 attribute 的功能.如果你想让自定义类默认就支持 attribute 功能, 请直接继承 Base"
        },
        {
            "displayName": "component/container",
            "name": "component_container"
        },
        {
            "displayName": "component/control",
            "name": "component_control",
            "description": "合并了原来的 box\n组件基类.仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review"
        },
        {
            "displayName": "component/extension/align",
            "name": "component_extension_align"
        },
        {
            "displayName": "component/extension/shim",
            "name": "component_extension_shim"
        },
        {
            "displayName": "component/manager",
            "name": "component_manager"
        },
        {
            "displayName": "cookie",
            "name": "cookie",
            "description": "提供类Cookie"
        },
        {
            "displayName": "dom",
            "name": "dom",
            "description": "提供类DOM"
        },
        {
            "displayName": "event",
            "name": "event",
            "description": "提供类Event"
        },
        {
            "displayName": "feature",
            "name": "feature",
            "description": "features模块提供了Features来进行硬件环境关键特性检测，直接通过KISSY全局对象调用"
        },
        {
            "displayName": "io",
            "name": "io",
            "description": "提供类IO"
        },
        {
            "displayName": "json",
            "name": "json"
        },
        {
            "displayName": "loader",
            "name": "loader",
            "description": "loader模块,定义KISSY初始对象及模块化机制用到的方法，所有方法都通过KISSY直接引用"
        },
        {
            "displayName": "node",
            "name": "node",
            "description": "node 包括 dom , event , anim 模块的所有功能, 推荐采用 Node 模块"
        },
        {
            "displayName": "path",
            "name": "path"
        },
        {
            "displayName": "promise",
            "name": "promise"
        },
        {
            "displayName": "ua",
            "name": "ua",
            "description": "UA模块将UA挂在在全局对象KISSY上，通过 KISSY.UA 的属性，你可以获取浏览器等用户代理的信息。"
        },
        {
            "displayName": "uri",
            "name": "uri",
            "description": "uri解析模块"
        },
        {
            "displayName": "util",
            "name": "util",
            "description": "util模块，包含类Util"
        }
    ]
} };
});