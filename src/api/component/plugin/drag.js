/**
组件拖拽插件
@module component/plugin/drag
*/

/**
@class Drag
@namespace Component.Plugin
@constructor
@extends DD.Draggable
@example
```
require(['overlay','component/plugin/drag'],function(Overlay,Drag){
    new Overlay({
        plugins:[ new Drag({
            handlers: ['.ks-overlay-header']
        }) ]
    });
});
```
*/