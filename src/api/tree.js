/**
@module tree
*/



/**
树（根节点）
@class Tree
@constructor
@extends Tree.Node
@uses Tree.Manager
@param config {Object}
*/

/**
默认 true. 是否显示树的根节点
@attribute showRootNode {Boolean}
@default true
*/

/**
当树节点被点击后触发
@event click
@param e.target {KISSY.Node}  当前被点击的树节点
@example
```
//默认情况下，双击树节点的文字部分或单击扩展图标才会展开收缩其子节点， 如果你需要改变为：单击树节点的文字部分也展开收缩其子节点，可以监控 click() 事件

tree.on("click",function(e){
    var node = e.target;
    if(node.get("children").length){
        node.set("expanded",!node.get("expanded"));
    }
});
```
*/

/**
当树节点扩展后触发
@event expand
@param e.target {KISSY.Node}  当前被扩展的树节点
*/

/**
当树节点收缩后触发
@event collapse
@param e.target {KISSY.Node}  当前被收缩的树节点
*/





/**
@class Node
@constructor
@extends Component.Container
@namespace Tree
@param config {Object}
*/

/**
节点内容
@attribute content {String}
*/

/**
可选，是否固定采用叶子节点或目录节点样式类，不设置的话会动态根据是否具有儿子节点而变化
@attribute isLeaf {Boolean}
*/

/**
该节点的儿子节点是否显示，设置后可相应展开收缩儿子节点
@attribute expanded {Boolean}
*/

/**
节点提示内容
@attribute tooltip {String}
*/

/**
扩展图标 dom 节点
@attribute expandIconEl {KISSY.Node}
*/

/**
树节点图标 dom 节点
@attribute iconEl {KISSY.Node}
*/

/**
该节点是否被选中
@attribute selected {Boolean}
*/

/**
该节点所属的树对象
@attribute tree {KISSY.Tree}
*/

/**
该节点所处所在树的深度，只读。
@attribute depth {Number}
@readonly
*/

/**
把当前节点的子孙节点全部显示出来
@method expandAll
*/

/**
把当前节点的子孙节点全部收缩起来
@method collapseAll
*/

/**
把当前节点设置为当前树的选中节点
@method select
*/







/**
可多选树节点
@class CheckNode
@constructor 
@extends Tree.Node
@namespace Tree
@param config {Object}
*/

/**
当前节点的多选状态，可取：
- PARTIAL_CHECK 代表节点的部分选中状态（部分子孙节点选中）
- CHECK 代表节点的全部选中状态（子孙节点和自身节点全部选中）
- EMPTY 代表节点的空状态（子孙节点和自身节点全部不选中）
@attribute checkState {String}
*/




/**
@class CheckTree
@namespace Tree
@constructor
@extends Tree.CheckNode
@uses Tree.Manager
@param config {Object}
*/

/**
当树节点扩展后触发
@event expand
@param e.target {KISSY.Node}  当前被扩展的树节点
*/

/**
当树节点收缩后触发
@event collapse
@param e.target {KISSY.Node}  当前被收缩的树节点
*/

/**
当树节点被点击后触发
@event click
@param e.target {KISSY.Node}  当前被点击的树节点
@example
```
//默认情况下，双击树节点的文字部分或单击扩展图标才会展开收缩其子节点， 如果你需要改变为：单击树节点的文字部分也展开收缩其子节点，可以监控 click() 事件

tree.on("click",function(e){
    var node = e.target;
    if(node.get("children").length){
        node.set("expanded",!node.get("expanded"));
    }
});
```
*/



/**
管理树节点(Manage tree node for tree root)
@class Manager
@namespace Tree
@constructor
@param config {Object}
*/

/**
是否允许文本选择
@attribute allowTextSelection {Boolean}
@default true
*/

/**
是否能聚焦
@attribute focusable {Boolean}
@default true
*/

/**
是否支持手势事件
@attribute handleGestureEvents {Boolean}
@default true
*/

/**
是否显示树根节点
@attribute showRootNode {Boolean}
@default true
*/

/**
当前被选择的树节点
@attribute selectedItem {Tree.Node}
*/

