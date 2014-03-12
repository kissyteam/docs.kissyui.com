/**
* loader模块,定义KISSY初始对象及模块化机制用到的方法，所有方法都通过KISSY直接引用
* @module loader
*/

/**
* 弥补 javascript 语言机制的不足, 提供类似其他语言原生的模块化机制.
* Loader中定义的所有方法都直接通过KISSY对象直接引用，如 `KISSY.add`
* @Class Loader
* @static
*/

/**
* 添加模块
* @method add
* @static
* @param [name] {String} 模块名
* ### Note
* 如果模块名name省略不写，部署阶段需要使用 [KISSY Module Compiler](https://github.com/daxingplay/grunt-kmc)
* @param fn {Function} 模块定义函数
* @param [config] {Object} 模块的一些格外属性
* @param [config.requires] {Array} 模块的一些依赖项, 如果需要载入 css 则, 数组项为 .css 结尾名字
* @example
* 
* - 添加模块
* ```
KISSY.add("yourmod",function(S){},
    {
        requires:['depMod1','depMod2','./mod.css'] // 该模块的一些依赖项,
                                                   // 注意 css 为和模块 js 同目录下的 mod.css
    }
);
* ```

* - 添加匿名模块
* ```
KISSY.add(function(S){},
    {
        requires:['depMod1','depMod2','./mod.css'] // 该模块的一些依赖项,
                                                   // 注意 css 为和模块 js 同目录下的 mod.css
    }
);
* ```

* - 如果依赖的模块 depMod1 以及 depMod2 的定义函数有返回值, 例如
* ```
// depMod11.js
KISSY.add(function(){
    function Mod(){}
    return Mod;
});
// depMod2.js
KISSY.add(function(){
    function Mod(){}
    return Mod;
});
* ```
* 那么该返回值会作为参数传入依赖 depMod1 以及 depMod2 的模块的定义函数, 例如
* ```
KISSY.add(function(S,DepMod1,DepMod2){
    //use DepMod1 to refer depmod1's return value
},{requires:["depmod1","depmod2"]});
* ```

* - 当模块名称 name 为包内模块,则requires的模块名称可使用相对路径来引入包内其他模块
* ```
// tc/mods/mod1.js
// 依赖于 tc/mods/mod2
KISSY.add(function(){},{requires:['./mod2']});
* ```

* - 也支持commonjs 的模块书写方式，如：
* ```
/ a/b.js
KISSY.add(function(S,require,exports,module){
    var c = require('a/c');
    return c; // or module.exports=c;
});
* ```

* ### Note
* * #### 压缩模块
* 若线上环境使用 kissy-min.js , 则请使用 closure compiler 对所有模块文件进行压缩, 例如 mod.js 压缩为 mod-min.js , 放在模块文件的同级目录下.
* * #### 代码更新机制
* 由于动态加载的 js 文件不是写在页面中, 所以不能从页面添加时间戳, 并且1.2 loader新增的约定加载也不能配置具体模块文件路径, 因此 1.2 loader 提供了在包级别添加时间戳的机制.如：
* ```
KISSY.config({
    packages:{
        //包名
        "1.2":{
            base: "http://xx.com/"
        }
    }
});
* ```
* 当更改包内模块后, 只需修改tag属性.
* ```
KISSY.config({
    packages:{
    //包名
        "1.2":{
            tag:"20110323",
            base:"http://xx.com/"
        }
    }
});
* ```
* 那么下载动态加载的 js 文件路径后面会自动加上： ?t=20110323.
* > 也可以不修改时间戳 tag 而是直接修改 path , 这样的话每次更新都需要新建一个目录包括更新后的全部代码,不建议这样
* * #### 静态部署
* 部署时也可以不采用动态加载, 仅仅将 kissy loader 作为代码组织的一种方式, 将所有的模块打包到一个文件静态引入放在页面中, 当使用 KISSY.use 时如果模块已经过静态引入在页面中, 则不会发送请求.
*/

