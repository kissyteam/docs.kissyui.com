# FAQ

## Q:DOM 和 Node 有什么区别？

Dom 是面向原生节点的第一层封装，主要是处理浏览器兼容和功能差异，Node 是对节点的第二层封装，依赖 util,dom,event-dom,anim 四个模块，主要是整合节点的功能并提供标准的API，兼容JQuery用法，使用方便。

	require(['dom'],function(Dom){
		var btn = Dom.get('#btn'); // 得到原生节点
	})
	require(['node'],function($){
		var btn = $('#btn'); // 得到包装后的节点
	})

## Q:`*.js`和`*-debug.js`的区别

`*.js`是对应js的压缩版本，开发阶段引用`*-debug.js`方便调试，发布到线上引用`*.js`减少文件体积。若引入seed-debug.js默认自动开启KISSY调试模式，引入seed.js则不开启。

## Q:淘宝 CDN 的 Combo 功能很酷，我可以自己部署吗？

淘宝 CDN 基于 Nginx，CDN Combo 是 Nginx 的一个模块，项目开源，参照这里：[HTTP Concatenation module for Nginx](https://github.com/alibaba/nginx-http-concat)

