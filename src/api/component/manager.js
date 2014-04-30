/**
@module component/manager
*/



/**
提供组件元数据管理功能
@class Manager
@namespace Component
@constructor
*/

/**
把 id 和组件对象关联起来
@method addComponent
@param id {String} 组件 ID
@param component {Control} 组件对象
*/

/**
根据 id 获取对应的组件对象
@method getComponent
@param id {String} 组件 ID
@return {Control} 要获取的组件对象
*/

/**
通过传入的 css classNames 获取对应的组件的构造函数
@method getConstructorByXClass
@param classNames {String} css class name, 多个用空格隔开
@return {Function} 要获取的构造函数
*/

/**
移除对应 id 与组件之间的联系
@method removeComponent
@param id {String} 组件 ID
*/

/**
将 css class 和组件的构造函数对应
@method setConstructorByXClass
@param classNames {String} css class name, 多个用空格隔开
@param ComponentConstructor {Function} 组件的构造函数
*/