/**
@module swf
*/

/**
动态插入 swf 功能
@class SWF
@constructor
@extends Base.Attribute
@param config {Object}
@example
```
require(['swf'],function(SWF){
    // use SWF
    var swf=new SWF({
        src:'xx.swf',
        attrs:{
            width:100
        },
        params:{
            flashVars:{
                x:1
            }
        },
        render:'#container'
    });

    swf.get('el') // => 对应 swf dom 节点

    swf.callSWF('save',[key,value]);  //调用swf的方法
});
```
*/

/**
将要加到 flash 节点的属性键值对
@attribute attrs {Object} 
*/

/**
可选。插入 swf 所属的文档，默认当前文档
@attribute document {HTMLDocument} 
@optional
*/

/**
可选。 在此元素前插入 swf
@attribute elBefore {HTMLDocument} 
@optional
*/

/**
可选。版本低时显示的快速安装 swf ，默认为 kissy 自带地址.
@attribute expressInstall {String} 
@optional
*/

/**
将要加到 flash 节点的 param 键值对. 注意其中属性 flashVars 的大小写
@attribute params {Object} 
@optional
*/

/**
可选。在此元素内添加 swf。 若 render 与 swf 都不设置则插入到 body 节点中
@attribute render {HTMLDocument} 
@optional 
*/

/**
必选。 swf 元素的地址。
@attribute src {String} 
@required
*/

/**
可选。最低 flash 版本要求，达不到要求显示 expressInstall。例如 9.1.234，默认 9.0
@attribute version {String}
@optional
*/

/**
swf 元素节点
@attribute el {HTMLElement}
*/

/**
swf 元素 html
@attribute html {String}
*/

/**
取值枚举自SWF实例的property status
@attribute status {String}
*/

/**
状态，有三种取值：
- NOT_INSTALLED 表示没有安装 flash 插件
- SUCCESS 表示已成功插入 swf 元素
- TOO_LOW 表示当前版本号低于配置的版本号

@property status {String}
*/

/**
调用 swf 的方法
@method callSWF
@param method {String} 方法名
@param args {Array} 参数列表
@return {Any} swf 方法返回值
*/

/**
销毁 swf 元素
@method destroy
*/

/**
获取 flash 版本数组
@method fpv
@static
@param force=false {Boolean} 是否强制不从缓存中读取，默认 false
@return {Array<String>} 版本号数组，例如 ['9','1','252']
*/

/**
检查当前版本是否比提供的参数版本高
@method fpvGTE
@param ver {String} 待比较的版本号，例如 “9.1.252”
@param force=false {Boolean} 当前版本是否强制不从缓存中读取，默认 false
@return 当前版本是否比提供的参数版本高
*/

/**
swf 元素的地址
@method getSrc
@param swf {HTMLElement} swf 元素
@return {String} swf 元素的地址属性
*/