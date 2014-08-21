/**
@module editor/plugin/button
*/

/**
编辑器的按钮插件，加载后为 Editor 拓展 addButton 方法(为编辑器工具栏增加一个按钮. 一般用于插件编写.)。而这个插件模块提供的接口就是 button 模块的接口
@class Button
@namespace Editor.Plugin
@constructor
@example
	KISSY.use('editor,editor/plugin/button', function(S, Editor, Button){
		var editor = new Editor({
			render : '#container'
		});
		editor.addButton("plugin2", {   //addButton方法在加载 editor/plugin/button 插件后才会拥有
		    content:'<div style="margin: 2px;border: 1px solid red;padding: 1px;">p2</div>',
		    listeners:{
		        click:function () {
		            alert('i am running')
		        }
		    }
		});

		//editor/plugin/button模块的接口和 button 模块一致
		var button1 = new Button({
	        content: "自定义样式按钮1",
	        width: 200,
	        tooltip: "我有新皮肤"
	    });
	    button1.render();
	})
*/