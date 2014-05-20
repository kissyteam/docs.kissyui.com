//toolbar的js
KISSY.use('toolbar,button,menubutton', function(S, Toolbar){
    new Toolbar({
        render : '#header-toolbar',
        children : [
            {
                content : '<a href="/5.0/">Home</a>'
            },
            {
                content : '<a href="#">Quick Start</a>'
            },
            {
                content : '<a href="#">Docs</a>',
                xclass : 'menu-button',
                menu : {
                    children : [
                        {
                            content : '<a href="/5.0/guides">Guides</a>'
                        },
                        {
                            content : '<a href="/5.0/api">API Docs</a>'
                        },{
                            content : '<a href="/5.0/demos">Demos</a>'
                        }
                    ]
                },
                matchElWidth : false
            },
            {
                content : '<a href="#">Contribute</a>'
            },
            {
                content : '<a href="#">More</a>',
                xclass : 'menu-button',
                menu : {
                    children : [
                        {
                            content : '<a href="/5.0/faq.html">FAQ</a>'
                        }
                    ]
                },
                matchElWidth : false
            }
        ]
    }).render();
});

//tab和autocomplete的js
KISSY.use("node,tabs,filter-menu,io", function (S, Node, Tabs, FilterMenu, Io) {
    var $ = Node.all;

    //tabs
    $(".ks-tabs").each(function (n) {
        new Tabs({
            srcNode: n
        }).render();
    });

    //autocomplete
    var filterMenu = new FilterMenu({
        srcNode : '#api-tabview'
    }).render();
    filterMenu.filterItems = function(str){
        str = str.toLowerCase();
        var menuItem$ = $('.ks-tabs-tab-selected').hasClass('tab-class')? $('.classes .ks-menuitem') : $('.modules .ks-menuitem');
        menuItem$.each(function(item$){
            var index,
                content = item$.attr('content').toLowerCase();
            if((index = content.indexOf(str)) > -1){
                item$.parent().show();
                content = item$.attr('content');
                content = str === "" ? content : content.substring(0, index) + '<b class="yui3-highlight">' + content.substring(index, index + str.length) + '</b>' + content.substring(index + str.length);
                item$.html(content);
            }else{
                item$.parent().hide();
            }
        });
    };

    //无刷新切换页面
    if(window.history.pushState != undefined){
        $('#api-tabview-panel a').on('click', function(ev){
            ev.preventDefault();
            var target$ = $(ev.target),
                href = target$.attr('href');
            Io.get(href,{
                r : Math.random()
            },function(res){
                window.history.pushState(null,null,href);
                var reg = /(<div\sclass="apidocs">[\s\S]*)<div\sid="disqus_thread">/;
                var newApidocsHtml = res.match(reg)[1],
                    newApidocsDom$ = $(newApidocsHtml);
                $('.apidocs').replaceWith(newApidocsDom$);

                if(href.indexOf('classes') > -1){  //如果是class的页面的话需要重新初始化tabs
                    new Tabs({
                        srcNode: '#classdocs'
                    }).render();
                }

                //hack，将模块名中的下划线改为斜杆
                var moduleNameDom$ = $('.content h1'),
                    oldModuleName = moduleNameDom$.html(),
                    newModuleName = oldModuleName.replace(/\_/g,'/');
                moduleNameDom$.html(newModuleName);
            });
        });
    }
});