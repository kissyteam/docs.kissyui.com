/**
@module navigation-view
*/

/**
可管理多个视图之间显示/隐藏/切换的导航视图，同一时间只能显示一个视图，并针对没有提供“返回键”的终端系统，如IOS，提供了一个模块 navigation-view/bar 实现返回按钮，可配合使用。xclass : navigation-view
@class NavigationView
@extends Component.Container
@uses Component.Extension.ContentBox
@constructor
@param config
@example
	require(['navigation-view', 'component/control'], function(NavigationView, Control){
		var navigationView = new NavigationView({
            loadingHtml: '<div class="ks-navigation-view-loading-outer">' +
                '<div class="ks-navigation-view-loading-inner"></div>' +
                '</div>',
            render: 'body'
        }).render();

        var PageView = Control.extend({
			createDom : function(){
				//your code
			},
			bindUI : function(){
		
			},
			enter : function(){
	
			}
			//....more function
        },{
			xclass : 'page-view'
        });

        navigationView.push({
			xclass : 'page-view',
			title : 'PageView Title'
        });
	})
*/

/**
进入/离开视图的动画效果。如果是数组则是相对应的两个值，left -> right, top -> bottom，如果是字符串则是单个值，如'fade'可选择的动画效果有：none/slide-top/fade/dissolve/pop/flip-left/swap-left/cube-left/flow-left/turn
@attribute animation {Array|String}
@default ['slide-right', 'slide-left']
*/

/**
正在加载时的内容
@attribute loadingHtml {String}
*/

/**
缓存的视图的最大数量，超过最大值则需要重新加载/渲染
@attribute viewCacheSize {Number}
@default 10
*/

/**
是否能聚焦。聚焦时会在组件根节点添加class : {prefixCls}navigation-view-focused
@attribute focusable {Boolean}
@default false
*/

/**
是否允许在视图内选取文本
@attribute allowTextSelection {Boolean}
@default true
*/

/**
往视图堆栈添加一个视图。
@method push
@param config {Object} 配置项。
@param config.xclass {String} 必选，视图类的xclass。将会顺序执行它的内部方法： createDom -> bindUI -> enter。
@param config.animation {Array|String} 可选，进入/离开视图的动画效果。意义同初始化 NavigationView 的 animation 配置。
@param config.title {String} 视图标题。可选，如果使用 navigation-view/bar 插件的话将出现在上面。
@param config.viewId {String} 可选，视图的唯一id。
@param config.content {String} 视图内容
*/

/**
替换当前视图的配置
@method replace
@param config {Object} 配置项，如 { animation : 'turn' }
*/

/**
从视图堆栈里弹出当前视图，返回上一个视图。并自动调用当前视图类的内部方法leave，若手动调用了视图的destroy方法，则会随后进入其内部方法destructor。
@method pop
*/




