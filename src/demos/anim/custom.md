(((apilink class="Anim")))

# 自定义动画

注意：KISSY 会自动判断浏览器是否支持 `css3 transition` ，如果支持则载入的 `anim` 模块其实是 `anim/transition` 模块（KISSY在seed.js里面做了alias），否则载入 `anim/timer` 模块， node 模块依赖的 anim 也是同样道理。此外，*自定义动画*等不能用 `css3 transition` 来实现的动画需要保证使用 `anim/timer` 模块来实现。

## 对普通对象使用动画函数

[[[include file="./cited-by-md/custom-anim.html" height="500px" ]]]

## 自定义动画机制

[[[include file="./cited-by-md/custom-anim2.html" height="500px" ]]]

## 实现自定义动画

[[[include file="./cited-by-md/circular_movement.html" height="500px" ]]]
