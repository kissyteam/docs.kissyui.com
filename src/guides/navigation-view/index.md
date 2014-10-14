(((apilink class="NavigationView")))

# NavigationView的基本介绍

NavigationView是在触屏环境下的一个重要组件，它可以管理多个视图之间的显示、隐藏、切换，同一时间只能显示一个视图。并针对没有提供“返回键”的终端系统，如IOS，提供了一个模块 navigation-view/bar 实现返回按钮，可配合使用。NavigationView专注以下几点：
* 视图切换，多种视图切换效果
* 视图管理，缓存，销毁，离开，进入接口
* 视图滚动，使用 scroll-view 统一处理视窗滚动
* 历史管理，和原生浏览器历史完全一致

此外，它细粒度模块化，预留扩展接口，不涉及 model，内容获取，业务架构等使得它可以灵活适用于不同的业务和使用场景。

## 引入样式资源
    <link href="http://g.tbcdn.cn/kissy/edge/2014.08.26/navigation-view/assets/dpl.css" rel="stylesheet">

## 载入模块
	require(['navigation-view'], function(NavigationView){
		//use NavigationView
	});

## 简单使用
	require(['navigation-view', 'navigation-view/bar', 'scroll-view', 'scroll-view/plugin/scrollbar'], function(NavigationView, NavigationViewBar, ScrollView, ScrollBar){
	    var navigationView = new NavigationView({
	        loadingHtml: '<div class="ks-navigation-view-loading-outer">' +
	            '<div class="ks-navigation-view-loading-inner"></div>' +
	            '</div>',
	        render: 'body'
	    }).render();

	    var bar = new NavigationViewBar({  //添加工具栏“返回”按钮
	    		navigationView: navigationView,
                elBefore: navigationView.get('contentEl')
	    	});

	    var PageView = ScrollView.extend({  //拓展自ScrollView，则该视图可滑动浏览
	        createDom : function(){
	            //your code
	        },
	        bindUI : function(){

	        },
	        enter : function(){

	        },
	        leave : function(){  //navigationView.pop()会触发事件进入该函数

	        },
	        destructor : function(){  //若组件调用destroy方法，则会进入该函数

	        }
	        //....more function
	    },{
	        xclass : 'page-view',
	        ATTRS: {
                plugins: [ScrollBar]  //使用了 ScrollBar 插件，则该视图右侧栏有滚动条显示
            }
	    });

	    navigationView.push({   //随便将执行所添加组件的初始化函数，依次执行方法：createDom -> bindUI -> enter
	        xclass : 'page-view',
	        title : 'PageView Title'
	    });
	});

## 更多信息

该模块的 attributes/methods/events 的具体信息请查看 [navigation-view api文档](http://docs.kissyui.com/5.0/api/classes/NavigationView.html)
