var gulp = require('gulp');

var util = require('./tools/util.js'),
	buildguide = require('./tools/build-guide.js'),
	path = require('path'),
	process = require('child_process');

gulp.task('buildapi',function(){
	//生成api文档
	process.exec('yuidoc');
});

gulp.task('copyassets', function(){
	//拷贝资源文件（包括css/img/js）
	util.exists('./themes/guides/assets','./guides/assets',util.copy);
});

gulp.task('buildguide',function(){
	//生成教程文档
	buildguide(path.resolve('./src'));
});


gulp.task('default',['buildapi', 'copyassets', 'buildguide']);