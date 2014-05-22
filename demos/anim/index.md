<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="shortcut icon" href="/5.0/assets/favicon.ico">
	<link rel="stylesheet" href="/5.0/assets/css/bootstrap.css">
	<link rel="stylesheet" href="/5.0/assets/css/component.css">
	<link rel="stylesheet" href="/5.0/assets/css/custom.css">
	<link rel="stylesheet" href="/5.0/assets/css/monokai_sublime.css"/>
	<script type="text/javascript" src="http://g.tbcdn.cn/kissy/k/1.4.2/seed-min.js" data-config="{combo:true}"></script>
	<script src="/5.0/assets/js/ace-editor/ace.js"></script>
	<script src="/5.0/assets/js/ajax-load.js"></script>
</head>
<body>
	<div class="container" id="container">
		<header class="header clearfix">
	<div class="logo">
		<a href="/5.0">
			<img src="/5.0/assets/img/logo.png" alt="">
		</a>
	</div>
	<div class="search">
		<script>
		  (function() {
		    var cx = '003618533255763067140:5nkycw1pbey';
		    var gcse = document.createElement('script');
		    gcse.type = 'text/javascript';
		    gcse.async = true;
		    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
		        '//www.google.com/cse/cse.js?cx=' + cx;
		    var s = document.getElementsByTagName('script')[0];
		    s.parentNode.insertBefore(gcse, s);
		  })();
		</script>
		<gcse:search></gcse:search>
	</div>
	<div id="header-toolbar"></div>
</header>
<script type="text/javascript">
	KISSY.use('toolbar,button,menubutton', function(S, Toolbar){
			new Toolbar({
				render : '#header-toolbar',
				children : [
					{
						content : 'Home',
						listeners : {
							click : function(){
								window.location.href ='/5.0';
							}
						}
					},
					{
						content : 'Quick Start',
						listeners : {
							click : function(){
								window.location.href ='/5.0/quick-start.html';
							}
						}
					},
					{
						content : 'Docs',
						xclass : 'menu-button',
						menu : {
							children : [
								{
									content : 'Guides',
									listeners : {
										click : function(){
											window.location.href ='/5.0/guides';
										}
									}
								},
								{
									content : 'API Docs',
									listeners : {
										click : function(){
											window.location.href ='/5.0/api';
										}
									}
								},{
									content : 'Demos',
									listeners : {
										click : function(){
											window.location.href ='/5.0/demos';
										}
									}
								}
							]
						},
						matchElWidth : false
					},
					{
						content : 'Contribute'
					},
					{
						content : 'More',
						xclass : 'menu-button',
						menu : {
							children : [
								{
									content : 'FAQ',
									listeners : {
										click : function(){
											window.location.href ='/5.0/faq.html';
										}
									}
								}
							]
						},
						matchElWidth : false
					}
				]
			}).render();
		});
</script>
		<div class="row">
			<div class="col-md-9"  id="main-content">
				<h1>anim动画的基本使用</h1><p>{{{./cited-by-md/baseuse.html}}}</p>
<h2>anim支持cubic-bezier</h2><p>有时候我们想要定制动画的时间曲线，利用kissy anim模块可以做到这点，详见如下demo：
<div class="ks-tabs ks-tabs-top">
    <div class="ks-tabs-bar">
        <div class="ks-tabs-tab ks-button">Source</div>
        <div class="ks-tabs-tab ks-button ks-tabs-tab-selected">Output</div>
    </div>
    <div class="ks-tabs-body">
        <div class="ks-tabs-panel">
            <div id="editor">
				
