/**
node 包括 dom , event-dom , anim 模块的所有功能, 推荐采用 Node 模块
@module node
*/

/**
由node模块提供的类 Node,你只需要把 Node 看做 jquery 中的 $ 就可以了,非常方便
@class Node
@constructor
@param html {string|HTMLElement|Text|Window|HTMLDocument|HTMLCollection|ArrayList<HTMLElement>|Node} 不同类型有不同意义，如下：
- string : html 字符串, 例如 `<div>` , 根据该字符串生成 Node 对象
- HTMLElement|Text|Window|HTMLDocument : 把原生 DOM 节点包装成一个 Node 对象, 这个情景一般可用 `Node.all` 代替
- HTMLCollection|ArrayList<HTMLElement> : 将原生节点列表包装为一个 Node 对象
- Node : 从当前 Node 对象中克隆一个新对象返回
@param [props] {Object} 属性键值对, 对生成的 Node 对象代表的原生 DOM 节点设置属性. 仅当 html 参数为 html 字符串时使用
@param [ownerDocument] {HTMLDocument} 该 Node 产生的原生 DOM 节点所属的文档对象. 仅当 html 参数为 html 字符串时使用
@return {Node} 返回Node对象
### Note1

#### 推荐除了需要生成文本节点的情况下, 统统使用 Node.all() 代替

### Note2

以下的这些方法,
[filter()](/5.0/api/classes/Dom.html#method_filter) ,[test()](/5.0/api/classes/Dom.html#method_test) ,[clone()](/5.0/api/classes/Dom.html#method_clone) ,[empty()](/5.0/api/classes/Dom.html#method_empty) ,[replaceWith()](/5.0/api/classes/Dom.html#method_replaceWith) ,[hasClass()](/5.0/api/classes/Dom.html#method_hasClass) ,[addClass()](/5.0/api/classes/Dom.html#method_addClass) ,[removeClass()](/5.0/api/classes/Dom.html#method_removeClass) ,[replaceClass()](/5.0/api/classes/Dom.html#method_replaceClass) ,[toggleClass()](/5.0/api/classes/Dom.html#method_toggleClass) ,[removeAttr()](/5.0/api/classes/Dom.html#method_removeAttr) ,[attr()](/5.0/api/classes/Dom.html#method_attr) ,[hasAttr()](/5.0/api/classes/Dom.html#method_hasAttr) ,[prop()](/5.0/api/classes/Dom.html#method_prop) ,[hasProp()](/5.0/api/classes/Dom.html#method_hasProp) ,[val()](/5.0/api/classes/Dom.html#method_val) ,[text()](/5.0/api/classes/Dom.html#method_text) ,[css()](/5.0/api/classes/Dom.html#method_css) ,[toggle()](/5.0/api/classes/Dom.html#method_toggle) ,[offset()](/5.0/api/classes/Dom.html#method_offset) ,[scrollIntoView()](/5.0/api/classes/Dom.html#method_scrollIntoView) ,[parent()](/5.0/api/classes/Dom.html#method_parent) ,[index()](/5.0/api/classes/Dom.html#method_index) ,[next()](/5.0/api/classes/Dom.html#method_next) ,[prev()](/5.0/api/classes/Dom.html#method_prev) ,[first()](/5.0/api/classes/Dom.html#method_first) ,[last()](/5.0/api/classes/Dom.html#method_last) ,[siblings()](/5.0/api/classes/Dom.html#method_siblings) ,[children()](/5.0/api/classes/Dom.html#method_children) ,[contains()](/5.0/api/classes/Dom.html#method_contains) ,[html()](/5.0/api/classes/Dom.html#method_html) ,[remove()](/5.0/api/classes/Dom.html#method_remove) ,[data()](/5.0/api/classes/Dom.html#method_data) ,[removeData()](/5.0/api/classes/Dom.html#method_removeData) ,[hasData()](/5.0/api/classes/Dom.html#method_hasData) ,[contains()](/5.0/api/classes/Dom.html#method_contains) ,[unselectable()](/5.0/api/classes/Dom.html#method_unselectable) ,[innerWidth()](/5.0/api/classes/Dom.html#method_innerWidth) ,[innerHeight()](/5.0/api/classes/Dom.html#method_innerHeight) ,[outerWidth()](/5.0/api/classes/Dom.html#method_outerWidth) ,[outerHeight()](/5.0/api/classes/Dom.html#method_outerHeight) ,[on()](/5.0/api/classes/Dom.html#method_on) ,[detach()](/5.0/api/classes/Dom.html#method_detach) ,[fire()](/5.0/api/classes/Dom.html#method_fire)  的调用都会被转发给 dom , event , 原 DOM , Event 对应方法的第一个参数传入一个原生 DOM 节点数组, 而这个原生 DOM 节点数组则是由当前的 KISSY Node 对象得到的
*/

