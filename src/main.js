// Aquí poner todo el código que tenga que ver con mostrar los datos en la pantalla

// Variable que voy a usar para pintar data
const container = document.getElementById('resultados');
let result = '';

// OBTENIENDO LAS SEDES
getSedes = (data) => {
  document.getElementById('sedesBtn').addEventListener('click', (event) => {
    for (item in data) {
      // const paragraph = document.createElement('p');
      const sedes = item;
      const containerSedes = document.getElementById('resultados');
      /* paragraph.innerHTML = sedes;
           containerSedes.appendChild(p);*/
      container.innerHTML = '';
    }
  });
};

// Función para filtrar dentro de arrDatosEstudiantes con parámetros generación y sede
// Gen y sede son variables que ya están declaradas en la función del evento, son etiquetas que contienen
// el nombre de las propiedades del objeto sobre el que se va a realizar el filtrado, así lo podrá reconocer y comparar
const filterStudentsStats = (array, gen, sede) =>{
  // Declaramos una variable para guardar un nuevo arreglo
  let arrFilteredStudents = [];
  // Accedemos a cada arreglo dentro del arreglo listaEStudiante (9 arreglos en total)
  for (let i = 0; i < array.length; i++) {
    // Guardamos cada iteración dentro del arreglo en una variable
    const separatedArr = array[i];
    // Accedemos dentro de cada arreglo al objeto estudiantes
    for (let j = 0; j < separatedArr.length; j++) {
      // Comparamos que sede y generación sean igual al valor de los dos datasets
      if (separatedArr[j].sede === event.target.dataset.campus && separatedArr[j].generacion === event.target.dataset.gen) {
        // Si la condición se cumple, crear un nuevo arreglo con solo los valores de esas propiedades
        arrFilteredStudents.push(separatedArr[j]);
      }
    }
  }
  //  console.log(arrFilteredStudents);
  for (i = 0; i < arrFilteredStudents.length; i++) {
    // result = "";
    result += ` <tr >
      <th scope="row"># </th>
      <td><a href="#">${arrFilteredStudents[i].name}</a> </td>
      <td>${arrFilteredStudents[i].correo}</td>
      <td>${arrFilteredStudents[i].turno}</td>
      <td>${arrFilteredStudents[i].porcentajeCompletado}</td>
    </tr>`;

    container.innerHTML = result;
    document.getElementById('generacion').innerHTML = 'Vista ' + gen + ' Generación' ;
    document.getElementById('sede').innerHTML = 'Sede ' + sede;
  }

  return arrFilteredStudents;
};


getGeneracion = (data) => {
  const eventFunction = (event) => {
    // Las let declaradas aquí no logran funcionar en nuestro doble for para filtrar...esto pasa por qué es let?
    let gen = event.target.dataset.gen;
    let sede = event.target.dataset.campus;
    console.log(sede, gen);

    // Asigna la función getStudents con parámetro data a una variable para usarla en Función de filtrado
    const arrDatosEstudiantes = computeStudentsStats(data);
    // Constante que tiene una función anónima, el callback para filter
    filterStudentsStats(arrDatosEstudiantes, gen, sede);
  };


  const btnGeneraciones = document.getElementsByClassName('btnGeneraciones');
  for (let i = 0; i < btnGeneraciones.length; i++) {
    btnGeneraciones[i].addEventListener('click', eventFunction);
  }
};

window.getStudents = (data) => {
};
