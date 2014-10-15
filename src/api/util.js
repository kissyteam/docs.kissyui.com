/**
* util模块，包含类Util
* @module util
*/

/**
* 是underscore风格的工具集，提供一些常用的工具函数
* @class Util
* @static
*/

/**
* 将source自身或其prototype属性的成员复制到targetClass.prototype上
* @method augment
* @static
* @param targetClass {Function} 将要扩充的类
* @param source {Function|Object} 扩充来源函数或对象. 非函数对象时复制的就是 source 自身
* @param [overite=true] {Boolean} 是否覆盖 Class.prototype 同名属性
* @param [whitelist] {Array} 属性来源对象的属性白名单, 仅在名单中的属性进行复制
* @return {Class} 扩充后的类
*/

/**
* 在页面id元素生效时立刻执行回调函数fn
* @method available
* @static
* @param id {String} 页面元素id
* @param fn {Function} 回调函数，在id元素可用时立刻执行
*/

/**
* 创建一个新函数，该函数可以在固定的上下文以及传递部分固定参数放在用户参数前面给原函数并执行
* @method bind
* @static
* @param fn {Function} 需要固定上下文以及固定部分参数的函数
* @param context {Object}  执行fn时的this值. 如果新函数用于构造器则该参数无用
* @param [args] {Any} 需要给新函数固定的部分参数
* @return {Function} 符合需求的新函数
* @example ### 改变运行上下文
* bind 最简单的用法是生成一个新的函数，无论它如何调用，都运行在一个固定的 this 值中.入门者常犯的错误时从一个对象获得一个方法引用， 然后在后面的调用中期望这个方法的this就是原来的对象(eg.g 把这个方法用在某个回调中). 如果没有特例，那么这个原始对象就丢失了. 但是如果从原方法中得到一个绑定原始对象的函数，这个问题就解决了！
*   ```
*   var x = 9;
	var module = {
		x: 81,
		getX: function() { return this.x; }
	};

	module.getX(); // 81

	var getX = module.getX;
	getX(); // 9, because in this case, "this" refers to the global object

	// create a new function with 'this' bound to module
	var boundGetX = Util.bind(getX,module);
	boundGetX(); // 81
*   ```
* ### Currying
* bind 的下一个简单用法是产生一个具备默认参数的函数. 这些参数跟在 context 后面，无论何时调用绑定函数， 当绑定函数调用目标函数时会把它们放在参数列表开头，然后才是传递给绑定函数的用户参数
*   ```
*   function list() {
		return Array.prototype.slice.call(arguments);
	}

	var list1 = list(1, 2, 3); // [1, 2, 3]

	//  Create a function with a preset leading argument
	var leadingZeroList = Util.bind(list,undefined, 37);

	var list2 = leadingZeroList(); // [37]
	var list3 = leadingZeroList(1, 2, 3); // [37, 1, 2, 3]
*   ```
*/

/**
* 将fn缓存一段时间后再回调执行
* __Note:__
*
* - 此方法为了避免在 ms 段时间内, 执行 fn 多次. 常用于 resize , scroll , mousemove 等连续性事件中;
* - 当 ms 设置为 -1, 表示立即执行 fn, 即和直接调用 fn 一样;
* @method buffer
* @static
* @param fn {Function} 要缓存的函数
* @param ms=150 {Number} 要缓存多长时间后执行，默认是150ms
* @param context {Object} 函数fn执行时的上下文环境，默认是this
* @return {Function} 返回缓存后的函数对象
* @example
*   ```
*   self.__onResize = Util.buffer(doResize, 100, this);
*   $(window).on("resize", self.__onResize);
*   ```
*/

/**
* 创建一个普通对象或数组的深拷贝, 并且返回
* @method clone
* @static
* @param o {Object} 待拷贝的对象或数组
* @param [filter] {Function} 过滤函数，返回false则不拷贝该元素。传入参数为：
* - 待克隆值为数组, 参数同 [Util.filter()](/5.0/api/classes/Util.html#method_filter) , 上下文对象为全局 window
* - 待克隆值为普通对象, 参数为对象的每个键对应的值, 每个键, 当前对象.(PS:上下文对象为当前对象)
* @return {Object} 拷贝后的新对象
* @example
*   ```
*   var a={x:{y:{z:1}}}
*   var b=Util.clone(a); // => b={x:y:{z:1}} , b!==a
*   var c=Util.clone(a,function(v,k){if(k=="z") return false;}) // => c={x:{y:{}}}
*   ```
*/

