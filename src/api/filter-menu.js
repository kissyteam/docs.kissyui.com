/**
@module filter-menu
*/

/**
可过滤菜单
@class FilterMenu
@constructor
@extends Menu
@param config {Object}
@example
	//从已存在html节点生成
	require(['filter-menu'], function(FilterMenu){
        var filterMenu = new FilterMenu({
            srcNode: '#filterMenuExist',
            width: 200,
           	allowMultiple : true
        });

        filterMenu.render();
	})

	//全新节点生成
	require(['menu','filter-menu'], function(Menu, FilterMenu){
		var m1 = new Menu.Item({
            selectable: true,
            content: "女鞋",
            pinyin: "nx"
        });
        var m4 = new Menu.Item({

            selectable: true,
            content: "女装女服",
            pinyin: "nznf"
        });
        var m2 = new Menu.Item({

            selectable: true, content: "家居服务",
            elCls: "hasChildren",
            pinyin: "jjfw"
        });
        var m3 = new Menu.Item({

            selectable: true,
            content: "手机",
            elCls: "hasChildren",
            pinyin: "sj"
        });

        var filterMenu = new FilterMenu({
            render: "#container",
            width: 500,
            placeholder: "请输入中文或简拼"
        });
        filterMenu.addChild(m1);
        filterMenu.addChild(m2);
        filterMenu.addChild(m3);
        filterMenu.addChild(m4);
        
        filterMenu.render();
	})
*/

/**
是否允许输入多个， 默认为false
@attribute allowMultiple {Boolean} 
@default false
*/

/**
placeholder 内容
@attribute placeholder {String} 
*/

/**
过滤的字符串
@attribute filterStr {String} 
*/

/**
根据所给字符串，过滤出响应的项

可以重写此方法，进行自定义，不自定义则是简单的内容 indexOf 查找
@method filterItems
@static
@param str {String} 需要过滤的字符串
*/

/**
重置用户的输入以及过滤结果
@method reset
@static
*/