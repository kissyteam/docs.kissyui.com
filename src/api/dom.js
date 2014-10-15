/**
提供类DOM
@module dom
*/

/**
操作DOM
@class Dom
@static
*/

/**
获取符合选择器的所有元素
@method query
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param [context=document] {string|HTMLCollection|Array<HTMLElement>} 选择器参考上下文 
@return {Array} 符合选择器字符串的 dom 节点数组
*/

/**
获取符合选择器的第一个元素. 相当于调用 query(selector,context)[0]
@method get
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param [context=document] {string|HTMLCollection|Array<HTMLElement>} 选择器参考上下文 
@return {Object} 符合选择器的第一个元素
*/

/**
获取符合选择器以及过滤参数的所有元素
@method filter
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {String|Function} 过滤选择器或函数
- 类型 string 时, 格式为 tag.cls , 其他格式需要引入模块 sizzle
- 类型 function 时, 传入参数当前 dom 节点, 返回 true 表示保留
@param [context=document] {string|HTMLCollection|Array<HTMLElement>} 选择器参考上下文 
@return {Array} 符合选择器字符串的 dom 节点数组
*/

/**
判断根据选择器获取的所有元素是否都符合过滤条件
@method test
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {String|Function} 过滤选择器或函数,详见[DOM.filter](#method_filter)
@param [context=document] {string|HTMLCollection|Array<HTMLElement>} 选择器参考上下文 
@return {Boolean}
*/

/**
获取符合选择器的第一个元素的克隆元素
@method clone
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param [deep=false] {Boolean} 是否深度克隆（克隆节点的子孙节点）
@param [withDataAndEvent=false] {Boolean} 节点是否具备源节点的[dom.data](#method_data)属性以及[事件](#5.0/api/modules/event.html)
@param [deepWithDataAndEvent=false] {Boolean} 子孙节点是否具备源节点对应子孙节点的[dom.data](#method_data)属性以及[事件](#module_event)
@return {HTMLElement} 符合选择器的第一个元素的克隆元素
__Note__
普通对象和普通数组请用 `KISSY.clone`
*/

/**
判断符合选择器的所有元素中是否有某个元素含有特定 class
@method hasClass
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param value {String} 样式类 class, 多个用空格分隔, 表示同时包含多个样式类
@return {Boolean} 是否符合选择器的元素中存在某个元素含有特定样式类 value
*/

/**
给符合选择器的所有元素添加指定 class
@method addClass
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param value {String} 样式类 class, 多个用空格分隔
*/

/**
给符合选择器的所有元素添加指定 class
@method removeClass
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param value {String} 样式类 class, 多个用空格分隔
*/

/**
将符合选择器的所有元素的老 class 替换为新 class
@method replaceClass
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param oldClassName {String} 样式类 class, 多个用空格分隔 , 需要删除的样式类
@param newClassName {String} 样式类 class, 多个用空格分隔 , 需要添加的样式类
*/

/**
操作符合选择器的所有元素, 如果存在值为 classNames 的 class, 则移除掉, 反之添加
@method toggleClass
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param classNames {String} 样式类 class, 多个用空格分隔 , 需要 toggle 的样式类
*/

/**
移除符合选择器的所有元素的指定属性
@method removeAttr
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} 属性名称
*/

/**
获取符合选择器的第一个元素的属性值
@method attr
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} 属性名称
@return 对应属性名的属性值
*/

/**
给符合选择器的所有元素设置属性值
@method attr
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} 属性名称
@param value 属性值
*/

/**
给符合选择器的所有元素设置属性值
@method attr
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param kv {Object} 属性名与属性值的键值对
*/

/**
判断符合选择器的所有元素中是否有某个元素含有特定属性
@method hasAttr
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param attrName {String} 属性名称
@return {Boolean}
*/

