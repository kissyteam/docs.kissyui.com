/**
@module editor/plugin/back-color
*/

/**
编辑器的背景色插件

### 提供的Commands
- backColor
	- 参数 color {String}  颜色的 16 进制字符串。例如 ‘#ffffff’

调用命令方式：
```
editor.execCommand("backColor",'#ffffffff'); // 设置选区背景为白色
```
@class BackColor
@namespace Editor.Plugin
@example
```
KISSY.use('editor',function(S,Editor){
    S.use('editor/plugin/back-color',function(S,BackColor){
        // use BackColor
    });
});
```
*/