/**
* 遍历数组中的每一项, 执行指定方法.
* @method each
* @static
* @param o {Object} 需要遍历的对象或数组
* @param fn {Function} 执行时，接受三个参数：
* - 当 o 为数组时, 参数为当前数组单项值, 当前 index, 数组 o
* - 当 o 为对象时, 参数为当前值 (value), 当前键 (key), 对象 o
* @param [context=window] {Object} fn的上下文对象
* @example
*   ```
var arr = [1, 2, 3, 4, 5],
obj = {
    'hi': 'kissy',
    'bye': 'world'
},
sum = 0;

Util.each(arr, function(item) {
    sum += item;
});
Util.log(sum); // => 15


Util.each(obj, function(v,k) {
    Util.log([v,k]);
});
*   ```
*/

/**
* 判断str是否已suffix结尾
* @method endsWith
* @static
* @param str {String} 查找的字符串
* @param suffix {String} 后缀字符创
* @return {Boolean} str是否以suffix结尾
*/

/**
* 抛出错误异常
* __Note__
*
* - 只有在 debug 模式下并且载入 seed.js, 才会抛出异常. debug 模式的说明请参考 Config
* @method error
* @static
* @param msg {String} 异常信息
*/

/**
* 将字符串经过 html 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt;
* __Note__
*
* - 此函数只会对以下符号进行 escape：`& > < ` / " '`
* @method escapeHTML
* @param str {String} 要显示在页面中的真实内容
* @return {String} 经过 html 转义后的字符串
*/

/**
* 让子类 SubClass 继承父类 ParentClass
* @method extend
* @static
* @param subClass {Function} 将要继承的子类函数
* @param parentClass {Function} 继承自的父类函数
* @param [prototypeMembers] {Object} 需要添加/覆盖的原型成员
* @param [staticMembers] {Object} 需要添加/覆盖的静态成员
* @return subClass {Function} 需要的子类函数
* @example
*   ```
function Bird(name) { this.name = name; }
Bird.prototype.fly = function() { alert(this.name + ' is flying now!'); };

function Chicken(name) {
    Chicken.superclass.constructor.call(this, name);
}
Util.extend(Chicken, Bird,{
    fly:function(){
        Chicken.superclass.fly.call(this)
        alert("it's my turn");
    }
});

new Chicken('kissy').fly();
*   ```
*/

/**
* 遍历数组, 过滤出符合条件的数组项
* @method filter
* @static
* @param arr {Array} 需要遍历的数组
* @param fn {Function} 过滤函数. 执行时, 接收 3 个参数：当前项、当前 index, 数组.
* @param [context=window] fn 执行的上下文对象
* @return {Array} 返回符合过滤函数的新数组
* @example
*   ```
var arr = [1, 2, 3, 4, 5];

var ret = Util.filter(arr, function(item) {
    return item % 2 === 0;
});
Util.log(ret); // => [2, 4]
*   ```
*/

/**
* 在全局作用域下执行代码字符串, 避免 eval 的作用域链
* @method globalEval
* @static
* @param code {String} 代码字符串
*/

/**
* 返回全局唯一 id
* @method guid
* @static
* @param prefix {String} 唯一 id 前缀
* @return {String} 全局唯一 id
*/

/**
* 判断元素 elem 是否在数组 arr 中
* @method inArray
* @static
* @param elem {Any} 任意对象
* @param arr {Array} 数组
* @return {Boolean} 元素 elem 是否在数组 arr 中
*/

/**
* 返回元素 elem 在数组 arr 中的序号
* @method indexOf
* @static
* @param elem {Any} 任意对象
* @param arr {Array} 数组
* @return {Number} 元素 elem 在数组 arr 中的序号
*/

/**
* 判断是否数组
* @method isArray
* @static
* @param o {Any} 判断参数
* @return {Boolean} 是否是数组
*/

/**
* 判断是否布尔值
* @method isBoolean
* @static
* @param o {Any} 判断参数
* @return {Boolean} 是否是布尔值
*/

/**
* 判断是否日期
* @method isDate
* @static
* @param o {Any} 判断参数
* @return {Boolean} 是否是日期
*/

/**
* 判断是否空对象(没有任何可遍历的属性)
* @method isEmptyObject
* @static
* @param o {Any} 判断参数
* @return {Boolean}
*/

/**
* 判断是否函数
* @method isFunction
* @static
* @param o {Any} 判断参数
* @return {Boolean}
*/

/**
* 判断是否有效数值
* @method isNumber
* @static
* @param o {Any} 判断参数
* @return {Boolean}
*/

