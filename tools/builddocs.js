var fs = require('fs'),
	path = require('path'),
	marked = require('marked'),
	highlightJs = require('highlight.js'),
	xtpl = require('xtpl'),
	unescapeHtml = require('unescape-html');

//markdown定制
var markedRenderer = new marked.Renderer();

var srcDirPath = '',
	projectPath = '',
	version = '';

markedRenderer.heading = function(text, level){
	return '<h' + level + '>' + text + '</h' + level + '>';
};

marked.setOptions({
  highlight: function (code) {
    return highlightJs.highlightAuto(code).value;
  },
  renderer : markedRenderer
});

module.exports.buildGuide = function(srcUrl,config){
	version = config.version;
	srcDirPath = path.resolve(srcUrl);
	projectPath = path.resolve(srcUrl, '../');

	var	guidesPath = path.resolve(srcDirPath, './guides'),
		guidesModuleLists = [];
	fs.readdirSync(guidesPath).forEach(function(dir){
		var dirName = path.resolve(guidesPath,dir),
			src = path.normalize('./'+ dir);
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
					fileHtml = unescapeHtml(marked(fileMD)),
					apiLinkReg = /\(\(\(apilink\s*(.+)\)\)\)/,
					apiLinkRegResult = apiLinkReg.exec(fileHtml),
					apilink = '../../api';

				if(apiLinkRegResult){
					apilink = apiLinkRegResult[1];
					var name = /['"](.+)['"]/.exec(apilink)[1];
					apilink = apilink.indexOf('class') > -1 ? ('../../api/classes/' + name + '.html') : ('../../api/modules/' + name + '.html');
					fileHtml = fileHtml.replace(apiLinkRegResult[0],'');
				}

				var mainXtplPath = path.resolve(srcDirPath,'../themes/guides/layouts/main.xtpl'),
					desFile = xtpl.__express(mainXtplPath,{
						mainContent : fileHtml,
						sidebarContent : sideBarHtml,
						apilink : apilink,
						version : version,
						settings : {
							'view encoding' : 'utf-8'
						}
					},function(err,desFile){
						if(err){
							console.log('render error!');
						}else{
							var desFileName = path.normalize(fileName.replace('src','build').replace('md','html'));
							!fs.existsSync(path.dirname(desFileName)) && fs.mkdirSync(path.dirname(desFileName));
							fs.writeFileSync(desFileName, desFile);
						}
					});
			});
		}
	});
	buildGuideIndex(guidesModuleLists);
};


