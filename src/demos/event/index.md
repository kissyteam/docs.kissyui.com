(((apilink class="Event")))

# event基本示例

event模块下辖多个子模块，被 `base`,`dom`,`node` 这些模块分别依赖。通常如果只需要使用 `DOM` 事件则无需直接引用 `event` 模块，使用 `node` 模块即可。使用use('base')时也无需手动引入event。如果想单独使用自定义事件，则需要use('event')。

[[[include file="./cited-by-md/baseuse.html" height="400px"]]]