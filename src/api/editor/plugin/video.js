/**
@module editor/plugin/video
*/

/**
编辑器的插入图片插件
@class Video
@constructor
@param config {Object} 配置对象，详见其Attribute
*/

/**
动态地址转化规则，其中每个 Object 包括
- reg {RegExp} - 判断匹配与否的正则
- url {RegExp} - 转化服务器的地址
- paramName {String} - 待转化 url 的参数名称
@attribute urlCfg {Object[]}
*/

/**
输入框提示信息
@attribute urlTip {String}
*/

/**
静态转换规则, 从用户输入转换为flash地址，其中每个 Object 包括
- reg {RegExp} - 判断匹配与否的正则
- width {Number} - 转化后 flash 的默认宽度
- height {Number} - 转化后 flash 的默认高度
- detect(url) {function} - 转化函数，参数为用户输入的 url
@attribute providers {Object[]}
*/
