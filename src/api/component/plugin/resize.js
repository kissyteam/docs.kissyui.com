/**
调整大小插件
@module component/plugin/resize
*/

/**
组件伸缩插件。钩子handlers的样式根据需要自行编写，例如下面例子的样式。
@class Resize
@namespace Component.Plugin
@constructor
@extends Resizable
@example

	//component/plugin/resize 插件需要应用的样式
	.ks-overlay .ks-resizable-handler {
	    overflow: hidden;
	    font-size: 0;
	    line-height: 0;
	    position: absolute;
	}

	.ks-overlay .ks-resizable-handler-b {
	    height: 6px;
	    width: 100%; 
	    bottom: 0;
	    left: 0;
	    cursor: n-resize;
	}

	.ks-overlay .ks-resizable-handler-t {
	    height: 6px;
	    width: 100%;
	    top: 0;
	    left: 0;
	    cursor: n-resize;
	}

	.ks-overlay .ks-resizable-handler-l {
	    height: 100%;
	    -height: expression(this.parentNode.offsetHeight);
	    width: 6px; 
	    top: 0;
	    left: 0;
	    cursor: e-resize;
	}

	.ks-overlay .ks-resizable-handler-r {
	    height: 100%;
	    -height: expression(this.parentNode.offsetHeight); 
	    width: 6px;
	    position: absolute;
	    top: 0;
	    right: 0;
	    cursor: e-resize;
	}

	.ks-overlay .ks-resizable-handler-bl {
	    height: 6px;
	    width: 6px; 
	    z-index: 1;
	    bottom: 0;
	    left: 0;
	    cursor: sw-resize;
	}

	.ks-overlay .ks-resizable-handler-br {
	    height: 6px;
	    width: 6px;
	    z-index: 1; 
	    bottom: 0;
	    right: 0;
	    cursor: se-resize;
	}

	.ks-overlay .ks-resizable-handler-tl {
	    height: 6px;
	    width: 6px;
	    z-index: 1; 
	    top: 0;
	    left: 0;
	    cursor: nw-resize;
	}

	.ks-overlay .ks-resizable-handler-tr {
	    height: 6px;
	    width: 6px;
	    z-index: 1; 
	    top: 0;
	    right: 0;
	    cursor: ne-resize;
	}


	require(['overlay','component/plugin/resize'],function(Overlay,Resize){
	    new Overlay({
	        plugins:[
	            new Resize({
	                minWidth:100,
	                maxWidth:200,
	                handlers:['l','r']
	            })
	        ]
	    });
	});
*/