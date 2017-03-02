var fs=require('fs');
var path=require('path');
fs.readdir(process.argv[2],function(err,list){
	if(err){
		throw err;
	}
	var i;
	for(i=0;i<list.length;i+=1){
		if(path.extname(list[i])==='.'+process.argv[3]){
			console.log(list[i]);
		}
	}
});