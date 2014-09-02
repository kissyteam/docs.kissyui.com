/**
@module component/extension/align
*/



/**
@Class Align
@namespace Component.Extension
@constructor
@param config {Object}
*/

/**
设置组件根节点对齐
@method align
@param node {String|KISSY.Node|HTMLDOMNode} 对齐的参考元素
@param points {Array<String>} 对齐的参考位置
@param offset {Array<Number>} 相对对齐元素的偏移
@param overflow {Object} 超出可视区域后如何处理
*/

/**
将组件根节点放在当前视窗中央
@method center
*/

/**
可选, 组件节点对齐的相关配置, 例如：
```
{
    node: null,         // 类型选择器字符串, 对齐参考元素;falsy值则为可视区域;若在子组件里使用，不设置node则默认是父组件
    points: ['tr','tl'], // 类型字符串数组, 表示 overlay 的 tl 与参考节点的 tr 对齐
    offset: [0, 0],      // 类型整数数组, 表示 overlay 最终位置与经 node 和 points 计算后位置的偏移,
                        // 数组第一个元素表示 x 轴偏移, 第二个元素表示 y 轴偏移.
    overflow:{
        adjustX:1, // 当对象不能处于可显示区域时，自动调整横坐标
        adjustY:1 // 当对象不能处于可显示区域时，自动调整纵坐标
    }
}
```
points 字符串数组元素的取值范围为 t,b,c 与 l,r,c 的两两组合, 分别表示 top,bottom,center 与 left,right,center 的两两组合, 可以表示 9 种取值范围
第一个字符取值 t,b,c , 第二个字符取值 l,r,c. 如下图所示

![alt text](/5.0/api/assets/img/project-img/align.png)
@attribute align {Object}
*/