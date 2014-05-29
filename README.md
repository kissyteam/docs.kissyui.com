# docs.kissyui.com

## KISSY5.0 文档系统
[访问地址](http://docs.kissyui.com/5.0)

## 项目结构
- build: 构建后的所有文件
- src：构建前编写的文档
    - api：api文档
    - assets：所有静态资源css/img/js
    - contribute：如何向kissy贡献代码的页面
    - demos：demos示例
    - guides：教程文档
    - more：更多页面
    - index.md：首页
    - quick-start.md：快速上手页面
- themes：页面的主题结构文件
- tools：自动化构建工具

## 如何贡献文档及构建
1. 安装服务器、Git和Node.js环境
2. fork docs.kissyui.com项目 https://github.com/kissyteam/docs.kissyui.com
3. 进入某一个目录，如 `cd /d`
4. clone项目到本地：`git clone git@github.com:kissyteam/docs.kissyui.com.git` username为你github的用户名
5. 进入新clone的docs.kissyui.com目录  `cd docs.kissyui.com`
6. 添加docs.kissyui.com项目官方master  `git remote add remote git@github.com:kissyteam/docs.kissyui.com.git`
7. 开始新 patch 前要和官方主干同步 `git pull remote master`
8. 全局安装gulp  `npm install -g gulp`
9. 安装其他的node依赖模块  `npm install`
10. 在项目src目录下相应位置编写文档。有几点需要注意的地方：
    - api文档的编写参考yuidoc官方介绍
    - 所有文档都必须用Markdown来编写，每个文档都需要有至少一个一级标题来表示该文档的特性
    - src/demos和src/guides目录下的一个子目录表示一个模块，每个子目录都必须有一个index.md来表示该模块的基本使用
    - src/demos和src/guides下面的Markdown都有个语法增强，当需要明确表示这个页面指向的api链接是哪里的时候，使用`(((apilink class=”特定的类，如Anim”)))`或者`(((apilink module=”特定的模块，如anim”)))`，这样工具就会自动在这个页面的右侧 API按钮 链接到指定的api页面
    - 对于src/demos目录，例如src/demos/anim/index.md中写了一些demo说明后，想要引进一个静态的html，可以通过`[[[include file="html demo文件路径" height="500px"]]]`来引入，height表示这个demo块的高度，如`[[[include file="./cited-by-md/easing.html" height="500px"]]]`
11. 编写好文档后，在命令行下进入到项目根目录，运行gulp则会自动构建到build目录下（注：如果是OSX系统，由于构建打开的文件数较多，OSX默认限制为256，会报错，需要把这个设置高一点，执行`ulimit -n 2560`后再gulp构建即可）
12. 构建好了如何看页面结果调试呢？在命令行下进入项目根目录，运行命令 `gulp linkserver --path 你的服务器根目录地址，如“C:\wamp\www”`，该命令是将构建后的build目录链接到服务器根目录，链接创建一次就可以了；配置hosts，添加 127.0.0.1 dev.docs.kissyui.com，在浏览器访问dev.docs.kissyui.com即可
