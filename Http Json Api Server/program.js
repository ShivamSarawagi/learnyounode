var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'application/json'});
	var q = url.parse(req.url,true),
	date,obj={};
	if(q.pathname.match('/api/parsetime')){
		date = new Date(q.query['iso']);
		obj.hour = date.getHours();
		obj.minute = date.getMinutes();
		obj.second = date.getSeconds();
	}else if(q.pathname.match('/api/unixtime')){
		date = new Date(q.query['iso']);
		obj.unixtime = date.getTime();
	}else{
		obj='Wrong Path';
	}
	res.end(JSON.stringify(obj));
});
server.listen(process.argv[2]);