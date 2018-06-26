//Agregando funcionalidad a mi botón
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

//const data = JSON.parse("laboratoria")

function cargarJSON() {
	//Aquí también podría meter una URL, me pregunto si la extensión web server chrome ayudaría
	fetch('http://127.0.0.1:8887/laboratoria.json')
	    .then(function(response) {
		//return response.json();
		console.log(response);
	})
	.then(function(data){
		console.log(data);
        /*let html = ' ';
        //Pedir un arreglo del objeto y mostrarlo en html
        data.forEach(function(laboratoria) {
        	html += `${laboratoria.generacion}`;
        })
        document.getElementById('resultado').innerHTML = html;*/
	})
}