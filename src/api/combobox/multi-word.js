/**
@module combobox/multi-word
*/

/**
自动补全组件。拓展自 ComboBox ，它可输入多个值。
@class ComboBoxMultiWord
@constructor
@extends ComboBox
@param config {Object}
@example
	require(['combobox', 'combobox/multiword'], function(ComboBox, ComboBoxMultiWord){
		var myComboBoxMultiWord = new ComboBoxMultiWord({
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