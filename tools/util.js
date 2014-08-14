//--------------util function---------------------------------------------------------------

var fs = require( 'fs' ),
    path = require('path'),
    stat = fs.stat;

function clone(obj){
    var res = {};
    for(item in obj){
        res[item] = obj[item];
    }
    return res;
}




/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var copy = function( src, dst ){
    // 读取目录中的所有文件/目录
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }

        paths.forEach(function( path ){
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;        

            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }

                // 判断是否为文件
                if( st.isFile() ){
                    // 创建读取流
                    readable = fs.createReadStream( _src );
                    // 创建写入流
                    writable = fs.createWriteStream( _dst );   
                    // 通过管道来传输流
                    readable.pipe( writable );
                }
                // 如果是目录则递归调用自身
                else if( st.isDirectory() ){
                    exists( _src, _dst, copy );
                }
            });
        });
    });
};


function mkdirRecursion(dirPath,callback){
    if(fs.existsSync(dirPath)){   //如果已经存在
       callback && callback();
       return;
    }
    if(fs.existsSync(path.dirname(dirPath))){  //父目录是否存在
        fs.mkdir(dirPath,function(err,success){
            if(err){
                console.log(err);
            }else{
                callback();
            }
        });
    }else{
        mkdirRecursion(path.dirname(dirPath),function(){
            fs.mkdir(dirPath,callback);
        });
    }
}

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录。注意src和dst只能是目录名，不是文件名
var exists = function( src, dst, callback ){
    fs.exists( dst, function( exists ){
        // 已存在
        if( exists ){
            callback( src, dst );
        }
        // 不存在
        else{
            mkdirRecursion(dst,function(){
                callback( src, dst );
            });
        }
    });
};

module.exports = {
    exists : exists,
    copy : copy,
    clone : clone,
    mkdirRecursion : mkdirRecursion
};