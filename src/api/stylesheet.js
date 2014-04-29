/**
@module stylesheet
*/

/**
动态修改外部或内联样式表
@class StyleSheet
@constructor
@param config {Object}
*/

/**
link 节点或选择器
@attribute el {HTMLElement|String} 
*/

/**
link 元素节点
@property el {HTMLElement}
*/

/**
禁用当前 stylesheet 所在样式表的所有样式
@method disable
@return 当前实例
*/

/**
启用当前 stylesheet 所在样式表的所有样式
@method enable
@return 当前实例
*/

/**
当前样式表是否已经被启用
@method isEnabled
@return {Boolean}
*/

/**
获取对应 selectorText 的样式定义文本.
@method get
@param selectorText {String} 选择器字符串
@return {String}
@example
```
KISSY.use('stylesheet',function(S,StyleSheet){
    // use stylesheet
      <link id='existing'>
        a {
            color:red;
        }
      </link>
 
    var stylesheet = new StyleSheet({
        el: '#existing'
    });

    stylesheet.get('a'); // => color:red
});
*/

/**
设置对应 selectorText 的样式定义
@method set
@param selectorText {String} 选择器字符串
@param css {Object} 样式键值对
@return 当前实例
@example
```
KISSY.use('stylesheet',function(S,StyleSheet){
    // use stylesheet
      <link id='existing'>
        a {
            color:red;
        }
      </link>
      
    var stylesheet = new StyleSheet({
        el: '#existing'
    });

    stylesheet.set('a',{
        color:'',
        fontSize:'18px'
    }).get('a'); // => font-size:18px;
});
*/