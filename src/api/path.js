/**
@module path
*/

/**
地址操作工具类
@class Path
@static
```
require(['path'],function(Path){
        Path.do_sth();// 执行操作
});
```
*/

/**
获取域名中的文件名
@method basename
@static
@param path {String} 路径字符串
@param ext {String} 需要过滤的扩展名，比如`.html`
@return {String} 返回结果字符串
@example
```
Path.basename('http://www.taobao.com/index.html','.html');//=> index
```
*/

/**
返回path所指的文件所在的目录路径
@method dirname
@static
@param path {String} 路径字符串
@return {String}
@example
```
Path.dirname('/home/bachi/daily/index.html');//=>/home/bachi/daily
```
*/

/**
获取路径所指文件的扩展名，比如`.html`
@method extname
@static
@param path {String} 路径字符串
@return {String}
@example
```
Path.extname('/home/bachi/daily/index.html');//=> .html
```
*/

/**
将path中的无关内容清理掉，返回直接的路径信息
@method normalize
@static
@param path {String} 路径字符串
@return {String}
@example
```
Path.normalize('x/y/../z'); // => x/z/
Path.normalize('x/y/z/../'); // => x/y/
```
*/

/**
计算相对路径
@method relative
@static
@param from {String} 要比较的源地址
@param to {String} 要比较的目标地址
@return {String}
@example
```
Path.relative('x/','x/y/z'); // => 'y/z'
Path.relative('x/t/z','x/'); // => '../../'
```
*/

/**
得到绝对地址，算法逻辑参照 [NodeJS](http://nodejs.org/api/path.html#path_path_resolve_from_to)
@method resolve
@static
@example
```
Path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// => 'wwwroot/static_files/gif/image.gif'

Path.resolve('/foo/bar', '/tmp/file/')
// =>   '/tmp/file'
```
*/