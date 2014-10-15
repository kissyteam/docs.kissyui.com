/**
@module combobox
*/


/**

@class ComboBox
@constructor
@extends Component.Control
@param config {Object}
@example

```
require(['combobox'], function(ComboBox){
    var basicComboBox = new ComboBox({
        render : '#container',
        dataSource : new ComboBox.LocalDataSource({
            data : ['a1234', 'b2345', 'c3456', 'd4567']
        }),
        maxItemCount : 4,
        format : function(query, data){  //自定义下拉菜单属性
            var ret = [];
            for(var i = 0; i < data.length; i++){
                ret[i] = {
                    content:(data[i] + "")
                        .replace(query, '<strong>' + query + '</strong>'),
                    disabled:(i % 2 ? true : false)
                }
            }
            return ret;
        }
    })
})
```
*/

/**
默认 true. 是否显示下拉按钮
@attribute hasTrigger
@default true
*/

/**
默认无. 输入框的提示信息
@attribute placeholder {String}
*/

/**
数据源配置
例如静态数据源的配置:
```
{
    dataSource : new ComboBox.LocalDataSource({
                    data:["abc","123"]
                })
} 
```
@attribute dataSource {ComboBox.LocalDataSource|ComboBox.RemoteDataSource} 
*/

/**
最多可显示的下拉菜单个数
@attribute maxItemCount {Number} 
*/

/**
是否下拉菜单和自动补全框宽度一致。默认 true.
@attribute matchWidth {Boolean} 
@default true
*/

/**
可选。自定义下拉菜单属性的函数，传入参数 query(自动补全框当前值) , data(匹配数据数组)。 返回对象数组，其中对象的 content 属性表示菜单项显示内容，textContent 表示放入到自动补全框的内容，disabled 表示当前项是否被禁用.
例如高亮的处理:
```
{
    format:function(query, data){
        var ret = [];
        for (var i = 0; i < data.length; i++) {
            ret[i] = {
                content:(data[i] + "")
                        .replace(new RegExp(S.escapeRegExp(query), "g"),
                        "<b>$&</b>")
            };
        }
        return ret;
    }
}
```
@attribute format {Function}
*/

/**
默认 true. 上下键是否导致高亮项填充入自动补全框
@attribute updateInputOnDownUp {Boolean}
@default true
*/

/**
默认 false. 是否当自动补全菜单出现时高亮第一项
@example
```
require(['node', 'combobox'], function ($, ComboBox) {
    var data = ["a123456", "b12345", "c3464356", "d23434"];

    var basicComboBox = new ComboBox({
        width:100,
        srcNode:$("#combobox"),
        // 初始就聚焦
        focused:true,
        hasTrigger:false,
        dataSource:new ComboBox.LocalDataSource({
            data:data
        })
    });
    basicComboBox.render();

    // 得到焦点时展示全部
    basicComboBox.get("input").on("focus", function () {
        basicComboBox.sendRequest('');
    });
}
```
@attribute autoHighlightFirst
@default false
*/

/**
关联的复合输入框
@attribute input {KISSY.Node}
*/

/**
自动补全菜单的配置（在显示后转换为实例）或实例
@attribute menu {ComboBox.Menu|Object}
*/

/**
自动补全菜单是否已经收起
@attribute collapsed {Boolean}
*/

/**
根据 value 自动补全并显示下拉菜单
@method sendRequest
@param value {String} 自动补全的值
*/

/**
当用户选择自动补全下拉框内的项时触发
@event click
@param e.target {MenuItem} 选择的下拉菜单项
*/

/**
当下拉菜单显示或收起时触发
@event afterCollapsedChange
@param e.NewVal {Boolean} 当前下拉菜单是否是收起状态
*/





/**
本地数据源，配合[ComboBox](/5.0/api/classes/ComboBox.html)使用
@class LocalDataSource
@constructor
@namespace ComboBox
@param config {Object}
@example
    
```
require(['combobox'], function(ComboBox){
    var basicComboBox = new ComboBox({
        render : '#container',
        dataSource : new ComboBox.LocalDataSource({
            data : ['a1234', 'b2345', 'c3456', 'd4567']
        }),
        maxItemCount : 4,
        format : function(query, data){  //自定义下拉菜单属性
            var ret = [];
            for(var i = 0; i < data.length; i++){
                ret[i] = {
                    content:(data[i] + "")
                        .replace(query, '<strong>' + query + '</strong>'),
                    disabled:(i % 2 ? true : false)
                }
            }
            return ret;
        }
    })
})
```
*/

/**
静态数据数组
@attribute data {Object[]}
*/

/**
可选. 如何根据用户输入对数据进行过滤。默认为
```
function parser(inputVal, data) {
    var ret = [],
        count = 0;

    if (!inputVal) {
        return data;
    }

    S.each(data, function (d) {
        if (d.indexOf(inputVal) != -1) {
            ret.push(d);
        }
        count++;
    });

    return ret;
}

```
@attribute parse {Function}
*/


/**
数据源，配合[ComboBox](/5.0/api/classes/ComboBox.html)使用
@class RemoteDataSource
@constructor
@namespace ComboBox
@param config {Object}
@example
    require(['combobox'], function(ComboBox){
        var combobox = new ComboBox({
            srcNode : '#combobox',
            placeholder : 'input..',
            prefixCls : 'search-',
            dataSource : new ComboBox.RemoteDataSource({  //从淘宝获取数据
                xhrCfg: {
                    url: 'http://suggest.taobao.com/sug',
                    dataType: 'jsonp',
                    data: {
                        k: 1,
                        code: "utf-8"
                    }
                },
                paramName: "q",
                parse: function (query, results) {
                    // 返回结果对象数组
                    return results.result;
                },
                cache: true
            }),
            format : function(query, data){  //自定义下拉菜单属性
                var ret = [];
                for(var i = 0; i < data.length; i++){
                    ret[i] = {
                        content : data[i][0].replace(query, '<span class="item-text">' + query + '</span>'),
                        textContent : data[i][0]
                    };
                }
                return ret;
            }
        });
        combobox.render();
    })
*/

/**
用户输入发送到后端的参数名，默认 ‘q’
@attribute paramName {String}
@default 'q'
*/

/**
可选. 如何根据用户输入对后台返回数据进行过滤。默认
```
function parser(
    // 用户输入
    inputVal,
    // 服务器返回数据
    data) {
    return data;
}
```
@attribute parse {Function}
*/

/**
默认 false. 用户输入为空时是否发请求
@attribute allowEmpty {Boolean} 
@default false
*/

/**
默认 false. 是否缓存服务器端数据
@attribute cache {Boolean}
@default false
*/

/**
传递给 IO 的其他参数
@attribute xhrCfg {Object}
*/