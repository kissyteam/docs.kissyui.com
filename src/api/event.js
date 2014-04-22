/**
提供类Event
@module event
*/

/**
类Event
@class Event
@static
*/

/**
为符合匹配的 dom 节点的相应事件添加事件处理器
@method on
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param eventType {String} 包含一个或多个事件名称的字符串, 多个事件名以空格分开。 事件可以通过加点来表示分组，例如 "click.one" , "click.two"
@param fn {Function} 当事件触发时的回调函数
@param [scope] {Object} 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素

__Note__

on 方法是给文档添加行为的主要方式. 所有的事件类型, 例如 focus , mouseover , resize 都是有效的事件类型

window 的 beforeunload 和 error 事件使用了不标准的方式, 该方法不支持, 请直接在 window 对象上注册事件处理器

当一个节点的某个事件出发时, 绑定该事件的所有处理器都会被调用.如果有多个事件处理器, 则他们的执行顺序和绑定的顺序保持一致, 当所有的事件处理器执行完毕后, 事件才继续向上传播

__Note__

支持 Event.on(target,type,opts), opts 可以是对象描述，例如 opts.once/opts.filter

支持 Event.on(target,opts), opts 为事件与对象描述对
```
Event.on(document.body,{
    'click':{
        fn:function(){
        },
        filter: '' // delegate,
        once:true // 绑定一次
    },
    'mouseenter':function(){}
});
```
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
Event.on('.clickme','click', function() {
  // Bound handler called.
});
```
当该元素被点击时, 调用对应的事件处理器. 但是如果新加入一个元素：

`KISSY.Node.all('body').append('<div class="clickme">Another target</div>');`

新元素匹配选择器 clickme ,但是他如果不再次 on , 则在他上面的点击不会有任何效果.
delegate 方法提供了解决方法, 如果这样调用：
```
Event.delegate(document,'click','.clickme',function(){
   // Bound handler called.
});
```
这样的话如果今后又添加了一个元素
```
KISSY.Node.all('body').append('<div class="clickme">Another target</div>');
```
在新元素上点击仍然会调用之前的事件处理器.

可以使用 undelegate 来移除之前的绑定:
```
function d(){
}

Event.delegate(document,'click','.clickme',d);

Event.undelegate(document,'click','.clickme',d);
```

__Note2__

- 不能在 object , embed , applet 元素上注册事件
- 事件处理器回调函数中 this 指向 scope (没指定指向绑定事件的元素), 传入的参数为 event , event.target 指向事件触发源, event.currentTarget 指向当前事件处理器调用所在的匹配 filter 的元素
- 可以使用 stopPropagation() 来停止事件的向上冒泡, 这样就不会在同样符合 filter 条件的祖先节点上调用事件处理器
- 同样可以对 mouseenter , mouseleave 进行委托
- 因为 delegate 是在事件冒泡到代理元素后才开始处理的，那么通过 on 注册到代理元素的子节点的事件处理器已经被触发， 而无法被 delegate 绑定的事件处理器阻止 ( stopPropagation )，但 delegate 事件处理器可以阻止绑定到同一元素但是匹配元素在当前事件处理器之上的 delegate 事件处理器

__这里有三个demo供参考理解__
1. [委托实现点击通知](/1.5/examples/event/delegate.html)
2. [阻止事件向上冒泡](/1.5/examples/event/delegate_2.html)
3. [委托 mouseenter/mouseleave](/1.5/examples/event/delegate_3.html)
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
Event.detach('#foo');
```
- 上面的代码解除了 foo 元素上所有事件的事件处理器, 我们也可以解除某一个事件的全部事件处理器:
```
Event.detach('#foo','click');
```
- 当时如果程序对同一事件指定了不同的事件处理器, 这时就需要后面两个参数了
```
var handler = function() {
  alert('The quick brown fox jumps over the lazy dog.');
};
Event.on('#foo','click', handler);
Event.detach('#foo','click', handler);
```
- 通过指定第三个参数, 我们可以保证该事件的其他事件处理器不受影响, 注意下面的代码则不会生效：
	```
	var handler = function() {
	  alert('The quick brown fox jumps over the lazy dog.');
	};
	var obj={x:1};
	Event.on('#foo','click', handler,obj);

	Event.detach('#foo','click', function() {
	  alert('The quick brown fox jumps over the lazy dog.');
	},obj);

	Event.detach('#foo','click', handler,{x:1});

	//虽然后面的两个 detach 参数从字面上来看完全一样, 但是由于是不同的对象, 所有仍然不会生效. 如果需要解除特定的事件处理器, 我们需要同一个对象( 函数 )引用, 而不是恰好字面上相同的不同对象
	```
- Event.detach 支持 deep ，递归移除子节点事件
```
Event.detach(document.body,{
    'click':{
        deep:true
    }
});
Event.detach(document.body,{
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
和 Event.detach 一样, 如果移除特定的委托事件处理器必须保证参数和调用 delegate 时保持一致.
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
Event.on('#foo','click',function(){
    alert(DOM.text(this));
});

Event.fire('#foo','click');
```

@example
这里有个[demo](/1.5/examples/event/fire.html),点击第二个按钮手动触发第一个按钮的点击, 简便起见使用node模块提供的接口.
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
@example
[监听 form 中输入域的聚焦情况](/1.5/examples/event/focusin.html)
*/ 