/**
根据选择器字符串得到节点列表
@method all
@static
@param html {string|HTMLElement|Text|Window|HTMLDocument|HTMLCollection|ArrayList<HTMLElement>|Node} 不同参数类型有不同意义，意义请参考Node构造函数说明
@param context {HTMLElement|Document|Node} 选择器上下文
@return {Node} 返回相应的Node对象
@example
- 选择器上下文
默认情况下是在文档根节点开始依据选择器字符串开始匹配元素查找. 但是一个上下文可以作为可选的第二个参数来限定查找范围, 例如在事件处理器 范围内进行查找匹配元素：
```
$('div.foo').on("click",function() {
  $('span', this).addClass('bar');
});
```
当对 span 的选择限定在 this 中时, 只有位于点击元素内的 span 节点会被设置格外的 class.也可以通过 $(this).all("span") 来实现限定搜索范围
- 使用原生 DOM 节点
```
$('div.foo').on("click",function() {
  $(this).slideUp();
});
```
*/

/**
返回匹配的第一个Node对象
@method one
@static
@param arg.. 如果参数为选择字符串, 找不到则返回 null,其他情况参考[Node.all](#method_all)说明
@return {Node}
*/

/**
得到当前节点列表内符合选择器字符串的子孙节点列表
@method all
@param selector {String} 选择器字符串
@return {Node}
@example
查看[demo](/5.0/examples/node/instance_all.html)
*/

/**
得到当前节点列表内符合选择器字符串的子孙节点列表的第一个Node对象
@method one
@param selector {String} 选择器字符串
@return {Null|Node} 返回null或者Node对象
*/

/**
得到该 Node 对象包含的原生节点数组
@method getDOMNodes
@return {Array<HTMLElement>} 返回该 Node 对象包含的原生节点数组
@example
```
<p id='p1'>1</p><p id='p2'>2</p>

<script>
	require(["node"],function($){
		var pdiv = $("p"),
		    all=pdiv.getDOMNodes(); // => all == [document.getElementById("p1"),document.getElementById("p2")]

	})
</script>
```
*/

/**
得到该 NodeList 对象包含的第一个原生节点
@method getDOMNode
@return {Array<HTMLElement>} 返回该 Node 对象包含的第一个原生节点
*/

/**
得到上一次 Node.one() / Node.all() 操作前的 Node 对象,引入该方法是为了更好的进行链式调用
@method end
@example
```
<div class='d1'>
    d1
</div>

<div class='d2'>
    d2
</div>

<script>
    require(['node'], function ($) {
        $("body").all(".d1").css("color", "red").end().all(".d2").css("color", "green");

    });
</script>
```
*/

/**
比较当前节点列表和 others 代表的节点列表是否完全相同
@method equals
@param others {Node} 要比较的目标节点列表
@return {Boolean}
*/