&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Cubic Bezier Timing Function&lt;&#x2F;title&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text&#x2F;html; charset=utf-8&quot;&gt;
&lt;link rel=&quot;bookmark&quot; type=&quot;text&#x2F;html&quot; title=&quot;Quickchoice&quot; href=&quot;http:&#x2F;&#x2F;www.netzgesta.de&#x2F;dev&#x2F;quickchoice.html&quot;&gt;
&lt;meta name=&quot;Author&quot; lang=&quot;en&quot; content=&quot;dev.netzgesta.de - Christian Effenberger&quot;&gt;
&lt;meta name=&quot;Publisher&quot; lang=&quot;en&quot; content=&quot;www.netzgesta.de - Christian Effenberger&quot;&gt;
&lt;meta name=&quot;Copyright&quot; lang=&quot;en&quot; content=&quot;public domain&quot;&gt;
&lt;meta name=&quot;Description&quot; lang=&quot;en&quot; content=&quot;A Cubic Bezier timing function compatible with -webkit-transition-timing-function&quot;&gt;
&lt;meta name=&quot;Keywords&quot; lang=&quot;en&quot; content=&quot;cubic-bezier, easing, compatible, timing, function, unobtrusive javascript, Mozilla, Safari, Chrome, Gecko, Webkit&quot;&gt;
&lt;meta name=&quot;DC.date.created&quot; content=&quot;2009-01-29 12:00:00&quot;&gt;
&lt;style&gt;
    html, body {
        background-color: white;
        margin: 20px;
        margin-top: 10px;
        padding: 0;
        font-family: arial, helvetica, sans-serif;
        font-size: 14px;
    }

    #wrapper {
        position: relative;
        display: block;
        left: 0;
        top: 0;
        width: 400px;
        height: 400px;
        margin-top: 8px;
        float: left;
        overflow: hidden;
    }

    #output {
        position: relative;
        display: block;
        width: 200px;
        height: 384px;
        left: 10px;
        top: 0;
        padding: 8px;
        margin-top: 8px;
        overflow: hidden;
        background: yellow;
        font-family: monospace;
        font-size: 13px;
        outline: 1px solid silver;
    }

    #demo {
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 400px;
        height: 400px;
    }

    #cp2y {
        position: absolute;
        display: block;
        right: 0;
        top: 40px;
        width: 40px;
        height: auto;
        text-align: center;
    }

    #cp1y {
        position: absolute;
        display: block;
        left: 0;
        bottom: 40px;
        width: 40px;
        height: auto;
        text-align: center;
    }

    #cp1x {
        position: absolute;
        display: block;
        left: 0;
        bottom: 5px;
        width: 400px;
        height: 30px;
        vertical-align: middle;
    }

    #cp2x {
        position: absolute;
        display: block;
        right: 0;
        top: 5px;
        width: 400px;
        height: 30px;
        text-align: right;
        vertical-align: middle;
    }
&lt;&#x2F;style&gt;

