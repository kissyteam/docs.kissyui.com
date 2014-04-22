/**
uri解析模块
@module uri
*/

/**
@class Uri
@constructor
@param uriStr {String} uri 字符串
*/

/**
返回一个当前 uri 实例的克隆对象
@method clone
@return {Object}
*/

/**
以当前 uri 实例为基准路径解析 other uri 并返回新的实例
@method resolve
@param other {Uri|String} other带解析uri
@return {Uri} 新的 uri 实例
@example
```
var one = new Uri('http://www.g.cn/x');
one.resolve('foo').toString() // => http://www.g.cn/foo
one.resolve(new Uri('?foo')).toString() // => http://www.g.cn/x?foo
```
*/

/**
得到 uri 实例的 scheme 部分
@method getScheme
@return {String}
@example
```
new Uri('http://www.g.cn/x').getScheme() // => http
```
*/

/**
设置 uri 实例的 scheme 部分
@method setScheme
@param scheme {String}
@return 当前 uri 实例
@example
```
new Uri('http://www.g.cn/x').setScheme('ftp').getScheme() // => ftp
```
*/

/**
得到当前 uri 实例的 hostname
@method getHostname
@return {String}
@example
```
new Uri('http://www.g.cn:8888/x').getHostname() // => www.g.cn
```
*/

/**
获取当前 uri 实例的 user info
@method getUserInfo
@return {String}
@example
```
new Uri('http://my:pass@www.g.cn:8888/x').getUserInfo() // => 'my:pass'
```
*/

/**
设置当前 uri 实例的 user info
@method setUserInfo
@param userInfo {String}
@return {Uri} 当前Uri实例
@example
```
new Uri('http://my:pass@www.g.cn:8888/x').setUserInfo('m:p').getUserInfo()
// => 'm:p'
```

/**
获取当前 uri 实例的端口值
@method getPort
@return {String}
@example
```
new Uri('http://my:pass@www.g.cn:8888/x').getPort()
// => '8888'
```
*/

/**
设置当前 uri 实例的端口值
@method setPort
@param port {String}
@return {Uri} 当前Uri实例
@example
```
new Uri('http://my:pass@www.g.cn:8888/x').setPort('88').toString()
// => http://my:pass@www.g.cn:88/x
```
*/

/**
获取当前 uri 实例的路径
@method getPath
@return {String}
@example
```
new Uri('http://www.g.cn/x').getPath()
// => /x
```
*/

/**
设置当前 uri 实例的路径
@method setPath
@param path {String}
@return {Uri} 当前Uri实例
@example
```
new Uri('http://www.g.cn/x').setPath('/y').toString()
// => http://www.g.cn/y
```
*/

/**
获取当前 uri 实例的查询参数实例
@method getQuery
@return {Uri.Query}
@example
```
new Uri('http://www.g.cn/x?x=1').getQuery().get('x')
// => 1
```
*/

/**
设置当前 uri 实例的查询参数
@method setQuery
@param query {String|Uri.Query}
@return {Uri.Query}
@example
```
new Uri('http://www.g.cn/x?x=1').setQuery('y=1').toString();
// => http://www.g.cn/x?y=1

new Uri('http://www.g.cn/x?x=1').setQuery(new Uri.Query('y=1')).toString();
// => http://www.g.cn/x?y=1
```
*/

/**
获取当前 uri 实例的 hash
@method getFragment
@return {String}
@example
```
new Uri('http://www.g.cn/x?x=1#y=2').getFragment() // => y=2
```
*/

/**
设置当前 uri 实例的 hash
@method setFragment
@param hash {String}
@return {String}
@example
```
new Uri('http://www.g.cn/x?x=1#y=2').setFragment('x=3').toString()
// => http://www.g.cn/x?x=1#x=3
```
*/

/**
验证当前 uri 实例和 other 是否是同源关系(hostname port scheme 相同)
@method isSameOriginAs
@return {Boolean}
@example
```
new Uri('http://www.g.cn/x?x=1#y=2')
.isSameOriginAs(new Uri('http://www.g.cn:88/x?x=1#y=2')) // => false
```
*/

/**
序列化当前 uri 实例的 hash
@method toString
@param arr {Boolean} 同 param() 同名参数
@return {String}
@example
```
new Uri('http://www.g.cn/x?x=1&x=2').toString(false)
// => 'http://www.g.cn/x?x=1&x=2'

new Uri('http://www.g.cn/x?x=1&x=2').toString(true)
// => 'http://www.g.cn/x?x%5b%5d=1&x%5b%5d=2'
```
*/




/**
@class Query
@constructor
@namespace Uri
@param queryStr {String} 查询字符串
*/

/**
返回新的查询对象
@method clone
@return {Uri.Query}
*/

/**
重置查询字符串
@method reset
@return {Uri.Query}
*/

/**
返回参数个数
@method count
@return {Number}
@example
```
new Query('x=2&y=3').count() // => 2
```
*/

/**
返回是否包含指定查询参数键名或是否有查询参数
@method has
@param key {String}
@return {Boolean}
@example
```
new Query('x=2&y').has('y') // =>true
new Query('x=2&y').has('z') // =>false
new Query('').has() // => false
new Query('z').has() // => true
```
*/

/**
返回指定的查询参数对应的值或查询参数键值对象
@method get
@param key {String}
@return 指定 key 时返回对应值，不指定 key 时返回全部键值对
@example
```
new Query('x=2&y=3').get('x') // => 2
new Query('x=2&y=3').get() // => {x:'2',y:'3'}
```
*/

/**
设置对应键值
@method set
@param key {String|Query} 键名或query实例
@param value 键值
@return 当前实例
@example
```
new Query('x=2&y=3').set('y',4).toString() => x=2&y=4
new Query('x=2&y=3').set(new Query('z=4')).toString() => x=2&y=3&z=4
```
*/

/**
增加对应键值
@method add
@param key {String|Query} 键名或query实例
@param value 键值
@return 当前实例
@example
```
new Query('x=2&y=3').add('y',4).toString(false) => x=2&y=4&y=3
new Query('x=2&y=3').add(new Query('y=4')).toString(false) => x=2&y=3&y=4
```
*/

/**
删除指定键名或全部查询参数
@method remove
@param key {String|Query} 键名或query实例
@return 当前实例
@example
```
new Query('x=2&y=3').remove('y').toString() => x=2
new Query('x=2&y=3').remove().toString() => ''
```
*/

/**
返回参数名数组
@method keys
@return {Array}
@example
```
new Query('x=2&y=3').keys() // => ['x','y']
```
*/

/**
序列化查询参数
@method toString
@param arr {Boolean} 同 param() 同名参数
@return {String}
@example
```
new Query('x=2&y=3&y=4').toString(false)// => 'x=2&y=3&y=4'
new Query('x=2&y=3&y=4').toString(true)// => 'x=2&y%5b%5d=3&y%5b%5d=4'
```
*/
