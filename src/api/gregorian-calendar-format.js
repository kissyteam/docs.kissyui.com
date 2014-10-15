/**
@module gregorian-calendar-format
*/

/**
根据传入参数，创建对应的 DateTimeFormat 对象
@class GregorianCalendarFormat
@constructor
@param pattern {String} 时间模式（具体写法参见下面的表格）
![](/5.0/api/assets/img/project-img/date-format.jpg)
@param locale {Object} 时区
@param timeZoneOffset {Number} 时区时间偏移
*/

/**
日期时间格式对象，形式如下：

Style.FULL: yyyy年M月d日 EEEE ahh时mm分ss秒 GMTZ

Style.LONG: yyyy年M月d日 ahh时mm分ss秒

Style.MEDIUM: yyyy-M-d H:mm:ss    

Style.SHORT: yy-M-d ah:mm

@attribute Style
@type Object
*/

/**
格式化传入的日历中的时间
@method format
@param calender {GregorianCalendar} 要格式化时间的公历对象
@return {String}
@example
```
//GregorianCalendar是另一个Class
var gregorianCalendar = new GregorianCalendar();
gregorianCalendar.setTime(new Date());
var df = DateTimeFormat.getDateTimeInstance(Style.FULL, Style.FULL);
df.format(gregorianCalendar);  //例如现在的：2014年8月14日 星期四 下午05时23分36秒 GMT+0800

var df2 = DateTimeFormat.getDateTimeInstance(Style.FULL, Style.SHORT);
df2.format(gregorianCalendar); //例如现在的：2014年8月14日 星期四 下午5:23

var df3 = DateTimeFormat.getDateInstance(Style.FULL);
df3.format(gregorianCalendar); //例如现在的：2014年8月14日 星期四
```
*/

/**
解析时间字符串，转换成对应的公历对象
@method parse
@param dateStr {String} 要解析的时间字符串
@return {GregorianCalendar}
@example
```
var df = DateTimeFormat.getDateTimeInstance(Style.FULL, Style.FULL);
var str = '2013年7月11日 星期四 下午12时31分19秒 GMT+0800';
var cal = df.parse(str);
```
*/

/**
获取当前日期和时间在给定区域和时差下的默认格式化的 DateTimeFormat 对象
@method getInstance
@static
@param locale {Object} 时区
@param timeZoneOffset {Number} 时区时间偏移
@return {String}
@example
```
//相当于
getDateTimeInstance(DateTimeStyle.SHORT, DateTimeStyle.SHORT, locale, timeZoneOffset)
format后得到的字符串形如： 14-8-14 下午5:44
```
*/

/**
获取当前日期在给定区域和时差及格式下的 DateTimeFormat 对象
@method getDateInstance
@static
@param dateStyle {String} 日期格式,枚举型 DateTimeFormat.Style
@param locale {Object} 时区
@param timeZoneOffset {Number} 时区时间偏移
@return {String}
*/

/**
获取当前日期和时间在给定区域和时差及格式下的DateTimeFormat对象
@method getDateTimeInstance
@static
@param dateStyle {String} 日期格式,枚举型 DateTimeFormat.Style
@param timeStyle {String} 时间格式，枚举型 DateTimeFormat.Style
@param locale {Object} 时区
@param timeZoneOffset {Number} 时区时间偏移
@return {String}
*/

/**
获取当前时间在给定区域和时差及格式下的DateTimeFormat对象
@method getTimeInstance
@static
@param timeStyle {String} 时间格式，枚举型 DateTimeFormat.Style
@param locale {Object} 时区
@param timeZoneOffset {Number} 时区时间偏移
@return {String}
*/