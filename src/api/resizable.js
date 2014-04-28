/**
@module resizable
*/

/**
缩放功能

### 拖放 handler 的样式需要调用者自己编写.
@class Resizable
@constructor
@extends Base
@param config {Object}
@param config.node {String|HTMLElement|KISSY.Node} 将要进行缩放的节点
@param config.minWidth {Number} 默认为0, 表示拖动缩放的最小宽度
@param config.minHeight {Number} 默认为0, 表示拖动缩放的最小高度
@param config.maxWidth {Number} 默认为0, 表示拖动缩放的最大宽度
@param config.maxHeight {Number} 默认为0, 表示拖动缩放的最大高度
@param config.handlers {Array<String>} 默认为 [], 表示可拖动元素的哪些位置来进行缩放.
可取下列值: “b”,”t”,”r”,”l”,”tr”,”tl”,”br”,”bl”． 其中, t,b,l,r 分别表示 top,bottom,left,right, 加上组合共八种取值, 可在上, 下, 左, 右以及左上, 左下, 右上, 右下进行拖动.
@param config.preserveRatio {Boolean} 是否在 resize 的过程中保持 width/height 比例
*/

/**
销毁该组件, 取消元素上的缩放功能.
@method destroy
*/

/**
开始拖放后触发
@event resizeStart
*/

/**
拖放中触发
@event resize
*/

/**
结束拖放后触发
@event resizeEnd
*/