/**
* 判断是否为对象
* @method isObject
* @static
* @param o {Any} 判断参数
* @return {Boolean}
*/

/**
* 判断是否是普通对象, 通过 {} 或 new FunctionClass/Object() 创建的, 不包括内置对象以及宿主对象.
* @method isPlainObject
* @static
* @param o {Any} 判断参数
* @return {Boolean}
*/

/**
* 判断是否正则表达式
* @method isRegExp
* @static
* @param o {Any} 判断参数
* @return {Boolean}
*/

/**
* 判断是否字符串
* @method isString
* @static
* @param o {Any} 判断参数
* @return {Boolean}
*/

/**
* 判断参数是否为浏览器 window
* @method isWindow
* @static
* @param o {Any} 判断参数
* @return {Boolean}
*/

/**
* 将对象的所有属性名作为数组返回
* @method keys
* @static
* @param o {Object} 需要遍历的对象
* @return {Array} 返回的数组
*/

/**
* 返回元素 elem 在数组 arr 中最后出现的序号
* @method lastIndexOf
* @static
* @param elem {Any} 任意对象
* @param arr {Array} 数组
* @return {Number}
*/

/**
* 延迟执行指定函数 fn
* @method later
* @static
* @param fn {Function} 延迟执行的函数
* @param when {Number} 延迟时间，单位是ms
* @param [periodic=false] {Boolean} 是否周期执行
* @param [o] {Object} fn的上下文对象
* @param [data] {Object|Array} 传递的参数. 可以为单个对象, 最后会转换成数组, 依次传递给执行函数.
* @return {Object} timer 对象.包含属性：
* - `interval` 是否周期执行
* - `cancel` 取消定时器
* @example
*   ```

Util.later(function(data) {
    S.log(data);
}, 0, false, null, 'I am later data.');
*   ```
*/

/**
* 输出调试信息
* @method log
* @static
* @param msg {String} 调试信息
* @param cat="log" {String}  调试信息类别. 可以取 info, warn, error, dir, time 等 console 对象的方法名, 默认为 log.
* @param src {String} 调试代码所在的源信息
* __Note__
* 只有在 debug 模式下并且载入 seed.js, 才会输出调试信息. debug 模式的说明请参考 Config
*/

/**
* 将对象 o 转换为数组.
* @method makeArray
* @static
* @param o {Object} arguments, NodeList 等 array-like 对象或单个对象
* @return o {Array} 转换后的数组
*/

/**
* 创建一个新数组, 数组结果是在对每个原数组元素调用指定函数的返回值.
* @method map
* @static
* @param arr {Array} 需要遍历的数组
* @param fn {Function} 能够根据原数组当前元素返回新数组元素的函数
* @param [context=window] 执行 fn 时的 this 值
* @return {Array} 返回符合根据指定函数调用得到新数组
*/

/**
* 将多个对象的成员合并到一个新对象上. 参数中, 后面的对象成员会覆盖前面的.
* @method merge
* @static
* @param s1 {Object} 属性源
* @param [...] 属性源
* @return {Object} 合并属性后的新对象
* @example
*   ```
var a = { a: 'a' },
b = { b: 'b' },
c = { b: 'b2', c: 'c' };

var o = Util.merge(a, b, c);
Util.log(o.a); // => 'a'
Util.log(o.b); // => 'b2'
Util.log(o.c); // => 'c'
*   ```
*/

