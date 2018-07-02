//Aquí poner todo el código que tenga que ver con mostrar los datos en la pantalla

document.getElementById('jsonBtn').addEventListener('click', mainData);
//Variable que voy a usar para pintar data
let contenido = document.getElementById("contenido");
const url = 'https://raw.githubusercontent.com/BeryNice/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
 function mainData() {
        fetch(url)
        .then (response => (response.json())
        .then ((data) => {
                    const laboratoriaSedes = getSedes (data);
                    const labGeneraciones = getGeneracion (data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        }));
    }
//OBTENIENDO LAS SEDES
const getSedes = (data) => {
    for (item in data) {
     //console.log(item);
     const p = document.createElement('p');
     const sedes = item;
     //console.log(sedes);
     const containerSedes = document.getElementById('resultados');
     p.innerHTML = sedes;
     containerSedes.appendChild(p);
    }
};

//OBTENIENDO LAS GENERACIONES
const getGeneracion = (data) => {
    for (item in data) {
      const p = document.createElement('p');
      const generaciones = Object.keys(data[item].generacion);
      console.log(generaciones);
      /*const containerGeneraciones = document.getElementById('resultados');
      p.innerHTML = generaciones;
      containerGeneraciones.appendChild(p);*/
    };

    }