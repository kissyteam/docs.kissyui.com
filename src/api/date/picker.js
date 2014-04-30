/**
嵌入式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能
@module date/picker
*/

/**
根据配置创建picker
@class DatePicker
@constructor
@extends Component.Control
@param config {Object} 配置对象，详情参考Attribute
*/

/**
一个过滤函数，用于判断日期是否可用.可用返回true，反之返回false
```
disabledDate: function (current, value) {
    return current.getMonth() < value.getMonth();
}
```
@attribute disabledDate {Function}
*/


/**
是否显示周的数字形式.显示为true，反之为false
@attribute showWeekNumber {Boolean}
*/

/**
是否显示今天.显示为true，反之为false
@attribute showToday {Boolean}
*/

/**
指定每个日期单元的渲染方式.函数接受两个参数
- current: 当前的日期值 
- value : 初始化 picker 是设置的值，默认为当前时间
@attribute dateRender {Function} 
*/

/**
locale 信息
@attribute locale {Object}
*/

/**
是否显示清除按钮，默认 true
@attribute showClear {Boolean}
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