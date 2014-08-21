/**
@module editor
*/

/**
编辑器

### Note1

##### kissy提供参考的初始样式，但用户也可以自己自定义样式。参考样式地址为
`http://g.tbcdn.cn/kissy/edge/2014.07.16/css/dpl/base.css`
`http://g.tbcdn.cn/kissy/edge/2014.07.16/editor/theme/cool/editor.css?1`

### Note2
editor提供如下插件：
[back-color](/5.0/api/classes/Editor.Plugin.BackColor.html),[bold](/5.0/api/classes/Editor.Plugin.Bold.html),[checkbox-source-area](/5.0/api/classes/Editor.Plugin.CheckboxSourceArea.html),[code](/5.0/api/classes/Editor.Plugin.Code.html),[draft](/5.0/api/classes/Editor.Plugin.Draft.html),[drag-upload](/5.0/api/classes/Editor.Plugin.DragUpload.html),[element-path](/5.0/api/classes/Editor.Plugin.ElementPath.html),[flash](/5.0/api/classes/Editor.Plugin.Flash.html),[font-color](/5.0/api/classes/Editor.Plugin.FontColor.html),[font-family](/5.0/api/classes/Editor.Plugin.FontFamily.html),[font-size](/5.0/api/classes/Editor.Plugin.FontSize.html),[heading](/5.0/api/classes/Editor.Plugin.Heading.html),[image](/5.0/api/classes/Editor.Plugin.Image.html),[indent](/5.0/api/classes/Editor.Plugin.Indent.html),[italic](/5.0/api/classes/Editor.Plugin.Italic.html),[justify-left](/5.0/api/classes/Editor.Plugin.JustifyLeft.html),[justify-center](/5.0/api/classes/Editor.Plugin.JustifyCenter.html),[justify-right](/5.0/api/classes/Editor.Plugin.JustifyRight.html),[link](/5.0/api/classes/Editor.Plugin.Link.html),[maximize](/5.0/api/classes/Editor.Plugin.Maximize.html),[multiple-upload](/5.0/api/classes/Editor.Plugin.MultipleUpload.html),[ordered-list](/5.0/api/classes/Editor.Plugin.OrderedList.html),[outdent](/5.0/api/classes/Editor.Plugin.Outdent.html),[page-break](/5.0/api/classes/Editor.Plugin.PageBreak.html),[preview](/5.0/api/classes/Editor.Plugin.Preview.html),[remove-format](/5.0/api/classes/Editor.Plugin.RemoveFormat.html),[resize](/5.0/api/classes/Editor.Plugin.EditorResize.html),[separator](/5.0/api/classes/Editor.Plugin.Separator.html),[smiley](/5.0/api/classes/Editor.Plugin.Smiley.html),[source-area](/5.0/api/classes/Editor.Plugin.SourceArea.html),[strike-through](/5.0/api/classes/Editor.Plugin.StrikeThrough.html),[table](/5.0/api/classes/Editor.Plugin.Table.html),[underline](/5.0/api/classes/Editor.Plugin.Underline.html),[undo](/5.0/api/classes/Editor.Plugin.Undo.html),[unordered-list](/5.0/api/classes/Editor.Plugin.UnOrderedList.html),[video](/5.0/api/classes/Editor.Plugin.Video.html),[xiami-music](/5.0/api/classes/Editor.Plugin.XiaMiMusic.html)
@class Editor
@constructor
@extends Component.Control
@param config {Object}
*/

/**
初始化设置编辑器里的内容
@attribute data {String}
*/

/**
编辑器模式.取值 Editor.SOURCE_MODE 或 Editor.WYSIWYG_MODE 
@attribute mode {String}
*/

/**
自定义样式表 url 数组
@attribute customLink {String[]}
*/

/**
自定义textarea的属性。

例如可以指定全新产生 editor 所属 textarea 的 name 值
```
new Editor({
    textareaAttrs: {
        name : 'myTextarea'
    }
});
```
@attribute textareaAttrs {Objec}
@optional
*/

/**
默认 false. 是否监控编辑器输入框所在的 form 提交。 （ form 提交前自动将编辑内容同步到对应 textarea 中 ）
@attribute attachForm
@default false
*/

/**
自定义样式字符串
@attribute customStyle {String}
*/

/**
编辑器源码模式
@attribute SOURCE_MODE {KISSY.Node}
*/

/**
编辑器可视化模式
@attribute WYSIWYG_MODE {KISSY.Node}
*/


/**
编辑器的 iframe.只读
@attribute iframe {KISSY.Node}
*/

/**
编辑器 iframe 的 window.只读.
@attribute window {KISSY.Node}
*/

