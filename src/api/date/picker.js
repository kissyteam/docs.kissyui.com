/**
嵌入式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能
@module date/picker
*/

/**
根据配置创建picker
@class DatePicker
@constructor
@extends Control
@param config {Object} 配置信息，如下：
@param config.disabledDate {Function} 一个过滤函数，用于判断日期是否可用.可用返回true，反之返回false
```
disabledDate: function (current, value) {
    return current.getMonth() < value.getMonth();
}
```
@param config.showWeekNumber {Boolean} 是否显示周的数字形式.显示为true，反之为false
@param config.showToday {Boolean} 是否显示今天.显示为true，反之为false
@param config.dateRender {Function} 指定每个日期单元的渲染方式.函数接受两个参数
- current: 当前的日期值 
- value : 初始化 picker 是设置的值，默认为当前时间
@param locale {Object} locale 信息
@param showClear {Boolean} 是否显示清除按钮，默认 true
*/

/**
当选择时触发的事件
@event select
@example
```
picker.on('select', function (e) {
    var value = e.value;
    if (value) {
        result.html(DateFormat.getDateInstance(DateFormat.Style.FULL).format(value));
    } else {
        result.html('null');
    }
});
```
*/