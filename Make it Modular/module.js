var fs = require('fs');
var path = require('path');
module.exports = function(file,ext,callback){
	var data=[],i;
	fs.readdir(file,function(err,list){
		if(err){
			return callback(err);
		}
		for(i=0;i<list.length;i++){
			if (path.extname(list[i])==='.'+ext) {
				data.push(list[i]);
			}
		}
		callback(null,data);
	});
}