var http = require('http');

http.createServer(function (request, response) {
	var url = require('url')
	var query = url.parse(request.url, true)
	var path = query['pathname'].split('/')
	var date = new Date(query.query.iso)
	console.log(date.getTime())
	response.writeHead(200, { 'Content-Type': 'application/json' })
	if(path[2] == 'parsetime') {
		var parsetime = { 
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
			};
		
		response.write(JSON.stringify(parsetime))
		response.end()
	} else if(path[2] == 'unixtime') {	
		var unixtime = { unixtime: date.getTime() }
		response.write(JSON.stringify(unixtime))
		response.end()
	} else {
		response.end("error")
	}
	
}).listen(process.argv[2])
