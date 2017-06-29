// Módulos
var fs = require('fs');

// Funciones
function readFile(path)
{	
	fs.readFile(path, onFileLoaded);
}

function onFileLoaded(err, data){

	if(err)
		throw err;
	else
		return data;

}

// Exports 
exports.readFile = readFile;