/**
@module editor/plugin/draft
*/

/**
编辑器的草稿箱插件
```
KISSY.use('editor',function(S,Editor){
    S.use('editor/plugin/draft',function(S,Draft){
        // use
    });
});
```
@class Draft
@namespace Editor.Plugin
@constructor
@param config {Object}
@example
```
new Editor({
    plugins:{
        Draft:{
            saveKey:'taobao',
            interval:5
        }
    }
});
```
*/

/**
可选。本地存储时的内容的键名。用于区分多编辑器。
@attribute saveKey {String}
*/

/**
可选。本地存储的用户提示信息.
@attribute helpHtml {String}
*/

/**
单位秒，可选，默认 5。定时保存的间隔。
@attribute interval {Number}
@default 5
*/

/**
单位秒，可选，默认 10。草稿箱最多草稿条数.
@attribute limit {Number}
@default 10
*/