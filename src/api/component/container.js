/**
@module component/container
*/


/**
@extends Component.Control
@class Container
@namespace Component
@constructor
@param config {Object}
*/

/**
可选，当前组件的子组件数组
@attribute children {Control[]} 
*/


/**
添加一个指定的组件作为当前组件的子组件
@method addChild
@param c {Control|Object} 要添加的子组件实例或者子组件的对象描述
@param [index] 子组件的索引，可选。从 0 开始，新子组件被插入时的索引。如果未指定，新组件将会被插入在最后
*/

/**
返回所给索引对应的子组件，如果索引超出返回，则返回 null
@method getChildAt
@param index {Number} 从 0 开始的索引
@return {Control} 所给索引对应的子组件对象。如果不存在则返回 null
*/

/**
从当前组件中移除所给子组件，并返回这个子组件对象。
如果 destroy 是 true，调用要移除的组件的 destroy() 方法，随后从 DOM 文档中移除子组件的 DOM。否则，清除子组件 DOM 的工作就要由调用者做。
@method removeChild
@param c {Control|Object} 要添加的子组件实例或者子组件的对象描述
@param [destroy=true] {Boolean} 默认为 true, 在移除的子组件上调用 destroy()方法 
*/

/**
移除所有包含的子组件
@method removeChildren
@param [destroy=true] {Boolean} 默认为 true, 在移除的子组件上调用 destroy()方法 
*/