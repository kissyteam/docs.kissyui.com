/**
公历模块,提供了时间转换，范围计算等功能。
@module gregorian-calendar
*/

/**
公历
@class GregorianCalendar
@constructor
@param params 参数列表，可以有不同的参数，如下：
1. 参数组合1：
   - timezoneOffset (Number) – 时区时间偏差，以分钟形式，偏移小时数乘以60
2. 参数组合2:
   - locale (Object) – 区域信息，包含时差，时间符号等的对象
3. 参数组合3：
   - timezoneOffset (Number) – 时区时间偏差，以分钟形式，偏移小时数乘以60
   - locale (Object) – 区域信息，包含时差，时间符号等的对象
4. 参数组合4，按照所给日期和时间在默认时区和默认区域创建公历：
   - year (Number) 
   - [month, day, hour, minute, seconds] (可选) 对应域的值
*/

/**
常量，星期日
@attribute SUNDAY
@final
*/

/**
常量，星期一
@attribute MONDAY
@final
*/

/**
常量，星期二
@attribute TUESDAY
@final
*/

/**
常量，星期三
@attribute WEDNESDAY
@final
*/

/**
常量，星期四
@attribute THURSDAY
@final
*/

/**
常量，星期五
@attribute FRIDAY
@final
*/

/**
常量，星期六
@attribute SATURDAY
@final
*/

/**
常量，一月
@attribute JANUARY
@final
*/

/**
常量，二月
@attribute FEBRUARY
@final
*/

/**
常量，三月
@attribute MARCH
@final
*/

/**
常量，四月
@attribute APRIL
@final
*/

/**
常量，五月
@attribute MAY
@final
*/

/**
常量，六月
@attribute JUNE
@final
*/

/**
常量，七月
@attribute JULY
@final
*/

/**
常量，八月
@attribute AUGUST
@final
*/

/**
常量，九月
@attribute SEPTEMBER
@final
*/

/**
常量，十月
@attribute OCTOBER
@final
*/

/**
常量，十一月
@attribute NOVEMBER
@final
*/

/**
常量，十二月
@attribute DECEMBER
@final
*/

/**
判断当前的年份是否是闰年
@method isLeapYear
@return {Boolean}
*/


/**
返回毫秒形式的当前日历的时间
@method getTime
@return {Number} 时间的毫秒形式
*/

/**
通过所给的毫秒形式的值设置当前日历的时间
@method setTime
@param time {Number} 要设置的时间的毫秒形式
*/

/**
获得传入的field对应的值
@method get
@param field {String}  要获得的域的名字
@return {Number} 对应域的值
*/

/**
获得当前的年份
@method getYear
@return {Number} 当前年份的值
*/

/**
获得当前的月份
@method getMonth
@return {Number} 当前月份的值
*/

/**
获得当前的月份中的哪一天
@method getDayOfMonth
@return {Number} 第几天
*/

/**
获得当前的天中的哪一小时
@method getHourOfDay
@return {Number} 哪一小时
*/

/**
获得当前的分钟域的值
@method getMinutes
@return {Number} 对应的值
*/

/**
获得当前的秒位的值，不是整体时间的秒值
@method getSeconds
@return {Number} 当前的秒值

/**
获得当前的毫秒位的值，不是整体时间的毫秒值
@method getMilliseconds
@return {Number} 当前的毫秒值
*/

/**
当前周是当前年中的第几周
@method getWeekOfMonth
@return {Number} 第几周
*/

/**
当前天是当前周中的第几天
@method getDayOfWeek
@return {Number} 第几天
*/

/**
当前周是这个月中这一周的第几天
@method getDayOfWeekInMonth
@return {Number} 第几天
*/

/**
设置对应日历域的值
@method set
@param field {String} 要设置的域
@param v {Number} 对应域要设置的值
*/

/**
设置日历的年份.
@method setYear
@param v {Number} 要设置的年份
*/

/**
设置日历的月份
@method setMonth
@param v {Number} 要设置的月份
*/

/**
设置日历当前月中的某一天
@method setDayOfMonth
@param v {Number} 要设置的天
*/

/**
设置当前的天中的哪一小时
@method setHourOfDay
@param v {Number} 要设置的小时
*/