/**
* 将 supplier 对象的成员复制到 receiver 对象上.
* @method mix
* @static
* @param receiver {Object} 属性接受者对象
* @param supplier {Object} 属性来源对象
* @param [overwrite=true] 是否覆盖接受者同名属性
* @param whitelist {Array<String>} 属性来源对象的属性白名单, 仅在名单中的属性进行复制
* @param deep {Boolean} 是否进行深度 mix (deep copy)
* @return {Object} receiver 属性接受者对象
* __Note__
* receiver 会被改变，如果想要保留原始的 receiver ，可以使用 Util.merge()
* `var object=S.merge(object1,object2);`
*
* S.mix 默认不是递归进行的. 如果其中一个属性为对象或者数组，那么他将会被接下来对象的同名属性对应的值所代替，即值不会被合并。 如果设置了参数 deep = true ，那么会对数组和简单对象( `Util.isPlainObject()` )递归合并
* supplier undefined 的属性值不会被复制，不过对象从原型继承下来下的值则会被复制
* 该方法仅适用于 javascript 对象，不要再浏览器对象上调用，例如 node.style
*
* mix 支持函数作为白名单参数
*   ```
var a = {},
b = {
    b1: 1,
    b2: {
        b2: 22
    }
};

Util.mix(a, b, {
    deep: true,
    whitelist: function (name, v) {
        if (name == 'b1') {
            return v;
        }
        if (this.b1 && name == 'b2') {
            return v;
        }
        return undefined;
    }
});
*   ```
* @example
* 简单 mix:
*
*   ```
var r = { a: 'a', b: 'b' };

Util.mix(r, { c: 'c' });
Util.log(r.c); // => 'c'

Util.mix(r, { a: 'a2' }, false);
Util.log(r.a); // => 'a'

Util.mix(r, { e: 'e', f: 'f' }, true, ['f']);
Util.log(r.e); // => undefined
Util.log(r.f); // => 'f'
*   ```
*
* 深度 mix:
*   ```
var object1 = {
  apple: 0,
  banana: {weight: 52, price: 100},
  cherry: 97
};
var object2 = {
  banana: {price: 200},
  durian: 100
};

//merge object2 into object1, recursively 
Util.mix(object1,object2,undefined,undefined,true);

Util.log(object1); // => { apple: 0, banana: { weight: 52, price: 200 }, cherry: 97, durian: 100 }
*   ```
* 该方法在 KISSY 里具有非常重要的地位. JavaScript 是一门动态语言, 利用 mixin 特性, 可以很方便的实现特性的静态复制和动态修改.
*/

/**
* 根据参数创建命名空间对象
* @method namespace
* @static 
* @param n1 {String}  命名空间字符串, 如 "fp.search" 或 "fp.ad"
* @param [global=false] 是否第一个点之前的字符串作为全局变量, 默认 false
* @return {Object} 最后创建的命名空间对象
*/

/**
* 返回 new Date().getTime()
* @method date
* @static 
* @return {Number}
*/

/**
* 将对象 o 转换为参数字符串, 用于发送 http 请求
* @method param
* @static 
* @param o {Object} 参数键值对对象
* @param [seq="&"] {String} 参数间分隔符, 默认 &
* @param [eq="="] {String} 参数与参数值间的分隔符, 默认 =
* @param [arr=true] {Boolean} 参数值为数组时, 参数键是否加 [] 即 %5B%5D , 默认 true
* return {String} 可用于发送请求的参数字符串
* @example
* ```

Util.param({ foo: 1, bar: 2 }); // => foo=1&bar=2
Util.param({ foo: 1, bar: [2, 3] }); // => foo=1&bar%5B%5D=2&bar%5B%5D=3
Util.param({ foo: 1, bar: [2, 3] },'&','=',false); // => foo=1&bar=2&bar=3
Util.param({ foo: '', bar: 2 }); // => foo=&bar=2
Util.param({ foo: undefined, bar: 2 }); // => foo&bar=2
*   ```
*/

/**
* 将字符串转化为 xml 文档
* @method parseXML
* @static 
* @param str {String} 有效的 xml 文档字符串
* return {XML} xml 文档
* @example
*   ```
var xml = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>";
var xmlDoc=Node.all(Util.parseXML(xml));
alert(xmlDoc.one("title").text()); // => RSS Title
*   ```
*/

/**
* 在 DOM 加载完毕时执行回调函数fn
* @method ready
* @static 
* @param fn {Function} 回调函数
*/

/**
* 从左向右对每个数组元素调用给定函数，并把返回值累积起来
* @method reduce
* @static 
* @param arr {Array} 需要遍历的数组
* @param fn {Function} 在每个数组元素上执行的函数
* @param initialValue {Object}  初次执行 fn 时的第一个参数值，如果不指定则为第一个元素值，后续从第二个元素开始遍历
* @return 累计值
* __Note__
* reduce 对数组中的每个元素执行 fn 函数，该 fn 接受四个参数：initialValue (或者上次调用 fn 的返回值)， 数组的当前元素，数组的当前位置以及用于遍历的数组.
* 调用 reduce 类似于：`Util.reduce([],function(previousValue, currentValue, index, array){});`
* 当第一次调用 fn 时 :
  - 如果调用 reduce 时没有设定 initialValue，previousValue 和 currentValue 是数组的前两个值.
  - 如果调用 reduce 时设定了 initialValue，那么 previousValue 和 initialValue 相等 ，而 currentValue 则和数组的第一个元素相等.
* @example
*   ```
Util.reduce([0,1,2,3,4],function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
});

// First call
previousValue = 0, currentValue = 1, index = 1

// Second call
previousValue = 1, currentValue = 2, index = 2

// Third call
previousValue = 3, currentValue = 3, index = 3

// Fourth call
previousValue = 6, currentValue = 4, index = 4

// array is always the object [0,1,2,3,4] upon which reduce was called

// Return Value: 10
*   ```
*
*   ```
Util.reduce([0,1,2,3,4],function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
}, 10);

// First call
previousValue = 10, currentValue = 0, index = 0

// Second call
previousValue = 10, currentValue = 1, index = 1

// Third call
previousValue = 11, currentValue = 2, index = 2

// Fourth call
previousValue = 13, currentValue = 3, index = 3

// Fifth call
previousValue = 16, currentValue = 4, index = 4

// array is always the object [0,1,2,3,4] upon which reduce was called

// Return Value: 20
*   ```
*
* ### 得到数组的值总和
* `var total = Util.reduce([0, 1, 2, 3],function(a, b){ return a + b; }); // total == 6`
*
* ### 嵌套数组平坦化
*   ```
var flattened = Util.reduce([[0,1], [2,3], [4,5]],function(a,b) {
  return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]
*   ```
*/

