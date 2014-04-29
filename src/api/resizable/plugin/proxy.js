/**
@module resizable/plugin/proxy
*/

/**
[Resizable](/5.0/api/classes/Resizable.html) 插件， 可代理缩放对象
@class ResizableProxyPlugin
@constructor
@extends Base
@param config {Object} 配置对象，详见其Attribute
*/

/**
当 Resizable 对象需要代理节点时通过调用该函数产生代理节点, 函数的参数为当前 Resizable 对象, 返回值类型为 KISSY.Node . 该属性有默认值:
```
function(resizable) {
    return new Node(resizable.get("node")[0].cloneNode(true));
}
```

即代理节点和当前节点保持一致.
@attribute node {Function}
*/

/**
默认 false. 指明在 resize 之后是否销毁代理节点
@attribute destroyOnEnd {Boolean} 
@default false
*/

/**
默认 false. 是否在用代理节点 resize 时隐藏原节点
@attribute hideNodeOnResize {Boolean} 
@default false
*/
