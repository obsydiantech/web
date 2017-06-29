var fileManager = require('./fileManager');

function index(res, postData){
	fileManager.readFile('index.html');

	res.writeHeader('404', 'text/html');
	res.write(data);
	res.end();

}

function empresa(res, postData){

}

function contacto(res, postData){

}

exports.index = index;
exports.empresa = empresa;
exports.contacto = contacto;