# xtemplate离线编译

将模板写入单独的模板文件，然后用 kissy-nodejs 的 kissy-xtemplate 命令生成对应的模板函数。 不仅有利于代码的清晰，更省去了客户端生成模板函数的消耗。

## 安装

	npm install -g kissy

## 使用例子

tests/test.xtpl:

	<div>
	    {{title}}
	</div>

运行命令： kissy-xtemplate -p ./ -w 后生成模板函数. (-w 表示监控包目录内的 tpl 文件变化, -n 表示包名, -p 表示对应包所在的目录)
在tests目录下会生成test.js:

	/** Compiled By xtpl */
	KISSY.add(function (S, require, exports, module) {
	    var test = function (scope, buffer, undefined) {
	        var tpl = this, nativeCommands = tpl.root.nativeCommands, utils = tpl.root.utils;
	        var callFnUtil = utils['callFn'], callCommandUtil = utils['callCommand'], rangeCommand = nativeCommands['range'], eachCommand = nativeCommands['each'], withCommand = nativeCommands['with'], ifCommand = nativeCommands['if'], setCommand = nativeCommands['set'], includeCommand = nativeCommands['include'], parseCommand = nativeCommands['parse'], extendCommand = nativeCommands['extend'], blockCommand = nativeCommands['block'], macroCommand = nativeCommands['macro'], debuggerCommand = nativeCommands['debugger'];
	        buffer.write('<div>\n\t', 0);
	        var id0 = scope.resolve(['title'], 0);
	        buffer.write(id0, true);
	        buffer.write('\n</div>', 0);
	        return buffer;
	    };
	    test.TPL_NAME = module.name;
	    module.exports = test;
	});

在页面上使用时请引用 xtemplate/runtime 模块（注意：对于预编译的模板函数不能使用 xtemplate 模块来编译）

tests/hello_kissy.html:

	//js代码部分
	KISSY.use('xtemplate/runtime,test',function(S,XTemplate,TestTpl){
	    var data={
	        title: 'hello kissy'
	    };
	    alert(new XTemplate(TestTpl).render(data)); // => '<div>hello kissy</div>'
	});