/**
返回包含合并选择器字符串匹配的元素和当前节点列表元素的新 NodeList 对象
@method add
@param html {string|HTMLElement|Text|Window|HTMLDocument|HTMLCollection|ArrayList<HTMLElement>|Node} 参数意义同Node.all
@param [context]
@example
```
<p>1</p><div>2</div>

<script>
    var pdiv = $("p");
    var all=pdiv.add("div");  //  pdiv will not change
    all.css("color","red"); // => 1,2 都为红字
</script>
```
*/

/**
获取包含当前节点列表 index 位置处的单个原生节点的新 Node 对象
@method item
@param index {Number}
@return {Null|Node} null 或者包含一个原生节点的 NodeList 对象
*/

/**
获取包含当前节点列表选定范围内原生节点的新 Node 对象,调用该方法并不会改变当前 Node 实例
@method slice
@param start {Number} 范围开始位置
@param [end] {Number} 范围结束位置，忽略的话结束坐标为当前列表末尾
@return {Node}
*/

/**
得到/设置当前节点列表第一个节点的滚动条的垂直位置
@method scrollTop
@param [value] {Number} 
- 当忽略value不填，则是“获取”
- 当value为数值，则是“设置”
@return 自身this
*/

/**
得到/设置当前节点列表第一个节点的滚动条的横向位置
@method scrollLeft
@param [value] {Number} 
- 当忽略value不填，则是“获取”
- 当value为数值，则是“设置”
@return 自身this
*/

/**
得到/设置当前节点列表第一个节点的计算高度，不含margin/padding/border
@method height
@param [value] {Number} 
- 当忽略value不填，则是“获取”
- 当value为数值，则是“设置”
@return 自身this
*/

/**
得到/设置当前节点列表第一个节点的计算宽度，不含margin/padding/border
@method width
@param [value] {Number} 
- 当忽略value不填，则是“获取”
- 当value为数值，则是“设置”
@return 自身this
*/

/**
将 cssText 字符串作为内联样式表内容添加到节点所属的文档中
@method addStyleSheet
@param cssText {String} 样式内容
@param [id] {String} 内联样式表所在 style 节点的 id
*/

/**
将参数内容插入到当前节点列表中的每个元素的末尾.
@method append
@param content {HTMLElement|string|Node} 将要插入的内容
@return {Node}
@example
```
<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```
```
require(["node"],function($){
    $('.inner').append('<p>Test</p>');
});

```
内层的每个 div 元素都得到了新内容
```
<h2>Greetings</h2>
<div class="container">
  <div class="inner">
    Hello
    <p>Test</p>
  </div>
  <div class="inner">
    Goodbye
    <p>Test</p>
  </div>
</div>
```
### Note

当把页面上已有的元素添加到目标容器中，若目标容器有多个，则只有第一个被添加进去的是参数节点，其他的都是参数节点的克隆节点
*/

/**
将当前节点列表中的每个元素插入到容器列表的每个元素的最后一个子节点后面,功能与append已有，只是参数意义不同
@method appendTo
@param content {HTMLElement|string|Node} 将要插入的内容
- HTMLElement|Node: 已有或新创建的节点
- string: 选择器字符串, 查找已有的容器节点
@return {Node}
*/

/**
将参数内容插入到当前节点列表中的每个元素的开头.
@method prepend
@param content {HTMLElement|string|Node} 将要插入的内容
@return {Node}
*/

/**
将当前节点列表中的每个元素插入到容器列表的每个元素的最后一个子节点开头,功能与prependTo已有，只是参数意义不同
@method prependTo
@param content {HTMLElement|string|Node} 将要插入的内容
- HTMLElement|Node: 已有或新创建的节点
- string: 选择器字符串, 查找已有的容器节点
@return {Node}
*/

/**
将当前列表中的每个元素插入到目标元素之前
@method insertBefore
@param target {HTMLElement|string|Node} 目标元素
- HTMLElement|Node: 已有或新创建的节点
- string: 选择器字符串, 查找已有的容器节点
@return {Node}
*/

