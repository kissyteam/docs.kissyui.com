/**
@module tree
*/



/**
普通树结构。xclass:tree
@class Tree
@constructor
@extends Tree.Node
@uses Tree.Manager
@param config {Object}
@example
	//通过addChild添加子节点
	require(['tree', 'node'], function(Tree, $){
	    var tree = new Tree({
	        content: "淘宝网",
	        expanded: true,
	        // showRootNode:false,  //是否显示根节点
	        render: "#treeContainer"
	    });
	    var favorates = new Tree.Node({
	        content: "收藏夹",
	        tree: tree
	    });
	    favorates.addChild(new Tree.Node({
	        content: "收藏的宝贝"
	    }));
	    favorates.addChild(new Tree.Node({
	        // 即使没有儿子也强制指定为 folder 样式
	        isLeaf: false,
	        content: "收藏的店铺"
	    }));
	    tree.addChild(favorates);
	  });

  	//通过xclass生成节点(json)
  	require(['tree', 'node'], function(Tree, $){
        var tree = new Tree({
            content: "淘宝网",
            expanded: true,
            children: [
                {
                    xclass : 'check-tree-node',
                    content: "收藏夹",
                    children: [
                        {
                            content: "收藏的宝贝"
                        },
                        {
                            content: "收藏的店铺"
                        }
                    ]
                },
                {
                    content: '我要买'
                },
                {
                    xclass : 'tree-node',
                    content: '我的淘宝',
                    children: [
                        {
                            content: "已买到的宝贝"
                        },
                        {
                            content: "已买到的宝贝"
                        }
                    ]
                }
            ],
            // showRootNode:false,
            render: "#treeContainer"
        });

        tree.render();
        tree.on("expand", function (e) {
            S.log("expand : " + e.target.get("content"));
            S.log("expandIconEl");
            S.log(e.target.get("expandIconEl"));
            S.log("iconEl");
            S.log(e.target.get("iconEl"));
        });
        tree.on("collapse", function (e) {
            S.log("collapse : " + e.target.get("content"));
        });
    });
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
普通树节点。xclass : tree-node
@class Node
@constructor
@extends Component.Container
@namespace Tree
@param config {Object}
@example
	//通过addChild添加子节点
	require(['tree', 'node'], function(Tree, $){
	    var tree = new Tree({
	        content: "淘宝网",
	        expanded: true,
	        // showRootNode:false,  //是否显示根节点
	        render: "#treeContainer"
	    });
	    var favorates = new Tree.Node({
	        content: "收藏夹",
	        tree: tree
	    });
	    favorates.addChild(new Tree.Node({
	        content: "收藏的宝贝"
	    }));
	    favorates.addChild(new Tree.Node({
	        // 即使没有儿子也强制指定为 folder 样式
	        isLeaf: false,
	        content: "收藏的店铺"
	    }));
	    tree.addChild(favorates);
	});
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
可多选树节点。xclass:check-tree-node
@class CheckNode
@constructor 
@extends Tree.Node
@namespace Tree
@param config {Object}
@example
	require(['tree', 'node'], function(Tree, $){
	    var tree = new Tree.CheckTree({
	        content: "淘宝网",
	        expanded: true,
	        // showRootNode:false,
	        render: "#treeContainer"
	    });
	    var favorates = new Tree.CheckNode({

	        content: "收藏夹",
	        tree: tree
	    });
	    favorates.addChild(new Tree.CheckNode({

	        content: "收藏的宝贝"
	    }));
	    favorates.addChild(new Tree.CheckNode({
	        content: "收藏的店铺"
	    }));

	    tree.addChild(favorates);
	});
*/

/**
当前节点的多选状态，可取：
- PARTIAL_CHECK 代表节点的部分选中状态（部分子孙节点选中）
- CHECK 代表节点的全部选中状态（子孙节点和自身节点全部选中）
- EMPTY 代表节点的空状态（子孙节点和自身节点全部不选中）
@attribute checkState {String}
*/




/**
多选树结构。xclass : check-tree
@class CheckTree
@namespace Tree
@constructor
@extends Tree.CheckNode
@uses Tree.Manager
@param config {Object}
@example
	require(['tree', 'node'], function(Tree, $){
	    var tree = new Tree.CheckTree({
	        content: "淘宝网",
	        expanded: true,
	        // showRootNode:false,
	        render: "#treeContainer"
	    });
	    var favorates = new Tree.CheckNode({

	        content: "收藏夹",
	        tree: tree
	    });
	    favorates.addChild(new Tree.CheckNode({

	        content: "收藏的宝贝"
	    }));
	    favorates.addChild(new Tree.CheckNode({
	        content: "收藏的店铺"
	    }));

	    tree.addChild(favorates);
	});
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

