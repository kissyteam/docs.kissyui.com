(((apilink class="Anim")))
# Anim基本介绍

KISSY 动画，这样来载入anim模块：

	require(['anim'],function(Anim){
		// use Anim
	});

注：KISSY 会自动判断浏览器是否支持 `css3 transition` ，如果支持则载入的 `anim` 模块其实是 `anim/transition` 模块（KISSY在seed.js里面做了alias），否则载入 `anim/timer` 模块， node 模块依赖的 anim 也是同样道理。此外，*自定义动画*等不能用 `css3 transition` 来实现的动画需要保证使用 `anim/timer` 模块来实现。

由于`node`模块依赖`anim`，通常我们使用node时，使用node.animate()方法即可对某个已知节点作动画。即

	require(['node', 'anim'],function($, Anim){
		$(".foo").each(function(n){
			new Anim(n,...).run();
		})
	})

等价于
	require(['node'], function($){
		$(".foo").animate({
			width:100,
			height:300
		}, {
			duration: 2000,
			easing:'easeBoth' ,
			complete: function () {}
		});
	})
	

此外，node节点还挂载一些常用的做动画的函数，比如fadeIn、fadeOut、slideUp、slideDown等([具体请参照Node](/5.0/guides/node/index.html))

## 实例化动画的传参

刨除直接通过node.animate()创建的动画之外，通过Anim可以生成一个`动画实例`。动画实例是用来描述动画的一些基本属性，比如，从`什么状态`动画到`什么状态`，动画时间，缓动效果，暂停和继续动画等。
通过`Anim`这样实例化一个动画实例（[参照Demo](/5.0/demos/anim/index.html)）：

	require(["anim"],function(Anim){
		// 初始化动画实例
		var anim = Anim('#anim-el',
			// 动画目标样式
			{
				'background-color':'#fcc',
				'border-width':'5px'
			},
			{
				duration : 5,  // 动画时长，秒
				easing : "bounceOut",   // 动画特效
				complete : function(){  // 动画结束的回调
					alert('动画结束');
				}
			});

		// 开始执行动画
		anim.run();
	});


第一种传参格式

`Anim (elem, props[, duration, easing, completeFn])`

各参数含义：

- elem：（String|HTMLElement|Node|window）用于作动画的DOM元素或者窗口，窗口仅支持scrollTop和scrollLeft
- props：JSON 对象，表示动画终止时节点的样式，如果设置为scrollLeft或scrollTop，这时会对元素的滚动属性产生动画
- duration：（Number），动画持续的秒数，默认为1
- easing：（String）缓动效果，也称为“平滑函数”，效果可[参照这里](/5.0/demos/anim/cited-by-md/easing.html)。取值包括：
	- easeNone
	- easeIn
	- easeOut
	- easeBoth
	- easeInStrong
	- easeOutStrong
	- easeBothStrong
	- elasticIn
	- elasticOut
	- elasticBoth
	- backIn
	- backOut
	- backBoth
	- bounceIn
	- bounceOut
	- bounceBoth
- completeFn：（function），动画结束时的回调

Anim 的第二种传参格式，建议使用这种

`Anim (elem, props[, config])`

- elem (String|HTMLElement|KISSY.Node|window) – 作用动画的元素节点.
- props (Object) – 动画结束的 dom 样式值
- config (Number) – JSON 对象，动画配置，包括
	- duration，动画持续事件，Number，单位为秒，默认为1
	- easing，（string|function），默认easeNone，动画平滑函数
	- queue，（String|false|undefined）所属队列名称，默认undefined，属于系统内置队列, 设置 false 则表示该动画不排队立即执行.
	- complete，（function）动画结束后的回调

## Anim 动画实例的方法

Anim动画实例上可调用这些方法

### isRunning()

判断当前动画对象是否在执行动画过程中

### isPaused()

判断当前动画是否被停止

### run()

开始当前动画

### stop()

结束当前动画

	// 终止当前动画，动画会在当前帧直接停止（不触发 complete 回调）. 
	anim.stop(false);//默认为false
	// 为 true 时, 动画停止时会立刻跳到最后一帧（触发 complete 回调）
	anim.stop(true);

### pause()

在动画实例上调用, 暂停当前动画实例的动画.

### resume()

继续当前动画实例的动画.

## Anim 的静态方法

### 静态方法 isRunning(elem)

判断elem上是否有动画对象在执行

	Anim.isRunning(elem);

### 静态方法 isPaused()

用于判断 elem 上是否有动画对象在暂停，用法同上

### 静态方法 stop()

停止某元素上的动画（集合）.调用方法。

`Anim.stop (elem, end, clearQueue, queueName)`

- elem (HTMLElement|window) – 作用动画的元素节点.
- end (Boolean) – 此参数同实例方法 stop() 中的 finish 参数.
- clearQueue (Boolean) – 默认为 false, 是否清除动画队列中余下的动画.
- queueName (String) – 队列名字，不设置此值，表示停止所有队列中的所有动画，设置 queueName 后, 表示停止元素上指定队列中的所有动画，取值包括：
	- null，表示默认队列的动画
	- false 表示不排队的动画
	- string 类型表示指定名称的队列的动画

### 静态方法 pause()

暂停某元素上的动画（集合）.调用方法，其中queueName参数含义同上

` Anim.pause (elem, queueName)`

### 静态方法 resume()

继续某元素上的动画，调用方法，其中queueName含义同上

`Anim.resume (elem, queueName)`

## 动画实例的事件

### complete 事件

动画结束后会触发`complete`事件