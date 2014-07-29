KISSY.use('node,tabs,io', function(S, Node, Tabs, Io){
	var $ = Node.all;

	function initDisqusThread(){
		if((window.location.hostname.indexOf("kissyui.com")!=-1 )&& window.localStorage.getItem("kissy-commment")!="0"){
		    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
		    var disqus_shortname = 'kissy-docs'; // required: replace example with your forum shortname

		    // The following are highly recommended additional parameters. Remove the slashes in front to use.
		     //var disqus_identifier = '/anim';
		     //var disqus_url = window.location;

		    /* * * DON'T EDIT BELOW THIS LINE * * */
		    (function() {
		        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
		        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		    })();
		    }
	}

	function editDemoOnlineInit(){
		$('.editor').each(function(item$){
			var demoHtml = S.unEscapeHTML(item$.html());
			var iframeWindow = item$.parent('.ks-tabs-body').all('.output')[0].contentWindow;
			iframeWindow.document.body.innerHTML = '';
			iframeWindow.document.write(demoHtml);

			var editor = ace.edit(item$[0]);
			editor.setTheme("ace/theme/monokai");
	    	editor.getSession().setMode("ace/mode/html");

	    	iframeWindow.editor = editor;
		});

		$('.ks-tabs').each(function(item$){
			new Tabs({
		    	srcNode : item$,
		    	listeners:{
		            afterSelectedTabChange:function(e){
		            	if(e.newVal.get('content') === 'Output'){ //如果是切换到Output
		            		var iframeWindow = item$.all('.ks-tabs-body .output')[0].contentWindow;
		            		iframeWindow.document.body.innerHTML = '';
		    				iframeWindow.document.write(iframeWindow.editor.getValue());
		            	}
		            }
		        }
		    }).render();	
		});

		//生成二维码
		createQRCode();

	}

	function createQRCode(){
		$('.qrcode-addr').each(function(item$){
			var qrcodeAddr = item$.attr('qrcodeaddr'),
				qrcodeContainer$ = item$.siblings('.qrcode');
            new QRCode(qrcodeContainer$[0], qrcodeAddr);   //生成二维码

		})
	}

	//demo页面初次加载时先初始化
	window.location.href.indexOf('/5.0/demos') > -1 && editDemoOnlineInit();

	//初始化评论功能
	initDisqusThread();

	if(window.history.pushState && window.sessionStorage && window.history.replaceState){
		function updateMainCotent(href){
			Io.get(href,{
	            r : Math.random()
	        },function(res){
	            var reg = /(<div.+id="main-content">[\s\S]+)<div.+id="sidebar"/;
	            var newMainContentHtml = res.match(reg)[1],
	                newMainContentDom$ = $(newMainContentHtml);

	            $('#main-content').replaceWith(newMainContentDom$);

	            //更新sidebar的api链接
	            var newApiSrc = $('#apilink').attr('href');
	            $('#sidebar .link-apidocs').attr('href',newApiSrc);

	     		if(href.indexOf('/demos') > -1){  //如果跳到的是demo页面
	     			editDemoOnlineInit();
	     		}
	     		initDisqusThread();
	        });
		}

	    $('#sidebar .panel a').on('click', function(ev){
	        ev.halt();
	        var target$ = $(ev.currentTarget),
	            href = target$.attr('href').replace(/\\/g,'/');
	        updateMainCotent(href);
	        window.history.pushState({ url : href },null,href);
	    });

	    window.onpopstate = function(event){  //浏览器后退
	    	if(event.state){
	    		updateMainCotent(event.state.url);
	    	}
	    }
	    
	    history.replaceState({ url : location.href}, null, location.href);
	}
});




