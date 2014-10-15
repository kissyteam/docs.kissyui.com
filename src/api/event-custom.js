/**
自定义事件模块
@module event-custom
*/


/**
通过将该对象混入普通对象就可以使得普通对象和 dom 节点一样也能触发, 添加和删除事件。此外，如果要自定义事件也可以直接拓展 Base。

__Note__

注意 CustomEvent.Target 仅用于 mix/augment ，不可以直接使用。使用示例：
```
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

```
@class Target
@namespace CustomEvent
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
require(['util', 'event/custom'], function(Util, CustomEvent) {
    function Custom(id){
        this.id = id;
        this.publish("run",{
            bubbles:1
        });
    }

    Util.augment(Custom, CustomEvent.Target);

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
为相应事件添加事件处理器
@method on
@param eventType {String|Object} 
- 当为String时 包含一个或多个事件名称的字符串, 多个事件名以空格分开。 事件可以通过加点来表示分组，例如 "click.one" , "click.two"
- 当为Object时，类似这样：
```
{
    'click':{
        fn:function(){
        },
        filter: '' // delegate,
        once:true // 绑定一次
    },
    'mouseenter':function(){}
}
```
@param fn {Function} 当事件触发时的回调函数
@param [scope] {Object} 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素
*/

/**
解除绑定的事件处理器
@method detach
@param eventType {String|Object} 
@param fn {Function} 当事件触发时的回调函数
@param [scope] {Object} 回调函数的 this 值. 如果不指定默认为绑定事件的当前元素
*/