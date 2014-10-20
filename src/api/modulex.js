/**
* modulex 是新一代的模块加载器，可独立使用。
* @module modulex
*/

/**
* modulex 是新一代的模块加载器，可单独使用。
* 实际上，KISSY的种子文件 seed.js 是由 modulex + feature + ua + meta 四个部分组成的。seed.js是KISSY的种子文件，引用它则可以方便使用KISSY提供的各种模块，如 anim , dom , event-dom 等。而 modulex 是一个模块加载器，如果你只是需要模块加载功能，也可以直接使用 modulex。更多信息可以查看 [modulex on github](https://github.com/kissyteam/modulex)。modulex 始终作为一个全局对象存在页面的生命周期。
* @Class Modulex
* @static
*/

/**
* 注册模块
* @method define
* @static
* @example

define 函数可用 commonjs 规范或 kmd(kissy module defination) 规范来使用，kmd是类似amd的一种模块定义规范。如下：

#### commonjs规范写法

### `define([name], [deps], factory)`

- name {String} 模块名称，可选
- deps {Array} 模块依赖，可选
- factory {Function|Object|String} 模块的主内容/逻辑。当为函数时，有三个参数 require,exports,module 。函数返回值就是注册的模块接口。

示例1：
```
    define('learnkissy', ['node'], function(require, exports, module){
        var $ = require('node');

        module.exports = function(){
            console.log('Hi, KISSY');
        }
    });
```
示例2：

开发阶段不写上模块名称name和模块依赖deps，在发布到线上前在使用 [Kissy Mobule Compiler](https://github.com/daxingplay/kmc)  来生成模块名称和提取模块依赖。
```
    define(function(require, exports, module){
        var $ = require('node');

        module.exports = function(){
            console.log('Hi, KISSY');
        }
    });
```
#### kmd规范写法，类似amd

### `define([name], factory, [deps])`

- name {String} 模块名称，可选
- factory {Function|Object|String} 模块的主内容/逻辑。当为函数时，参数依次是模块依赖对象配置的模块接口。函数返回值就是注册的模块接口。
- deps {Object} 模块依赖对象配置

示例1：
```
    define('learnkissy', function($, Cookie){
        return function(){
            console.log('Hi, KISSY');
        }
    },{
        requires : ['node', 'cookie']
    });
```

*/

