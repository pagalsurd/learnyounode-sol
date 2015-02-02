var fs = require('fs');
var path = require('path');

var a = [];
var j=0;

module.exports = function(dirName, extn, callback){
    fs.readdir(dirName, function doneReading(err, files){
	if(err)
	    return callback(err)
	for(i=0; i<files.length; i++){
	    if(path.extname(files[i])=== '.' + extn){
		a[j] = files[i]
		j++
	    }
	}
	callback (null,a);
    }
)}
