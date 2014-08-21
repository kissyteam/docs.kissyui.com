/**
合并了原来的 box
组件基类.仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review
@module component/control
*/

/**
@class Control
@namespace Component
@constructor
@extends Base
@param config {Object}
*/


/**
可选，附加给组件根节点的属性键值对
@attribute elAttrs {Object} 
*/

/**
可选，组件根节点的渲染到该节点之前
@attribute elBefore {KISSY.Node} 
*/


/**
可选，附加给组件根节点的样式类
@attribute elCls {String}
*/


/**
可选，附加给组件根节点的内联样式
@attribute elStyle {Object} 
*/


/**
可选，该组件是否初始获得焦点
@attribute focused {Boolean} 
*/


/**
可选，组件的高度，单位像素
@attribute height {Number}
*/


/**
可选，该组件的父组件
@attribute parent {Control} 
*/

/**
可选，默认 “ks-” . 组件的 css 样式类前缀 . 例如假设组件为 menu ，则该组件内的样式类名为 {prefixCls}menu，默认为 “ks-menu”.可用于实现自定义皮肤
@attribute prefixCls {String} 
*/

/**
可选，组件 prefix 的超类。只在config中使用。当超类未被指定时，用这个做超类
@attribute prefixXClass {String} 
*/

/**
组件要应用的节点。默认 S.all(“body”)，组件根节点的渲染为该节点最后一个节点
@attribute render {KISSY.Node} 
*/

/**
可选，组件从页面中已存在的该节点中渲染而来.srcNode 时设置其他属性不起作用，属性通通在 html 标签中指定，并且 html 标签必须包含完整结构，例如 content 节点必须存在
@attribute srcNode {KISSY.Node} 
*/

/**
默认 true ，是否显示.只是为组件的根节点添加/删除 {prefix}{component}-hidden 形式的 css class，自行指定具体的 css 样式
@attribute visible
@default true
*/

/**
可选，组件的宽度，单位像素
@attribute width {Number} 
*/

/**
只读属性，组件结构是否已经创建
@attribute created {boolean}
*/

/**
只读属性，组件是否已经渲染
@attribute rendered {Boolean}
*/

/**
组件是否已经激活
@attribute active {Boolean}
*/

/**
设置的 content 属性
@attribute content {String|KISSY.Node}
*/

/**
该组件是否禁用状态
@attribute disabled {Boolean}
*/

/**
只读属性，该组件的根节点. 注意调用 render() 后才可以取得
@attribute el {KISSY.Node}
*/


/**
组件的高
@attribute height {Number}
*/

/**
该组件是否处于高亮状态
@attribute highlighted {Boolean}
*/

/**
 标记当前实例是 Control 的实例
 @attribute isControl {Boolean}
 */


/**
横轴位置
@attribute x {Number}
*/

/**
纵轴位置
@attribute y {Number}
*/

/**
横纵轴位置
@attribute xy {Number[]}
*/

/**
z-index 值
@attribute zIndex {Number}
*/


/**
创建当前组件的DOM结构，control将会代理给render
@method create
@return 自身
*/

/**
把当前组件的DOM结构放入 DOM 文档中，并绑定事件，同步属性
@method render
@return 自身
*/

/**
同步属性值.组件基类增加 sync 函数，调用后可调用父类、扩展类、插件对应的 syncUI 方法
@method sync
*/

/**
隐藏组件
@method hide
@return 自身
*/

/**
显示组件
@method show
@return 自身
*/

/**
移动到(x,y)
@method move
@param x {Number} 横轴位置
@param y {Number} 纵轴位置
@return 自身
*/

/**
使组件失去焦点
@method blur
*/

/**
使组件获得焦点
@method focus
*/

/**
当组件内部事件绑定完之后触发
@event afterBindUI
@param e {Object} KISSY CustomEvent 对象
*/

/**
当组件根节点创建的时候触发
@event afterCreateDom
@param e {Object} KISSY CustomEvent 对象
*/

/**
当组件根节点渲染到 DOM 文档后触发
@event afterRenderUI
@param e {Object} KISSY CustomEvent 对象
*/

/**
当组件内部的状态同步完之后触发
@event afterSyncUI
@param e {Object} KISSY CustomEvent 对象
*/

/**
在组件内部事件绑定前触发
@event beforeBindUI
@param e {Object} KISSY CustomEvent 对象
*/

/**
在组件根节点创建前触发
@event beforeCreateDom
@param e {Object} KISSY CustomEvent 对象
*/

/**
在组件根节点渲染之前触发
@event beforeRenderUI
@param e {Object} KISSY CustomEvent 对象
*/

/**
在同步组件内部状态前触发
@event beforeSyncUI
@param e {Object} KISSY CustomEvent 对象
*/

/**
在组件 show 的时候触发
@event show
@param e {Object} KISSY CustomEvent 对象
*/

/**
在组件 hide 的时候触发
@event hide
@param e {Object} KISSY CustomEvent 对象
*/

/**
在组件 visible 属性发生变化时触发
@event beforeVisibleChange
@param e {Object} KISSY CustomEvent 对象
*/