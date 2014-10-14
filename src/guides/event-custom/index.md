(((apilink class="CustomEvent")))
# event-custom 模块基本介绍

event-custom 模块事先自定义事件功能，只要将 CustomEvent.Target 混合（Util.mix 或 Util.augment）进想要自定义事件的对象，那么这个对象就可以进行自定义事件了。

## 简单引用

	require(['event-custom'], function(CustomEvent){
		//use CustomEvent...
	})

## 自定义事件简单示例

	require(['util', 'event-custom'], function(Util, CustomEvent){
	    function Dog(name){
	        this.name = name;
	    }
	    Util.augment(Dog, CustomEvent.Target, {
	        shout : function(){
	            this.fire('shout',{
	                content : 'I am hungry...'
	            });
	        }
	    });
	    var myDog = new Dog('cuteDog');
	    myDog.on('shout', function(ev){
	        alert(this.name + 'say that ' + ev.conent);
	    });

	    myDog.shout();
	})

## 继承Base的类成员可以自定义事件

事件本身是一个抽象概念，和平台无关、和设备无关、更和浏览器无关，浏览器只是使用“事件”的方法来触发特定的行为，进而触发某段网页逻辑。而常见的DOM事件诸如click,dbclick是浏览器帮我们实现的“特定行为”。而这里的“特定行为”就是触发事件的时机，是可以被重新定义的，原理上，事件都是需要精确的定义的，比如下面这个例子，我们定义了一个新事件：“初始化1秒后”

这里我们使用Base内嵌的事件对象来描述

	// 为了便于理解，这里用 define 写成模块将代码隔离开

	// 实现Klass内部的自定义事件
	define('klass',function(Base){
		// Klass 是一个类，它在被实例化后1秒会触发一个事件"afterOneSecond"
		var Klass = Base.extend({
			initializer:function(){
				var self = this;

				// Your Code
				setTimeout(function(){
					self.fire('afterOneSecond',{
						a:1,b:2 //挂两个回调属性
					});
				},1000);
			}
		},{/*ATTRS*/});

		return Klass;
	},{
		requires:['base']	
	});

	// 绑定自定义事件
	require('klass',function(S,Klass){
		// 初始化这个类
		var k = new Klass();

		// 绑定事件监听
		k.on('afterOneSecond',function(e){
			alert('1秒后触发这里的逻辑');
			// e.a === 1
			// e.b === 1
		});
	});


这是一个很纯粹的自定义事件（Base组件内置自定义事件机制），它有事件名称“afterOneSecond”，有事件的触发条件`self.fire('afterOneSecond')`，有事件的绑定，`k.on('afterOneSecond')`。这样这个事件就能顺利的发生，并被成功监听。在代码组织层面，一般`Klass`类中实现了事件命名、定义和实现，属于内聚的功能实现。而绑定事件时可以是Klass这段代码的用户，他不会去关心事件的具体实现，只要关心Klass"暴露了什么事件可以让我绑定"就可以了，这就是KISSY中使用自定义事件的用法。你可以通过Base来创建自定义事件。