YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Anim",
        "Attribute",
        "Base",
        "Button",
        "Color",
        "ComboBox",
        "ComboBox.FilterSelect",
        "ComboBox.LocalDataSource",
        "ComboBox.MultiValueComboBox",
        "ComboBox.RemoteDataSource",
        "Component.Container",
        "Component.Control",
        "Component.Extension.Align",
        "Component.Extension.ContentBox",
        "Component.Extension.DelegateChildren",
        "Component.Extension.Shim",
        "Component.Plugin.Drag",
        "Component.Plugin.Resize",
        "Cookie",
        "CustomEvent.Target",
        "DD.DDM",
        "DD.Draggable",
        "DD.DraggableDelegate",
        "DD.Droppable",
        "DD.DroppableDelegate",
        "DD.Plugin.Constrain",
        "DD.Plugin.Proxy",
        "DD.Plugin.Scroll",
        "Date.Format",
        "Date.GregorianCalendar",
        "Date.Picker",
        "Date.PopupDatePicker",
        "Dom",
        "DomEvent",
        "Editor",
        "Feature",
        "FilterMenu",
        "IO",
        "Json",
        "Loader",
        "Menu",
        "Menu.CheckItem",
        "Menu.Item",
        "Menu.PopupMenu",
        "Menu.RadioItem",
        "Menu.SubMenu",
        "MenuButton",
        "MenuButton.Option",
        "MenuButton.Select",
        "Node",
        "Overlay",
        "Overlay.Dialog",
        "Overlay.Popup",
        "Path",
        "Promise",
        "Promise.Defer",
        "Resizable",
        "Resizable.Plugin.Proxy",
        "SWF",
        "ScrollView",
        "ScrollView.Plugin.PullToRefresh",
        "ScrollView.Plugin.ScrollBar",
        "SplitButton",
        "StyleSheet",
        "Tabs",
        "Tabs.Panel",
        "Tabs.Tab",
        "ToolBar",
        "Tree",
        "Tree.CheckNode",
        "Tree.CheckTree",
        "Tree.Manager",
        "Tree.Node",
        "UA",
        "Uri",
        "Uri.Query",
        "Util",
        "XTemplate",
        "XTemplate.RunTime"
    ],
    "modules": [
        "anim",
        "attribute",
        "base",
        "button",
        "color",
        "combobox",
        "component_container",
        "component_control",
        "component_extension_align",
        "component_extension_content-box",
        "component_extension_delegate-children",
        "component_extension_shim",
        "component_plugin_drag",
        "component_plugin_resize",
        "cookie",
        "date_format",
        "date_gregorian",
        "date_picker",
        "date_popup-picker",
        "dd",
        "dd_plugin_constrain",
        "dd_plugin_proxy",
        "dd_plugin_scroll",
        "dom",
        "editor",
        "event_custom",
        "event_dom",
        "feature",
        "filter-menu",
        "io",
        "json",
        "loader",
        "menu",
        "menubutton",
        "node",
        "overlay",
        "path",
        "promise",
        "resizable",
        "resizable_plugin_proxy",
        "scroll-view",
        "scroll-view_plugin_pull-to-refresh",
        "scroll-view_plugin_scrollbar",
        "split-button",
        "stylesheet",
        "swf",
        "tabs",
        "toolbar",
        "tree",
        "ua",
        "uri",
        "util",
        "xtemplate",
        "xtemplate_runtime"
    ],
    "allModules": [
        {
            "displayName": "anim",
            "name": "anim",
            "description": "提供动画支持"
        },
        {
            "displayName": "attribute",
            "name": "attribute"
        },
        {
            "displayName": "base",
            "name": "base",
            "description": "KISSY 的base模块提供给我们一个基类Base, 整合了 attribute 功能, 让继承 Base 的子类自动具有 attribute 的功能.如果你想让自定义类默认就支持 attribute 功能, 请直接继承 Base"
        },
        {
            "displayName": "button",
            "name": "button"
        },
        {
            "displayName": "color",
            "name": "color",
            "description": "颜色封装"
        },
        {
            "displayName": "combobox",
            "name": "combobox"
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
            "displayName": "component/extension/content-box",
            "name": "component_extension_content-box"
        },
        {
            "displayName": "component/extension/delegate-children",
            "name": "component_extension_delegate-children"
        },
        {
            "displayName": "component/extension/shim",
            "name": "component_extension_shim"
        },
        {
            "displayName": "component/plugin/drag",
            "name": "component_plugin_drag",
            "description": "组件拖拽插件"
        },
        {
            "displayName": "component/plugin/resize",
            "name": "component_plugin_resize",
            "description": "调整大小插件"
        },
        {
            "displayName": "cookie",
            "name": "cookie",
            "description": "提供类Cookie"
        },
        {
            "displayName": "date/format",
            "name": "date_format"
        },
        {
            "displayName": "date/gregorian",
            "name": "date_gregorian",
            "description": "公历模块,提供了时间转换，范围计算等功能。"
        },
        {
            "displayName": "date/picker",
            "name": "date_picker",
            "description": "嵌入式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能"
        },
        {
            "displayName": "date/popup-picker",
            "name": "date_popup-picker",
            "description": "浮层式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能"
        },
        {
            "displayName": "dd",
            "name": "dd",
            "description": "拖放功能\n\n#Note \n支持 win8 的触摸事件"
        },
        {
            "displayName": "dd/plugin/constrain",
            "name": "dd_plugin_constrain"
        },
        {
            "displayName": "dd/plugin/proxy",
            "name": "dd_plugin_proxy"
        },
        {
            "displayName": "dd/plugin/scroll",
            "name": "dd_plugin_scroll"
        },
        {
            "displayName": "dom",
            "name": "dom",
            "description": "提供类DOM"
        },
        {
            "displayName": "editor",
            "name": "editor"
        },
        {
            "displayName": "event/custom",
            "name": "event_custom",
            "description": "自定义事件模块"
        },
        {
            "displayName": "event/dom",
            "name": "event_dom",
            "description": "根据设备环境加载响应的子模块来处理 DOM 的事件模块"
        },
        {
            "displayName": "feature",
            "name": "feature",
            "description": "features模块提供了Features来进行硬件环境关键特性检测，直接通过KISSY全局对象调用"
        },
        {
            "displayName": "filter-menu",
            "name": "filter-menu"
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
            "displayName": "menu",
            "name": "menu"
        },
        {
            "displayName": "menubutton",
            "name": "menubutton"
        },
        {
            "displayName": "node",
            "name": "node",
            "description": "node 包括 dom , event , anim 模块的所有功能, 推荐采用 Node 模块"
        },
        {
            "displayName": "overlay",
            "name": "overlay"
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
            "displayName": "resizable",
            "name": "resizable"
        },
        {
            "displayName": "resizable/plugin/proxy",
            "name": "resizable_plugin_proxy"
        },
        {
            "displayName": "scroll-view",
            "name": "scroll-view"
        },
        {
            "displayName": "scroll-view/plugin/pull-to-refresh",
            "name": "scroll-view_plugin_pull-to-refresh"
        },
        {
            "displayName": "scroll-view/plugin/scrollbar",
            "name": "scroll-view_plugin_scrollbar",
            "description": "ScrollView的插件ScrollBar"
        },
        {
            "displayName": "split-button",
            "name": "split-button"
        },
        {
            "displayName": "stylesheet",
            "name": "stylesheet"
        },
        {
            "displayName": "swf",
            "name": "swf"
        },
        {
            "displayName": "tabs",
            "name": "tabs"
        },
        {
            "displayName": "toolbar",
            "name": "toolbar",
            "description": "Toolbar菜单栏组件"
        },
        {
            "displayName": "tree",
            "name": "tree"
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
        },
        {
            "displayName": "xtemplate",
            "name": "xtemplate",
            "description": "富逻辑的 KISSY 模板引擎\n兼容 mustache"
        },
        {
            "displayName": "xtemplate/runtime",
            "name": "xtemplate_runtime"
        }
    ]
} };
});