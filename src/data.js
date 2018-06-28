//Agregando funcionalidad a mi botón
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
	//Fetch va a jalar Json desde URL
	const url = 'https://raw.githubusercontent.com/BeryNice/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
	fetch(url)
	    .then (response => (response.json()))
		 //console.log(response);
		.then (data => {
		  for (let countries in data) {

		  }
          //document.getElementById('jsonPrint').innerHTML= "jsonBtn".value ;  
		  // const laboratoria = data; 
		  console.log(data);
		})

		.catch((error) => {
			console.log('Error: ', error);
		});

    /*		data.forEach(function(laboratoria) {
			console.log(laboratoria.generacion);
		  })
    const prueba = "";
    for (let propiedad in laboratoria) {
		prueba = prueba + laboratoria[propiedad];
	}

	console.log(objetoLab);*/
	


        /*let html = ' ';
        //Pedir un arreglo del objeto y mostrarlo en html
        data.forEach(function(laboratoria) {
        	html += `${laboratoria.generacion}`;
        })
		document.getElementById('resultado').innerHTML = html;*/
	}


	/* 
	
    computeStudentsStats(laboratoria)
	computeGenerationsStats(laboratoria)
	sortStudents(students, orderBy, orderDirection)    order Direction = ascendente / descendiente
	filterStudents(students, search)

	*/
