function route(handler, path, response, postData){

	if(typeof(handler[path]) === 'function')
	{
		console.log("Function");
		handler[path](response, postData);
	}else
	{
		console.log("Not a function");
		console.log(path);

		// 404
		response.writeHeader(404, 'text/html');
		response.write('404');
		response.end();
	}
}

exports.route = route;