var fs = require('fs'),
	path = require('path'),
	marked = require('marked'),
	xtpl = require('xtpl');

//markdown定制
var markedRenderer = new marked.Renderer();

var srcDirPath = '',
	projectPath = '';

markedRenderer.heading = function(text, level){
	return '<h' + level + '>' + text + '</h' + level + '>';
};
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  },
  renderer : markedRenderer
});

module.exports.buildGuide = function(srcUrl){
	srcDirPath = path.resolve(srcUrl);
	projectPath = path.resolve(srcUrl, '../../5.0');

	var	guidesPath = path.resolve(srcDirPath, './guides'),
		guidesModuleLists = [];
	fs.readdirSync(guidesPath).forEach(function(dir){
		var dirName = path.resolve(guidesPath,dir),
			src = path.normalize(path.relative(projectPath, dirName).replace('src','/5.0'));
		guidesModuleLists.push({
			name : dir,
			src : src
		});
		if(fs.statSync(dirName).isDirectory()){
			var sideBarHtml = getSideBarHtmlSync(dirName);
			//将markdown转为html
			fs.readdirSync(dirName).forEach(function(file){
				var fileName = path.resolve(dirName,file),
					fileMD = fs.readFileSync(fileName).toString(),
					fileHtml = marked(fileMD);

				var mainXtplPath = path.resolve(srcDirPath,'../themes/guides/layouts/main.xtpl'),
					desFile = xtpl.__express(mainXtplPath,{
						mainContent : fileHtml,
						sidebarContent : sideBarHtml,
						settings : {
							'view encoding' : 'utf-8'
						}
					},function(err,desFile){
						if(err){
							console.log('render error!');
						}else{
							var desFileName = path.normalize(fileName.replace('src','').replace('md','html'));
							!fs.existsSync(path.dirname(desFileName)) && fs.mkdirSync(path.dirname(desFileName));
							fs.writeFileSync(desFileName, desFile);
						}
					});
			});
		}
	});
	buildGuideIndex(guidesModuleLists);
};


module.exports.buildDemos = function(srcUrl){
	srcDirPath = path.resolve(srcUrl);
	projectPath = path.resolve(srcUrl, '../../5.0');

	var	demosPath = path.resolve(srcDirPath, './demos'),
		demoLists = [];
	fs.readdirSync(demosPath).forEach(function(dir){
		var dirName = path.resolve(demosPath,dir),
			src = path.normalize(path.relative(projectPath, dirName).replace('src','/5.0'));
		demoLists.push({
			name : dir,
			src : src
		});
		if(fs.statSync(dirName).isDirectory()){
			var sideBarHtml = getSideBarHtmlSync(dirName);

			fs.readdirSync(dirName).forEach(function(file){
				var fileName = path.resolve(dirName,file),
					fileHtml = fs.readFileSync(fileName).toString(),
					demoTitle = /<h1>([\w\W]*?)<\/h1>/.exec(fileHtml)[1].trim();
				var mainXtplPath = path.resolve(srcDirPath,'../themes/demos/layouts/main.xtpl');
				xtpl.__express(mainXtplPath,{
					demoCode : fileHtml,
					sidebarContent : sideBarHtml,
					title : demoTitle,
					settings : {
						'view encoding' : 'utf-8'
					}
				},function(err,desFile){
					if(err){
						console.log('render error!');
					}else{
						var desFileName = path.normalize(fileName.replace('src',''));
						!fs.existsSync(path.dirname(desFileName)) && fs.mkdirSync(path.dirname(desFileName));
						fs.writeFileSync(desFileName, desFile);
					}
				});
			});
		}
		buildDemoIndex(demoLists);
	});
};

function getSideBarHtmlSync(dirUrl){
	var featureContent = getSideBarFeatures(dirUrl),
		demosContent = getSideBarDemos(dirUrl.replace('guides', 'demos'));
	return {
		featureContent : featureContent,
		demosContent : demosContent
	};
	// var sidebarContent = '<div id="features"><div class="hd">Features</div><div class="bd">';
	// sidebarContent += featureContent + '</div></div><div id="demos"><div class="hd">Demos</div><div class="bd">' + demosContent + '</div></div>';
	// return sidebarContent;
}

function getFeatures(dirUrl){
	var featureContent = '';
	if(fs.existsSync(dirUrl)){
		fs.readdirSync(dirUrl).forEach(function(file){
			var fileName = path.resolve(dirUrl,file);
			var fileContent = fs.readFileSync(fileName).toString(),
				isGuides = fileName.indexOf('guides') > -1 ? true : false,
				reg =  isGuides ? /^ *(#{1}) *([^\n]+?) *#* *(?:\n+|$)/ : /<h1>([\w\W]*?)<\/h1>/,
				index = isGuides ? 2 : 1,
				feature = reg.exec(fileContent)[index].trim();
			var fileLink = path.normalize(path.relative(projectPath,fileName).replace('src','/5.0').replace('md','html'));
			feature = '<p><a href="' + fileLink +'">' + feature + '</a></p>';
			featureContent += feature;
		});
	}
	return featureContent;
}

function getSideBarFeatures(dirUrl){
	var filesPath = dirUrl.replace('demos','guides');
	return getFeatures(filesPath);
}
function getSideBarDemos(dirUrl){
	var filesPath = dirUrl.replace('guides','demos');
	return getFeatures(filesPath);
}

function buildGuideIndex(guidesModuleLists){
	var productGuideIndexPath = path.resolve(projectPath, './guides/index.html'),
		guidesIndexXtplPath = path.resolve(projectPath, './themes/guides/layouts/guides-index.xtpl');
	xtpl.__express(guidesIndexXtplPath,{
		settings : {
			'view encoding' : 'utf-8'
		},
		guidesModuleLists : guidesModuleLists
	},function(err,content){
		if(err){
			console.log('error occuring when render guides-index.xtpl');
		}else{
			fs.writeFileSync(productGuideIndexPath,content);
		}
	});
}

function buildDemoIndex(demoLists){
	var productDemoIndexPath = path.resolve(projectPath, './demos/index.html'),
		demosIndexXtplPath = path.resolve(projectPath, './themes/demos/layouts/demos-index.xtpl');

	xtpl.__express(demosIndexXtplPath,{
		settings : {
			'view encoding' : 'utf-8'
		},
		demoLists : demoLists
	},function(err,content){
		if(err){
			console.log('error occuring when render demos-index.xtpl');
		}else{
			fs.writeFileSync(productDemoIndexPath,content);
		}
	});
}