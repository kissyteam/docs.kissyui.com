/**
提供类IO
@module io
*/

/**
构造请求并发送
@class IO
@constructor
@extends Promise
@param cfg {Object}
@example
载入并执行一段脚本
```
new IO({
   type: "GET",
   url: "test.js",
   dataType: "script"
 });
 ```
 发送数据给服务器，服务器返回后通知用户
 ```
 new IO({
   type: "POST",
   url: "some.php",
   data: {
    x:'y'
   },
   success: function(msg){
     alert( "Data Saved: " + msg );
   }
 });
 ```
 取得最新的 html 并显示
 ```
 new IO({
  url: "test.html",
  cache: false,
  success: function(html){
    $("#results").html(html);
  }
});
```
发送 xml 文档给服务器
```
var xmlDocument=S.parseXML("<a>h</a>");

new IO({
   url: "page.php",
   processData: false,
   contentType:'text/xml',
   data: xmlDocument,
   type:'post'
 });
 ```
 通过 xhr 发送 form 内容,自动序列化 form 为查询串通过 xhr 发送给服务器端
 ```
 <form>
    <input name='test' value='v' />
</form>

<script>
    new IO({
        url:'send.php',
        form:'#test',
        type:'post',
        dataType:'json',
        success:function(d,s,xhr){
            alert('success');
        }
    });
</script>
```
*/

/**
本次请求发送的地址
@attribute url {String}
*/

/**
该设置和dataType一起确定定当前发送给服务器的 Accept 头，默认包括：
```
{
    xml: "application/xml, text/xml",
    html: "text/html",
    text: "text/plain",
    json: "application/json, text/javascript"
}
```
@attribute accepts {Object} 
*/

/**
期望能够从服务器返回的数据类型.如果没有指定，kissy 将尽量从返回的`mimeType | Content-type`相应头中推导出来 (‘text/xml’ 将推导出 xml , ‘text/json’ 将推导出 json)
默认支持的类型（该类型的响应信息会作为第一个参数传到 success complete 回调中）有:
- "xml" : 返回响应信息代表的 xml 文档.
- "text" : 返回响应信息串
- "html" : 同 "text"
- "script" : 将响应信息作为脚本执行。
- "json" : 返回响应信息代表的 json 对象.
- "jsonp" : 返回 jsonp 的响应信息代表的 json 对象.
@attribute dataType {String} 
*/

/**
当 data 为对象时是否用 param() 序列化. 例如当需要传送一个 xml 或 formdata 到服务器时就不需要 param data， 并且最好同时设置 contentType 为合适的值
@attribute processData {Boolean}
@default true
*/

/**
本次 xhr 请求是否异步发送，如果你需要同步发送，设置该配置为 false,注意同步请求在完成前会锁死浏览器
@attribute async {Boolean} 
@default true
*/

/**
dataType 为 script 或 jsonp 时默认 false，其他默认为 true. false 时则会自动给请求 url 加上时间戳
@attribute cache {Boolean} 
*/

/**
设置 false 则不设置 Content-type 头 (例如传输 formdata 时需要设置 false).注意："application/x-www-form-urlencoded"时的数据总是以 utf-8 的编码传往服务器端
@attribute contentType {String} 
@default "application/x-www-form-urlencoded"
*/

/**
设置回调函数中的 this 值,默认为当前配置项.例如可以把一个 dom 节点作为 complete 回调函数的上下文
@attribute context {Object} 
*/

/**
默认同域请求为 false,不同域间为 true。设置该值为 true，则强制 script 以及 jsonp 请求通过 script 节点发送，用于服务器重定向到其他域脚本的场景
@attribute crossDomain {Boolean} 
*/

/**
如果为 Object 类型则会通过 param() 格式化为字符串
注意:data 不能为嵌套 object 等复杂类型，例如: 不能是`{data : [{x : 1}]}`,可以为{data : [1]}
@attribute data {Object|String}
*/

/**
表示序列化 data 时是否给数组值对应的键名加 []
@attribute serializeArray {Boolean}
@default true
*/

