/**
@module editor/plugin/heading
*/

/**
编辑器的标题插件

### 提供的Commands
- heading 对选区设置或取消标题的插件
支持 queryCommandValue，返回选区设置标题
	- 参数 tag (String) – 标题的标签名称。例如 ‘h1’,’p’
实例：
```
editor.execCommand("heading",'h1');
```

@class Heading
@namespace EditorPlugin
*/