/**
获取符合选择器的第一个元素的对应 property 值
@method prop
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} property 名称
@return 对应 property 的值

__Note__
- 对于不存在的 property , 该方法返回 undefined
- 注意区别该方法与 dom.attr, 也即区别 [DOM property 与 attribute](http://javascript.info/tutorial/attributes-and-custom-properties)
- 请使用 [dom.data](#method_data) 方法来处理自定义属性, 而不要使用 dom.prop 方法, 否则在 ie<9 下会有内存泄露
- prop 方法可以改变 DOM 元素的状态而不改变其对应的序列化 html 属性 ( IE <9 除外)
- 例如设置 input 或 button 的 disabled property 或者 checkbox 的 checked property . 最常见的情况即是用 prop 来设置 disabled 以及 checked 而不是 dom.attr . 而 dom.val 方法用来设置和读取 value property

@example
```
var c=DOM.create("<input type='checkbox' checked='checked'/>");
DOM.attr(c,"checked") // => "checked"
DOM.prop(c,"checked") // => true
DOM.attr(c,"nodeName") // => null
DOM.prop(c,"nodeName").toLowerCase() // => input
```
*/

/**
给符合选择器的所有元素设置 property 值
@method prop
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} property 名称
@param value  property值
*/

/**
给符合选择器的所有元素设置 property 值
@method prop
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param kv {Object} property 名与 property 值的键值对
@example
__selectionStart/End 兼容__

__在 ie 下对于 selectionStart/End 做了兼容处理，[demo](/5.0/examples/dom/selection-start.html)__
*/

/**
判断符合选择器的第一个元素是否含有特定 property 属性
@method hasProp
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} property 名称
@return {Boolean}
*/

/**
获取符合选择器的第一个元素所的 value 值
@method val
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return 获取符合选择器的第一个元素所的 value 值. 无值时, 返回空字符串.
@example
```
require(["dom"],function(DOM){
        // 获取 id 是 J_username 的元素的 value 值
        DOM.val("#J_username");
});
```
*/

/**
给符合选择器的所有元素设置 value 值
@method val
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param value {String} 将要设置的 value 值
@example
```
require(["dom"],function(DOM){
        // 将 id 是 J_username 的元素的 value 值设置成“张三”
        DOM.val("#J_username","张三");
});
```
*/

/**
获取符合选择器的第一个元素所包含的文本值
@method text
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return 获取符合选择器的第一个元素所包含的文本值. 无值时, 返回空字符串.
*/

/**
给符合选择器的所有元素设置文本值.
@method text
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param value {String} 将要设置的文本值

__相当于 ie 下调用 innerText 以及其他浏览器下调用 textContent__
*/

/**
获取符合选择器的第一个元素的样式值
@method css
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} css 样式属性名
@return {String}
*/

/**
给符合选择器的所有元素设置样式值
@method css
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} css 样式属性名
@param value {String} 将要设置的样式值
*/

/**
给符合选择器的所有元素设置样式值
@method css
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param kv {Object} 样式名与样式值的键值对
*/

/**
获取符合选择器的第一个元素 style 属性中 name 的值
@method style
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} style属性名
@return {String} 指定元素 style 属性中, name 的值
__Note__

请注意 style() 和 css() 在 获取元素样式值上的区别 :
-前者获取的是元素style属性中相应的样式值, 是个字面量;
-后者是获取元素真实渲染到页面上的样式值, 是个计算值.
@example
```
require(['util', 'dom'], function(Util, DOM){
    var tag = Util.guid("float");
    DOM.addStyleSheet("." + tag + " {float:left}")

    var d = DOM.create("<div class='" + tag + "' style='float:right'><" + "/div>")
    DOM.append(d, document.body);
    console.log(DOM.css(d, "float"));     // "right"
    console.log(DOM.style(d, "float"));   // "right"

    DOM.css(d, "float", "");

    console.log(DOM.css(d, "float"));     // "left"
    console.log(DOM.style(d, "float"));   // ""
})

```
*/

/**
给符合选择器的所有元素, 给其 style 属性中名为 name 的样式设置值为 value.
@method style
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} style属性名
@param value {String} 将要设置的样式值
*/

/**
给符合选择器的所有元素, 给其 style 属性中名为 name 的样式设置值为 value.
@method style
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param kv {Object} 样式名与样式值的键值对
*/

/**
获取符合选择器的第一个元素的宽度值
@method width
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return {Number} 符合选择器的第一个元素的宽度值
__Note__
- 该方法获取的是元素的真实宽度, 不包含 padding, border, margin. 且始终返回像素值
- 注意: 该方法与 [innerWidth()](#method_innerWidth) 和 [outerWidth()](#method_outerWidth) 的区别.
@example
```
<div style="width: 100px;">
    <div id="test" style="width: 80%; height: 20px"></div>
</div>
<script>
    var elem = S.get('#test');

    DOM.style(elem, 'width'); // 返回 80%
    DOM.css(elem, 'width'); // 返回 80px
    DOM.css(elem, 'height'); // 返回 20px

    DOM.width(elem); // 返回 80
    DOM.height(elem); // 返回 20
</script>
```
*/