/**
请求失败时的回调函数.这个函数接受 2 个参数:
- textStatus 表示错误信息，包括 “timeout” , “error” , “abort” 等
- io 表示这次请求代表的 io 实例
@attribute error {Function} 
*/

/**
请求成功时的回调函数.该函数传入三个参数:
- data : 根据 dataType 格式化服务器响应信息的响应对象
- textStatus : 描述成功的状态，一般是 “success”
- io : 本次请求的 io 实例. 
@attribute success {Function} 
*/

/**
请求完成时(无论成功失败)的回调函数.该函数传入三个参数
- data : 根据 dataType 格式化服务器响应信息的响应对象
- textStatus : 描述成功的状态，一般是 “success”
- io : 本次请求的 io 实例.
@attribute complete {Function}
*/

/**
设置这次请求 xhr 的请求头
@attribute headers {Object} 
*/

/**
 覆盖这次 jsonp 请求的 callback 函数名. 这个值可以取代请求 url 中 callback=? 的 callback.例如 {jsonp:’onJsonLoad’} 会导致 ‘onJsonLoad=?’ 发送给服务器端
@attribute jsonp {String}
*/

/**
覆盖这次 jsonp 请求 callback 函数对应的值 (callback={jsonpCallback}). 这个值将取代 kissy 默认生成的 UUID 值.
当传入函数时，该函数需要返回字符串，每次请求都会调用该函数得到用于替换的字符串
@attribute jsonpCallback {String|Function}
*/

/**
跨平台设置 xhr 的 mimeType
@attribute mimeType {String} 
*/

/**
对于需要验证的 http 请求设置密码
@attribute password {String} 
*/

/**
对于需要验证的 http 请求设置用户名
@attribute username {String} 
*/

/**
用于 dataType jsonp 和 script ，设定传输用的 script 节点的 charset 属性。只有当返回编码和当前页面编码不一致时使用
@attribute scriptCharset {String}
*/



/**
表示请求完成状态。可用于判断当前请求是否完成. 4 表示完成，否则表示正在进行中.(xhr 会有更多取值，jsonp script 只有 0(初始化) 1(发送中) 4(完成))
@attribute readyState {Number}
*/

/**
对这次请求设个超时时间，单位秒. 当超时后会触发 error 以及 complete 回调 , 状态字符串为 “timeout”.
@attribute timeout {Number} 
*/

/**
可取值 “get” 或者 “post”
@attribute type {String}  
*/

/**
设置到原生 xhr 对象的键值对.例如为了在标准浏览器进行跨域请求时携带cookie你可以设置 withCredentials 为 true.
```
new IO({
    url:"http://y.com/ping.php",
    xhrFields:{
        withCredentials: true
    }
});
```
这样 x.com 发送请求 y.com 会携带 y.com 的 cookie 信息
@attribute xhrFields {Object} 
*/

/**
字符串表示 css3 选择器
- 如果 form 的 enctype 为 “multipart/form-data` 则会采用 iframe 的方式进行无刷新文件上传，
- 否则将 form 内的输入域和值序列化后通过 xhr 发送到服务器
@attribute form {String} 
*/

/**
发送请求前的拦截函数，传入参数 (xhrObject, config)
例如可以通过该函数实现上传进度监控
```
var xhr = new IO({
    url:'./upload.php',
    type:"post",
    processData:false,
    data:formData,
    dataType:'json',
    contentType:false,
    beforeSend:function (xhr) {
        // 上传监听 upload
        xhr.getNativeXhr().upload.addEventListener('progress', function (ev) {
            S.log({ 'loaded':ev.loaded, 'total':ev.total });
        });
    },
    success:function (d) {
        S.log(d);
    }
});
```
@attribute beforeSend {Function}
*/

/**
设置跨域的具体方式和细节，包括以下配置
- xdr.src {String} 完全跨域请求的 flash 发送程序地址。当完全跨域时,KISSY io 在ie 中将采用 flash 发请求，默认采用 KISSY 自带 flash 发请求，也可将 kissy 自带的 flash 部署到其他地方，在 src 中指定;在标准浏览器将采用原生机制
- xdr.subDomain {Object} 跨子域时的一些请求配置，包括
  - xdr.subDomain.proxy {String} 指定代理页面的地址。默认 “/sub_domain_proxy.html” . 例如 x.taobao.com 要发送请求给 y.taobao.com ，那么需要设置 x.taobao.com 的页面 document.domain=’taobao.com’ ，然后提供 y.taobao.com/sub_domain_proxy.html ，该页面内容为
`<script>document.domain='taobao.com'</script>`然后 x.taobao.com 的页面就可以和 y.taobao.com 通信了
@attribute xdr {Obect} 
*/

