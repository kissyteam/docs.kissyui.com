(((apilink class="Feature")))
# Feature基本介绍

## 引用feature

	require(['feature'], function(Feature){
		//use Feature
	})

硬件环境关键特性检测，这类功能通常在判断硬件环境时使用，比如在KISSY的modules定义的代码：

	require(['feature', 'ua'], function(Feature, UA){
		require.config('alias', {
		    'modulex-dom': 'dom',
		    'dom/selector': Feature.isQuerySelectorSupported() ? '' : 'query-selector',
		    dom: [
		        'dom/base',
		            UA.ieMode < 9 ? 'dom/ie' : ''
		    ]
		});
	});
	
## APIs

### isDeviceMotionSupported()  `<static>`

判断当前宿主环境是否支持手势事件

### isMsPointerSupported()  `<static>`

判断当前宿主环境是否支持ie8的Pointer事件

### isTouchEventSupported()  `<static>`

判断当前宿主环境是否支持触屏事件

### isHashChangeSupported()  `<static>`

判断当前环境是否支持hashChange事件

### isTransitionSupported()  `<static>`

判断当前环境是否支持Transition动画

### isTransformSupported()  `<static>`

判断当前环境是否支持Transform动画

### isClassListSupported()  `<static>`

判断当前环境是否支持ClassList

### isQuerySelectorSupported()  `<static>`

判断当前环境是否支持QuerySelector方法

### getTransitionPrefix()  `<static>`

得到Transition属性的前缀

### getTransformPrefix()  `<static>`

得到Transform属性的前缀
