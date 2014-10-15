/**
根据设备环境加载响应的子模块来处理 DOM 的事件模块
@module event-dom
*/

/**
处理 DOM 事件。DomEvent处理标准的event事件，除此之外还拓展了下面介绍的 Events 
```
require('event-dom', function(DomEvent){
    DomEvent.on(document.body,{
        'click':{
            fn:function(){
                alert('hello,kissy..');
            },
            // filter: '', // delegate,
            once:true // 绑定一次
        },
        'mouseenter':function(){}
    });

    //写法相当于
    DomEvent.on(document.body, 'click', function(){
		alert('hello,kissy..');
    })
})
```
@class DomEvent
@static
*/

/**
为符合匹配的 dom 节点的相应事件添加事件处理器
@method on
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param eventType {String|Object} 
@param fn {Function} 当事件触发时的回调函数
@param [scope] {Object} 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素

__Note__

on 方法是给文档添加行为的主要方式. 所有的事件类型, 例如 focus , mouseover , resize 都是有效的事件类型

window 的 beforeunload 和 error 事件使用了不标准的方式, 该方法不支持, 请直接在 window 对象上注册事件处理器

当一个节点的某个事件触发时, 绑定该事件的所有处理器都会被调用.如果有多个事件处理器, 则他们的执行顺序和绑定的顺序保持一致, 当所有的事件处理器执行完毕后, 事件才继续向上传播
*/

/**
为符合匹配的 dom 节点的相应事件添加事件处理器, 并在该节点的子孙节点中匹配 filter 的节点上触发事件时调用
@method delegate
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param eventType {String} 包含一个或多个事件名称的字符串, 多个事件名以空格分开。 事件可以通过加点来表示分组，例如 "click.one" , "click.two"
@param filter {String} 可参见 `dom.filter()` 的 filter 参数
@param fn {Function}  当事件触发时的回调函数
@param [scope] {Object} 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素
@example
__Note1__

该方法是 on 方法的增强. 当 on 方法被调用时, 符合选择器的元素被绑定事件处理器, 而后面添加的元素则没有, 即他们需要另外一次绑定, 例如
```
<body>
  <div class="clickme">
    Click here
  </div>
</body>
```
绑定一个 click 事件的事件触发器：
```
DomEvent.on('.clickme','click', function() {
  // Bound handler called.
});
```
当该元素被点击时, 调用对应的事件处理器. 但是如果新加入一个元素：

`Node.all('body').append('<div class="clickme">Another target</div>');`

新元素匹配选择器 clickme ,但是他如果不再次 on , 则在他上面的点击不会有任何效果.
delegate 方法提供了解决方法, 如果这样调用：
```
DomEvent.delegate(document,'click','.clickme',function(){
   // Bound handler called.
});
```
这样的话如果今后又添加了一个元素
```
Node.all('body').append('<div class="clickme">Another target</div>');
```
在新元素上点击仍然会调用之前的事件处理器.

可以使用 undelegate 来移除之前的绑定:
```
function d(){
}

DomEvent.delegate(document,'click','.clickme',d);

DomEvent.undelegate(document,'click','.clickme',d);
```

__Note2__

- 不能在 object , embed , applet 元素上注册事件
- 事件处理器回调函数中 this 指向 scope (没指定指向绑定事件的元素), 传入的参数为 event , event.target 指向事件触发源, event.currentTarget 指向当前事件处理器调用所在的匹配 filter 的元素
- 可以使用 stopPropagation() 来停止事件的向上冒泡, 这样就不会在同样符合 filter 条件的祖先节点上调用事件处理器
- 同样可以对 mouseenter , mouseleave 进行委托
- 因为 delegate 是在事件冒泡到代理元素后才开始处理的，那么通过 on 注册到代理元素的子节点的事件处理器已经被触发， 而无法被 delegate 绑定的事件处理器阻止 ( stopPropagation )，但 delegate 事件处理器可以阻止绑定到同一元素但是匹配元素在当前事件处理器之上的 delegate 事件处理器
*/