&lt;script&gt;
    &#x2F;&#x2F; Ref: http:&#x2F;&#x2F;www.netzgesta.de&#x2F;dev&#x2F;cubic-bezier-timing-function.html --&gt;

    &#x2F;&#x2F; currently used function to determine position
    function CubicBezierAtPosition(t, P1x, P1y, P2x, P2y) {
        var x,y,k = ((1 - t) * (1 - t) * (1 - t));
        x = P1x * (3 * t * t * (1 - t)) + P2x * (3 * t * (1 - t) * (1 - t)) + k;
        y = P1y * (3 * t * t * (1 - t)) + P2y * (3 * t * (1 - t) * (1 - t)) + k;
        return {x:Math.abs(x),y:Math.abs(y)};
    }

    &#x2F;&#x2F; currently used function to determine time
    &#x2F;&#x2F; 1:1 conversion to js from webkit source files
    &#x2F;&#x2F; UnitBezier.h, WebCore_animation_AnimationBase.cpp
    function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
        var ax = 0,bx = 0,cx = 0,ay = 0,by = 0,cy = 0;

        &#x2F;&#x2F; &#x60;ax t^3 + bx t^2 + cx t&#x27; expanded using Horner&#x27;s rule.
        function sampleCurveX(t) {
            return ((ax * t + bx) * t + cx) * t;
        }

        function sampleCurveY(t) {
            return ((ay * t + by) * t + cy) * t;
        }

        function sampleCurveDerivativeX(t) {
            return (3.0 * ax * t + 2.0 * bx) * t + cx;
        }

        &#x2F;&#x2F; The epsilon value to pass given that the animation is going to run over |dur| seconds. The longer the
        &#x2F;&#x2F; animation, the more precision is needed in the timing function result to avoid ugly discontinuities.
        function solveEpsilon(duration) {
            return 1.0 &#x2F; (200.0 * duration);
        }

        function solve(x, epsilon) {
            return sampleCurveY(solveCurveX(x, epsilon));
        }

        &#x2F;&#x2F; Given an x value, find a parametric value it came from.
        function solveCurveX(x, epsilon) {
            var t0,t1,t2,x2,d2,i;

            function fabs(n) {
                if (n &gt;= 0) {
                    return n;
                } else {
                    return 0 - n;
                }
            }

            &#x2F;&#x2F; First try a few iterations of Newton&#x27;s method -- normally very fast.
            for (t2 = x,i = 0; i &lt; 8; i++) {
                x2 = sampleCurveX(t2) - x;
                if (fabs(x2) &lt; epsilon) {
                    return t2;
                }
                d2 = sampleCurveDerivativeX(t2);
                if (fabs(d2) &lt; 1e-6) {
                    break;
                }
                t2 = t2 - x2 &#x2F; d2;
            }
            &#x2F;&#x2F; Fall back to the bisection method for reliability.
            t0 = 0.0;
            t1 = 1.0;
            t2 = x;
            if (t2 &lt; t0) {
                return t0;
            }
            if (t2 &gt; t1) {
                return t1;
            }
            while (t0 &lt; t1) {
                x2 = sampleCurveX(t2);
                if (fabs(x2 - x) &lt; epsilon) {
                    return t2;
                }
                if (x &gt; x2) {
                    t0 = t2;
                } else {
                    t1 = t2;
                }
                t2 = (t1 - t0) * .5 + t0;
            }
            return t2; &#x2F;&#x2F; Failure.
        }

        &#x2F;&#x2F; Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).
        cx = 3.0 * p1x;
        bx = 3.0 * (p2x - p1x) - cx;
        ax = 1.0 - cx - bx;
        cy = 3.0 * p1y;
        by = 3.0 * (p2y - p1y) - cy;
        ay = 1.0 - cy - by;
        &#x2F;&#x2F; Convert from input time to parametric value in curve, then from that to output time.
        return solve(t, solveEpsilon(duration));
    }

    if (typeof $ == &#x27;undefined&#x27;) {
        function $(v) {
            return(document.getElementById(v));
        }
    }

    function format(v) {
        if (Math.abs(parseInt(v)) &lt; 10) {
            return &quot;0&quot; + Math.abs(v);
        } else {
            return parseInt(v);
        }
    }

    function getInput(ele) {
        $(ele.id + &quot;v&quot;).innerHTML = (ele.value * 0.01).toFixed(2);
        draw_bezier($(&quot;cp1x_s&quot;).value * 0.01, $(&quot;cp1y_s&quot;).value * 0.01, $(&quot;cp2x_s&quot;).value * 0.01, $(&quot;cp2y_s&quot;).value * 0.01);
    }

    function getOption(ele) {
        var v = ele.options[ele.selectedIndex].value;
        if (!v) {
            ele.selectedIndex = 1;
            v = ele.options[ele.selectedIndex].value;
        }
        var a = v.split(&quot;,&quot;);
        $(ele.id + &quot;v&quot;).innerHTML = v;
        setBezier(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]));
    }

    function setBezier(cp1x, cp1y, cp2x, cp2y) {
        $(&quot;cp1x_s&quot;).value = cp1x * 100;
        $(&quot;cp1x_sv&quot;).innerHTML = cp1x.toFixed(2);
        $(&quot;cp1y_s&quot;).value = cp1y * 100;
        $(&quot;cp1y_sv&quot;).innerHTML = cp1y.toFixed(2);
        $(&quot;cp2x_s&quot;).value = cp2x * 100;
        $(&quot;cp2x_sv&quot;).innerHTML = cp2x.toFixed(2);
        $(&quot;cp2y_s&quot;).value = cp2y * 100;
        $(&quot;cp2y_sv&quot;).innerHTML = cp2y.toFixed(2);
        draw_bezier(cp1x, cp1y, cp2x, cp2y);
    }

    function draw_bezier(cp1x, cp1y, cp2x, cp2y) {
        var canvas = document.getElementById(&#x27;demo&#x27;);
        if (!canvas.getContext) return;
        var i,t,st,ct,xy,xo,yo,cw,ch,c1x,c1y,c2x,c2y,ctx = canvas.getContext(&#x27;2d&#x27;);
        xo = canvas.width &#x2F; 10;
        yo = canvas.height &#x2F; 10;
        cw = canvas.width * .8;
        ch = canvas.height * .8;
        ct = 10;
        st = parseInt(cw &#x2F; ct);
        c1x = xo + (Math.max(0, Math.min(1, parseFloat(cp1x))) * cw);
        c1y = yo + (Math.max(0, Math.min(1, 1 - parseFloat(cp1y))) * ch);
        c2x = xo + (Math.max(0, Math.min(1, parseFloat(cp2x))) * cw);
        c2y = yo + (Math.max(0, Math.min(1, 1 - parseFloat(cp2y))) * ch);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = &quot;rgba(240,240,240,1)&quot;;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = &quot;rgba(220,220,220,1)&quot;;
        ctx.fillRect(xo, yo, cw, ch);
        ctx.strokeStyle = &quot;rgba(80,80,80,1)&quot;;
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(xo, yo, cw, ch);
        ctx.closePath();
        ctx.stroke();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = &quot;rgba(180,180,180,1)&quot;;
        for (i = 0; i &lt; ct; i++) {
            ctx.beginPath();
            ctx.moveTo(xo, yo + (i * st));
            ctx.lineTo(xo + cw, yo + (i * st));
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(xo + (i * st), yo);
            ctx.lineTo(xo + (i * st), yo + ch);
            ctx.stroke();
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = &quot;rgba(0,0,0,1)&quot;;
        ctx.beginPath();
        ctx.moveTo(xo, yo + cw);
        ctx.bezierCurveTo(c1x, c1y, c2x, c2y, xo + cw, yo);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.strokeStyle = &quot;rgba(0,0,255,1)&quot;;
        ctx.beginPath();
        ctx.moveTo(xo, yo + cw);
        ctx.lineTo(c1x, c1y);
        ctx.stroke();
        ctx.fillStyle = &quot;rgba(255,0,0,1)&quot;;
        ctx.beginPath();
        ctx.arc(c1x, c1y, 5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = &quot;rgba(0,0,255,1)&quot;;
        ctx.beginPath();
        ctx.moveTo(xo + cw, yo);
        ctx.lineTo(c2x, c2y);
        ctx.stroke();
        ctx.fillStyle = &quot;rgba(255,0,0,1)&quot;;
        ctx.beginPath();
        ctx.arc(c2x, c2y, 5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = &quot;rgba(0,255,0,0.75)&quot;;
        var posi = &#x27;Position Values: (green)&#x27; + &#x27;&lt;br&gt;&#x27;, time = &#x27;Timing Values: (yellow)&#x27; + &#x27;&lt;br&gt;&#x27;, output = $(&quot;output&quot;);
        for (i = 0; i &lt; (ct + 1); i++) {
            xy = CubicBezierAtPosition(i * 0.1, cp1x, cp1y, cp2x, cp2y);
            t = CubicBezierAtTime(i * 0.1, cp1x, cp1y, cp2x, cp2y, 100);
            time += format(ct - i) + &#x27;&amp;nbsp; i: &#x27; + ((ct - i) * 0.1).toFixed(4) + &#x27;&amp;nbsp; o: &#x27; + Math.abs(1 - t).toFixed(4) + &#x27;&lt;br&gt;&#x27;;
            posi += format(ct - i) + &#x27;&amp;nbsp; x: &#x27; + xy.x.toFixed(4) + &#x27;&amp;nbsp; y: &#x27; + xy.y.toFixed(4) + &#x27;&lt;br&gt;&#x27;;
            ctx.fillStyle = &quot;rgba(0,255,0,0.75)&quot;;
            ctx.beginPath();
            ctx.arc(xo + (xy.x * cw), yo + ch - (xy.y * ch), 4, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = &quot;rgba(255,255,0,0.75)&quot;;
            ctx.beginPath();
            ctx.arc(xo + ((i * 0.1) * cw), yo + ch - ((t) * ch), 4, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        output.innerHTML = posi + &#x27;&lt;br&gt;&#x27; + time;
    }
&#x2F;&#x2F;debugger
&#x2F;&#x2F;alert(CubicBezierAtTime(0.5,0,0,0.58,1.0,100));

&lt;&#x2F;script&gt;
&lt;&#x2F;head&gt;
&lt;body onload=&quot;setBezier(0.25, 0.1, 0.25, 1.0);&quot;&gt;
&lt;h1&gt;cubic-bezier&lt;&#x2F;h1&gt;
&lt;strong&gt;Cubic Bezier timing function compatible with&lt;&#x2F;strong&gt; &lt;tt&gt;-webkit-transition-timing-function&lt;&#x2F;tt&gt;&lt;br&#x2F;&gt;
&lt;small&gt;In addition to the -webkit-transition-timing-function cubic-bezier(), support for a 100% compatible easing
    defined by a cubic bezier function as a public domain javascript would be welcome.
&lt;&#x2F;small&gt;
&lt;br&#x2F;&gt;
&lt;div id=&quot;wrapper&quot;&gt;
    &lt;canvas id=&quot;demo&quot; width=&quot;400&quot; height=&quot;400&quot;&gt;&lt;&#x2F;canvas&gt;
    &lt;div id=&quot;cp2x&quot;&gt;&lt;span id=&quot;cp2x_sv&quot;&gt;1.0&lt;&#x2F;span&gt;&amp;nbsp;&lt;input onclick=&quot;getInput(this);&quot; onmousemove=&quot;getInput(this);&quot; onmouseup=&quot;getInput(this);&quot; id=&quot;cp2x_s&quot; type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; value=&quot;100&quot; style=&quot;margin-top: 4px; height: 20px; width: 320px;&quot;&gt;&amp;nbsp;&lt;span&gt;cp2&lt;sub&gt;x&lt;&#x2F;sub&gt;&lt;&#x2F;span&gt;&amp;nbsp;&lt;&#x2F;div&gt;
    &lt;div id=&quot;cp2y&quot;&gt;&lt;span&gt;cp2&lt;sub&gt;y&lt;&#x2F;sub&gt;&lt;&#x2F;span&gt;&lt;br&#x2F;&gt;&lt;input onclick=&quot;getInput(this);&quot; onmousemove=&quot;getInput(this);&quot; onmouseup=&quot;getInput(this);&quot; id=&quot;cp2y_s&quot; type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; value=&quot;100&quot; style=&quot;-webkit-appearance: slider-vertical; width: 20px; height: 280px;&quot;&gt;&lt;br&#x2F;&gt;&lt;span id=&quot;cp2y_sv&quot;&gt;1.0&lt;&#x2F;span&gt;&lt;&#x2F;div&gt;
    &lt;div id=&quot;cp1y&quot;&gt;&lt;span id=&quot;cp1y_sv&quot;&gt;0.0&lt;&#x2F;span&gt;&lt;br&#x2F;&gt;&lt;input onclick=&quot;getInput(this);&quot; onmousemove=&quot;getInput(this);&quot; onmouseup=&quot;getInput(this);&quot; id=&quot;cp1y_s&quot; type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; value=&quot;0&quot; style=&quot;-webkit-appearance: slider-vertical; width: 20px; height: 280px;&quot;&gt;&lt;br&#x2F;&gt;&lt;span&gt;cp1&lt;sub&gt;y&lt;&#x2F;sub&gt;&lt;&#x2F;span&gt;&lt;&#x2F;div&gt;
    &lt;div id=&quot;cp1x&quot;&gt;&amp;nbsp;&lt;span&gt;cp1&lt;sub&gt;x&lt;&#x2F;sub&gt;&lt;&#x2F;span&gt;&amp;nbsp;&lt;input onclick=&quot;getInput(this);&quot; onmousemove=&quot;getInput(this);&quot; onmouseup=&quot;getInput(this);&quot; id=&quot;cp1x_s&quot; type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; value=&quot;0&quot; style=&quot;margin-top: 4px; height: 20px; width: 320px;&quot;&gt;&amp;nbsp;&lt;span id=&quot;cp1x_sv&quot;&gt;0.0&lt;&#x2F;span&gt;&lt;&#x2F;div&gt;
&lt;&#x2F;div&gt;
&lt;div id=&quot;output&quot;&gt;&lt;&#x2F;div&gt;
&lt;br&#x2F;&gt;
&lt;select id=&quot;ease_s&quot; size=&quot;1&quot; onchange=&quot;getOption(this);&quot;&gt;
    &lt;option value=&quot;&quot;&gt;custom&lt;&#x2F;option&gt;
    &lt;option value=&quot;0.25, 0.1,  0.25, 1.0&quot; selected=&quot;selected&quot;&gt;default&lt;&#x2F;option&gt;
    &lt;option value=&quot;0.0,  0.0,  1.0,  1.0&quot;&gt;linear&lt;&#x2F;option&gt;
    &lt;!-- option value=&quot;0.333333, 0.333333, 0.666666, 0.666666&quot;&gt;linear (fake)&lt;&#x2F;option --&gt;
    &lt;!-- option value=&quot;0.0,  0.0,  1.0,  1.0&quot;&gt;linear-in-out&lt;&#x2F;option --&gt;
    &lt;!-- option value=&quot;0.75, 0.75, 0.25, 0.25&quot;&gt;linear-out-in&lt;&#x2F;option --&gt;
    &lt;option value=&quot;0.42, 0.0,  1.0,  1.0&quot;&gt;ease-in&lt;&#x2F;option&gt;
    &lt;option value=&quot;0.0,  0.0,  0.58, 1.0&quot;&gt;ease-out&lt;&#x2F;option&gt;
    &lt;option value=&quot;0.42, 0.0,  0.58, 1.0&quot;&gt;ease-in-out&lt;&#x2F;option&gt;
    &lt;option value=&quot;0.0,  0.42, 1.0,  0.58&quot;&gt;ease-out-in&lt;&#x2F;option&gt;
&lt;&#x2F;select&gt;&amp;nbsp;&lt;span id=&quot;ease_sv&quot;&gt;0.25, 0.1, 0.25, 1.0&lt;&#x2F;span&gt;
&lt;p&gt;
    The timing function is specified using a cubic Bezier curve, which is defined by four control points.
    The first and last control points are always set to (0,0) and (1,1), so you just need to specify the
    two in-between control points. The points are specified as a percentage of the overall duration
    &lt;em&gt;(percentage: interpolated as a real number between 0 and 1)&lt;&#x2F;em&gt;.
    The timing function takes as its input the current elapsed percentage of the transition duration and
    outputs a percentage that determines how close the transition is to its goal state.
&lt;&#x2F;p&gt;


&lt;img src=&quot;assets&#x2F;bezier.gif&quot; &#x2F;&gt;
&lt;&#x2F;body&gt;
&lt;&#x2F;html&gt;
			</div>
        </div>
        <div class="ks-tabs-panel ks-tabs-panel-selected">
            <iframe id="output" frameborder="1">
            	
            </iframe>
        </div>
    </div>
</div></p>

				<!-- <h1>Demo: </h1>
				<div class="ks-tabs ks-tabs-top">
	                <div class="ks-tabs-bar">
	                    <div class="ks-tabs-tab ks-button">Source</div>
	                    <div class="ks-tabs-tab ks-button ks-tabs-tab-selected">Output</div>
	                </div>
	                <div class="ks-tabs-body">
	                    <div class="ks-tabs-panel">
	                        <div id="editor">
								
							</div>
	                    </div>
	                    <div class="ks-tabs-panel ks-tabs-panel-selected">
	                        <iframe id="output" frameborder="1">
	                        	
	                        </iframe>
	                    </div>
	                </div>
	   			</div> -->
	   			<div id="disqus_thread"></div>
			</div>
			<div class="col-md-3" id="sidebar">
				<a class="link-apidocs btn btn-primary" href="/5.0/api">API Docs</a>
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Features</h3>
					</div>
					<div class="panel-body">
						
					</div>
				</div>
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">Demos</h3>
					</div>
					<div class="panel-body">
						
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>