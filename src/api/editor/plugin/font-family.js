/**
@module editor/plugin/font-family
*/

/**
编辑器的字体选择插件

### 提供的Commands
- fontFamily 对选区文字设置或取消指定的字体.
支持 queryCommandValue，返回当前元素是否被设置了对应字体
	- 参数 fontFamily (String) – 指定字体值.
实例：
```
editor.execCommand("fontFamily","SimSun"); //=> 设置选区文字为宋体.
editor.execCommand("fontFamily","SimSun"); //=> 取消设置选区文字为宋体.
editor.queryCommandValue("fontFamily"); //=> 返回 "SimSun";
```
@class FontFamily
@namespace EditorPlugin
@constructor
@param config {Object} 配置对象，详见其Attribute
*/

/**
可选。字体下拉菜单的名称和值集合。默认：
```
[
    //ie 不认识中文？？？
    {
        content:"宋体",
        value:"SimSun"
    },
    {
        content:"黑体",
        value:"SimHei"
    },
    {
        content:"隶书",
        value:"LiSu"
    },
    {
        content:"楷体",
        value:"KaiTi_GB2312"
    },
    {
        content:"微软雅黑",
        value:"Microsoft YaHei"
    },
    {
        content:"Georgia",
        value:"Georgia"
    },
    {
        content:"Times New Roman",
        value:"Times New Roman"
    },
    {
        content:"Impact",
        value:"Impact"
    },
    {
        content:"Courier New",
        value:"Courier New"
    },
    {
        content:"Arial",
        value:"Arial"
    },
    {
        content:"Verdana",
        value:"Verdana"
    },
    {
        content:"Tahoma",
        value:"Tahoma"
    }
]
```
@attribute children {Object[]}
*/

/**
可选。下拉菜单的宽度，默认 “130px”.
@attribute width {String}
@default "130px"
*/