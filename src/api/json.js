/**
@module json
*/

/**
@class Json
@static
*/

/**
将字符串解析为json对象
@method parse
@static
@param text {String} 字符串
@param [reviver] 过滤器，可选
@return {Object} 解析之后返回传入数据的一个对象表示
@example
注意 json 字符串的格式，属性必须要双引号括起来
```
require(['json'],function(JSON){
	JSON.parse('{"x":1}'); // => ok
	JSON.parse("{'x':1}"); // => exception : SyntaxError
	JSON.parse("{x:1}"); // => exception : SyntaxError
})

```
*/

/**
将json对象或者数组转化为字符串，序列化器
@method stringify
@static
@param value {Object|Array} 要序列化的对象
@param [replacer] {Function|Array} 替换函数，可选
@param [space] {String|Number} 缩进说明符，可选
@return {String} 返回JSON字符串
@example
```
JSON.stringify({"x":1}); // => '{"x":1}'
JSON.stringify({x:1}); // => '{"x":1}'
JSON.stringify({'x':1}); // => '{"x":1}'
```
*/