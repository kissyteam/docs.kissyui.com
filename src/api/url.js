/**
操作url
@module url
*/

/**
操作url
使用示例：
	
	KISSY.use(['url'], function(S, Url){
		var websiteUrl = 'http://docs.kissyui.com/5.0/api/classes/Path.html?test=iamtestcontent&date=2014.09.10#method_resolve';
		var urlDataObj = Url.parse(websiteUrl); 
		// 得到的urlDataObj如下：
		// {
		//  auth: undefined
		// 	hash: "#method_resolve"
		// 	host: "docs.kissyui.com"
		// 	hostname: "docs.kissyui.com"
		// 	href: "http://docs.kissyui.com/5.0/api/classes/Path.html?test=iamtestcontent&date=2014.09.10#method_resolve"
		// 	path: "/5.0/api/classes/Path.html?test=iamtestcontent&date=2014.09.10"
		// 	pathname: "/5.0/api/classes/Path.html"
		// 	port: undefined
		// 	protocol: "http:"
		// 	query: "test=iamtestcontent&date=2014.09.10"
		// 	search: "?test=iamtestcontent&date=2014.09.10"
		// 	slashes: true
		// }

		urlDataObj.search = undefined;
		urlDataObj.query = {
			name : 'weekeight',
			love : 'kissy'
		};

		var newUrl = Url.format(urlDataObj);  //得到的newUrl是 http://docs.kissyui.com/5.0/api/classes/Path.html?name=weekeight&love=kissy#method_resolve

	})

@class Url
@static
*/

/**
解析url字符串为url对象。url对象包括键值：auth,hash,host,hostname,href,path,pathname,port,protocol,query,search,slashes
@method parse
@param url {String} url字符串
@param parseQueryString {Boolean} 是否将querystring转化为对象形式。默认为false
*/

/**
将url对象转为url字符串
@method format
@param url {String} 从Url.parse得到的url对象
@param serializeArray {Boolean} 如果url.search === undefined 且 url.query含数组的话，转化成的url字符串是否需要在数组key后加上 [] 标识。默认为true
@example
	KISSY.use(['url'], function(S, Url){
		var websiteUrl = 'http://docs.kissyui.com/5.0/api/classes/Path.html?test=iamtestcontent&date=2014.09.10#method_resolve';
		var urlDataObj = Url.parse(websiteUrl); 
		urlDataObj.search = undefined;
		urlDataObj.query = {
			name : 'weekeight',
			love : 'kissy',
			arr : [1,2,3]
		};

		var newUrl = Url.format(urlDataObj);  //得到的newUrl是 http://docs.kissyui.com/5.0/api/classes/Path.html?name=weekeight&love=kissy&arr%5B%5D=1&arr%5B%5D=2&arr%5B%5D=3#method_resolve
	})
*/

/**
得到绝对地址的url，算法逻辑参考[nodeJs](http://nodejs.org/api/path.html#path_path_resolve_from_to)
@method resolve
@example
	KISSY.use(['url'],function(S, Url){
		Url.resolve('docs.kissyui.com/guides/','overlay/index.html'); //docs.kissyui.com/guides/overlay/index.html
	})
*/