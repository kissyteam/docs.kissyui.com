/**
@module editor/plugin/font-size
*/

/**
编辑器的字体大小插件

### 提供的Commands
- fontSize 对选区文字设置或取消指定的字体大小
支持 queryCommandValue，返回当前元素是否被设置了对应大小
	- 参数 fontSize (String) – 指定字体大小值.
实例：
```
editor.execCommand("fontSize","10px"); //=> 设置选区文字大小为10px.
editor.execCommand("fontSize","10px"); //=> 取消设置选区文字大小为10px.
editor.queryCommandValue("fontSize"); //=> 返回 10px
```
@class FontSize
@constructor
@param config {Object} 配置对象，详见其Attribute
*/

/**
可选。字体大小下拉菜单的名称和值集合，默认包括 “8px”,”10px” 等。例如：
```
[
    //ie 不认识中文？？？
    {
        content:"较大",
        value:"20px"
    },
    {
        content:"较小",
        value:"10px"
    }
]
```
@attribute children {Object[]}
@optional
*/

/**
可选。下拉菜单的宽度，默认 “55px”.
@attribute width {String}
@default "55px"
@optional
*/