/**
响应状态码. xhr 会有更多取值。jsonp script 只有 200(成功) , 500(出错)
@attribute status {Number}
*/

/**
响应状态字符串. 最终同回调 complete 中的 textStatus 一致.
@attribute statusText {String}
*/

/**
 返回响应对应的 text 和 xml(如果需要)
 @attribute responseText {String}
 */

 /**
 实例的方法，返回响应对应的 text 和 xml（如果需要）.
 @method getResponseHeader
 @param key {String} 响应头名
 */

 /**
 实例的方法，获得内置原生的 io 实例
 @method getNativeXhr
 */

 /**
 实例的方法，如果当前请求还没完成（进行中状态）则中断当前的请求，否则什么也不做
 @method abort
 */

/**
实例的方法，听当前请求的成功和失败，并返回新的 promise 实例
@method then
@param success {Function} 成功回调，参数只有一个，为数组 [data,textStatus,io]. 其中 data 为服务器返回数据， textStatus 为当前请求状态， io 为当前请求实例
@param error {Function} 失败回调，参数只有一个，为数组 [null,textStatus,io]
@return {Promise} 新的 promise 对象
*/

/**
静态方法。为所有的 ajax 请求(包括未来)设定默认配置
@method setupConfig
@static
@param cfg {Object} 用来配置默认请求配置的键值对对象。其中的每个配置都是可选的,具体请参考IO的构造函数
@example
设置默认的请求地址为 /xmlhttp/ ，并使用 POST 方式。那么接下来的请求都会往 /xmlhttp/ 发送请求
```
IO.setupConfig({
    url:'/xmlhttp/',
    type:'post'
});

IO({
    data:{x:'mydata'}
});
```
*/

/**
发送 http get 请求
@method get
@static
@param url {String}  请求地址
@param data {Object|String} 请求附带的参数
@param callback {Function} 请求成功后的回调
@param dataType {String} 传到回调函数作为参数的数据类型
@return {Object} 代表本次请求的 xhrObj
*/

/**
发送 http post 请求
@method post
@static
@param url {String}  请求地址
@param data {Object|String} 请求附带的参数
@param callback {Function} 请求成功后的回调
@param dataType {String} 传到回调函数作为参数的数据类型
@return {Object} 代表本次请求的 xhrObj
*/

/**
发送 http get 请求，无视请求响应的 Content-type，将返回信息解析为 json 作为第一个参数调用 callback 回调
@method getJson
@static
@param url {String} 请求地址
@param data {Object|String} 请求附带的参数
@param callback {Function} 请求成功后的回调
@return {Object} 代表本次请求的 xhrObj
*/

/**
发送 jsonp 请求，将返回 json 信息作为第一个参数调用 callback 回调
@method jsonp
@static
@param url {String} 请求地址
@param data {Object|String} 请求附带的参数
@param callback {Function} 请求成功后的回调
@return {Object} 代表本次请求的 xhrObj
*/



/**
发送 jsonp 请求，将返回 json 信息作为第一个参数调用 callback 回调.
@method upload
@static
@param url {String} 请求地址
@param form {HTMLElement|string} 表单元素，字符串表示 css3 选择器
### Note

- form 参数代表的 form 节点中如果有 input type=’file’ 的节点会自动启用 iframe-upload 模式，否则收集 form 内 input 数据启用普通 xhr 模式.
- form 参数用户文件上传时请设置 type:’post’.
*/

/**
序列化一系列表单元素为可提交的字符串
@method serialize
@static
@param elements {string|Array<HTMLElement>|HTMLElement|KISSY.NodeList} 代表表单元素(input form select ...)的集合，参数格式同query()
@return {String} 序列化后的字符串
*/