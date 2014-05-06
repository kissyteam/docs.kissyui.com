/**
浮层式日历控件，支持基本的日期选择、时间选择、范围选择、日期格式化输出等常用功能
@module date/popup-picker
*/

/**
根据配置创建PopupDatePicker
@class PopupDatePicker
@namespace Date
@constructor
@extends Date.Picker
@uses Align
@uses Shim
@param config {Object}
@example
```
KISSY.use('date/popup-picker',function(S, PopupDatePicker){
    // use PopupDatePicker
});
```
*/

/**
当失去焦点是触发的事件
@event blur
@example
```
picker.on('blur', function (e) {
    picker.hide();
});
```
*/