/**
调整大小插件
@module component/plugin/resize
*/

/**
继承自 [Resizable](/1.5/api/classes/Resizable.html) 包括 resizable 的所有配置
@class Resize
@constructor
@param config {Object} 配置项，参考[Resizable](/1.5/api/classes/Resizable.html)
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