/**
KISSY 的base模块提供给我们一个基类Base, 整合了 attribute 功能, 让继承 Base 的子类自动具有 attribute 的功能.如果你想让自定义类默认就支持 attribute 功能, 请直接继承 Base
@module base
*/


/**
如果你想让类默认就支持 [Attribute](/5.0/api/classes/Attribute.html) 功能, 请直接继承[Base](/5.0/api/classes/Base.html)。

注：使用 Base 时, 虽然你还是可以通过 addAttr() 添加支持需要支持 setter/getter 的属性, 但最好还是把这些属性和它们的配置定义在类的 ATTRS 成员中. 即通过设置自定义类的 ATTRS 静态属性来给类实例对象添加属性管理机制.

@class Base
@constructor
@extends Attribute
@param config {Object}
@example
```
require(['base'], function(Base) {
    var myClass = Base.extend({},{
        ATTRS : {
            size: {
                value: 0,
                setter: function(v) {
                    if (S.isString(v) && v.indexOf('inch')!== -1) {
                        return parseFloat(v)*10/3;
                    }
                    return parseFloat(v);
                },
                getter: function(v) {
                    return v;
                }
            }
        }
     });

    var cls = new myClass();

    // 绑定事件
    cls.on('afterSizeChange', function(ev){
        console.log('change '+ ev.attrName + ': '+ev.prevVal+' --> '+ev.newVal);
    });

    // 设置属性
    cls.set('size', 20);

    // 获取属性
    alert(cls.get('size'));

    // 重置
    cls.reset();
    alert(cls.get('size'));
});
```
*/


/**
配置组件的事件绑定,例如:
```
{
    listeners:{
        customEvent:function(e){
            alert(e.type); // => "customEvent"
        }
    }
}

or

{
    listeners:{
        customEvent:{
            fn:function(e){
                // e.type // => customEvent
                // this.xx => 1
            },
            context:{xx:1}
        }
    }
}
```
@attribute listeners {Object}
*/

/**
插件构造器数组或插件对象数组. 例如
```
{
    plugins: [ Plugin1,Plugin2 ]
}

// or

{
    plugins: [new Plugin1(cfg),new Plugin2(cfg)]
}
```
@attribute plugins {Function[]|Object[]} 
*/


/**
从当前类上扩展出一个子类
@method extend
@param [extensions] {Function[]} 扩展类数组
@param methodDesc {Object} 方法集合键值对
@param staticAttributes {Object} 放到新产生组件类上的静态属性集合键值对，其中 ATTRS 属性特殊对待
@param desc {Object} 类元信息
@param desc.name {String} 类名
*/

/**
调用父类的对应方法，如果没有，则返回undefined
@method callSuper
@example
```
require(['base'], function(Base) {
    var A = Base.extend({
        m: function (value) {
            return 'am:' + value;
        },
        m2: function (value) {
            return 'am2:' + value;
        }
    });

    var B = A.extend({
        m: function(value) {
            return 'bm:(' + this.callSuper(value) + ')';
        },
        m2: function(value) {
            return 'bm2(' + this.callSuper.apply(this, arguments) + ')';
        }
    });

    var b = new B();
    console.log(b.m(1));
    console.log(b.m2(2));
});
```
*/

/**
安装指定插件
@method plug
@param plugin {Function|Object} 指定的插件构造器或者插件对象
@return 自身
@example
```
require(['overlay', 'component/plugin/resize'],function(Overlay,Resize){
    new Overlay({
        content:'test'
    }).plug(new Resize({
        handlers:['t','t']
    }));
});
```
*/

/**
卸载指定插件
@method unplug
@param plugin {Function|Object} 指定的插件构造器或者插件对象
@return 自身
@example
```
require(['overlay','component/plugin/resize'],function(Overlay,Resize){
    var o= new Overlay({
        content:'test'
    }).plug(new Resize({
        handlers:['t','t']
    }));

    o.unplug('component/plugin/resize'); // 卸载 resize 插件
});
```
*/

/**
根据指定的 id 获取对应的plugin实例
@method getPlugin
@param id {String} plugin实例的id
@return 对应的plugin实例
@example
```
dialog.getPlugin('component/plugin/drag')
   .getPlugin('dd/plugin/constrain')
   .set('constrain', false);
```
*/

/**
销毁实例
@method destroy
*/
