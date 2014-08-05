# kissy in nodejs基本介绍


KISSY 是一款跨终端的 Javascript 框架，不仅能在浏览器端使用，还可以运行在 NODE 环境中。

## 在 Node 环境安装 KISSY

	npm install kissy

## 使用 KISSY 提供的模块

	var xtemplate = require('kissy/lib/xtemplate');
	var xtpl = 'Hello,{{name}}',
		data = { name : 'kissy' },
		result = new xtemplate(xtpl).render(data);
	console.log(result);  // hello,kissy

## KISSY 在 Node 环境下的模块
	
在 Node 环境下， KISSY 提供如下模块： `kissy/lib/date/format` , `kissy/lib/date/gregorian` , `kissy/lib/dom/selector` , `kissy/lib/event/custom` , `kissy/lib/xtemplate` , `kissy/lib/attribute` , `kissy/lib/base` , `kissy/lib/color` , `kissy/lib/html-parser` , `kissy/lib/promise` , `kissy/lib/util`

各个模块的用法和与之对应的浏览器端的模块api用法相当，只是引用方法不同。例如：
	
	//在 Node 环境下使用 color
	var color = require('kissy/lib/color'),
		mycolor = color.parse('rgb(255,255,255)');
	console.log(mycolor.toHex());  //#ffffff

	//在浏览器下使用 color
	KISSY.use('color', function(S, Color){
		var mycolor = Color.parse('rgb(255,255,255)');
		console.log(mycolor.toHex());  //#ffffff
	})

