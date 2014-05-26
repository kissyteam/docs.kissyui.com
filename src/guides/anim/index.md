(((apilink=/5.0/api/classes/Anim.html)))
# Anim的基本使用

KISSY 动画，这样来载入anim模块：
```
KISSY.use('anim',function(S,Anim){
    // use Anim
});
```
由于`node`模块依赖`anim`，通常我们使用`node`时，使用node.animate()方法即可对某个已知节点作动画。即
```
KISSY.all(".foo").each(function(n){
    new KISSY.Anim(n,...).run();
});
```
等价于
```
var node=KISSY.all(".foo");
node.animate({
    width:100,
    height:300
}, {
    duration: 2000,
    easing:'easeBoth' ,
    complete: function () {}
});
```
此外，`node`节点还挂载一些常用的做动画的函数，比如`fadeIn`、`fadeOut`、`slideUp`、`slideDown`等（具体请参照`Node`）。