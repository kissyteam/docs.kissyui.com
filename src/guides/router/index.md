(((apilink class="Router")))

# Router的基本介绍

Router 是一个类似 express 的路由管理器，大部分函数接口意义和用法类似 express。如果你本来就对 express 非常熟悉，那么 KISSY Router 你用起来也会感觉非常自然。

## 载入模块
	modulex.use(['router'], function(Router){
		//use Router
	});

## 简单使用
	modulex.use(['node', 'router'], function($, Router){
		Router.config({  //路由全局配置
	        triggerRoute: true,  // 触发当前地址对应的 route 操作
	        urlRoot: location.pathname
		});

		Router.get('/', function(req, res, nextCallback){
			//显示根目录内容
		});

		Router.get('/:path*', function(req){
			//req.params.path => 'test'
			//req.params[0] => '/test1/test2'
			//req.parmas[1] => 'test1/test2'
		});

		Router.get('/detail/:id', function(req){
			//req.params.id => 88
			//req.query => { pa : 1, pe : 2 }
		})

		Router.navigate("/test/test1/test2");
		Router.navigate('/detail/88?pa=1&pe=2');

		Router.start(function(){
	        $('#loading').hide();
		});
	});

## 更多信息

router 模块提供的接口及其具体用法请查看 [router api文档](http://docs.kissyui.com/5.0/api/classes/Router.html)