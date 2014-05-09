/**
* 提供动画支持
* @module anim
*/

/**
* 动画支持
* @class Anim
* @constructor
* @param elem {String|HTMLElement|KISSY.Node|window|普通的Object} 作用动画的元素节点或窗口（窗口时仅支持 scrollTop/Left）
* @param props {Object} 动画结束的 dom 样式值
* @param [config] {Object}
*/


/**
单位秒。默认 1 秒.动画持续时间
@attribute duration {Number} 
@default 1
*/

/**
默认 ‘easeNone’,动画平滑函数.
可取值 “swing”, “easeNone”, “linear”, “easeIn”, “easeOut”, “easeBoth”,”easeInStrong”, “easeOutStrong”,”easeBothStrong”,”elasticIn”,”elasticOut”, “elasticBoth”,”backIn”,”backOut”,”backBoth”, “bounceIn”,”bounceOut”,”bounceBoth”, “cubic-bezier(p1x, p1y, p2x, p2y)（所有取值必须在[0,1]之间）”. 效果预览, 可以参考 [easing可视化](/5.0/examples/anim/easing.html)，[cubic-bezier可视化](/5.0/examples/anim/cubic-bezier.html)
@attribute easing {String}
@default "easeNone"
*/

/**
所属队列名称. 默认undefined. 属于系统内置队列, 设置 false 则表示该动画不排队立即执行
@attribute queue {String|false|undefined}
@default undefined
*/

/**
动画到最后一帧后的回调函数
@attribute complete {Function}
*/

/**
是否使用css3 transition提升性能。
在 useTransition 为 true 的时候，easing 的值必须是 w3c 规定的时间函数名称。
具体为： ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(p1x, p1y, p2x, p2y)
@attribute useTransition {Boolean}
@default false
*/



/**
判断当前动画对象是否在执行动画过程
@method isRunning
@return {Boolean}
*/
/**
判断当前动画对象是否被暂停
@method isPaused
@return {Boolean}
*/

/**
在动画实例上调用, 开始当前动画实例的动画
@method run
*/

/**
在动画实例上调用, 结束当前动画实例的动画
@method stop
@param [finish=false] {Boolean} 默认为false. false 时, 动画会在当前帧直接停止（不触发 complete 回调）. 为 true 时, 动画停止时会立刻跳到最后一帧（触发 complete 回调）
*/

/**
在动画实例上调用, 暂停当前动画实例的动画
@method pause
*/

/**
在动画实例上调用, 继续当前动画实例的动画
@method resume
*/

/**
Anim 的静态方法, 用于判断 elem 上是否有动画对象在执行
@method isRunning
@static
@param elem {HTMLElement|window} 作用动画的元素节点
@return {Boolean}
*/

/**
Anim 的静态方法, 用于判断 elem 上是否有动画对象在暂停
@method isPaused
@static
@param elem {HTMLElement|window} 作用动画的元素节点
@return {Boolean}
*/

/**
Anim 的静态方法, 结束某元素上的动画（集合）
@method stop
@static
@param elem {HTMLElement|window} 作用动画的元素节点
@param end {Boolean}  此参数同实例方法 [stop](#method_stop) 中的 finish 参数
@param clearQueue=false {Boolean} 默认为 false, 是否清除动画队列中余下的动画
@param queueName {String} 队列名字。设置 queueName 后, 表示结束元素上指定队列中的所有动画：
- null 表示默认队列的动画
- false 表示不排队的动画
- string 类型表示指定名称的队列的动画
- 不设置时, 表示结束所有队列中的所有动画
*/ 

/**
Anim 的静态方法, 暂停某元素上的动画（集合）
@method pause
@static
@param elem {HTMLElement|window} 作用动画的元素节点
@param queueName {String} 队列名字。设置 queueName 后, 表示暂停元素上指定队列中的所有动画：
- null 表示默认队列的动画
- false 表示不排队的动画
- string 类型表示指定名称的队列的动画
- 不设置时, 表示暂停所有队列中的所有动画
*/ 

/**
Anim 的静态方法, 继续某元素上的动画（集合）
@method resume
@static
@param elem {HTMLElement|window} 作用动画的元素节点
@param queueName {String} 队列名字。设置 queueName 后, 表示继续元素上指定队列中的所有动画：
- null 表示默认队列的动画
- false 表示不排队的动画
- string 类型表示指定名称的队列的动画
- 不设置时, 表示继续所有队列中的所有动画
*/ 

/**
动画结束后, 触发该事件
@event complete
*/