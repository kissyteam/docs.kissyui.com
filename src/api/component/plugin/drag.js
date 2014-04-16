/**
组件拖拽插件
@module component/plugin/drag
*/

/**
继承自 [dd.Draggable](/1.5/api/classes/Draggable.html) 包括 draggable 的所有配置
@class Drag
@constructor
@param config 配置项，参考[dd.Draggable](/1.5/api/classes/Draggable.html)
@example
```
KISSY.use('overlay,component/plugin/drag',function(S,Overlay,Drag){
    new Overlay({
        plugins:[ new Drag({
            handlers: ['.ks-overlay-header']
        }) ]
    });
});
```
*/