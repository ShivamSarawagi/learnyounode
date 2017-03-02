var http = require('http');
var count=0;
var stateCheck = function(buff){
	if (count===3) {
		for(i=0;i<buff.length;i++){
			console.log(buff[i]);
		}
	};
};
var getData = function(){
	var buff=['','',''];
	var resHandler = function(res,i){
		res.setEncoding('utf8');
		res.on('data',function(data){
			buff[i]+=data;
		});
		res.on('end',function(){
			count+=1;
			stateCheck(buff);
		});
	};
	http.get(process.argv[2],function(res){
		resHandler(res,0);
	});
	http.get(process.argv[3],function(res){
		resHandler(res,1);
	});
	http.get(process.argv[4],function(res){
		resHandler(res,2);
	});
}();