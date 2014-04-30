/**
组件拖拽插件
@module component/plugin/drag
*/

/**
@class Drag
@namespace Component.plugin
@constructor
@extends DD.Draggable
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