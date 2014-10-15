/**
一个类似express的路由模块
@module router
*/

/**
一个类似express的路由管理器

使用示例：

	require(['node', 'router'], function($, Router){
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
	
@class Router
@static
@uses CustomEvent.Target
*/

/**
添加一个路由中间件
@method use
@param prefix {String} 前缀，符合该前缀的路由则进入回调。默认为 '' ， 即默认都会进入回调
@param callback {Function} 回调函数，具有两个参数：
- request {Object} 请求信息对象
	- query {Object} querystring对象
	- backward {Boolean} 是否向后
	- replace {Boolean} 是否替换历史记录
	- forward {Boolean} 是否向后
	- path {String} 相对prefix的路径，不包含querystring
	- url {String} 相对prefix的路径，包含querystring
	- originalUrl {String} 初始路径
- next {Function} 调用这个函数则会继续去匹配子路由并执行相关回调，否则停止匹配
*/

/**
导航到具体路径
@method navigate
@param path {String} 目标路径
@param options {Object} 当前导航路径的配置对象
@param options.replace {Boolean} 是否替换当前的历史记录
@param options.triggerRoute {Boolean} 如果目标路径与页面当前路径一致时，是否仍然触发相应的动作（如利用get函数指定的回调），若为真则replace也自动设为真
*/

/**
添加路由和对应的回调处理响应
@method get
@param routePath {String|RegExp} 路由规则
@param callback1 {Function} 第一个回调函数，接受三个参数 request,response,nextCallback ，如果调用 nextCallback 则进入传入的第二个回调函数
@param [callback2] {Function} 第二个回调函数，可选，是否执行决定于第一个回调函数
@param ... {Function}
*/

/**
判断一个url路径是否匹配已添加路由规则里面的任一规则
@method matchRoute
@param path {String} 需要判断的url路径
@return {Boolean}
*/

/**
去除给定路由规则的回调函数或整个路由规则
@method removeRoute
@param routePath {String|RegExp} 路由规则
@param [callback] {Function} 需要去除的回调函数，可选。如果没有指定，则整个路由规则都会被去除
*/

/**
清空所有路由规则及路由中间件
@method clearRoutes
*/

/**
判断路由规则是否存在已添加的路由规则中
@method hasRoute
@param routePath {String|RegExp} 路由规则
@return {Boolean}
*/

/**
全局路由配置
@method config
@param options {Object} 配置对象
@param [options.caseSensitive] {Boolean} 是否大小写敏感
@param [options.strict] 是否严格要求路径末尾的反斜杠匹配
@param [options.urlRoot] 配置针对支持html5 history的浏览器的根路径
@param [options.useHash] 是否强制使用hash来处理路由即使在支持html5 histroy的浏览器下
@param options.triggerRoute {Boolean} 如果目标路径与页面当前路径一致时，是否仍然触发相应的动作（如利用get函数指定的回调），若为真则replace也自动设为真
*/

/**
开启路由监听
@method start
@param callback {Function} 路由成功开启后的回调
*/

/**
停止路由监听
@method stop
*/



















