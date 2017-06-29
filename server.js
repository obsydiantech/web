var http = require('http');
var router = require('./router');
var url = require('url');
var requestHandler = require('./requestHandler');
var handler = {}
handler["/"] = requestHandler.index;
handler["/empresa"] = requestHandler.empresa;
handler["/contacto"] = requestHandler.contacto;

http.createServer(onRequest).listen(8888);

function onRequest(req, res){
	var postData;
	var path = url.parse(req.url).pathname;

	req.addListener("data", function(trozoPosteado) {
		postData += trozoPosteado;
	});

	req.addListener("end", function() {
		console.log("path: " + path);
		console.log("postData: " + postData);
		router.route(handler, path, res, postData);
	});
}