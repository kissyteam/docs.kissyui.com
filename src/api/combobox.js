/**
@module combobox
*/


/**
### 从已有元素实例 ComboBox 对象时：

- 元素节点标明类名 {prefixCls}combobox .
- html 符合一定规范，例如：
```
<div class="ks-combobox" id="combobox">
    <div class="ks-combobox-input-wrap">
        <input style="width:100%;height:100%;" aria-haspopup="true"
               aria-combobox="list" role="combobox" combobox="off"
               class="ks-combobox-input" tabindex="0"
               id="inp"
                />
    </div>
</div>
```

### 使用前请加上初始样式
```
<style>
    .ks-popupmenu {
        position:absolute;
        left:-9999px;
        top:-9999px;
    }
</style>
```
@class ComboBox
@constructor
@extends Component.Control
@param config {Object} 配置项，详见其Attribute
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
KISSY.use("node,combobox", function (S, Node, ComboBox) {
    var $ = Node.all;
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
@class MultiValueComboBox
@constructor
@extends ComboBox
@namespace ComboBox
@param config {Object} 配置项，详见其Attribute
*/


/**
默认 false. 是否允许多个值的输入
@attribute multiple {Boolean}
@default false
*/

/**
当允许多个值输入时，分割多个值的分隔符
@attribute separator {String}
@default ",;"
*/

/**
默认 “suffix”. 可取枚举值（”prefix”,”suffix”）. 表示分隔符在最前面( @xx 模式)还是在最后面(gmail 模式).
@attribute separatorType {String}
*/

/**
默认 false. 自动补全菜单是否和光标对齐.
@attribute alignWithCursor {Boolean}
@default false
*/

/**
默认 " 在该字符内的所有字符（包括分隔符）都算作普通字符.
@attribute literal {String}
@default '"'
*/





/**
限定范围的输入框.
@class FilterSelect
@constructor
@extends ComboBox
@namespace ComboBox
@param config {Object} 配置项，详见其Attribute
@example
```
KISSY.use('combobox',function(S,ComboBox){
    // use ComboBox.FilterSelect
});
```
*/

/**
当用户的输入不匹配下拉提示的内容时的出错信息
@attribute invalidMessage {String}
*/




/**
本地数据源，配合[ComboBox](5.0/api/classes/ComboBox.html)使用
@class LocalDataSource
@constructor
@namespace ComboBox
@param config {Object} 配置项，详见其Attribute
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
数据源，配合[ComboBox](5.0/api/classes/ComboBox.html)使用
@class RemoteDataSource
@constructor
@namespace ComboBox
@param config {Object} 配置项，详见其Attribute
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