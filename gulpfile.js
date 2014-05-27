var gulp = require('gulp');

var util = require('./tools/util.js'),
	buildDocs = require('./tools/builddocs.js'),
	path = require('path'),
	process = require('child_process');

gulp.task('buildapi',function(){
	//生成api文档
	process.exec('yuidoc');
});

gulp.task('buildguide',function(){
	var srcPath = path.resolve('./src');
	//生成教程文档
	buildDocs.buildGuide(srcPath);
	//生成demos
	buildDocs.buildDemos(srcPath);
	//生成其他目录的文档
	buildDocs.buildOthers(srcPath);
});


gulp.task('default',['buildapi', 'buildguide']);