/**
设置分钟域的值
@method setMinutes
@param v {Number} 要设置的值
*/

/**
设置秒位的值
@method setSeconds
@param v {Number} 要设置的值
*/

/**
设置毫秒位的值
@method setMilliseconds
@param v {Number} 要设置的值
*/

/**
设置为当前年的第几周
@method setWeekOfYear
@param v {Number} 要设置的值
*/

/**
设置为当前月的第几周
@method setWeekOfMonth
@param v {Number} 要设置的值
*/

/**
设置为当前年中的第几天
@method setDayOfYear
@param v {Number} 要设置的值
*/

/**
设置为当前周中的第几天
@method setDayOfWeek
@param v {Number} 要设置的值
*/

/**
设置为当前月的当前周的第几天
@method setDayOfWeekInMonth
@param v {Number} 要设置的值
*/

/**
增加对应日历域的值
@method add
@param field {String} 要增加的域
@param v {Number} 对应域要增加的值
*/

/**
增加日历的年份
@method addYear
@param v {Number} 对应域要增加的值。例如现在是2014年，dateGregorian.getYear() 返回2014，dateGregorian.addYear(2)则变成 2016
*/

/**
增加日历的月份
@method addMonth
@param v {Number} 对应域要增加的值
*/

/**
增加日历当前月中的某一天
@method addDayOfMonth
@param v {Number} 对应域要增加的值
*/

/**
增加当前的天中的哪一小时
@method addHourOfDay
@param v {Number} 对应域要增加的值
@example
```
var date = new DateGregorian();
date.setTime(+new Date());
var df = DateFormat.getInstance();
df.format(date);  //14-8-14 下午7:24
date.getHourOfDay()  // 19
date.addHourOfDay(2);
df.format(date);  //14-8-14 下午9:24 
date.getHourOfDay()  // 21  在原基础加了两个小时
```
*/

/**
增加分钟域的值
@method addMinutes
@param v {Number} 对应域要增加的值
*/

/**
增加秒位的值
@method addSeconds
@param v {Number} 对应域要增加的值
*/

/**
增加毫秒位的值
@method addMilliseconds
@param v {Number} 对应域要增加的值
*/

/**
增加为当前年的第几周
@method addWeekOfYear
@param v {Number} 对应域要增加的值
*/

/**
增加为当前月的第几周
@method addWeekOfMonth
@param v {Number} 对应域要增加的值
*/

/**
增加为当前年中的第几天
@method addDayOfYear
@param v {Number} 对应域要增加的值
*/

/**
增加为当前周中的第几天
@method addDayOfWeek
@param v {Number} 对应域要增加的值
*/

/**
增加为当前月的当前周的第几天
@method addDayOfWeekInMonth
@param v {Number} 对应域要增加的值
*/

/**
增加对应日历域的值
@method roll
@param field {String} 要增加的域
@param v {Number} 对应域要增加的值
*/

/**
增加日历的年份
@method rollYear
@param v {Number} 对应域要增加的值
*/

/**
增加日历的月份
@method rollMonth
@param v {Number} 对应域要增加的值
*/

/**
增加日历当前月中的某一天
@method rollDayOfMonth
@param v {Number} 对应域要增加的值
*/

/**
增加当前的天中的哪一小时
@method rollHourOfDay
@param v {Number} 对应域要增加的值
*/

/**
增加分钟域的值
@method rollMinutes
@param v {Number} 对应域要增加的值
*/

/**
增加秒位的值
@method rollSeconds
@param v {Number} 对应域要增加的值
*/

/**
增加毫秒位的值
@method rollMilliseconds
@param v {Number} 对应域要增加的值
*/

/**
增加为当前年的第几周
@method rollWeekOfYear
@param v {Number} 对应域要增加的值
*/

/**
增加为当前月的第几周
@method rollWeekOfMonth
@param v {Number} 对应域要增加的值
*/

/**
增加为当前年中的第几天
@method rollDayOfYear
@param v {Number} 对应域要增加的值
*/

/**
增加为当前周中的第几天
@method rollDayOfWeek
@param v {Number} 对应域要增加的值
*/

/**
增加为当前月的当前周的第几天
@method rollDayOfWeekInMonth
@param v {Number} 对应域要增加的值
*/