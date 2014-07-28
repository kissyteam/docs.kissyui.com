//toolbar的js
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
                        content : 'Contribute',
                        listeners : {
                            click : function(){
                                window.location.href = 'https://github.com/kissyteam/kissy/blob/master/CONTRIBUTING.md';
                            }
                        }
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
                                            window.location.href ='/{{{version}}}/more/faq.html';
                                        }
                                    }
                                },
                                {
                                    content : 'Gallery',
                                    listeners : {
                                        click : function(){
                                            window.location.href = 'http://gallery.kissyui.com/';
                                        }
                                    }
                                },
                                {
                                    content : 'Kissy Blog',
                                    listeners : {
                                        click : function(){
                                            window.location.href = 'http://blog.kissyui.com/';
                                        }
                                    }
                                },
                                {
                                    content : 'KMC',
                                    listeners : {
                                        click : function(){
                                            window.location.href = 'https://github.com/daxingplay/grunt-kmc/blob/master/README.md';
                                        }
                                    }
                                },
                                {
                                    content : 'ABC',
                                    listeners : {
                                        click : function(){
                                            window.location.href = 'http://abc.f2e.taobao.net/';
                                        }
                                    }
                                },
                                {
                                    content : 'Clam',
                                    listeners : {
                                        click : function(){
                                            window.location.href = 'https://github.com/jayli/generator-clam/blob/master/README.md';
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

//tab和autocomplete的js
KISSY.use("node,tabs,filter-menu,io", function (S, Node, Tabs, FilterMenu, Io) {
    var $ = Node.all;

    //api sidebar tabs
    new Tabs({
        srcNode: '#api-tabview',
        listeners : {
            afterSelectedTabChange : function(){
                filterMenu.reset();
                $('.ks-filter-menu-content .ks-menuitem').each(function(menuItem$){
                    menuItem$.parent().show();
                    menuItem$.html(menuItem$.attr('content'));
                });
            }
        }
    }).render();

    if($('#classdocs').length){
        //index|methods|events|properties tabs
        new Tabs({
            srcNode: '#classdocs'
        }).render();
    }

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

    //部分刷新切换页面
    if(window.history.pushState != undefined){
        $('#api-tabview-panel a').on('click', function(ev){
            ev.preventDefault();
            var target$ = $(ev.currentTarget),
                href = target$.attr('href');
            Io.get(href,{
                r : Math.random()
            },function(res){
                var reg = /(<div\sclass="apidocs">[\s\S]*)<div\sid="disqus_thread">/;
                var newApidocsHtml = res.match(reg)[1],
                    newApidocsDom$ = $(newApidocsHtml);

                sessionStorage.setItem(href,newApidocsHtml);
                window.history.pushState({ url : href },null,href);
                $('.apidocs').replaceWith(newApidocsDom$);

                if(href.indexOf('classes') > -1){  //如果是class的页面的话需要重新初始化tabs
                    new Tabs({
                        srcNode: '#classdocs'
                    }).render();
                }

                //部分刷新时，更新api-options的选择状态
                (function(){
                    $('#api-options label').each(function(label$){
                        var checked = label$.all('input').prop('checked'),
                            optionvalue = label$.attr('optionvalue'),
                            selector = '#classdocs .' + optionvalue;
                        checked ? $(selector).show() : $(selector).hide();
                    });
                })();
            });
        });

        window.onpopstate = function(event){
            var state = event.state,
                href = state.url,
                newApidocsDom$ = $(sessionStorage.getItem(href));
            $('.apidocs').replaceWith(newApidocsDom$);

            if(href.indexOf('classes') > -1){  //如果是class的页面的话需要重新初始化tabs
                new Tabs({
                    srcNode: '#classdocs'
                }).render();
            }

            //部分刷新时，更新api-options的选择状态
            (function(){
                $('#api-options label').each(function(label$){
                    var checked = label$.all('input').prop('checked'),
                        optionvalue = label$.attr('optionvalue'),
                        selector = '#classdocs .' + optionvalue;
                    checked ? $(selector).show() : $(selector).hide();
                });
            })();
        }

        //第一个页面需要建一条历史记录
        sessionStorage.setItem(location.href, $('.apidocs').outerHTML());
        history.replaceState({ url : location.href}, null, location.href);
    }

    //api-optional的事件处理
    $('#api-options label').on('click', function(ev){
        var target$ = $(ev.currentTarget);

        var checked = target$.all('input').prop('checked'),
            optionvalue = target$.attr('optionvalue'),
            selector = '#classdocs .' + optionvalue;
        checked ? $(selector).show() : $(selector).hide();
    });

    //methods|attrs|events|properties 被点击时的跳转处理
    $('#bd').delegate('click', '#index .index-item a', function(ev){
        var target$ = $(ev.currentTarget);

        var tabShouldBeShow = target$.parent().attr('inwhichtab'),
            selector = '.showmsgdetail .' + tabShouldBeShow;
        $(selector).fire('click');
    });
});