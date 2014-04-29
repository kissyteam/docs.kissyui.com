/**
@module editor/plugin/maximize
*/

/**
编辑器的全屏插件

### Commands
- maximizeWindow 窗口最大化
- restoreWindow 窗口最恢复
@class Maximize
@constructor
*/

/**
最大化窗口后触发
@event afterMaximizeWindow
*/

/**
恢复窗口后触发
@event afterRestoreWindow
*/

/**
恢复窗口前触发，返回 false 可阻止最大化
@event beforeRestoreWindow
*/

/**
最大化窗口前触发，返回 false 可阻止最大化
@event beforeMaximizeWindow
*/