/**
获取符合选择器的第一个元素的宽度值
@method width
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param value {String} 宽度值
*/

/**
获取符合选择器的第一个元素的宽度值
@method height
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return {Number} 符合选择器的第一个元素的高度值
*/

/**
获取符合选择器的第一个元素的高度值
@method height
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param value {String} 高度值
*/

/**
获取符合选择器的第一个元素的宽度值, 注意: 该值包含 padding
@method innerWidth
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return {Number}
*/

/**
获取符合选择器的第一个元素的高度值, 注意: 该值包含 padding
@method innerHeight
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return {Number}
*/

/**
获取符合选择器的第一个元素的宽度值, 注意: 值除了包含元素本身宽度和 padding 外, 还包含 border或margin
@method outerWidth
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param includeMargin {Boolean} 是否包含 margin, 默认仅包含 border
@return {Number} 符合选择器的第一个元素的宽度值
*/

/**
获取符合选择器的第一个元素的高度值, 注意: 值除了包含元素本身宽度和 padding 外, 还包含 border或margin
@method outerHeight
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param includeMargin {Boolean} 是否包含 margin, 默认仅包含 border
@return {Number} 符合选择器的第一个元素的高度值
*/

/**
将 cssText 字符串作为内联样式表内容添加到文档中
@method addStyleSheet
@static
@param cssText {String} 样式内容
@param [id] {String} 内联样式表所在 style 节点的 id
*/

/**
显示符合选择器的所有元素
@method show
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
*/

/**
隐藏符合选择器的所有元素
@method hide
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
*/

/**
将符合选择器的所有元素切换显示/隐藏两个状态
@method toggle
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
*/

/**
获取符合选择器的第一个元素相对页面文档左上角的偏移值
@method offset
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return {Object} 相对页面文档左上角的偏移值,包括两个属性
- left {Number} 相对页面文档左上角的横坐标
- top {Number} 相对页面文档左上角的纵坐标
*/

/**
设置符合选择器的第一个元素相对页面文档左上角的偏移值
@method offset
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param value {Object} 相对页面文档左上角的偏移值,包含left和top两个属性
*/

/**
获取窗口或元素的 scrollTop 值
@method scrollTop
@static
@param node {Window|HTMLElement} 某个 iframe 的 contentWindow 或当前 window 或某个节点
@return {Number} 窗口或元素的 scrollTop 值
*/

/**
设置窗口 scrollTop 值
@method scrollTop
@static
@param num {Number} 设置的值
@return {Number}
*/

/**
设置窗口或元素的 scrollTop 值
@method scrollTop
@static
@param node {Window|HTMLElement} 某个 iframe 的 contentWindow 或当前 window 或某个节点
@param num {Number} 设置的值
@return {Number}
*/

/**
获取窗口或元素的 scrollLeft 值
@method scrollLeft
@static
@param node {Window|HTMLElement} 某个 iframe 的 contentWindow 或当前 window 或某个节点
@return {Number} 窗口或元素的 scrollLeft 值
*/

/**
设置窗口 scrollLeft 值
@method scrollLeft
@static
@param num {Number} 设置的值
@return {Number}
*/

/**
设置窗口或元素的 scrollLeft 值
@method scrollLeft
@static
@param node {Window|HTMLElement} 某个 iframe 的 contentWindow 或当前 window 或某个节点
@param num {Number} 设置的值
@return {Number}
*/

/**
获取页面文档 document 的总高度
@method docHeight
@static
@return {Number}
*/

/**
获取页面文档 document 的总宽度
@method docWidth
@static
@return {Number}
*/

/**
获取当前可视区域(viewport)的高度值
@method viewpointHeight
@static
@return {Number}
*/

/**
获取当前可视区域(viewport)的宽度值
@method viewpointWidth
@static
@return {Number}
*/

/**
使当前选择器匹配的第一个元素出现在指定容器可视区域内
@method scrollIntoView
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param [container=window] {window|HTMLElement} 指定容器
@param [top=true] {Boolean} 是否强制元素的上边界与容器的上边界对齐, 左边界和左边界对齐
@param [hsroll=true] {Boolean} 是否允许容器左右滚动以保证元素显示在其可视区域
*/

