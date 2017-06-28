var http = require('http');
var url = require('url');
var fs = require('fs');

var PORT = 8888;

http.createServer(onRequest).listen(PORT);

console.log("Server listening at port: " + PORT);

function onRequest(req, res){
	var html = "";
	var path = req.url.substring(1, req.url.length);

	if(path != ""){
		var fileExtension = req.url.substring(path.lastIndexOf('.') + 2, req.url.length);

		console.log("Requested path: " + path); // BORRAR
		console.log("Requested file extension: " + fileExtension); // BORRAR

		if(fileExtension == "html")
			res.writeHead(200, {"Content-Type": "text/html"});
		else if(fileExtension == "css")
			res.writeHead(200, {"Content-Type": "text/css"});

		switch(path){
			case "":
			fs.readFile(path, function read(err, data) {
				if (err) {
					throw err;
				}
				res.write(data);
				res.end();

			});
			break;

			default:
				res.writeHead(404, 'text/html');
				res.write("ups... page not found");
				res.end();
				break;
		}
	}
}