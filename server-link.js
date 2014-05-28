var fs = require('fs');

/**
@method symlinkSync
@param srcpath {String} 源目录的绝对路径
@param dstpath {String} 目标目录的绝对路径
@param [type] {String} 仅在Window下有效，可取值'file'/'dir'/'junction',表示文件类型；在Linux下该参数会被忽略
@param callback {Function} 回调函数
*/
fs.symlinkSync('D:/docs.kissyui.com/build','c:/wamp/www/5.0','dir');