/**
@module overlay
*/

/**
悬浮层。使用前先引入overlay样式`//g.alicdn.com/kissy/k/5.0.1/overlay/assets/dpl.css`或利用prefixCls自定义样式。
@class Overlay
@constructor
@extends Component.Container
@uses Component.Extension.Shim
@uses Component.Extension.Align
@param config {Object}
@example
    require(['overlay', 'button'], function(Overlay, Button){
        var modalDialog = new Overlay.Dialog({
            headerContent : '我是头部',
            width : 500,
            mask : true,
            bodyContent : '<div>我是主体</div>',
            align : {  //定位对话框
                points : ['cc', 'cc']  //在可视区域正中央
            }
        });
        modalDialog.show();
    });
*/

/**
可选, 显示或隐藏时的特效支持, 对象包含以下配置:
- effect.target {String|KISSY.Node} 可选,动画的参考元素
- effect.effect {String} 可取值 ‘fade’(渐隐显示), ‘slide’(滑动显示)
- effect.easing {String}  同 [Anim](/5.0/api/classes/Anim.html) 的 easing 参数配置
- effect.duration {Number} 可选, 动画持续时间, 以秒为单位.例如：
```
{
    target:'',        // {String|KISSY.Node} - 可选，动画的参考元素
    effect:'none',    // {String} - 可选, 默认为'none', 'none'(无特效), 'fade'(渐隐显示), 'slide'(滑动显示).
    easing:'',        // {String} - 可选, 同 KISSY.Anim 的 easing 参数配置.
    duration:3        // {Number} - 可选, 动画持续时间, 以秒为单位.
}
```
@attribute effect
*/

/**
对话框右上角是否包括关闭按钮
@attribute closable {Boolean}
*/

/**
点击关闭按钮的动作。默认 “hide” 隐藏，也可设置 “destroy” 销毁该组件
@attribute closeAction {String}
*/

/**
mask的相关配置：
- 当为Boolean时，表示组件显示时是否使用遮罩层盖住页面其他元素
- 当为Object时，有如下配置：
    - mask.closeOnClick {Boolean} 可选. 点击遮罩层是否关闭 overlay. (具体隐藏或销毁依赖 closeAction)
    - mask.effect {String} 可选. 遮罩层显示隐藏效果. (取值 ‘fade’,’slide’)
    - mask.duration {Number} 可选. 效果持续时间. 单位秒
@attribute mask {Boolean|Object} 
*/

/**
可选, 动画持续时间, 以秒为单位.
@attribute duration {Number} 
@optional
*/ 

/**
遮罩层节点
@attribute maskNode
@type {KISSY.Node}
*/

/**
生成一个加载盖住当前组件内容
@method loading
*/

/**
隐藏生成的加载层
@method unloading
*/






/**
模态对话框
@class Dialog
@constructor
@namespace Overlay
@extends Overlay
@param config {Object}
@example
    require(['overlay', 'button'], function(Overlay, Button){
        var modalDialog = new Overlay.Dialog({
            headerContent : '我是头部',
            width : 500,
            mask : true,
            bodyContent : '<div>我是主体</div>',
            align : {  //定位对话框
                points : ['cc', 'cc']  //在可视区域正中央
            }
        });
        modalDialog.show();
    });
*/

/**
默认 true. escape 键是否触发 close 动作
@attribute escapeToClose {Boolean}
@default true
*/

/**
组件的标题内联样式
@attribute headerStyle {Object} 
*/

/**
组件体的内联样式.
@attribute bodyStyle {Object}
*/

/**
组件的底部内联样式
@attribute footerStyle {Object}
*/

/**
只读, 组件的头部节点
@attribute header {KISSY.Node}
@readonly
*/

/**
只读, 组件的体部节点
@attribute body {KISSY.Node}
@readonly
*/

/**
只读, 组件的底部节点
@attribute footer {KISSY.Node}
@readonly
*/

/**
可读写. 组件的标题 html.
@attribute headerContent {String}
*/

/**
可读写. 组件的体html.
@attribute bodyContent {String}
*/

/**
可读写. 组件的底部 html.
@attribute footerContent {String}
*/




/**
内容提示框
@class Popup
@constructor
@namespace Overlay
@extends Overlay
@param config {Object} 
@example
    <script type="x-template" id="popupTpl">
        <div class="ks-popup-arrow"></div>
        <div class="ks-popup-inner"> <!-- 已定义好的内容提示框的样式-->
            <h3 class="ks-popup-title">This is Title</h3>

            <div class="ks-popup-inner-content">
                <p>This is content...</p>
            </div>
        </div>
    </script>
    require(['overlay', 'button', 'node'], function(Overlay, Button, $){
        var myPopup = new Overlay.Popup({
            width : 200,
            trigger : '#popup',
            triggerType : 'mouse',
            content : $('#popupTpl').html(),
            elCls: "ks-popup-right",  //添加内容提示框在右侧时的箭头图标样式
            effect : {
                effect : 'fade',
                duration : 0.3
            },
            align: {
                node: '#popup',  //相对按钮#popup定位
                points: ['cr', 'cl']
            }
        });
    });
*/

/**
触点集合，即当鼠标点击或hover在这些元素时则会出发弹出框显示。
@attribute trigger {String|HTMLElement[]|KISSY.NodeList} 
*/

/**
可选, 默认为 ‘click’, 触发类型, 可选 ‘click’, ‘mouse’.
@attribute triggerType {String}
@default "click"
*/

/**
单位秒. 可选, triggerType 为 mouse 时, Popup 显示的延迟时间, 默认为 0.1.
@attribute mouseDelay {Number} 
@default 0.1
*/

/**
可选, triggerType 为 click 时, Popup 是否有toggle功能，默认为false，不开启
@attribute toggle {Boolean} 
@default false
*/

/**
当前的 trigger 节点
@attribute currentTrigger {KISSY.Node}
*/

/**
当 currentTrigger 改变后触发
@event afterCurrentTriggerChange
@param ev.newVal {KISSY.Node} 新的 trigger 元素
*/