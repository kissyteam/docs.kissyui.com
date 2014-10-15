/**
@module xtemplate/runtime
*/

/**
@class RunTime
@namespace XTemplate
@constructor
@param tpl {String|Function} 编译过的模板函数
@param config {Object}
@example
```
require(['xtemplate'],function(XTemplate){
    // use XTemplate
});

// 参数只能是离线编译过的模板
require(['xtemplate/runtime'],function(XTemplateRunTime){
    // use XTemplateRunTime
});
```
### Note
如果引用的是xtemplate/runtime模块，参数则只能是离线编译过的模板，其他配置和方法一样
*/


/**
局部自定义命令的键值对，例如
```
{
    'toLowerCase':function( scopes,option ){
        return option.params[0].toLowerCase();
    }
}
```
@attribute command {Object}
*/

/**
模版名称，可在 chrome dev tools 中看到以该值为名称的模板文件代码
@attribute name {String} 
*/

/**
{Boolean} 是否缓存生成的模板函数，默认 true
@attribute cache {Boolean}
@default true
*/


/**
删除指定的局部命令
@method removeCommand
@param commandName {String} 命令名称
*/

/**
添加局部命令
@method addCommand
@param commandName {String} 命令名称
@param fn {Function} 命令定义
*/


/**
编译模板
@method compile
@param subTplName  {String} 子模板名称
@return {Function} 编译过的模板函数
*/

/**
渲染数据到模板
@method render
@param data {Object}  数据对象
@return {String} 数据融合模版后的字符串
*/

/**
添加全局命令
@method addCommand
@static
@param commandName {String} 命令名称
@param fn {Function} 命令定义
*/