/**
获取元素在另一批元素的位置信息
@method index
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param [refer] {String|HTMLElement|KISSY.Node} 参考节点
- 如果 refer 不填，则为匹配 selector 的第一个元素在其兄弟节点的下标位置
- 如果 refer 为选择器字符串，则为为匹配 selector 的第一个元素在匹配 refer 的所有元素中的位置下标
- 如果 refer 为 dom 元素或 KISSY Node，则为 refer 在匹配 selector 的元素列表中的位置

@return {Number}
*/

/**
获取符合选择器的第一个元素的祖先元素
@method parent
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {number|string|function|string[]|function[]}  数组表示会返回所有符合 filter 的祖先元素，否则只会返回第一个符合条件的祖先元素。 整数以及数组外的例子参见 [dom.filter](#method_filter) 的相应参数.详见下面例子解释
@return {HTMLElement} 符合选择器的第一个元素的祖先元素
@example
```
var elem = S.get('#id');

// 返回 elem.parentNode
DOM.parent(elem);

// 返回 elem.parentNode.parentNode
DOM.parent(elem, 2);

// 寻找 elem 的祖先节点, 返回第一个拥有 container class 值的祖先
DOM.parent(elem, '.container');

// 寻找 elem 的祖先节点, 返回所有拥有 container class 值的祖先
DOM.parent(elem, ['.container']);

// 寻找 elem 的祖先节点, 返回第一个 tagName 为 ul 的祖先
DOM.parent(elem, 'ul');

// 寻找 elem 的祖先节点, 返回第一个 rel 属性为 data 值的祖先
DOM.parent(elem, function(p) {
    return DOM.attr(p, 'rel') == 'data';
});
```
*/

/**
获取符合选择器的第一个元素的下一个同级节点
@method next
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {string|function} 过滤条件, 格式参见 [dom.filter](#method_filter) 的相应参数
@return {HTMLElement} 符合选择器的第一个元素的下一个同级节点
*/

/**
获取符合选择器的第一个元素的上一个同级节点
@method prev
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {string|function} 过滤条件, 格式参见 [dom.filter](#method_filter) 的相应参数
@return {HTMLElement} 符合选择器的第一个元素的上一个同级节点
*/

/**
获取符合选择器的第一个元素的第一个子节点
@method first
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {string|function} 过滤条件, 格式参见 [dom.filter](#method_filter) 的相应参数
@return {HTMLElement} 符合选择器的第一个元素的第一个子节点
*/

/**
获取符合选择器的第一个元素的最后一个子节点
@method last
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {string|function} 过滤条件, 格式参见 [dom.filter](#method_filter) 的相应参数
@return {HTMLElement} 符合选择器的第一个元素的最后一个子节点
*/

/**
获取符合选择器的第一个元素的相应同级节点
@method siblings
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {string|function} 过滤条件, 格式参见 [dom.filter](#method_filter) 的相应参数
@return {Array<HTMLElement>} 符合选择器的第一个元素的相应同级节点
*/

/**
获取符合选择器的所有非文字节点的子节点
@method children
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {string|function} 过滤条件, 格式参见 [dom.filter](#method_filter) 的相应参数
@return {Array<HTMLElement>} 符合选择器的所有非文字节点的子节点
*/

/**
判断某一容器(container)是否包含另一(contained)节点.
@method contains
@static
@param container {string|HTMLElement|ArrayList<HTMLElement>|HTMLDcoument|TextNode} 容器节点
- 字符串表示 css3 选择器 获取匹配的第一个元素
- ArrayList<HTMLElement> : 取列表第一个元素
@param contained {string|HTMLElement|ArrayList<HTMLElement>|HTMLDcoument|TextNode} 检测节点
- 字符串表示 css3 选择器 获取匹配的第一个元素
- ArrayList<HTMLElement> : 取列表第一个元素
@return {Boolean} container 是否包含 contained 节点.两个元素如果相等, 则返回 false
*/

