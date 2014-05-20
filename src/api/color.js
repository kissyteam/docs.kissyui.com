/**
颜色封装
@module color
*/

/**
@class Color
@constructor
@param config {Object}
*/


/**
alpha 值
@attribute a {Number} 
*/

/**
red 值
@attribute r {Number} 
*/

/**
green 值
@attribute g {Number} 
*/

/**
blue 值
@attribute b {Number} 
*/

/**
得到当前颜色属性对应的 hsl 表示
@method getHSL
@return {Object}
*/

/**
得到当前颜色属性对应的 hsl 表示字符串
@method toHSL
@return {String}
*/

/**
得到当前颜色属性对应的 hsla 表示字符串
@method toHSLA
@return {String}
*/

/**
得到当前颜色属性对应的 rgb 表示字符串
@method toRGB
@return {String}
*/

/**
得到当前颜色属性对应的 rgba 表示字符串
@method toRGBA
@return {String}
*/

/**
得到当前颜色属性对应的 16 进制表示字符串
@method toHex
@return {String}
*/

/**
得到当前颜色属性对应的 hsv 表示
@method getHSV
@return {Object}
*/

/**
根据 hsv 对象修改当前颜色实例
@method setHSV
@param hsv {Object} hsv 对象
*/

/**
根据 hsl 对象修改当前颜色实例
@method setHSL
@param hsv {Object} hsl 对象
*/

/**
从字符串表示的颜色值中获取颜色对象
@method parse
@static
@param str {String} 支持格式： ‘#rrggbb’ ‘#rgb’ or ‘rgb(r,g,b)’ ‘rgba(r,g,b,a)’
@return {Object}
*/

/**
从 hsl 对象中生成颜色实例
@method fromHSL
@static
@param cfg {Object}
@return {Object}
*/