module.exports.buildDemos = function(srcUrl,config){
	version = config.version;
	srcDirPath = path.resolve(srcUrl);
	projectPath = path.resolve(srcUrl, '../');

	var	demosPath = path.resolve(srcDirPath, './demos'),
		demoLists = [];
	fs.readdirSync(demosPath).forEach(function(dir){
		var dirName = path.resolve(demosPath,dir),
			src = path.normalize('./' + dir);
		demoLists.push({
			name : dir,
			src : src
		});
		if(fs.statSync(dirName).isDirectory()){
			var sideBarHtml = getSideBarHtmlSync(dirName);

			fs.readdirSync(dirName).forEach(function(file){

				var fileName = path.resolve(dirName,file),
					mainXtplPath = path.resolve(srcDirPath,'../themes/demos/layouts/main.xtpl'),
					demoCodeXtplPath = path.resolve(srcDirPath,'../themes/demos/layouts/demo-code.xtpl');
				if(fs.statSync(fileName).isDirectory()){
					return;
				}

				var fileMD = fs.readFileSync(fileName).toString(),
					fileHtml = unescapeHtml(marked(fileMD)),
					apiLinkReg = /\(\(\(apilink\s*(.+)\)\)\)/,
					apiLinkRegResult = apiLinkReg.exec(fileHtml),
					apilink = '../../api',
					fileReg = /\[\[\[(.+?)\]\]\]/g,
					includingFiles = fileHtml.match(fileReg);
				if(apiLinkRegResult){
					apilink = apiLinkRegResult[1];
					var name = /['"](.+)['"]/.exec(apilink)[1];
					apilink = apilink.indexOf('class') > -1 ? ('../../api/classes/' + name + '.html') : ('../../api/modules/' + name + '.html');
					fileHtml = fileHtml.replace(apiLinkRegResult[0],'');
				}
				var compiledDemosNum = 0,
					tagMapDemoHtml = [];
				for(var i = 0; i < includingFiles.length; i++){
					var str = unescapeHtml(includingFiles[i]),
						whichFileToInclude = /include\s*file=['"](.+?)['"]/.exec(str)[1],
						heightRegResult = /height=['"](.+?)['"]/.exec(str),
						height = heightRegResult ? heightRegResult[1] : '800px',
						includingFilePath = path.resolve(dirName,whichFileToInclude);
					
					var demoCode = fs.readFileSync(includingFilePath).toString();
					(function(str, demoCodeXtplPath, demoCode){
						xtpl.__express(demoCodeXtplPath,{
							demoCode : demoCode,
							height : height,
							version : version,
							settings : {
								'view encoding' : 'utf-8'
							}
						},function(err,demoCodeHtml){
							if(err){
								console.log('error occur:' + str);
							}else{
								compiledDemosNum++;
								tagMapDemoHtml.push({
									str : str,
									demoCodeHtml : demoCodeHtml
								});
								if(compiledDemosNum === includingFiles.length){
									for(var j = 0; j < tagMapDemoHtml.length; j++){
										var obj = tagMapDemoHtml[j];
										fileHtml = fileHtml.replace(obj.str,obj.demoCodeHtml);
									}
									xtpl.__express(mainXtplPath,{
										mainContent : fileHtml,
										sidebarContent : sideBarHtml,
										apilink : apilink,
										version : version,
										settings : {
											'view encoding' : 'utf-8'
										}
									},function(err,desFile){
										var desFileName = path.normalize(fileName.replace('src','build').replace('md','html'));
										!fs.existsSync(path.dirname(desFileName)) && fs.mkdirSync(path.dirname(desFileName));
										fs.writeFileSync(desFileName, desFile);
									});
								}
							}
						});
					})(str, demoCodeXtplPath, demoCode);
				}
			});
		}
		buildDemoIndex(demoLists);
	});
};


module.exports.buildOthers = function(srcUrl,config){
	version = config.version;
	srcDirPath = path.resolve(srcUrl);
	projectPath = path.resolve(srcUrl, '../');
	var mainXtplPath = path.resolve(srcDirPath,'../themes/layouts/main.xtpl');

	fs.readdirSync(srcDirPath).forEach(function(file){
		if(file === 'api' || file === 'demos' || file === 'guides' || file === 'assets'){
			return;  //这个三个目录在其他地方处理，如buildGuides/buildDemos等
		}
		var fileName = path.resolve(srcDirPath,file);
		if(!fs.statSync(fileName).isDirectory()){
			var mdContent = fs.readFileSync(fileName).toString(),
				desPath = path.normalize(fileName.replace('src','build').replace('md','html')),
				fileHtml = marked(mdContent);
			xtpl.__express(mainXtplPath,{
				mainContent : fileHtml,
				version : version,
				settings : {
					'view encoding' : 'utf-8'
				}
			},function(err,desFile){
				fs.writeFileSync(desPath,desFile);
			});
		}else{
			var desDirName = path.normalize(fileName.replace('src','build'));
			!fs.existsSync(desDirName) && fs.mkdirSync(desDirName);
			fs.readdirSync(fileName).forEach(function(file){
				var srcFileName = path.resolve(fileName,file);
				var mdContent = fs.readFileSync(srcFileName).toString(),
					desPath = path.normalize(srcFileName.replace('src','build').replace('md','html')),
					fileHtml = marked(mdContent);
				xtpl.__express(mainXtplPath,{
					mainContent : fileHtml,
					version : version,
					settings : {
						'view encoding' : 'utf-8'
					}
				},function(err,desFile){
					fs.writeFileSync(desPath,desFile);
				});
			});
		}
	});
};

function trunMdIntoHtml(mdContent,desPath){
	!fs.existsSync(desPath) && fs.mkdirSync(desPath);
	fs.writeFileSync(desFileName, desFile);
}

function getSideBarHtmlSync(dirUrl){
	var featureContent = getSideBarFeatures(dirUrl),
		demosContent = getSideBarDemos(dirUrl.replace('guides', 'demos'));
	return {
		featureContent : featureContent,
		demosContent : demosContent
	};
}

function getFeatures(dirUrl){
	var featureContent = '';
	if(fs.existsSync(dirUrl)){
		fs.readdirSync(dirUrl).forEach(function(file){
			var fileName = path.resolve(dirUrl,file);
			if(fs.statSync(fileName).isDirectory()){
				return;  //如果是文件夹，在这里暂时是cited-by-md文件夹，不处理
			}
			var fileContent = fs.readFileSync(fileName).toString(),
				// reg =  /^ *(#{1}) *([^\n]+?) *#* *(?:\n+|$)/,
				reg = /#(.*)/,
				feature = reg.exec(fileContent)[1].trim();
			var fileLink = path.normalize(path.relative(projectPath,fileName).replace('src','../../').replace('md','html'));
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
	var productGuideIndexPath = path.resolve(projectPath, './build/guides/index.html'),
		guidesIndexXtplPath = path.resolve(projectPath, './themes/guides/layouts/guides-index.xtpl');
	xtpl.__express(guidesIndexXtplPath,{
		version : version,
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
	var productDemoIndexPath = path.resolve(projectPath, './build/demos/index.html'),
		demosIndexXtplPath = path.resolve(projectPath, './themes/demos/layouts/demos-index.xtpl');

	xtpl.__express(demosIndexXtplPath,{
		version : version,
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