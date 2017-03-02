var http = require('http');
http.get(process.argv[2],function(res){
	var buff='';
	res.setEncoding('utf8');
	res.on('data',function(data){
		buff+=data;
	});
	res.on('end',function(){
		console.log(buff.length);
		console.log(buff);
	});
});