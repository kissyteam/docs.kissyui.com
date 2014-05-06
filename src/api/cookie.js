/**
提供类Cookie
@module cookie
*/

/**
操作cookie

### Note

推荐阅读 NCZ 的这篇文章： [HTTP cookies explained](http://www.nczonline.net/blog/2009/05/05/http-cookies-explained/)
@class Cookie
@static
*/

/**
获取cookie值
@method get
@static
@param name {String} cookie的名称
@return {String}
*/

/**
置空cookie值，并立刻过期
@method remove
@static
@param name {String} cookie的名称
@param domain {String} 域
@param path {String} 路径
@param secure {Boolean} 安全标志
*/

/**
设置cookie值
@method set
@static
@param name {String} cookie的名称
@param val {String} cookie的值
@param expires {Number|Date} 失效时间. number 类型时单位为天，不设置表示生效时间为本次浏览器进程
@param domain {String} 域
@param path {String} 路径
@param secure {Boolean} 安全标志
*/