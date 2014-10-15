/**
嵌入式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能
@module date-picker
*/

/**
嵌入式日历组件
@class DatePicker
@constructor
@extends Component.Control
@param config {Object}
*/

/**
一个过滤函数，用于判断日期是否可以被选择（出发select事件），返回true说明当前循环中的日期不可用，返回false说明当前循环中的日期可用

- current {GregorianCalendar} 时间对象，在当前日历页要显示出来的日期对应的日历对象
- value {GregorianCalendar} 时间对象，当前被选中的日期的GregorianCalendar时间对象。初始化Date.Picker时默认是代码运行当前时刻的GregorianCalendar时间对象，但选择日期后会被选中的日期的GregorianCalendar时间对象

```
disabledDate: function (current, value) {
	var date = new Date();
	return current.getDayOfMonth() < date.getDay();  //表示在当前日期之前的日期都不能被选择
}
```

@attribute disabledDate {Function}

*/


/**
是否显示每一行日期所在一年中的第几周(weekOfYear)的数字形式.显示为true，反之为false
@attribute showWeekNumber {Boolean}
@default true
*/

/**
是否显示今天.显示为true，反之为false。需要和 showClear 一起设置相同才生效
@attribute showToday {Boolean}
@default true
*/

/**
指定每个日期单元的渲染方式，返回的 html 字符串将渲染在对应的日期单元上面。函数接受两个参数

- current {GregorianCalendar} 时间对象，在当前日历页要显示出来的日期对应的日历对象
- value {GregorianCalendar} 时间对象，当前被选中的日期的GregorianCalendar时间对象。默认是代码运行当前时刻的GregorianCalendar时间对象

@attribute dateRender {Function} 
*/

/**
locale 信息
@attribute locale {Object}
*/

/**
是否显示清除按钮，默认 true。需要和 showToday 一起设置相同才生效
@attribute showClear {Boolean}
*/

/**
当选择时触发的事件

- e {CustomEventObject} 自定义事件对象
- e.value {GregorianCalendar} 时间对象

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



/**
浮层式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能
@class Popup
@namespace DatePicker
@constructor
@extends DatePicker
@uses Align
@uses Shim
@param config {Object}
@example
```
require(['date-picker'],function(DatePicker){
    // use DatePicker.Popup
});
```
*/

/**
当失去焦点是触发的事件

- e {CustomEventObject} 自定义事件对象
- e.value {GregorianCalendar} 时间对象

@event blur
@example
```
picker.on('blur', function (e) {
    picker.hide();
});
```
*/