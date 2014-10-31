# 快速开始

## 1，引入种子文件

	<script src="//g.alicdn.com/kissy/k/5.0.0/seed.js" data-config="{combine:true}"></script>

种子文件是一个**非常小**的 JS 文件，通过他可以动态加载 KISSY 的模块文件，因为体积很小，推荐将种子文件至于`<head>`标签内。
`data-config="{combine:true}"` 表示启用服务器 combo 机制，可用于减少网络请求数目。
 
## 2，开始使用

	// 使用模块
	require(['dom'], function(Dom){
		//装载了 dom 模块，并处于可用状态，可以通过 Dom 调用这个模块提供的api
		//Your Code here...
	});

注：如果你是KISSY的老用户，曾经使用过 KISSY@1.4.x 或 KISSY@1.3.x ，注意在 KISSY@5.0 版本中是没有 KISSY 这个全局变量的了，具体api的用法还请查看本5.0文档系统。

## 3，DOM 操作：查找/操作/绑定事件

node 模块对 dom 模块做了封装和扩展，你可以方便查找、创建、删除、修改元素，绑定事件等。node 模块依赖 dom , util, event-dom , anim 模块，并对这些模块进行了封装和拓展。模块的接口用法绝大部分都兼容了jQuery的用法，可直接当做jQuery使用，具体每个api用法请查看api文档。示例如下：

	require(['node'], function ($) {
		// 查找 DOM 节点.
		var oneElementById     = $('#foo'),
			oneElementByName   = $('body'),
			allElementsByClass = $('.bar');

		// 创建 DOM 节点.
		var contentNode$ = $('<div>'),
			listNode    = $('<ul>'),
			footerNode  = $('<footer>');

		// 操作节点，支持链式调用
		contentNode$.html('Hello Kissy!')
					.append('<p>touch me</p>')
					.addClass('highlight')
					.appendTo('body');

		// 绑定事件
		$('#close-button').on('click', function (e) {
			contentNode$.hide();
		});
	});

## 4，使用动画

KISSY 提供 anim 模块，完成 DOM 元素的动画。

	require(["anim"],function(Anim){
		// 初始化动画实例
		var animIns = new Anim('#anim-el',
			// 动画目标样式
			{
				'background-color':'#fcc',
				'border-width':'5px'
			},
			{
				duration : 5,            // 动画时长，秒
				easing : 'bounceOut',     // 动画特效
				complete : function(){   // 动画结束的回调
					alert('动画结束');
				}
			});

		// 开始执行动画
		animIns.run();
	});

## 5，通过 IO 装载内容

使用方法：

	require(['io', 'node'],function(IO, $){
		// 获取content.html的内容，替换到#content元素内
		IO({
			url:'content.html',
			data:{
				user_name:10010
			},
			success:function(data){
				$('#content').html(data);
			}
		});
	});


## 6，自定义模块


创建一个新模块：

	//kmd规范，类似amd
	define(function($, E, A, IO){
		var opLotto = {
			init: function(){
				...
			},
			...
		}
		return opLotto;
	}, {requires: ['node', 'event-dom', 'anim', 'io']});

	//或者用cmd规范
	define(function(require, exports, module){
		var $ = require('node'),
			E = require('event-dom'),
			A = require('anim'),
			IO = require('io');

		var opLotto = {
			init: function(){
				...
			},
			...
		}
		return opLotto;
	})

模块其实就是一个对象，模块名可以忽略，我们会返回这个对象以便在使用模块时方便调用，最后是依赖配置。下面将介绍的Demo中我们把这个模块保存为 `opLotto.js`。同时，我们需要指定这个模块所属的包：

	require.config({
		packages: {
			"modulePkgName":{
				tag: "20140918",
				base: "./",
				charset: "gbk"
			}
		}
	});

这样来调用模块逻辑：

	require(['modulePkgName/opLotto', 'node', 'event-dom'], function(OP, $, E){
		OP.init();
		//...
	});

