/**
@module editor/plugin/drag-upload
*/

/**
编辑器的拖放上传插件
@class DragUpload
@namespace EditorPlugin
@constructor
@param config {Object} 详见其Attribute
@example
```
KISSY.use('editor',function(S,Editor){
    S.use('editor/plugin/drag-upload',function(S,DragUpload){
        // use
    });
});
```
*/

/**
可选，默认 “Filedata”。上传文件域的名字.
@attribute fileInput {String}
@default "Filedata"
*/

/**
可选，单位 kb，默认无限制。上传文件大小限制.
@attribute sizeLimit {Number}
*/

/**
可选。附带传给 server 的参数 json 对象。
@attribute serverParams {Object}
*/

/**
比选。上传服务器地址。
@attribute serverUrl {String}
*/

/**
可选，默认 “png,jpg,jpeg,gif”。允许上传的文件后缀名列表，逗号分割.
@attribute suffix {String}
*/

