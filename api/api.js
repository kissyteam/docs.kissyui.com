YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Anim",
        "Base",
        "Base.Attribute",
        "Button",
        "ComboBox",
        "ComboBox.FilterSelect",
        "ComboBox.LocalDataSource",
        "ComboBox.MultiValueComboBox",
        "ComboBox.RemoteDataSource",
        "Component.Color",
        "Component.Container",
        "Component.Control",
        "Component.Extension.Align",
        "Component.Extension.DelegateChildren",
        "Component.Extension.Shim",
        "Component.Manager",
        "Component.Plugin.Drag",
        "Component.Plugin.Resize",
        "Cookie",
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
        "Editor",
        "Editor.Plugin.BackColor",
        "Editor.Plugin.Bold",
        "Editor.Plugin.CheckBoxSourceArea",
        "Editor.Plugin.Code",
        "Editor.Plugin.Draft",
        "Editor.Plugin.DragUpload",
        "Editor.Plugin.EditorResize",
        "Editor.Plugin.ElementPath",
        "Editor.Plugin.Flash",
        "Editor.Plugin.FontColor",
        "Editor.Plugin.FontFamily",
        "Editor.Plugin.FontSize",
        "Editor.Plugin.Heading",
        "Editor.Plugin.Image",
        "Editor.Plugin.Indent",
        "Editor.Plugin.Italic",
        "Editor.Plugin.JustifyCenter",
        "Editor.Plugin.JustifyLeft",
        "Editor.Plugin.JustifyRight",
        "Editor.Plugin.Link",
        "Editor.Plugin.Maximize",
        "Editor.Plugin.MultipleUpload",
        "Editor.Plugin.OrderedList",
        "Editor.Plugin.Outdent",
        "Editor.Plugin.PageBreak",
        "Editor.Plugin.Preview",
        "Editor.Plugin.RemoveFormat",
        "Editor.Plugin.Separator",
        "Editor.Plugin.Smiley",
        "Editor.Plugin.SourceArea",
        "Editor.Plugin.StrikeThrough",
        "Editor.Plugin.Table",
        "Editor.Plugin.Underline",
        "Editor.Plugin.Undo",
        "Editor.Plugin.UnorderedList",
        "Editor.Plugin.Video",
        "Editor.Plugin.XiaMiMusic",
        "Event",
        "Event.Target",
        "Feature",
        "FilterMenu",
        "IO",
        "Json",
        "Loader",
        "Menu",
        "Menu.CheckMenuItem",
        "Menu.Item",
        "Menu.PopupMenu",
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
        "base",
        "button",
        "color",
        "combobox",
        "component_container",
        "component_control",
        "component_extension_align",
        "component_extension_delegate-children",
        "component_extension_shim",
        "component_manager",
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
        "editor_plugin_back-color",
        "editor_plugin_bold",
        "editor_plugin_checkbox-source-area",
        "editor_plugin_code",
        "editor_plugin_draft",
        "editor_plugin_drag-upload",
        "editor_plugin_element-path",
        "editor_plugin_flash",
        "editor_plugin_font-color",
        "editor_plugin_font-family",
        "editor_plugin_font-size",
        "editor_plugin_heading",
        "editor_plugin_image",
        "editor_plugin_indent",
        "editor_plugin_italic",
        "editor_plugin_justify-center",
        "editor_plugin_justify-left",
        "editor_plugin_justify-right",
        "editor_plugin_link",
        "editor_plugin_maximize",
        "editor_plugin_multiple-upload",
        "editor_plugin_ordered-list",
        "editor_plugin_outdent",
        "editor_plugin_page-break",
        "editor_plugin_preview",
        "editor_plugin_remove-format",
        "editor_plugin_resize",
        "editor_plugin_separator",
        "editor_plugin_smiley",
        "editor_plugin_source-area",
        "editor_plugin_strike-through",
        "editor_plugin_table",
        "editor_plugin_underline",
        "editor_plugin_undo",
        "editor_plugin_unordered-list",
        "editor_plugin_video",
        "editor_plugin_xiami-music",
        "event",
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
            "displayName": "base",
            "name": "base",
            "description": "鉴于不同浏览器对属性描述符的支持并不统一, KISSY 的 attribute 模块, 模拟实现了属性描述符, 提供属性的获取和设置操作, 即属性的 getter 和 setter 动作.\n\n而 KISSY 的base模块提供给我们一个基类Base, 整合了 attribute 功能, 让继承 Base 的子类自动具有 attribute 的功能.如果你想让自定义类默认就支持 attribute 功能, 请直接继承 Base"
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
            "displayName": "component/extension/delegate-children",
            "name": "component_extension_delegate-children"
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
            "displayName": "editor/plugin/back-color",
            "name": "editor_plugin_back-color"
        },
        {
            "displayName": "editor/plugin/bold",
            "name": "editor_plugin_bold"
        },
        {
            "displayName": "editor/plugin/checkbox-source-area",
            "name": "editor_plugin_checkbox-source-area"
        },
        {
            "displayName": "editor/plugin/code",
            "name": "editor_plugin_code"
        },
        {
            "displayName": "editor/plugin/draft",
            "name": "editor_plugin_draft"
        },
        {
            "displayName": "editor/plugin/drag-upload",
            "name": "editor_plugin_drag-upload"
        },
        {
            "displayName": "editor/plugin/element-path",
            "name": "editor_plugin_element-path"
        },
        {
            "displayName": "editor/plugin/flash",
            "name": "editor_plugin_flash"
        },
        {
            "displayName": "editor/plugin/font-color",
            "name": "editor_plugin_font-color"
        },
        {
            "displayName": "editor/plugin/font-family",
            "name": "editor_plugin_font-family"
        },
        {
            "displayName": "editor/plugin/font-size",
            "name": "editor_plugin_font-size"
        },
        {
            "displayName": "editor/plugin/heading",
            "name": "editor_plugin_heading"
        },
        {
            "displayName": "editor/plugin/image",
            "name": "editor_plugin_image"
        },
        {
            "displayName": "editor/plugin/indent",
            "name": "editor_plugin_indent"
        },
        {
            "displayName": "editor/plugin/italic",
            "name": "editor_plugin_italic"
        },
        {
            "displayName": "editor/plugin/justify-center",
            "name": "editor_plugin_justify-center"
        },
        {
            "displayName": "editor/plugin/justify-left",
            "name": "editor_plugin_justify-left"
        },
        {
            "displayName": "editor/plugin/justify-right",
            "name": "editor_plugin_justify-right"
        },
        {
            "displayName": "editor/plugin/link",
            "name": "editor_plugin_link"
        },
        {
            "displayName": "editor/plugin/maximize",
            "name": "editor_plugin_maximize"
        },
        {
            "displayName": "editor/plugin/multiple-upload",
            "name": "editor_plugin_multiple-upload"
        },
        {
            "displayName": "editor/plugin/ordered-list",
            "name": "editor_plugin_ordered-list"
        },
        {
            "displayName": "editor/plugin/outdent",
            "name": "editor_plugin_outdent"
        },
        {
            "displayName": "editor/plugin/page-break",
            "name": "editor_plugin_page-break"
        },
        {
            "displayName": "editor/plugin/preview",
            "name": "editor_plugin_preview"
        },
        {
            "displayName": "editor/plugin/remove-format",
            "name": "editor_plugin_remove-format"
        },
        {
            "displayName": "editor/plugin/resize",
            "name": "editor_plugin_resize"
        },
        {
            "displayName": "editor/plugin/separator",
            "name": "editor_plugin_separator"
        },
        {
            "displayName": "editor/plugin/smiley",
            "name": "editor_plugin_smiley"
        },
        {
            "displayName": "editor/plugin/source-area",
            "name": "editor_plugin_source-area"
        },
        {
            "displayName": "editor/plugin/strike-through",
            "name": "editor_plugin_strike-through"
        },
        {
            "displayName": "editor/plugin/table",
            "name": "editor_plugin_table"
        },
        {
            "displayName": "editor/plugin/underline",
            "name": "editor_plugin_underline"
        },
        {
            "displayName": "editor/plugin/undo",
            "name": "editor_plugin_undo"
        },
        {
            "displayName": "editor/plugin/unordered-list",
            "name": "editor_plugin_unordered-list"
        },
        {
            "displayName": "editor/plugin/video",
            "name": "editor_plugin_video"
        },
        {
            "displayName": "editor/plugin/xiami-music",
            "name": "editor_plugin_xiami-music"
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