> 包配置相关信息请移步[modulex](http://docs.kissyui.com/5.0/guides/modulex/index.html)

## 7，调用官方组件

KISSY 内置了很多有用的组件比如 button，menu，date/picker 等，这些组件的用法非常简单，比如要用到 button 组件，只需要：

	require(["button"], function(Button) {
		var btn = new Button({
			content: "我是按钮1",
			render: "#button_container",
			tooltip: "hover时显示"
		});
		btn.render();
	})

## 8，调用 Gallery 中的组件

[gallery](http://gallery.kissyui.com/) 是社区贡献的组件集合，汇集了各种各样的功能，比如 kcharts，imgcrop，waterfallx，slide，uploader。

gallery 鼓励分享，任何人都可以为 gallery 提交自己的组件。使用 gallery 组件非常方便：

	require(['kg/space/2.0.0/index'], function (Space) {
		var space = new Space({
			//...
		});
	});

## 9，开启模块的Combo

由于 KISSY 的模块非常颗粒化，会不会页面中载入的 JavaScript 文件过多，导致 HTTP 请求数太多呢？有两种方法来减少请求数：

- CDN 动态合并（Combo）
- 静态编译，本地合并，使用工具 [KISSY Module Compiler](https://github.com/daxingplay/grunt-kmc/blob/master/README.md)

动态合并，比如`require(['overlay'], function(Overlay){  })`会带来26个请求。

要想开启动态Combo，在全局配置中增加一项 `combine : true` 开启动态合并：

	require.config({
		combine : true
	});

或者这样开启：

	<script src="http://g.alicdn.com/kissy/edge/2014.09.05/seed.js" data-config="{combine:true}"></script>

页面额外请求数变为3个了。

## 10，一个典型入门例子

<div id="quickstart-demo">
	<iframe src="/5.0/demos/anim/cited-by-md/quickstart.html" width="100%" height="650px"></iframe>
</div>

这个 demo 包括了 KISSY 的大部分基本用法，下面会逐步讲解：

### 操作元素

引入 node 模块，把该模块接口当做 jQuery 来使用即可。

	//Line 126: 获取图片列表元素
	var imgList = $('.img-list').all('li');
	//Line 132: 所有图片元素移除'active'类名
	this.imgList.removeClass('active');

	//Line 133: 给第next个图片元素添加'active'类名
	this.imgList.item(next).addClass('active');

链式操作：

	//Line 151
	var cloneItem = selectedItem.one('img')
	    .clone()                    //复制选中的元素
	    .appendTo('.content')       //添加到容器最后
	    .css({
	        'width': '100px',
	        'height': '100px'})     //设置样式
	    .animate({
	        'top': 100
	    }, 0.2, 'easeOut')          //添加一个动画
	    .animate({
	        'top': 200
	        'left': 200
	    }, 1, 'bounceOut', function(){
	        ...
	    })   
### 绑定事件

KISSY 中的事件绑定非常简单，通过一个 on 操作就能完成事件绑定

	//Line 178
	$('button').on('click', function(ev){
	    //do something
	})

### Ajax

KISSY 中对 Ajax 操作进行了一些封装，比如要发起一个 GET 请求

	//Line 170
	IO.get('/5.0/demos/anim/cited-by-md/quickstartdata.json', {'index': index}, function(data){
		var url = data[index].url;
		$('.detail').html('<img src="' + url + '" />').fadeIn(0.5);
	}, 'json');

上述参数分别代表请求地址，发送数据，回调函数，返回数据格式

## 11， 例子重写

<div id="quickstart-demo-2">
	<iframe src="/5.0/demos/anim/cited-by-md/quickstart_2.html" width="100%" height="650px"></iframe>
</div>

这个 demo 的逻辑部分都和之前的相同，不同的是我们将它改造成了一个独立的模块

### 新建模块

	define(function($, IO){
	    var opLotto = {
	        init: function(){
	            ...
	        },
	        ...
	    }
	    return opLotto;
	}, {requires: ['node', 'io']});

模块其实就是一个对象，模块名可以忽略，我们会返回这个对象以便在使用模块时方便调用

### 依赖配置

我们把这个模块保存为 opLotto.js，放在同目录的 modulePkgName 文件夹下

在加载模块前，我们需要在主页面中对 KISSY 进行一下包配置

	require.config({
	    packages: [
	        {
	            name: "modulePkgName",
	            tag: "20140918",
	            path: "./", 
	            charset: "gbk"
	        }
	    ]
	});

在这段代码中我们指定了包的路径，包名，时间戳和编码

### 使用模块

	require('modulePkgName/opLotto, node', function(OP, $){
	    OP.init();
	})