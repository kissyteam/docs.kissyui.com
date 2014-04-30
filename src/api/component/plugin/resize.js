/**
调整大小插件
@module component/plugin/resize
*/

/**
@class Resize
@namespace Component.plugin
@constructor
@extends Resizable
@example
```
KISSY.use('overlay,component/plugin/resize',function(S,Overlay,Resize){
    new Overlay({
        plugins:[
            new Resize({
                minWidth:100,
                maxWidth:200,
                handlers:['l','r']
            })
        ]
    });
});
```
*/