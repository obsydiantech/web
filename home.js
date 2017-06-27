document.querySelector("input[type=submit]").addEventListener('click', onSubmit);

function onSubmit(e){
	event.preventDefault();

	if(datosValidos()){
		alert("Datos correctos");
	}
}

function datosValidos(){
	var error = false;
	var inputs = document.querySelectorAll(".required");

	for(var i=0; i < inputs.length; i++){
		if(inputs[i].innerHTML == '')
		{

			error = true;
			inputs[i].style.border = "2px solid rgba(255, 0, 0, 0.6)";
		}
	}

	return !error;
}