/**
原生只有 ie 支持 focusout 事件，而 kissy 对这一事件进行了 [兼容性处理](http://yiminghe.iteye.com/blog/813255)
但一个元素获得焦点或者其子孙元素获得焦点时， focusout 会在该元素上触发（没被子孙元素阻止）。这就是和 focus 事件的区别之处 : 你可以在父元素上监控子元素的 focus 事件，即 focusout 事件支持冒泡.

这个事件常常和 focusin 一起使用
@event focusout
@example
[监听 form 中输入域的聚焦情况](/1.5/examples/event/focusout.html)
*/ 

/**
目前除了 ie67 外都原生支持 hashchange 事件，kissy 对 ie67 也模拟兼容了该事件.

当浏览器的 hash 值发生变化时会触发此事件，常常被用来实现单页面应用[存在广泛争议](http://danwebb.net/2011/5/28/it-is-about-the-hashbangs)

当用户点击后退与前进进行浏览器导航时会引起 hash 变化

此事件只能在当前 window 上注册，注册到其他类型元素上无效！ hash 值推荐为 !/xx/ 形式, 前面用 !/ 后面用 / 包起来，否则 ie67 可能有诡异现象
@event hashchange

@example
```
var $=KISSY.all;
$(window).on("hashchange",function(){
    // location.hash -> 当前 hash 值
});
```
[hash 驱动的单页面应用设计](/1.5/examples/event/hashchange.html)
*/

/**
监控 input/textarea 的值变化，当值发生变化时在绑定元素上触发该事件

__为什么不使用原生的 change keydown keyup__
- change 只有在输入框失去焦点时触发
- keyup/down 对于国际语言的输入法不能全面支持（鼠标从输入法中选词）
- keydown/up 需要过滤不可见字符
- 程序设值不可以触发原生事件
- 从浏览器自带的 input 自动提示列表中鼠标选择项，不会触发 keydown keyup，但 input 值变化
- 右键鼠标黏贴不能支持

__注意__
- 当输入框获得焦点，程序动态设值可触发 valuechange 事件，否则不触发该事件
- 此事件只能在 input 以及 textarea 上注册，注册到其他类型元素上无效！
- 触发事件包括两个特殊属性:prevVal(变化前的值)和newVal(当前变化后的值)
@event valuechange
@example
```
KISSY.Event.on(input,"valuechange",function(e){
        alert(e.prevVal); // => 旧值
        alert(e.newVal); // => 新值
});
```
[打开拼音输入法，输入时直接鼠标选词demo](/1.5/examples/event/valuechange.html)
*/

/**
模拟 ie 有但是其他浏览器却没的最有用的事件[mouseenter](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseenter)

__mouseenter 不会冒泡，想要代理这个事件的话用 delegate() 方法__
@event mouseenter
*/

/**
模拟 ie 有但是其他浏览器却没的最有用的事件[mouseleave](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseleave)

__mouseleave 不会冒泡，想要代理这个事件的话用 delegate() 方法__
@event mouseleave
*/

/**
对 mousewheel 事件做了浏览器兼容性处理
滚轮事件有两个属性:
- e.deltaY (Number) – 纵向滚动幅度，一般是正数表示向上滚动，负数表示向下滚动
- e.deltaX (Number) – 横向滚动幅度，一般是正数表示向左滚动，负数表示向右滚动
@event mousewheel
@example
[demo](/1.5/examples/event/mousewheel.html)
*/

/**
触屏上的双击事件
@event doubleTap
@example
需要在移动设备上面打开：[demo](/1.5/examples/event/double-tap.html)
*/

/**
触屏上的单击事件,和双击互斥

当快速点击某个 dom 节点一次（短时间没有再次点击）后触发
@event singleTap
@example
需要在移动设备上面打开：[demo](/1.5/examples/event/singel-tap.html)
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <script src="http://g.tbcdn.cn/kissy/k/1.4.2/seed-min.js" data-config="{combine:true}"></script>
</head>
<body>

<h1>open in ios safari to test doubleTap event</h1>

<div id='t' tabindex='0'
     style='border:1px solid green;
     width:100px;height:100px;margin:10px'>
    tap me
</div>

<script>

    KISSY.use('event', function (S, Event) {

        Event.on('#t', "singleTap doubleTap", function (e) {
            alert(e.type + ' : fired');
        });

    });

</script>
</body>
</html>
```
*/

