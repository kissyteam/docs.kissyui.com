(((apilink=/5.0/api/classes/Loader.html)))
# 简单配置包使用

可以通过配置包来制定业务应用的 js 代码所在的路径，然后用目录结构来组织代码文件，最后 use 即可。例如：
```
KISSY.config({
    packages: {
        "my":{
            combine:false,
            tag: "20110323",//时间戳, 添加在动态脚本路径后面, 用于更新包内模块代码
            base: "./assets/module_package/", //包对应路径, 相对路径指相对于当前页面路径
            charset: "gbk" //包里模块文件编码格式
        }
    }
});
KISSY.use('core', function (S) {
    KISSY.one("#k12").on("click", function () {
        KISSY.use("my/mod", function (S, Mod) {
            alert(Mod);
        });
    });
});
```