KISSY.add(function(S, Dep){
	console.log(Dep);
	return 'my mod called';
},{
	requires : ['./dep']
})