/**
将当前列表中的每个元素插入到目标元素后面
@method insertAfter
@param target {HTMLElement|string|Node} 目标元素
- HTMLElement|Node: 已有或新创建的节点
- string: 选择器字符串, 查找已有的容器节点
@return {Node}
*/

/**
将参数内容插入到当前列表中每个元素之前,功能和insertBefore一样，只是参数意义不同
@method before
@param content {HTMLElement|string|Node} 将要插入的元素
- HTMLElement|Node: 已有或新创建的节点
- string: 选择器字符串, 查找已有的容器节点
@return {Node}
*/

/**
将参数内容插入到当前列表中每个元素后面,功能和insertAfter一样，只是参数意义不同
@method after
@param content {HTMLElement|string|Node} 将要插入的元素
- HTMLElement|Node: 已有或新创建的节点
- string: 选择器字符串, 查找已有的容器节点
@return {Node}
*/

/**
在当前节点列表上开始动画
@method animate
@param arg... 参数参考[Anim的构造函数](/5.0/api/classes/Anim.html)
@return {Node}
*/

/**
停止当前节点列表的动画, end, clearQueue, queueName, 涵义同 Anim.stop().
@method stop
@param [args..] 参考[Anim.stop](/5.0/api/classes/Anim.html#method_stop)
@return {Node}
*/

/**
暂停当前节点列表的动画
@method pause
@param [queueName] 涵义同 [Anim.pause](/5.0/api/classes/Anim.html#method_pause)
@return {Node}
*/

/**
继续当前节点列表的动画
@method resume
@param [queueName] 涵义同 [Anim.pause](/5.0/api/classes/Anim.html#method_pause)
@return {Node}
*/

/**
判断当前 Node 对象是否在动画中, Node对象列表 中只要有一个 Node对象 在动画, 就会返回 true 值
@method isRunning
@return {Boolean}
*/

/**
判断当前 Node 对象是否在暂停中, Node对象列表 中只要有一个 Node对象 在暂停, 就会返回 true 值
@method isPaused
@return {Boolean}
*/

/**
当前节点列表元素以动画效果显示
@method show
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@return {Node}
*/

/**
当前节点列表元素以动画效果隐藏
@method hide
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@return {Node}
*/

/**
当前节点列表元素为显示时动画效果隐藏, 否则动画效果显示
@method toggle
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@return {Node}
*/

/**
当前节点列表元素以渐隐效果显示
@method fadeIn
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@param [easing] {String} 动画平滑函数,同[Anim](/5.0/api/classes/Anim.html)
@return {Node}
*/

/**
当前节点列表元素以渐隐效果隐藏
@method fadeOut
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@param [easing] {String} 动画平滑函数,同[Anim](/5.0/api/classes/Anim.html)
@return {Node}
*/

/**
当前节点列表元素为显示时, 切换显示或隐藏, 且动画效果为渐隐
@method fadeToggle
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@param [easing] {String} 动画平滑函数,同[Anim](/5.0/api/classes/Anim.html)
@return {Node}
*/

/**
当前节点列表元素从上到下滑动显示
@method slideDown
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@param [easing] {String} 动画平滑函数,同[Anim](/5.0/api/classes/Anim.html)
@return {Node}
*/

/**
当前节点列表元素从上到下滑动隐藏
@method slideUp
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@param [easing] {String} 动画平滑函数,同[Anim](/5.0/api/classes/Anim.html)
@return {Node}
*/

/**
当前节点列表元素为显示时, 切换显示或隐藏, 且动画效果为滑动展开折叠
@method slideToggle
@param [speed] {Number} 单位秒, 动画持续时间, 不设置无动画
@param [callback] {Function} 每个动画结束后回调函数
@param [easing] {String} 动画平滑函数,同[Anim](/5.0/api/classes/Anim.html)
@return {Node}
*/