(((apilink class="DomEvent")))

# DomEvent基本介绍

注： 如果你曾经使用过KISSY的旧版本，例如1.4.x或1.3.x，注意在KISSY@5.0版本中，event模块被拆分成了三个部分 event-dom处理DOM事件 , event-custom处理自定义事件 , event-dom/gesture/* 处理手势事件（如 event-dom/gesture/tap）。

event-dom 模块对 DOM 事件进行封装，通常DOM事件无需直接引用event-dom，只需引入 node 模块即可。如果在移动设备上使用手势事件，只要引入相应的手势事件模块即可使用，详见下面“手势事件”描述。

## DOM 事件

### 事件绑定

浏览器对DOM节点暴露了一些事件，比如常见的click、mouseover等。在KISSY中通过统一的事件绑定写法来处理事件回调：

	require(['event-dom'], function(DomEvent){
		DomEvent.on('#foo','click',function(){
			// 其中this是原生节点
			alert('clicked : '+this.id);
			return false;
		});
	})
	
上面的代码作用是：为 id 为 foo 的元素绑定 click 事件.当用户在该元素内部点击时, 则 alert 会弹出来.

回调函数返回 false 相当于调用了事件对象的 preventDefault() 以及 stopPropagation()

Node模块依赖了DomEvent，因此和浏览器和DOM相关的事件可以通过引入Node来使用，不必再引入DomEvent模块：

	// 这里不用再引入event模块
	require(['node'],function($){
		$('.a').on('click',function(e){
			// Your code...	
		});
	});

因此，Node节点中的on()方法和DomEvent.on()功能一样，只是传参不一样。

Node 模块的 on 方法中的 this 关键字指向当前绑定事件的单个原生节点, 事件对象的 target 和 relatedTarget 也指向对应的原生节点,

	<div id='d1' class='d'></div>
	<div id='d2' class='d'></div>

	<script>
		require(['node'], function($){
			$(".d").on("mouseenter",function(ev){
				this.id // => d1 或者 d2
				ev.target.id // => d1 或者 d2
				ev.relatedTarget // => d1 或者 d2 或者 document.body
								// 或者 document.documentElement
			});
		})
	</script>

需要的话可以在开始包装 this （需要的话同样包装 event.target）

	<div id='d1' class='d'></div>
	<div id='d2' class='d'></div>

	<script>
		require(['node'], function($){
			$(".d").on("mouseenter",function(ev){
				var self=$(this);
				self.attr("id") // => d1 或者 d2
			});
		})
	</script>

### 事件分组

on()函数支持事件分组，比如这段代码：

	DomEvent.on(foo,'click.one',function(){
		alert('clicked : '+this.id);
	});

	DomEvent.on(foo,'click.two',function(){
		alert('clicked 2 : '+this.id);
	});

	DomEvent.remove(foo,'.two');

给`#foo`绑定了两次事件，但每次事件都有一个标识，这时可以清除其中一个标识。

### 绑定多个事件

	// 绑定了两个事件
	DomEvent.on(foo,'mouseenter mouseleave', function(e) {
		DOM.toggleClass(this,"enter");
	});

上述代码的作用是：一开始 foo 节点没有 enter 样式类, 当鼠标进入时给该节点添加 enter 样式类, 当鼠标移出时把 enter 样式类去掉. 这样就达到了 hover 的效果.

### 事件对象

DOM 事件回调函数回传参数为e，注意 e 不是原生事件对象，是封装后的，这时e.target是裸的节点。除了preventDefault()和stopPropagation()之外，e还包含halt()方法，指停止事件加阻止默认行为。

	DomEvent.on(foo,'mouseup mousedown', function(event) {
		console.log(event.type +" occured");
	});

这样就可以在绑定多事件时, 明确知道当前哪个事件触发了.

> KISSY 也对 mouseenter/mouseleave focusin/focusout 进行了兼容处理, 所有浏览器都可以使用这两个事件了.

通过调用事件对象的halt()方法来阻止事件。 

	DomEvent.on(a,'click',function(e){
		// 等价于 e.preventDefault(); e.stopPropagation();
		e.halt();
	});

如果要抓取事件发生时对应的节点，需要通过`e.target`获取，注意，这里的target是原生节点，若有必要，需要转换为Node节点，比如

	DomEvent.on(a,'click',function(e){
		var nodeIns = $(e.target);  // $ 是 node 模块的接口，需要事先引入
		alert(nodeIns.html());
	});

### 事件移除

从符合匹配的 dom 节点中移去相应事件的事件处理器，用 on 绑定的事件处理器可以用 detach 解除绑定. 最简单的情况 detach(elem) 解除该元素上的所有绑定.

	DomEvent.detach(foo);

上面的代码解除了 foo 元素上所有事件的事件处理器, 我们也可以解除某一个事件的全部事件处理器:

	DomEvent.detach(foo,'click');

当时如果程序对同一事件指定了不同的事件处理器, 这时就需要后面两个参数了

	var handler = function() {
		alert('The quick brown fox jumps over the lazy dog.');
	};
	DomEvent.on(foo,'click', handler);
	DomEvent.detach(foo,'click', handler);

通过指定第三个参数, 我们可以保证该事件的其他事件处理器不受影响, 注意下面的代码则不会生效：

	var handler = function() {
		alert('The quick brown fox jumps over the lazy dog.');
	};
	var obj={x:1};
	DomEvent.on(foo,'click', handler,obj);

	DomEvent.detach(foo,'click', function() {
		alert('The quick brown fox jumps over the lazy dog.');
	},obj);

	DomEvent.detach(foo,'click', handler,{x:1});

虽然后面的两个 detach 参数从字面上来看完全一样, 但是由于是不同的对象, 所有仍然不会生效. 如果需要解除特定的事件处理器, 我们需要同一个对象( 函数 )引用, 而不是恰好字面上相同的不同对象.

detach也可以用别名remove标识。[事件移除的Demo](/5.0/demos/event-dom/detach.html)。

> 如果要解除特定的事件处理器 , detach 的参数必须和对应的 on 参数值相等( == )并且个数一致才能完成解除绑定的目标.

### 事件委托

为符合匹配的 dom 节点的相应事件添加事件处理器, 并在该节点的子孙节点中匹配 filter 的节点上触发事件时调用.

该方法是 on 方法的增强. 当 on 方法被调用时, 符合选择器的元素被绑定事件处理器, 但如果新增符合要求的节点，就不会再触发事件, 即他们需要另外一次绑定, 例如

	<body>
		<div class="clickme">
			Click here
		</div>
	</body>

绑定一个 click 事件的事件触发器：

    var clickme=Dom.get('.clickme');
	DomEvent.on(clickme,'click', function() {
		// Your code..
	});

当该元素被点击时, 调用对应的事件处理器. 但是如果新加入一个元素：

	$('body').append('<div class="clickme">Another target</div>');

新元素匹配选择器 clickme ,但是他如果不再次 on , 则在他上面的点击不会有任何效果.

delegate 方法提供了解决方法, 如果这样调用：

	DomEvent.delegate(document,'click','.clickme',function(){
		// Your code..
	});

这样，只要是在document内新增的节点，都会触发回调。可以使用 undelegate 来移除之前的绑定:

	// 绑定
	DomEvent.delegate(document,'click','.clickme',d);

	// 解除绑定
	DomEvent.undelegate(document,'click','.clickme',d);

> 不能在 object , embed , applet 元素上注册事件. 事件处理器回调函数中 this 指向 scope (没指定指向绑定事件的元素), 传入的参数为 event , event.target 指向事件触发源, event.currentTarget 指向当前事件处理器调用所在的匹配 filter 的元素. 可以使用 stopPropagation() 来停止事件的向上冒泡, 这样就不会在同样符合 filter 条件的祖先节点上调用事件处理器.
>
> 因为 delegate 是在事件冒泡到代理元素后才开始处理的，那么通过 on 注册到代理元素的子节点的事件处理器已经被触发， 而无法被 delegate 绑定的事件处理器阻止 ( stopPropagation )，但 delegate 事件处理器可以阻止绑定到同一元素但是匹配元素在当前事件处理器之上的 delegate 事件处理器.
>
> 同样可以对 mouseenter , mouseleave 进行委托.[事件委托的Demo](/5.0/demos/event-dom/delegate.html)


### 解除事件委托

为符合匹配的 dom 节点的相应事件去除事件处理器

	// 解除委托
	DomEvent.undelegate(document,'click','.clickme',d);

和 DomEvent.detach 一样, 如果移除特定的委托事件处理器必须保证参数和调用 delegate 时保持一致

### 特殊事件支持

KISSY 对常见的DOM事件做了封装，包括原生浏览器不支持的事件。

- focusin，元素内部获得焦点
- focusout，元素内部失去焦点
- hashchange，浏览器的hash改变
- input，input的值改变
- mouseenter，鼠标进入
- mouseleave，鼠标移出
- mousewheel，滚轮事件

### focusin

原生只有 ie 支持 focusin 事件，而 kissy 对这一事件进行了 兼容性处理。但一个元素获得焦点或者其子孙元素获得焦点时， focusin 会在该元素上触发（没被子孙元素阻止）。这就是和 focus 事件的区别之处 : 你可以在父元素上监控子元素的 focus 事件，即 focusin 事件支持冒泡.

这个事件常常和 focusout 一起使用. [Demo](/5.0/demos/event-dom/focusin_out.html)

### fousout

原生只有 ie 支持 focusout 事件，而 kissy 对这一事件进行了 兼容性处理 .但一个元素获得焦点或者其子孙元素获得焦点时， focusout 会在该元素上触发（没被子孙元素阻止）。这就是和 blur 事件的区别之处 : 你可以在父元素上监控子元素的 blur 事件，即 focusout 事件支持冒泡.

[focusout事件的demo](/5.0/demos/event-dom/focusin_out.html).

### hashchange

目前除了 ie67 外都原生支持 hashchange 事件，kissy 对 ie67 也模拟兼容了该事件.当浏览器的 hash 值发生变化时会触发此事件，常常被用来实现单页面应用，因为当用户点击后退与前进进行浏览器导航时会引起 hash 变化.

此事件只能在当前 window 上注册，注册到其他类型元素上无效！ `hash` 值推荐为 `!/xx/` 形式, 前面用 `!/` 后面用 `/` 包起来，否则 ie67 可能有诡异现象.

	$(window).on("hashchange",function(){
		// location.hash -> 当前 hash 值
	});

### mousewheel

对鼠标滚轮事件做了浏览器兼容性处理，支持mousewheel事件

### mouseenter & mouseleave 

鼠标进入容器和移除容器的操作

## 手势事件

KISSY 对于移动设备做了统一的事件封装，这些事件包括 单触、双触、长按、旋转等，具体请查看api文档。这里选 双触 事件来做个使用示例：

	require(['node', 'event-dom/gesture/tap'], function($, GestureTap){
	    $('#test').on(GestureTap.SINGLE_TAP, function(ev){
	        //单触
	    });

	    $('#test').on(GestureTap.DOUBLE_TAP, function(ev){
	        //双触
	    });

	    $('#test').on(GestureTap.HOLD, function(ev){
	        //长按
	    });
	})







