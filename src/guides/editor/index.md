(((apilink class="Editor")))
# Editor基本介绍

Editor 继承自内部组件 Control，包含其全部配置,属性,方法,事件。在[gallery](http://gallery.kissyui.com/)上拥有多种插件适合在不同场景下使用，如 kg/editor-plugins/1.1.3/font-size,kg/editor-plugins/1.1.3/image 等。更多插件及用法请看 [editor-plugins文档](http://gallery.kissyui.com/editor-plugins/doc/guide/index.html).

注：KISSY提供了参考样式：基础样式： `//g.alicdn.com/kissy/k/5.0.1/css/base.css`，
插件样式：`http://g.tbcdn.cn/kg/editor-plugins/1.1.3/assets/editor.css`。在使用editor前引入，用户也可以根据需要自定义样式。

## 引用方法

	require(['editor'],function(Editor){
		//use editor
	})

## 一个简单的调用

	//先配置editor-plugins的包地址
	require.config({
        packages: [
            {
                name: 'kg/editor-plugins/1.1.3',  //1.1.3是editor-plugins当前版本号，请选择相应的版本号使用
                base : 'http://g.tbcdn.cn/kg/editor-plugins/1.1.3'
            }
        ]
    })
	require(['editor', 'kg/editor-plugins/1.1.3/font-size'], function(Editor, FontSize){
		var myEditor = new Editor({
			width : '80%',
			height : '500px',
			focused : true,
			plugins : [ FontSize ]
		});

		myEditor.render();
	})

## 主要配置参数（更多配置参数请看其api文档）

#### data 
{String} 初始化设置编辑器里的内容

#### mode

编辑器模式.取值 Editor.SOURCE_MODE 或 Editor.WYSIWYG_MODE

#### customLink 

String[] 自定义样式表 url 数组

#### textarea

{String} - optional. 自定义产生 textarea 节点的 html.

例如可以指定全新产生 editor 所属 textarea 的 name 值

	new Editor({
	    textarea: '<textarea name="custom"></textarea>'
	});

#### attachForm

{Boolean} - 默认 false. 是否监控编辑器输入框所在的 form 提交。 （ form 提交前自动将编辑内容同步到对应 textarea 中 ）

#### customStyle

{String} - 自定义样式字符串.

## 主要方法：（更多方法请看其api文档）

#### execCommand(commandName, arg1, arg2, ...)

- commandName (String) 命令名称，由各个插件提供
- arg* 对应命令所需要的参数

调用编辑器的响应命令功能，例如：

	editor.execCommand("fontSize","10px"); //=> 设置选区文字大小为10px.
	editor.execCommand("fontSize","10px"); //=> 取消设置选区文字大小为10px.
	editor.queryCommandValue("fontSize"); //=> 返回 10px

#### hasCommand(commandName)

- commandName (String) 命令名称，由各个插件提供

编辑器是否存在该命令

#### queryCommandValue(commandName)

- commandName (String) – 命令名称，由各个插件提供

查询该命令对应的当前编辑值

#### sync()

同步编辑器内容到对应的 textarea

#### focus()

使得编辑器获得焦点

#### blur()

使得编辑器失去焦点

#### docReady(fn)

- fn (Function) 编辑器文档 ready 后触发

注册函数到编辑器文档 ready 队列（编辑器文档 ready 后触发）。
该函数在编辑器生存周期内可能会运行多次（每次切换源码模式再切换回可视化模式都会因为编辑器文档重建而触发）

#### insertElement(element)

- element (KISSY.Node) 待插入的元素节点。（需从编辑器文档中创建）

往编辑器中插入元素
如果要兼容 firefox 浏览器，需要调用 focus 后延迟 50ms 调用该函数：

	editor.focus();
	setTimeout(function(){
	    editor.insertElement(new KISSY.Node('<span>haha</span>'),
	    null,editor.get('document')[0]);
	},50);

#### getData()

获得编辑器里面的内容