/**
编辑器 iframe 的 document.只读.
@attribute document {KISSY.Node}
*/

/**
编辑器 iframe 的父节点.只读
@attribute iframeWrapEl {KISSY.Node}
*/

/**
编辑器的 toolbar 节点.只读.
@attribute toolBarEl {KISSY.Node}
*/

/**
编辑器的 statusbar 节点.只读.
@attribute statusBarEl {KISSY.Node}
*/


/**
编辑器 body 下的格式化后的 html 内容.可读写
@attribute formatData {KISSY.Node}
*/

/**
调用编辑器的响应命令功能
@method execCommand
@param commandName {String} 命令名称，由各个插件提供
@param arg1  对应命令所需要的参数
*/

/**
编辑器是否存在该命令
@method hasCommand
@param commandName {String} 命令名称，由各个插件提供
*/

/**
查询该命令对应的当前编辑值
@method queryCommandValue
@param commandName {String} 命令名称，由各个插件提供
*/

/**
同步编辑器内容到对应的 textarea
@method sync
*/

/**
获取编辑器文档的完整 html（不仅仅是 body 内的内容）
@method getDocHtml
*/

/**
使得编辑器获得焦点
@method focus
*/

/**
使得编辑器失去焦点
@method blur
*/

/**
添加自定义样式到编辑器文档中
@method addCustomStyle
@param cssText {String} 自定义样式文本
@param id {String} 产生的 style 标签 id，用于删除
*/

/**
删除编辑器文档的自定义样式
@method removeCustomStyle
@param id {String} 自定义样式产生的 style 标签的 id
*/

/**
添加自定义样式表到编辑器文档中
@method addCustomLink
@param url {String} 自定义样式表的地址
*/

/**
删除编辑器文档的自定义样式表
@method removeCustomLink
@param url {String} 自定义样式表的地址
*/

/**
注册函数到编辑器文档 ready 队列（编辑器文档 ready 后触发）
#### 该函数在编辑器生存周期内可能会运行多次（每次切换源码模式再切换回可视化模式都会因为编辑器文档重建而触发）
@method docReady
@param fn {Function} 编辑器文档 ready 后触发
*/

/**
往编辑器中插入元素
@method insertElement
@param element {KISSY.Node} 待插入的元素节点。（需从编辑器文档中创建）
### 如果要兼容 firefox 浏览器，需要调用 focus 后延迟 50ms 调用该函数：
```
editor.focus();
setTimeout(function(){
    editor.insertElement(new KISSY.Node('<span>haha</span>'),
    null,editor.get('document')[0]);
},50);
```
*/

/**
往编辑器中插入 html 串
@method insertHtml
@param html {String} 待插入的 html 字符串.
### 如果要兼容 firefox 浏览器，需要调用 focus 后延迟 50ms 调用该函数：
```
editor.focus();
setTimeout(function(){
    editor.insertHtml('<span>haha</span>');
},50);
```
*/

/**
为编辑器工具栏增加一个下拉菜单按钮. 一般用于插件编写.
@method addSelect
@param id {String}  按钮 id
@param cfg {Object} select配置，详见[Select](/5.0/api/classes/Select.html)
@example
```
editor.addSelect("plugin2", {
    children:[
        {
            content:"1",
            value:"11"
        },
        {
            content:"2",
            value:"22"
        }
    ],
    listeners:{
        click:function () {
            alert('i am running')
        }
    }
});
```
*/

/**
获取选中的html字符串
@method getSelectedHtml
@return {String} 要获取的html
*/

/**
获得编辑器里面的内容
@method getData
@param format {Boolean} 是否格式化，内部使用
@param mode {Object} 模式，内部使用
@return {String} 编辑器里的html内容
*/

/**
设置编辑器里的内容
@method setData
@param data {String}  要设置的内容
*/

/**
当用户黏贴文本触发，可返回值用来修改用户的黏贴内容
@event paste
@param e.html {String} 用户的黏贴内容
*/

/**
当编辑区域获得焦点时触发
@event focus
*/

/**
当编辑区域失去焦点时触发
@event blur
*/

/**
当切换到可视化模式后触发
@event wysiwygMode
*/

/**
当切换到源码模式后触发
@event sourceMode
*/

/**
当用户光标路径变化后触发
@event selectionChange
@param e.selection {Editor.Selection} 当前的选区对象
@param e.path {Editor.ElementPath} 当前的光标路径
@param e.element {KISSY.Node} 光标开始处所在的非文字节点元素
*/

/**
当弹出插件窗口事触发
@event dialogShow
@param e.dialog {Overlay.Dialog} 窗口对象实例
@param e.dialogName {String} 窗口标志名称
*/