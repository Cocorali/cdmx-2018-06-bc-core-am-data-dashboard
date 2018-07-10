// Aquí poner todo el código que tenga que ver con mostrar los datos en la pantall// Variable que voy a usar para pintar data
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
  result ='';
  document.getElementById('student-list').innerText = result;
  document.getElementById('student-list').innerHTML = `
  <div class="table-responsive-sm margin-large-top">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">NOMBRE</th>
          <th scope="col">EMAIL</th>
          <th scope="col">TURNO</th>
          <th scope="col">PORCENTAJE COMPLETADO</th>
        </tr>
      </thead>
      <tbody id="resultados">

      </tbody>
    </table>`;
    const container = document.getElementById('resultados');

  for (i = 0; i < arrFilteredStudents.length; i++) {
    result += ` <tr >
      <th scope="row"># </th>
      <td><a href="#">${arrFilteredStudents[i].name}</a> </td>
      <td>${arrFilteredStudents[i].correo}</td>
      <td>${arrFilteredStudents[i].turno}</td>
      <td>${arrFilteredStudents[i].porcentajeCompletado}</td>
    </tr>`;
    container.innerHTML = result;
  }
  return arrFilteredStudents;
};


getGeneracion = (data) => {
  const eventFunction = (event) => {
    // Las let declaradas aquí no logran funcionar en nuestro doble for para filtrar...esto pasa por qué es let?
    let gen = event.target.dataset.gen;
    let sede = event.target.dataset.campus;
    console.log(sede, gen);
    document.getElementById('generacion').innerHTML = 'Vista ' + gen + ' Generación' ;
    document.getElementById('sede').innerHTML = 'Sede ' + sede;
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
