# kissy in nodejs基本介绍


KISSY 是一款跨终端的 Javascript 框架，不仅能在浏览器端使用，还可以运行在 NODE 环境中。KISSY团队提供多个能在node使用的模块，可以参考[kissyteam](https://github.com/kissyteam)在github上面的项目，其对应的 npm 包名称是在库名称前缀 `modulex-` 即可。如下：
modulex-util , modulex-promise , modulex-event-custom , modulex-path , modulex-base , modulex-color , modulex-html-parser , modulex-attribute

## 在 Node 环境安装 KISSY 模块 path

	npm install modulex-path

## 使用 KISSY 提供的模块

	var modulexPath = require('modulex-path');
	//use modulexPath

各个模块的用法和与之对应的浏览器端的模块api用法相当，只是引用方法不同。例如：
	
	//在 Node 环境下使用 color
	var color = require('modulex-color'),
		mycolor = color.parse('rgb(255,255,255)');
	console.log(mycolor.toHex());  //#ffffff

	//在浏览器下使用 color
	require(['color'], function(Color){
		var mycolor = Color.parse('rgb(255,255,255)');
		console.log(mycolor.toHex());  //#ffffff
	})

