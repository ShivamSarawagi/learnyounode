var net = require('net')
var server = net.createServer(function(socket){
	var date = new Date(),
	setNumber = function(num){
		return num>=10?num:'0'+num;
	},
	dateStr = date.getFullYear()+'-'+setNumber(date.getMonth()+1)+'-'+setNumber(date.getDate())+' '+setNumber(date.getHours())+':'+setNumber(date.getMinutes())+'\n';
	socket.end(dateStr);
});
server.listen(process.argv[2]);