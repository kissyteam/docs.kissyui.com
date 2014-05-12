var fs = require('fs'),
	path = require('path'),
	marked = require('marked'),
	jade = require('jade');

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


module.exports = function(srcUrl){
	srcDirPath = path.resolve(srcUrl);
	projectPath = path.resolve(srcUrl, '../../5.0');

	var	guidesPath = path.resolve(srcDirPath, './guides');
	fs.readdirSync(guidesPath).forEach(function(dir){
		var dirName = path.resolve(guidesPath,dir);
		if(fs.statSync(dirName).isDirectory()){
			var sideBarHtml = getSideBarHtmlSync(dirName);
			//将markdown转为html
			fs.readdirSync(dirName).forEach(function(file){
				var fileName = path.resolve(dirName,file),
					fileMD = fs.readFileSync(fileName).toString(),
					fileHtml = marked(fileMD);

				var mainJadePath = path.resolve(srcDirPath,'../themes/guides/layouts/main.jade'),
					desFile = jade.renderFile(mainJadePath,{
						mainContent : fileHtml,
						sidebarContent : sideBarHtml
					});
				var desFileName = path.normalize(fileName.replace('src','').replace('md','html'));
				!fs.existsSync(desFileName) && fs.mkdirSync(path.dirname(desFileName));
				fs.writeFileSync(desFileName, desFile);
			});
		}else{

		}
	});
};

function getSideBarHtmlSync(dirUrl){
	var featureContent = getSideBarFeatures(dirUrl),
		demosContent = getSideBarDemos(dirUrl.replace('guides', 'demos'));

	var sideBarJadePath = path.resolve(srcDirPath,'../themes/guides/layouts/sidebar.jade');

	return jade.renderFile(sideBarJadePath,{
		featureHtml : featureContent,
		demosHtml : demosContent
	});
}

function getFeatures(dirUrl){
	var featureContent = '';
	fs.readdirSync(dirUrl).forEach(function(file){
		var fileName = path.resolve(dirUrl,file);
		var fileContent = fs.readFileSync(fileName).toString(),
			feature = /^ *(#{1}) *([^\n]+?) *#* *(?:\n+|$)/.exec(fileContent)[2];
		var fileLink = path.normalize(path.relative(projectPath,fileName).replace('src','/5.0').replace('md','html'));
		feature = '<p><a href="' + fileLink +'">' + feature + '</a></p>';
		featureContent += feature;
	});
	return featureContent;
}

function getSideBarFeatures(dirUrl){
	return getFeatures(dirUrl);
}
function getSideBarDemos(dirUrl){
	return getFeatures(dirUrl);
}

