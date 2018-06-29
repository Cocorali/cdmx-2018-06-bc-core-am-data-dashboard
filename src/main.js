//Aquí poner todo el código que tenga que ver con mostrar los datos en la pantalla

// Declarando una variable para función posterior que accione el botón

document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
//Variable que voy a usar para pintar data
let contenido = document.getElementById("contenido");
//let sedes = "";
//Declarando variable para que fetch jale JSON desde URL
const url = 'https://raw.githubusercontent.com/BeryNice/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

	function cargarJSON() { 
	    fetch(url)
	    .then (response => (response.json())
		.then (data => {
		   for (item in data) {
			   let generacionSede = data[item].generacion;
			     console.log(item);
                 for ( propiedades in generacionSede) {
			       console.log(propiedades);
				   let div = document.createElement('div');
				   let generacion = generacionSede[propiedades].generacion;
				   //console.log(generacion);
				}
			
			}
			//document.getElementById("contenido").innerHTML = `${sedes}`; 
			
		})			
		.catch((error) => {
			console.log('Error: ', error);
		}));
	}


