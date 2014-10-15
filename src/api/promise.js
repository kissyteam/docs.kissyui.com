/**
@module promise
*/

/**
### 简单使用
```
require(['promise'],function(Promise){
	var d = new Promise.Defer();
    var promise = d.promise;
    promise.then(function (v) {
        return v + 1;
    }).then(function (v) {
            alert(v); // => 2
        });
    d.resolve(1); // 该位置也可以放在 then 前面
});
```
@class Promise
@constructor
@return promise 实例，外部不允许初始化。要通过[Defer()](/5.0/api/classes/Promise.Defer.html)来获取
*/

/**
当前 promise 实例已完成时注册一个 callback, 如果 promise fail, 则这下一个事件循环中抛出错误。
@method done
@param fulfilled {Function} 该 promise 成功时的回调，参数为 defer resolve 时的 value
@param [rejected] {Function} 该 promise 失败时的回调，参数为 defer reject 时的 reason
*/

/**
监听当前实例的成功和失败并返回新的 promise 实例
@method then
@param fulfilled {Function} 该 promise 成功时的回调，参数为 defer resolve 时的 value
@param [rejected] {Function} 该 promise 失败时的回调，参数为 defer reject 时的 reason
@return {Promise} 一个新的 promise. 当前 promise 成功时新的 promise 也成功. 当前 promise 失败时新的 promise 也失败
*/

/**
监听当前实例的失败并返回新的 promise 实例.相当于调用 this.then(null,rejected)
@method fail
@param rejected {Function} 该 promise 失败时的回调，参数为 defer reject 时的 reason
@return {Promise} 一个新的 promise. 当前 promise 成功时新的 promise 也成功. 当前 promise 失败时新的 promise 也失败
*/

/**
监听当前实例的成功和失败并返回新的 promise 实例
@method fin
@param callback {Function} 该 promise 成功或失败时的回调， 成功时参数为 defer resolve 时的 value 和 true. 失败时参数为 defer reject 时的 reason 和 false
@return {Promise} 一个新的 promise. 当前 promise 成功时新的 promise 也成功. 当前 promise 失败时新的 promise 也失败
*/

/**
返回当前 promise 是否成功了
@method isResolved
@return {Boolean}
*/

/**
返回当前 promise 是否失败了
@method isRejected
@return {Boolean}
*/

/**
返回参数 promise 是否成功了
@method isResolved
@param promise {Promise} 需要查询的promise实例
@static
@return {Boolean}
*/

/**
返回参数 promise 是否失败了
@method isRejected
@param promise {Promise} 需要查询的promise实例
@static
@return {Boolean}
*/

/**
返回参数 promise 是否是 promise
@method isPromise
@param promise {Object} 需要查询的对象
@static
@return {Boolean}
*/

/**
返回一个新的 promise
@method when
@static
@param obj {Object} 监听的对象.如果 obj 为 promise 类型，相当于 obj.then(fulfilled, rejected);否则直接调用 fulfilled(obj)，并返回一个成功的 promise
@param fulfilled {Function}
@param rejected {Function}
@return {Promise}
*/

/**
返回一个新的 promise.当 objects 全部成功后新的 promise 成功，否以第一个 promise 的失败值为失败
@method all
@static
@param objects {Promise|Array<Object>} promise或普通对象数组
@return {Promise}
*/





/**
@class Defer
@constructor
@namespace Promise
@return Defer 实例，用于逻辑内部控制成功或失败，返回 promise 供外部监听
*/

/**
用于外部监听成功失败的 promise 对象
@property promise {Promise}
*/

/**
使得内部的 promise 成功，并设置成功值为 value，
如果 value 也是 promise，只有等 value 成功后改 defer 内部的 promise 才算成功
@method resolve
@param value 任意值（ 包括 promise ）
*/

/**
设置内部 promise 为失败状态，失败回调参数为 reason
@method reject
@param reason 设置给失败回调函数的参数
*/