/**
@module editor/plugin/multiple-upload
*/

/**
编辑器的批量上传插件

### Note
- 该插件使用 flash 技术, 必须在根域名下提供 crossdomain.xml , 例如 http://www.taobao.com/crossdomain.xml , 内容如下
```
<cross-domain-policy>
    <allow-access-from domain="*.taobao.com"/>
    <allow-access-from domain="*.taobao.net"/>
    <allow-access-from domain="*.taobaocdn.com"/>
    <allow-access-from domain="*.tbcdn.cn"/>
    <allow-access-from domain="*.allyes.com"/>
</cross-domain-policy>
```
- serverUrl 必须使用绝对地址, 否则如果编辑器组件和应用页面不在同一个hostname时, firefox下请求会发到编辑器组件所在的hostname.
- 多图上传在非 ie 下并不会携带 cookie，如确实需要可通过 serverParams 传递：
```
serverParams: {
    cookie: function () {
        return document.cookie;
    }
}
```
@class MultipleUpload
@namespace EditorPlugin
@constructor
@param config {Object} 配置对象，详见其Attribute
*/

/**
接受文件数据的服务器端程序地址, 格式为 multipart/form-data , 返回格式为：
- 正确：{“imgUrl”:”http://xx.com/yy.jpg“}
- 错误：{“error”:”i am error!”} 
@attribute serverUrl {String} 
*/

/**
键值对. 传给服务器的格外参数, 如果 value 是函数则传递函数执行结果.
@attribute serverParams {Object}
*/

/**
缩略图的后缀。例如原图:http://xx.com/yy.jpg，则加入后缀名时变为：http://xx.com/yy_80x80.jpg
@attribute previewSuffix {String} 
*/

/**
缩略图的宽度.
@attribute previewWidth {String}
*/

/**
传给服务器的文件域名.
@attribute fileInput {String}
*/

/**
限制上传的文件大小, 单位 KB.
@attribute sizeLimit {Number} 
*/

/**
可同时显示的图片列表个数.
@attribute numberLimit {Number}
*/

/**
放入图片上传区域的其他 html.
@attribute extraHtml {String}
*/
