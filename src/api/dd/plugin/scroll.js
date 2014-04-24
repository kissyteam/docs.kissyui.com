/**
@module dd/plugin/scroll
*/

/**
@class Scroll
@constructor
@extends Base
@param config {Object}
@param config.node {String | HTMLElement | window} 自动滚动容器, 随其内的可拖放节点自动滚动.
@param config.rate {Array<number>} 长度为 2, 默认值 [10,10] . 表示容器自动滚动的速度, 数组元素 1 表示横向滚动的速度, 数组元素 2 表示纵向滚动的速度.
@param config.diff {Array<Number>} 长度为 2, 默认值 [20,20] . 当鼠标进入容器内边缘区域时开始自动滚动. 数组元素 1 表示横向容器内边缘宽度, 数组元素 2 表示纵向容器内边缘宽度.
*/