/**
创建 dom 节点
@method create
@static
@param html {String} dom 节点的 html
@param props {Object} 属性键值对象
@param ownerDoc {HTMLDocument} 节点所属文档
@return {HTMLFragment|HTMLElement} 创建出的 dom 节点或碎片列表
@example
```
// 等价 document.createElement('div')
DOM.create('<div>');
DOM.create('<div />');
DOM.create('<div></div>');

// 等价 document.createTextNode('text')
DOM.create('text');

// 创建时, 同时添加属性值
DOM.create('<a>', { href: 'hot.html', title: 'Hot Page' });

// 新增属性有： val, css, html, text, data, width, height, offset
DOM.create('<a>', { href: 'hot.html',
                    title: 'Hot Page',
                    css: {color: 'blue'},
                    text: 'Test Link'
          });

// 直接内联属性
DOM.create('<img src="logo.png" alt="logo" />');
```
*/

/**
获取符合选择器的第一个元素的 innerHTML
@method html
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return {String}
*/

/**
给符合选择器的所有元素设置 innerHTML 值
@method html
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param html {String} 将要设置的 html 值
@param [loadScripts=false]  {Boolean} 是否执行 html 中的内嵌脚本，默认 false
__Note__

内嵌脚本指 <script>xx</script> or <script src='yy'></script>
*/

/**
将符合选择器的所有元素从 DOM 中移除
@method remove
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
__Note__

DOM.remove 会清除当前节点以及其子孙节点上已经注册的事件
*/

/**
清除节点的所有子孙节点以及子孙节点上的事件和 data() 信息
@method empty
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
*/

/**
将 newNode 插入到 refNode 之前
@method insertBefore
@static
@param newNode {string|HTMLElement} 插入的节点. 字符串表示 css3 选择器, 获取匹配的第一个元素
@param refNode {string|HTMLElement} 参考节点. 字符串表示 css3 选择器, 获取匹配的第一个元素
*/

/**
将 newNode 插入到 refNode 之后
@method insertAfter
@static
@param newNode {string|HTMLElement} 插入的节点. 字符串表示 css3 选择器, 获取匹配的第一个元素
@param refNode {string|HTMLElement} 参考节点. 字符串表示 css3 选择器, 获取匹配的第一个元素
*/

/**
将 node 追加到 parent 子节点最后
@method append
@static
@param node {string|HTMLElement}  插入的节点. 字符串表示 css3 选择器 , 获取匹配的第一个元素
@param parent {string|HTMLElement} 参照父节点. 字符串表示 css3 选择器 , 获取匹配的第一个元素.
*/

/**
将 node 追加到 parent 子节点最前
@method prepend
@static
@param node {string|HTMLElement}  插入的节点. 字符串表示 css3 选择器 , 获取匹配的第一个元素
@param parent {string|HTMLElement} 参照父节点. 字符串表示 css3 选择器 , 获取匹配的第一个元素.
*/

/**
将 node 节点（数组）替换为新的节点（数组） newNode
@method replaceWith
@static
@param nodes {string|HTMLElement|HTMLElement[]} 被替换的节点（数组）. 字符串表示 css3 选择器
@param newNodes {string|HTMLElement|HTMLElement[]} 新节点（数组）. 字符串表示 css3 选择器
*/

/**
获取符合选择器的第一个元素的扩展属性(expando)
@method data
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} 扩展属性名称
@return {Undefined|String}
- 对应扩展属性名的属性值, 如果不存在返回 undefined
- 如不指定扩展属性名, 则取得所有扩展属性键值对象 , 如果当前还没设置过扩展属性, 则返回空对象, 可以直接在该空对象上设置
*/

/**
给符合选择器的所有元素的扩展属性(expando).设置扩展属性 name 为 value
@method data
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} 扩展属性名称
@param value 扩展属性值
*/

/**
给符合选择器的所有元素的扩展属性(expando).设置扩展属性 name 为 value
@method data
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param kv {Object} 扩展属性名与扩展属性值的键值对
__Note__

- embed, object, applet 这三个标签不能设置 expando
- 如果判断是否设置了扩展属性, 请使用 dom.hasData
- 该函数并不能读取 data-xx 伪属性，例如 <div data-x="y"></div>
@example
```

// 设置所有 img 的名为 data-size 的 expando , 值为 400;
DOM.data('img', 'data-size', 400);

// 获取第一个 img 元素中, 名为 data-size 的 expando 值;
DOM.data('img', 'data-size');

var p=DOM.create("<p>");

DOM.hasData(p); // => false

var store=DOM.data(p); // => store={}

store.x="y"; // => 相当于 DOM.data(p,"x","y");

DOM.removeData(p,"x");

DOM.data(p,"x"); // => undefined

DOM.hasData(p,"x"); // => false

DOM.hasData(p) // => false

DOM.data("p") // => 返回存储对象
```
*/

