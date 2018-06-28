//Agregando funcionalidad a mi botón
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
	//Fetch va a jalar Json desde URL
	fetch('https://raw.githubusercontent.com/BeryNice/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json')
	    .then (response => (response.json()))
		 //console.log(response);

		.then (data => {
          //document.getElementById('jsonPrint').innerHTML= "jsonBtn".value ;
		  console.log(data);
		})

		.catch((error) => {
			console.log('Error: ', error);
		});
}