/**
* 判断 str 是否以 prefix 开头
* @method startsWith
* @static 
* @param str {String} 查找字符串
* @param prefix {String} 前缀字符串
* @return {Boolean} str 是否以 prefix 开头
*/

/**
* 将字符串中的占位符替换为对应的键值
* @method substitute
* @static 
* @param str {String}  包含数据占位符的模板字符串, 占位符用 {} 包起来
* @param o {Object} 数据
* @return {String} 将模板和数据结合起来的最终字符串
* @example
*   ```
var str = '{name} is {prop_1} and {prop_2}.',
obj = {name: 'Jack Bauer', prop_1: 'our lord', prop_2: 'savior'};

Util.substitute(str, obj); // => 'Jack Bauer is our lord and savior.'
*   ```
*/

/**
* ms 时间内只执行 fn 一次, 即使这段时间内 fn 被调用多次.
* @method throttle
* @static
* @param fn {Function} 要缓存的函数
* @param ms {Number} 要缓存多长时间后执行, 默认是 150 ms;
* @param context {Object} 函数 fn 要执行时的上下文环境, 默认是 this
* @return {Function} 返回缓存后的函数对象
* __Note__
* - 当 ms 设置为 -1, 表示立即执行 fn, 即和直接调用 fn 一样;
* - throttle 和 buffer 的区别在于, 前者表示间隔内的函数触发被忽略, 后者表示间隔内的触发被放到下个间隔触发
* @example
*   ```
 function sayHi() {
    alert('hi');
 }

say = Util.throttle(sayHi, 300, this);
say();              // 忽略
Util.later(say, 200);  // 忽略
Util.later(say, 350);  // 超过300ms后, 终于执行
*   ```
*/

/**
* 去除字符串两端的空白字符
* @method trim
* @static
* @param str {String} 原始字符串
* @return {String} 去除空白后新的字符串
*/

/**
* 将字符串中的 html 实体字符替换成对应字符
* @method unEscapeHTML
* @static
* @param str {String} 包含 html 实体字符的字符串
* @return {String} 替换实体字符后的字符串
* @example
* `Util.unEscapeHTML("&lt;a&gt;x&lt;/a&gt;"); // =>  "<a>x</a>"`
* __Note__
* 该函数只会 unescape 以下字符序列（正则式
* `&amp; &lt; &gt; &#x60; &#x2F; &quot; &#x27; &#\d{1,5}`
*/

/**
* 返回一个新数组, 仅包含 arr 去重后的值
* @method unique
* @static
* @param arr {Array}  包含重复元素的数组
* @param keepLast {Boolean} 遇到重复值是保留第一次出现还是保留最后一次出现的元素
* @return {Array} 包含 arr 去重后的数组
*/

/**
* 将参数字符串 str 还原为对象
* @method unparam
* @static
* @param str {String} 参数字符串
* @param [seq="&"] {String} 参数间分隔符, 默认 &
* @param [eq="="] {String}  参数与参数值间的分割符, 默认 =
* @return {Object} 参数的对象表示
* @example
*   ```

Util.unparam('foo=1&bar=2'); // => { foo: 1, bar: 2 }
Util.unparam('foo=%81%47'); // gbk 编码 => { foo: "%81%47" } 而不是 {foo: "丢"}
Util.unparam('foo=1&bar=2&bar=3'); // => { foo: 1, bar: [2, 3] }
Util.unparam('foo=1&bar%5B%5D=2&bar%5B%5D=3'); // => { foo: 1, bar: [2, 3] }
*   ```
*/
 