/**
将符合选择器的所有元素的对应扩展属性( expando )删除
@method removeData
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String} 扩展属性名称. 如果指定 name, 则只删除名为 name 的 expando . 如果不指定 name, 则删除元素的整个 expando
@example
```

// 删除 img 元素的名为 data-size 的 expando;
DOM.removeData('img', 'data-size');

// 删除 img 元素的 expando;
DOM.removeData('img');
```
*/

/**
判断是否符合选择器的所有元素中的一个存在对应的扩展属性( expando )值
@method hasData
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param name {String}  扩展属性名称.如果指定 name, 则判断是否存在指定的扩展属性值. 否则判断是否存在任意扩展属性值
@return {Boolean} 是否具有扩展属性
@example
```

// 给所有的段落节点设置扩展属性 ``x`` , 值为 ``y``
DOM.data("p","x","y");

DOM.hasData("p"); // => true , 设置过扩展属性

DOM.hasData("p","x") // => true , 设置过扩展属性 ``x`` 的值

DOM.hasData("p","z") // => false , 没有设置过扩展属性 ``z`` 的值

DOM.removeData("p","x"); // => 删除扩展属性 ``x`` 的值

DOM.hasData("p","x"); //=> false

DOM.hasData("p"); //=> false
```
*/

/**
使符合选择器的所有元素都不可以作为选择区域的开始
@method unselectable
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
__Note__

在 ie 下会引发该元素鼠标点击获取不到焦点, 在 firefox 下要得到同样的效果则需要阻止 mousedown 事件
*/

/**
获取符合选择器的所有子节点（包括文字节点）
@method contents
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param filter {string|function} 过滤条件, 格式参见 [dom.filter](#method_filter) 的相应参数
@return {Array<HTMLElement>} 获取符合选择器的所有子节点（包括文字节点）
*/

/**
用 wrapperNode 分别包装符合 selector 的节点
@method wrap
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param wrapperNode {HTMLElement} 包装节点
@example
```
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```
_after_
```
DOM.wrap(".inner",DOM.create('<div class="new" />'));
```
_become_
```
<div class="container">
  <div class="new">
    <div class="inner">Hello</div>
  </div>
  <div class="new">
    <div class="inner">Goodbye</div>
  </div>
</div>
```
*/

/**
用 wrapperNode 包装所有符合 selector 的节点
@method wrapAll
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param wrapperNode {HTMLElement} 包装节点
@example
```
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```
_after_
```
DOM.wrapAll(".inner",DOM.create('<div class="new" />'));
```
_become_
```
<div class="container">
  <div class="new">
    <div class="inner">Hello</div>
    <div class="inner">Goodbye</div>
  </div>
</div>
```
*/

/**
移除符合 selector 的节点的父节点
@method unwrap
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@example
```
<div class="container">
  <div class="new">
    <div class="inner">Hello</div>
  </div>
  <div class="new">
    <div class="inner">Goodbye</div>
  </div>
</div>
```
_after_
```
DOM.unwrap(".inner");
```
_become_
```
 <div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```
*/

/**
用 wrapperNode 分别包装符合 selector 的节点的子节点
@method wrapInner
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@param wrapperNode {HTMLElement} 包装节点
@example
```
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```
_after_
```
DOM.wrapInner(".inner",DOM.create('<div class="new" />'));
```
_become_
```
<div class="container">
  <div class="inner">
    <div class="new">Hello</div>
  </div>
  <div class="inner">
    <div class="new">Goodbye</div>
  </div>
</div>
```
*/

/**
获取符合选择器的第一个元素的小写 nodeName 值
@method nodeName
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return {String} 符合选择器的第一个元素的小写 nodeName 值
*/ 

/**
获取符合选择器的第一个元素的 outerHTML
@method outerHTML
@static
@param selector {string|HTMLCollection|Array<HTMLElement>} 字符串表示[css3选择器](http://www.w3.org/TR/css3-selectors/)
@return {String} 符合选择器的第一个元素的 outerHTML
*/