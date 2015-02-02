var net = require('net');

function pad(i) {
    return (i < 10 ? '0' : '') + i
}

function logtime () {
  var d = new Date()
  return d.getFullYear() + '-' 
	+ pad(d.getMonth() + 1) + '-' //getMonth starts at 0
	+ pad(d.getDate()) + ' ' 
	+ pad(d.getHours()) + ':' 
	+ pad(d.getMinutes())
}

net.createServer(function (socket) {
  socket.end(logtime() + '\n')
}).listen(process.argv[2])
