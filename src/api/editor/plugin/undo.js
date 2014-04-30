/**
@module editor/plugin/undo
*/

/**
编辑器的编辑历史管理插件

### Commands
- save 将当前内容存入历史
- undo 回退到上一个编辑历史
- redo 前进到下一个编辑历史
@class Undo
@namespace EditorPlugin
*/

/**
历史撤销前触发.返回 false 取消操作
@event beforeUndo
*/

/**
历史重做前触发.返回 false 取消操作
@event beforeRedo
*/

/**
记录历史前触发.返回 false 取消操作
@event beforeSave
*/

/**
历史撤销后触发.
@event afterUndo
*/

/**
历史重做后触发.
@event afterRedo
*/

/**
记录历史后触发.
@event afterSave
*/
