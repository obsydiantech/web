document.querySelector("input[type=submit]").addEventListener('click', onSubmit);

var requiredFields = document.querySelectorAll(".required");

for(var i=0; i < requiredFields.length; i++){
	requiredFields[i].addEventListener('focus', requiredInputOnFocus)
}

function onSubmit(e){
	event.preventDefault();

	if(datosValidos()){
		console.log("Datos correctos. Sending ajax");

		var http = new XMLHttpRequest();
		var url = "";
		var params = "lorem=ipsum&name=binny";
		http.open("POST", url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200) {
			alert(http.responseText);
		}
	}
	http.send(params);
}
}

function datosValidos(){
	var error = false;
	var inputs = document.querySelectorAll(".required");

	for(var i=0; i < inputs.length; i++){
		if(inputs[i].value == '')
		{
			error = true;
			inputs[i].style.border = "2px solid rgba(255, 0, 0, 0.6)";
		}
	}

	return !error;
}

function requiredInputOnFocus(e){
	e.target.style.border = "none";
}