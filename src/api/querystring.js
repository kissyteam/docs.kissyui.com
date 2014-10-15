/**
提供JSON对象与querystring相互转换的方法
@module querystring
*/

/**
提供JSON对象与querystring相互转换的方法

使用示例：

	require(['querystring'], function(Querystring){
	    var obj = {
			foo : 1,
			bar : [2, 3]	
	    };
	    Querystring.stringify(obj); // foo=1&bar%5B%5D=2&bar%5B%5D=3 

	    var str = 'section=blog&tag=js&tag=doc';
	    Querystring.parse(str);  // {section: 'blog', tag: ['js', 'doc']}
	});
	
@class Querystring
@static
*/

/**
将一个JSON对象/数组转为querystring
@method stringify
@param o {Object|Array} JSON对象或数组
@param [sep='&'] {String} 每一对键值之间的分隔符。默认为 '$'
@param [eq='='] {String} key 与 value 之间的分隔符。默认为 '='
@param [serializeArray=true] {Boolean} 如果含有数组，是否需要在数组key后加上 [] 标识。默认为true
@return {String}
*/

/**
将querystring转为JSON对象/数组
@method parse
@param str {String} querystring
@param [sep='&'] {String} 每一对键值之间的分隔符。默认为 '$'
@param [eq='='] {String} key 与 value 之间的分隔符。默认为 '='
@return {Object|Array} JSON对象或数组
*/