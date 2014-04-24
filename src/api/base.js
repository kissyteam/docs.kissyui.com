/**
鉴于不同浏览器对属性描述符的支持并不统一, KISSY 的 attribute 模块, 模拟实现了属性描述符, 提供属性的获取和设置操作, 即属性的 getter 和 setter 动作.

而 KISSY 的base模块提供给我们一个基类Base, 整合了 attribute 功能, 让继承 Base 的子类自动具有 attribute 的功能.如果你想让自定义类默认就支持 attribute 功能, 请直接继承 Base
@module base
*/


/**
如果你想让类默认就支持 attribute 功能, 请直接继承Base

简单实用：
```
KISSY.use('base', function(S, Base) {
    // 自定义类
    // 继承 Base
    var myClass = Base.extend({},{
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
@class Base
@constructor
@extends Base.Attribute
@uses Event.Target
@param config {Object} 属性名/配置信息对
@param config.listeners {Object} 配置组件的事件绑定,例如:
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
@param config.plugins {Function[]|Object[]} 插件构造器数组或插件对象数组. 例如
```
{
    plugins: [ Plugin1,Plugin2 ]
}

// or

{
    plugins: [new Plugin1(cfg),new Plugin2(cfg)]
}
```
*/ 

/**
从当前类上扩展出一个子类
@method extend
@static
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
KISSY.use('base', function(S, Base) {
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
KISSY.use('overlay,component/plugin/resize',function(S,Overlay,Resize){
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
KISSY.use('overlay,component/plugin/resize',function(S,Overlay,Resize){
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






/**
包含一些属性操作的方法，仅用于 [augment()](5.0/api/classes/Util.html#method_augment)]
@class Attribute
@namespace Base
@constructor
*/ 

/**
给宿主对象增加一个属性
@method addAttr
@param name {String} 属性名
@param attrConfig {Object} 属性配置信息, 支持下面的配置项:
@param attrConfig.value {String|Number} 属性默认值。注意默认值请不要设置为复杂对象（通过自定义构造器 new 出来的），复杂对象可设置 valueFn 返回.如果配置项中没有设置 value, 会调用 valueFn 函数获取默认值并赋给 value
@param attrConfig.valueFn {Function} 提供属性默认值的函数，传入对象内部对应的属性值和属性名，取该函数的返回值作为最终值给用户
@param attrConfig.setter {Function} 写属性时的处理函数，传入从 set() 参数得到的属性值和属性名，如果返回非 undefined 则作为新的属性设置值
@param attrConfig.getter {Function}  读属性时的处理函数
@param attrConfig.validator {Function}  写属性时的验证函数，传入从 set() 参数得到的属性值和属性名，返回 false 则不改变该属性值
*/

/**
批量添加属性
@method addAttrs
@param attrConfigs {Object} 属性名/配置信息对
@param values {Object} 属性名/值对, 批量设置当前对象的属性值
*/

/**
判断是否有名为 name 的属性
@method hasAttr
@param name {String} 属性名
@return {Boolean}
*/

/**
删除名为 name 的属性
@method removeAttr 
@param name {String} 属性名
*/

/**
设置属性 name 的值为 value
@method set
@param name {String} 属性名.也可以为 “x.y” 形式，此时要求 x 属性为包含 y 属性的普通 Object，这时会设置 x 属性值的 y 属性.但只会触发 x 的相关 change 事件
@param value {String} 属性的值
@param opts {Object} 控制对象，包括以下控制选项
@param opts.silent=false {Boolean} 默认 false , 是否触发 change 系列事件
@param opts.error {Function} 验证失败的回调，包括失败原因
@param opts.force {Function} 是否强制触发 change 事件，默认值为 false，当值发生变化时才触发
@return {Boolean} 该次属性设置是否生效（是否通过了 validator 验证）
*/

/**
获取属性 name 的值
@method get
@param name {String} 属性名.也可以为 “x.y” 形式. 此时要求 x 属性为包含 y 属性的普通 Object.当没有设置属性值时, 会取该属性的默认值
*/

/**
获取目前实例的所有属性键值对集合
@method getAttrVals
@return {Object} 属性键值对集合
*/

/**
重置属性 name 为初始值. (调用一次 set() )
@method reset
@param name {String} 属性
@param opts {Object} 控制对象，包括以下控制选项
@param opts.silent=false {Boolean} 默认 false , 是否触发 change 系列事件
*/

/**
将所有属性全部重置为初始值. (调用一次 set() )
@method reset
@param opts {Object} 控制对象，包括以下控制选项
@param opts.silent=false {Boolean} 默认 false , 是否触发 change 系列事件
*/

/**
名为 “attrName” 的属性, 在改变它的值之前触发该事件
@event beforeAttrNameChange
@param e {Object} 回调函数传入的对象
@param e.newVal 将要改变到的属性值
@param e.prevVal 当前的属性值
@param e.attrName {String} 当前的属性名，例如 “x”
@param e.subAttrName {String} 当前的完整属性名，例如 “x.y”
*/

/**
名为 “attrName” 的属性, 在改变它的值之后触发该事件
@event afterAttrNameChange
@param e {Object} 回调函数传入的对象
@param e.newVal 当前的属性值
@param e.prevVal 当前改变前的属性值
@param e.attrName {String} 当前的属性名，例如 “x”
@param e.subAttrName {String} 当前的完整属性名，例如 “x.y”
*/

/**
每调用 [set()](5.0/api/classes/Attribute.html#method_set) 一次后就触发一次该事件
@event *change
@param e {Object} 回调函数传入的对象
@param e.newVal 本次 set 导致的属性当前值集合
@param e.prevVal 本次 set 导致的属性在 set 前的值集合
@param e.attrName {String} 本次 set 导致改变的属性名集合
@param e.subAttrName {String} 本次 set 导致的属性全名集合
*/