/**
* 设置或获取 KISSY 配置参数
* @method config
* @static
* @param config {Object} KISSY配置参数
* @param [config.debug] {Boolean} 是否开启调试模式
* @param [config.group] {String} 所有包的默认组配置，group的介绍详见下面的Note:group介绍
* @param [config.base] {String} KISSY 框架所在的基地址
* @param [config.comboMaxUrlLength=1024] {Number} Combo url 的最长长度，默认 1024
* @param [config.comboPrefix="??"] {String} Combo 前缀，默认 ”??”
* @param [config.comboSep=","] {String} Combo 分隔符，默认 ”,”
* @param [config.tag] {String}  KISSY 内置模块请求的时间戳
* @param [config.combine=false] {Boolean} 是否开启自动 combo 模式，默认 false 不开启. 自动 combo 模式要求 use 前配置好依赖关系
* @param [config.packages] {Object} 以包名为键，包配置对象为值的键值对对象
* ### Note
* 包配置对象包括：
* - group String类型 表示包所属的组名
* - debug Boolean类型 包内的脚本请求是是否加 -min 后缀，默认和 KISSY.config(“debug”) 相同
* - tag 类型字符串, 最好为时间戳, 用于刷新客户端本包的模块文件缓存
* - combine 类型Boolean, 如果总和 combine 设置为 true，但是单个包 combine 设置为 false，则该包内文件不进行自动 combo
* - ignorePackageNameInUri 类型Boolean, 默认 false. 是否在请求的模块路径中省去 package name. 例如 use('xx/a') 配置 xx package 的 base 为 `http://test.com/` 则设置 ignorePackageNameInUri 后请求地址为： `http://test.com/a.js`
* - 类型字符串, 表示包所在的 url 路径, 相对路径表示相对于当前页面路径.
* - path 作用同 base 配置
* - charset 类型字符串, 表示宝贝所有模块定义文件的编码格式, 默认 utf-8

* @param [config.modules] {Object} 以单个模块为键，单个模块配置对象为值的键值对对象
* ### Note
* 单个模块配置对象包括：
* - requires 类型String,该模块的依赖模块名数组。当设置 combine 为 true 时需要配置，否则不建议配置.
* - tag 类型 String，单个模块的时间戳。仅在 combine 为 false 时生效。 combine:true 时取对应包的 tag.
* 
* @example
* * #### 总配置范例概览
* ```
KISSY.config({
    // 开启自动 combo 模式
    combine:true,
    // kissy 库内置模块的时间戳
    tag:'2012',
    // kissy 的基准路径
    base:'http://x.com/a',
    packages:{
        x:{
            // x 包的基准路径
            base:'http://x.com/biz/',
            // x 包的时间戳
            tag:'x',
            // 开启 x 包 debug 模式
            debug:true
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
KISSY.config({
    packages:{
        // 包名
        "tc": {
            tag:"20110323", // 动态加载包内的模块js文件时,
                            // 自动加上 ?t=20110323, 用于文件更新
            base:"../", // 包对应路径, 相对路径指相对于当前页面路径
            charset:"gbk" // 包里模块文件编码格式
        }
    }
});
* ```
*
* ### Note : group组介绍概览
* - #### 简单使用(如果想将多个包combo到一起，需要通过配置参数group来实现。例如，对于以下包进行combo：)
* ```
KISSY.config({
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
KISSY.config({
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
*
* - #### 和 kissy 一起 combo
* 如果你的应用代码和 kissy 部署在同一台机器上，那么应用代码还可以和 kissy 一起 combo
* > KISSY.config('group','tb');   //// 所有包都 combo 到 tb 组
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
* 使用模块,和KISSY.add一起使用, 形成KISSY的模块加载体系
* @method use
* @static
* @param modName {String|Array} 以 , 分割的模块名称集合字符串,例如 KISSY.use("custommod,custommod2");
* @param callback {Object} 回调对象，包括成功与失败回调配置
* @param callback.success {Function} 当 modNames 中所有模块加载完毕后执行的函数
* @param callback.error {Function} 当前 use 失败时调用的函数，参数为失败的模块对象
* @example
* ```
KISSY.use("depMod1,depMod2",function(S,DepMod1,DepMod2){
});

KISSY.use("depMod1,depMod2",{
    success:function(S,DepMod1,DepMod2){
    },
    error:function(){
        var errorMods = KISSY.makeArray(arguments);
    }
});
* ```
* ### Note
* 如果使用经过配置的包内的模块, 则这些包内模块不需要事先注册, 直接 use 即可, 如果模块名以 / 结尾, 则自动加后缀 index , 例如 use("mods/m1/") 相当于 use("mods/m1/index") , 即自动加载 m1 目录下的 index.js
*/

/**
* 阻塞加载 css 模块或 js 模块依赖的 css 模块, 和 KISSY.add 中的 require 配置一起使用.
* @method importStyle
* @param modName {String|Array} 以 , 分割的 js 模块或 css 模块名称集合字符串,例如 KISSY.use("mod1,mod2/xx.css");
* ### Note
* ImportStyle是KISSY的模块样式引入工具。 提供页面上使用的组件列表及组件的依赖关系，ImportStyle可以帮助你阻塞地加载所有依赖的样式。 如果你的应用需要颗粒化地做按需加载，ImportStyle会是非常顺手的工具。
* - 先决条件
* 头部引入`<script src='http://g.tbcdn.cn/kissy/k/1.4.2/??seed-min.js,import-style-min.js'></script>`
* - 使用指南

	* ```
	KISSY.config('modules', {
	  'components/nav/index': {requires: ['components/nav/index.css']},
	  'components/layout/index': {requires: ['components/layout/index.css']},
	  'components/home/index': {requires: ['components/nav/index','components/layout/index']}
	});

	KISSY.config({
	  'combine':true,
	  'packages':[{
	    'name':'components',
	    'base':'http://assets.etao.net/apps/e/hotel/130716',
	    'debug':'true'
	  }]
	});

	//下面是要我们手工维护的模块列表
	KISSY.importStyle('components/home/index');
	* ```
*/

/**
* 添加模块
* @method require
* @static
* @param name {String} 模块名
* @example
* require 是一个语法糖，提供了快捷引用已经注册的模块。
* ```
KISSY.add("yourmod",function(S){
        var Mod1 = S.require('depMod1');
        var Mod2 = S.require('depMod2');
    },{
        requires:['depMod1','depMod2']
    }
);
* ```
*/