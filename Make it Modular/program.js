var module = require('./module.js');
var callback = function(err,list){
	if(err){
		return console.log(err);
	}
	list.forEach(function(item){
		console.log(item);
	})
};
module(process.argv[2],process.argv[3],callback);