/**
从符合匹配的 dom 节点中移去相应事件的事件处理器
@method detach
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param [eventType] {String} 包含一个或多个事件名称的字符串, 多个事件名以空格分开。 事件可以通过加点来表示分组，例如 "click.one" , "click.two"
@param [fn] {Function}  当事件触发时的回调函数
@param [scope] {Object} 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素

__Note__

- 用 on 绑定的事件处理器可以用 detach 解除绑定. 最简单的情况 detach(elem) 解除该元素上的所有绑定
```
DomEvent.detach('#foo');
```
- 上面的代码解除了 foo 元素上所有事件的事件处理器, 我们也可以解除某一个事件的全部事件处理器:
```
DomEvent.detach('#foo','click');
```
- 当时如果程序对同一事件指定了不同的事件处理器, 这时就需要后面两个参数了
```
var handler = function() {
  alert('The quick brown fox jumps over the lazy dog.');
};
DomEvent.on('#foo','click', handler);
DomEvent.detach('#foo','click', handler);
```
- 通过指定第三个参数, 我们可以保证该事件的其他事件处理器不受影响, 注意下面的代码则不会生效：
	```
	var handler = function() {
	  alert('The quick brown fox jumps over the lazy dog.');
	};
	var obj={x:1};
	DomEvent.on('#foo','click', handler,obj);

	DomEvent.detach('#foo','click', function() {
	  alert('The quick brown fox jumps over the lazy dog.');
	},obj);

	DomEvent.detach('#foo','click', handler,{x:1});

	//虽然后面的两个 detach 参数从字面上来看完全一样, 但是由于是不同的对象, 所有仍然不会生效. 如果需要解除特定的事件处理器, 我们需要同一个对象( 函数 )引用, 而不是恰好字面上相同的不同对象
	```
- DomEvent.detach 支持 deep ，递归移除子节点事件
```
DomEvent.detach(document.body,{
    'click':{
        deep:true
    }
});
DomEvent.detach(document.body,{
    // 全部事件
    '':{
        deep:true
    }
});
```
*/

/**
为符合匹配的 dom 节点的相应事件去除事件处理器
@method undelegate
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param eventType {String} 包含一个或多个事件名称的字符串, 多个事件名以空格分开。 事件可以通过加点来表示分组，例如 "click.one" , "click.two"
@param filter {String} 可参见 `dom.filter()` 的 filter 参数
@param fn {Function}  当事件触发时的回调函数
@param [scope] {Object} 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素
__Note__
和 DomEvent.detach 一样, 如果移除特定的委托事件处理器必须保证参数和调用 delegate 时保持一致.
**/

/**
执行符合匹配的 dom 节点的相应事件的事件处理器（并冒泡）和默认行为
@method fire
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param eventType {String} 包含一个或多个事件名称的字符串, 多个事件名以空格分开。 事件可以通过加点来表示分组，例如 "click.one" , "click.two"
@param [domEvent] {Object} 模拟原生事件的一些属性值信息
@return {Boolean} 如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值

__Note__

用 Event.on 绑定的事件处理器可以被用户触发的原生事件调用. 但是这些事件处理器也可以使用 fire 手动调用. 调用 fire() 和用户触发导致的处理器调用调用是一样的顺序
```
DomEvent.on('#foo','click',function(){
    alert(DOM.text(this));
});

DomEvent.fire('#foo','click');
```
*/

/**
执行符合匹配的 dom 节点的相应事件的事件处理器
@method fireHandler
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param eventType {String} 包含一个或多个事件名称的字符串, 多个事件名以空格分开。 事件可以通过加点来表示分组，例如 "click.one" , "click.two"
@param [domEvent] {Object} 模拟原生事件的一些属性值信息
@return {Boolean} 如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值

__Note__

fireHandler 和 fire 的区别在于:
- fire 会冒泡以及执行对应事件的默认行为
- fireHandler 只会执行当前节点的处理函数
*/


/**
原生只有 ie 支持 focusin 事件，而 kissy 对这一事件进行了 [兼容性处理](http://yiminghe.iteye.com/blog/813255)
但一个元素获得焦点或者其子孙元素获得焦点时， focusin 会在该元素上触发（没被子孙元素阻止）。这就是和 focus 事件的区别之处 : 你可以在父元素上监控子元素的 focus 事件，即 focusin 事件支持冒泡.

这个事件常常和 focusout 一起使用
@event focusin
*/ 

/**
原生只有 ie 支持 focusout 事件，而 kissy 对这一事件进行了 [兼容性处理](http://yiminghe.iteye.com/blog/813255)
但一个元素获得焦点或者其子孙元素获得焦点时， focusout 会在该元素上触发（没被子孙元素阻止）。这就是和 focus 事件的区别之处 : 你可以在父元素上监控子元素的 focus 事件，即 focusout 事件支持冒泡.

这个事件常常和 focusin 一起使用
@event focusout
*/ 

/**
目前除了 ie67 外都原生支持 hashchange 事件，kissy 对 ie67 也模拟兼容了该事件.

当浏览器的 hash 值发生变化时会触发此事件，常常被用来实现单页面应用[存在广泛争议](http://danwebb.net/2011/5/28/it-is-about-the-hashbangs)

当用户点击后退与前进进行浏览器导航时会引起 hash 变化

此事件只能在当前 window 上注册，注册到其他类型元素上无效！ hash 值推荐为 !/xx/ 形式, 前面用 !/ 后面用 / 包起来，否则 ie67 可能有诡异现象
@event hashchange

@example
```
require(['node', 'event/dom'], function($, DomEvent){
    $(window).on("hashchange",function(){
        // location.hash -> 当前 hash 值
    });
})

```
*/

/**
当input元素的值改变时触发
@event input
*/