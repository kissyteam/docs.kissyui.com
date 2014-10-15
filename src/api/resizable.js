/**
@module resizable
*/

/**
缩放功能

拖放 handler 的样式需要调用者自己编写,如下面这个例子的样式。
@class Resizable
@constructor
@extends Base
@param config {Object}
@example
	//css
	.ks-resizable-handler {
	position: absolute;
	overflow: hidden;
	font-size: 0;
	line-height: 0;
	z-index: 1;
	}
	.ks-resizable-handler-t,.ks-resizable-handler-b,  .ks-resizable-handler-r, .ks-resizable-handler-l {
	    opacity: 0.6;
	    filter: alpha(opacity = 60);
	    background-color: #F19EC2;
	}
	.ks-resizable-handler-t,.ks-resizable-handler-b {
	    left: 0;
	    height: 5px;
	    width: 100%;
	    cursor: n-resize;
	}
	.ks-resizable-handler-b {
	    bottom: 0;
	}

	.ks-resizable-handler-t {
	    top: 0;
	}
	.ks-resizable-handler-r, .ks-resizable-handler-l {
	    top: 0;
	    height: 100%;
	    -height: expression(this.parentNode.offsetHeight);
	    width: 5px;
	    cursor: e-resize;
	}
	.ks-resizable-handler-l {
	    left: 0;
	}

	.ks-resizable-handler-r {
	    right: 0;
	}

	.ks-resizable-handler-bl, .ks-resizable-handler-br, .ks-resizable-handler-tl, .ks-resizable-handler-tr {
	    position: absolute;
	    width: 5px;
	    height: 5px;
	    border: 1px solid #535353;
	    background-color: #E4007F;
	    z-index: 2;
	}
	.ks-resizable-handler-bl {
	    left: -3px;
	    bottom: -3px;
	    cursor: sw-resize;
	}

	.ks-resizable-handler-br {
	    right: -3px;
	    bottom: -3px;
	    cursor: nw-resize;
	}

	.ks-resizable-handler-tl {
	    left: -3px;
	    top: -3px;
	    cursor: nw-resize;
	}

	.ks-resizable-handler-tr {
	    right: -3px;
	    top: -3px;
	    cursor: sw-resize;
	}

	//javascript
	require(['node', 'resizable'], function($, Resizable) {
	    var r = new Resizable({
	        node:"#something-can-resize",
	        // 指定可拖动的位置
	        handlers:["b","t","r","l","tr","tl","br","bl"],
	        // 可选, 设置最小/最大 宽高
	        minHeight:100,
	        minWidth:100,
	        maxHeight:300,
	        maxWidth:400
	    });
	});
*/

/**
是否在 resize 的过程中保持 width/height 比例
@attribute preserveRatio {Boolean} 
*/

/**
默认为 [], 表示可拖动元素的哪些位置来进行缩放.
可取下列值: “b”,”t”,”r”,”l”,”tr”,”tl”,”br”,”bl”． 其中, t,b,l,r 分别表示 top,bottom,left,right, 加上组合共八种取值, 可在上, 下, 左, 右以及左上, 左下, 右上, 右下进行拖动.
@attribute handlers {String[]}
@default []
*/

/**
默认为0, 表示拖动缩放的最大高度
@attribute maxHeight {Number} 
@default 0
*/

/**
默认为0, 表示拖动缩放的最大宽度
@attribute maxWidth {Number} 
@default 0
*/

/**
默认为0, 表示拖动缩放的最小高度
@attribute minHeight {Number} 
@default 0
*/

/**
默认为0, 表示拖动缩放的最小宽度
@attribute minWidth {Number} 
@default 0
*/

/**
将要进行缩放的节点
@attribute node {String|HTMLElement|KISSY.Node} 
*/


/**
销毁该组件, 取消元素上的缩放功能.
@method destroy
*/

/**
开始拖放后触发
@event resizeStart
*/

/**
拖放中触发
@event resize
*/

/**
结束拖放后触发
@event resizeEnd
*/

