var util = require('./util.js'),
	buildguide = require('./build-guide.js');

//拷贝资源文件（包括css/img/js）
util.exists('../themes/guides/assets','../guides/assets',util.copy);
//生成教程文档
buildguide('../src'); 