/**
* 设置或获取配置参数
* @method config
* @static
* @param config {Object} 配置参数
* @param filter {String} 文件名后缀，如 a.js -> a-debug.js
* @param [config.group] {String} 所有包的默认组配置，group的介绍详见下面的Note:group介绍
* @param [config.base] {String} 整个类库所在的基地址
* @param [config.comboMaxUrlLength=1024] {Number} Combo url 的最长长度，默认 1024
* @param [config.comboPrefix="??"] {String} Combo 前缀，默认 ”??”
* @param [config.comboSep=","] {String} Combo 分隔符，默认 ”,”
* @param [config.tag] {String}  KISSY 内置模块请求的时间戳
* @param [config.combine=false] {Boolean} 是否开启自动 combo 模式，默认 false 不开启. 自动 combo 模式要求 use 前配置好依赖关系
* @param [config.packages] {Object} 以包名为键，包配置对象为值的键值对对象
* __Note__
*
* 包配置对象包括：
* - group String类型 表示包所属的组名
* - filter {String} 文件名后缀，如 a.js -> a-debug.js
* - tag 类型字符串, 最好为时间戳, 用于刷新客户端本包的模块文件缓存
* - combine 类型Boolean, 如果总和 combine 设置为 true，但是单个包 combine 设置为 false，则该包内文件不进行自动 combo
* - 类型字符串, 表示包所在的 url 路径, 相对路径表示相对于当前页面路径.
* - path 作用同 base 配置
* - charset 类型字符串, 表示宝贝所有模块定义文件的编码格式, 默认 utf-8

* @param [config.modules] {Object} 以单个模块为键，单个模块配置对象为值的键值对对象
* __Note__
*
* 单个模块配置对象包括：
* - requires 类型String,该模块的依赖模块名数组。当设置 combine 为 true 时需要配置，否则不建议配置.
* - alias {String|Array} 模块别名，当为数组时，合并数组中所有模块返回。
* - tag 类型 String，单个模块的时间戳。仅在 combine 为 false 时生效。 combine:true 时取对应包的 tag.
* 
* @example
* * #### 总配置范例概览
* ```
require.config({
    // 开启自动 combo 模式
    combine:true,
    // kissy 库内置模块的时间戳
    tag:'2014',
    // kissy 的基准路径
    base:'http://x.com/a',
    packages:{
        x:{
            // x 包的基准路径
            base:'http://x.com/biz/',
            // x 包的时间戳
            tag:'x',
            // 添加后缀-debug
            filter:debug
        },
        y:{
           // y 包的基准路径
           base:'http://x.com/biz/',
           // y 包不开启自动 combo
           combine:false
           // 不配置 tag，则取 kissy 内置模块的时间戳
        }
    },
    modules:{
        "x/b1":{
            // "x/b1" 模块的依赖信息
            requires:["x/b2","x/b3"]
        },
        "y/b2":{
            // y/b2 模块单独的时间戳
            tag:'234'
        }
    }
});
* ```

* * #### packages 范例: 包配置
* ```
require.config({
    packages:{
        // 包名
        "tc": {
            tag:"20141015", // 动态加载包内的模块js文件时,
                            // 自动加上 ?t=20141015, 用于文件更新
            base:"../", // 包对应路径, 相对路径指相对于当前页面路径
            charset:"gbk" // 包里模块文件编码格式
        }
    }
});
* ```
*
* __Note : group组介绍概览__

* - #### 简单使用(如果想将多个包combo到一起，需要通过配置参数group来实现。例如，对于以下包进行combo：)
* ```
require.config({
	packages:{
		"pkg-a": {
		    base: "http://example.com/pkg-a",
		    group: "group1",
		    combine: true,
		    tag: "20120222"
		},
		"pkg-b": {
		    base: "http://example.com/pkg-b",
		    group: "group1",
		    combine: true,
		    tag: "20130303"
		},
		"pkg-c": {
		    base: "http://example.com/pkg-c",
		    combine: true,
		    tag: "20111111"
		}
	}
})
* ```
* 由于pkg-a和pkg-b的group设置为”group1”，则KISSY会对这两个包的模块进行combo。而pkg-c则单独combo。产生URL如下：
* ```
http://example.com/??pkg-a/mod1.js,pkg-a/mod2.js,pkg-b/mod1.js,...?t=-389697156.js
http://example.com/pkg-c/??mod1.js,...?t=20111111.js
* ```
* 其中，时间戳?t=-389697156.js是根据pkg-a和pkg-b的时间戳tag来计算的。如果修改了其中一个包的时间戳，则combo后的时间戳也会变化。
*
* - #### 容错
*   极端情况下，即使要combo的包路径path没有统一的前缀，也没有关系，KISSY可以自动识别和容错，分别对两个包进行combo。例如：
* ```
require.config({
	packages:{
		"pkg-a": {
		    base: "http://example.com/pkg-a",
		    group: "group2",
		    combine: true,
		    tag: "20120222"
		},
		"test": {
		    base: "http://g.tbcdn.cn",
		    group: "group2",
		    combine: true,
		    tag: "20130303"
		}
	}
})
* ```
* combo后的URL如下：
* ```
http://example.com/pkg-a/??mod1.js,mod2.js,...
http://g.tbcdn.cn/test/??mod1.js,...
* ```

*/

/**
* 设置或获取 KISSY 配置参数
* @method config
* @static
* @param name {String} 参数名称. 取值范围参见上面函数
* @param value 参数值. 如果不设置则返回参数名称对应的参数值
* @return {Any} 如果设置了参数值无返回。否则返回参数名称对应的参数值.
*/

/**
* 动态加载目标地址的资源文件
* @method getScript
* @static
* @param url {String} js/css 的资源地址
* @param config {Object} 配置对象
* @param config.charset {String}  资源文件的字符编码
* @param config.success {Function} 资源加载成功后回调函数
* @param config.error {Function} 超时或发生错误时回调函数. 当资源文件为 css 文件时不支持
* @param config.timeout {Number}  单位为秒, 默认无限大. 超时后触发 error 回调. 当资源文件为 css 文件是不支持
* @return {HTMLElement} 创建的 link 节点或 script 节点
*/

/**
* 引用模块
* @method require
* @static
* @param modNames {Array} 如 require(['dom', 'anim'])
* @param callback {Object} 回调对象，包括成功与失败回调配置
* @param callback.success {Function} 当 modNames 中所有模块加载完毕后执行的函数
* @param callback.error {Function} 当前 require 失败时调用的函数，参数为失败的模块对象
* @example
示例1：

* ```
require(['depMod1','depMod2'],function(DepMod1,DepMod2){
});

require(['depMod1','depMod2'],{
    success:function(DepMod1,DepMod2){
    },
    error:function(){
        
    }
});
* ```

在define中异步引用模块 示例：
    
        define(function(require, exports, module){
            exports.onClick = function(){
                var modsArr = ['mod/a', 'mod/b'];
                require(modsArr, function(A, B){
                    //when mod/a , mod/b loaded...
                    //your code here
                });
            }
        });

* __Note__
*
* 如果使用经过配置的包内的模块, 则这些包内模块不需要事先注册, 直接 require 即可, 如果模块名以 / 结尾, 则自动加后缀 index , 例如 require(["mods/m1/"]) 相当于 require(["mods/m1/index"]) , 即自动加载 m1 目录下的 index.js
*/