/**
触屏上的单击事件,许 preventDefault 防止链接点击跳转

当点击某个 dom 节点后触发， 和 singleTap 的不同支持载入： 触发 doubleTap 就不会触发 singleTap， 而触发 doubleTap 前会触发 tap
@event tap
@example
需要在移动设备上面打开：[demo](/1.5/examples/event/tap.html)
```

<!doctype html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <script src="http://g.tbcdn.cn/kissy/k/1.4.2/seed-min.js" data-config="{combine:true}"></script>
</head>
<body>

<h1>open in ios safari to test tap event</h1>

<div id='t' tabindex='0'
     style='border:1px solid green;
     width:100px;height:100px;margin:10px'>
    tap me
</div>

<script>

    KISSY.use('event', function (S, Event) {

        Event.on('#t', "tap singleTap doubleTap", function (e) {
            alert(e.type + ' : fired');
        });

    });

</script>
</body>
</html>
```
*/

/**
当长按某个 dom 节点超过 1s 后触发
@event tapHold
*/

/**
触屏上开始用双指旋转某个 dom 元素时触发
包括格外下面的属性：
- angle {Number} 开始时双指的角度值
- rotation {Number} 固定为 0
@event rotateStart
*/

/**
触屏上用双指旋转某个 dom 元素时出现
包括格外下面的属性：
- angle {Number} 开始时双指的角度值
- rotation {Number} 双指和开始相比改变的角度值
@event rotate
*/

/**
触屏上用双指旋转某个 dom 元素结束时触发
@event rotateEnd
*/

/**
触屏上开始用双指调整某个 dom 元素大小时触发
包括格外下面的属性：
- distance {Number} 开始时双指的绝对距离
- scale {Number} 固定为 1
@event pinchStart
*/

/**
触屏上开始用双指调整某个 dom 元素大小时出现
包括格外下面的属性：
- distance {Number} 开始时双指的绝对距离
- scale {Number} 固定为 1
@event pinch
*/

/**
触屏上用双指调整某个 dom 元素大小后触发
@event pinchEnd
*/

/**
当用户摇动设备后触发，前后左右在一定连续时间内以一定幅度摇动设备
@event shake
@example
需要在移动设备上面打开：[demo](/1.5/examples/event/shake.html)
```
 var S = KISSY;

    S.use('event', function (S, Event) {
        Event.on(window, 'shake', function (e) {
            alert('i know u shake !');
        });
    });
```
*/

/**
为了兼容移动与pc， kissy event 提供了手势事件.

__手势开始事件__
@event start
*/

/**
为了兼容移动与pc， kissy event 提供了手势事件.

__手势进行事件__
@event move
*/

/**
为了兼容移动与pc， kissy event 提供了手势事件.

__手势结束事件__
@event end
*/






/**
通过将该对象混入普通对象就可以使得普通对象和 dom 节点一样也能触发, 添加和删除事件.具体用法看它提供的方法

__Note__

注意 S.EventTarget 仅用于 mix/augment ，不可以直接使用，例如需要全局事件的话可以：
```
var globalEvent=S.mix({},S.EventTarget);
globalEvent.on('Login:session:pass', function(){
  isSessionPass = true;
});
```
@class Target
@namespace Event
*/

/**
触发绑定 type 类型的事件处理器, 并给触发的事件处理器的事件对象参数中混入数据 eventData
@method fire
@param type {String} 要触发的自定义事件名称
@param eventData {Object} 要混入触发事件对象的数据对象
@return {Boolean} 如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值
*/

/**
配置自定义事件的一些特有信息
@method publish
@param type {String} 要触发的自定义事件名称
@param cfg {Object} 事件的具体配置对象
@param [cfg.bubbles=true] {Boolean} 类型 boolean. 是否支持冒泡。 默认 true
@param [cfg.defaultFn] {Function}
*/

/**
添加冒泡事件源对象
@method addTarget
@param target {Object} 事件往上冒泡的事件源
@example
```
KISSY.use("event", function(S, Event) {
    function Custom(id){
        this.id = id;
        this.publish("run",{
            bubbles:1
        });
    }

    S.augment(Custom, Event.Target);

    var c1 = new Custom("c1");

    var c2 = new Custom("c1");

    c1.addTarget(c2);

    c2.on("run",function(e){
        S.log(e.target.id +" fires event run"); // => c1 fires event run
    });

    c1.fire("run");
});
```
*/

/**
删除冒泡事件源对象
@method removeTarget
@param target {Object} 事件往上冒泡的事件源
*/

/**
绑定事件处理器,参数可参考Event.on，这里不重复了
@method on
*/

/**
解除绑定的事件处理器,可参考Event.detach
@method detach
@example
```
var S = KISSY;

// 定义 Dog 类
function Dog(name) {
    this.name = name;
}

// 让 Dog 成为事件目标
S.augment(Dog, S.EventTarget);

// 给 Dog 添加 run 方法
S.augment(Dog, {
   run: function() {
       // 触发 running 事件
       this.fire('running', {speed: '80km/h'});
   }
});

var dog = new Dog('Lady Gogo');

// 添加监听函数
dog.on('running', function(ev) {
    // 注意 ev 的参数传递大使身份
    alert(this.name + ' is running now. Its speed is ' + ev.speed);
});

// 让可爱的小狗跑起来吧
dog.run();
```
*/

