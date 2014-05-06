/**
@module editor/plugin/bold
*/

/**
编辑器的字体加粗插件

### 提供的Commands
- bold

```
//调用命令方式

editor.execCommand("bold"); // 设置选区文字加粗

editor.execCommand("bold"); // 取消选区文字加粗

editor.queryCommandValue("bold") //=>false
```
@class Bold
@namespace Editor.Plugin
*/