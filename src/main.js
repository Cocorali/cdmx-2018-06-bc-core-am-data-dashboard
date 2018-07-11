// Aquí poner todo el código que tenga que ver con mostrar los datos en la pantall// Variable que voy a usar para pintar data
let result = '';

// IMPRIMIENDO VSTA GENERAL
getSedes = (array, gen, sede) => {
  document.getElementById('sedesBtn').addEventListener('click', (event) => {
    const containerSedes = document.getElementById('student-list');
    document.getElementById('titulos').style.display = 'none';
    /* generacion.style.display = 'none';
    campus.style.display = 'none';*/
    containerSedes.innerHTML = `
      <h3 id="title-h3" class="margin-large-bottom">VISTA GLOBAL LABORATORIA</h3>
      <div class="container-fluid" >
        <!-- Inicia primer fila datos globales egresadas-->
        <div class="row margin-large shadow-row">
          <div class="col-xl-4 col-sm-12 col-md-12">
            <div class="text-lead"> Número total de estudiantes egresadas</div>
            <div class="big-values margin-top">90 <i class="fas fa-user-graduate pink"></i></div>
            <div>Estudiantes egresadas</div>
          </div>
          <div class="col-xl-8 col-sm-12 col-md-12">
            <div class="text-lead"> ¿Cuántas estudiantes egresadas por sede?</div>
            <div class="row">
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> LIMA</div>
                <div class="values margin-remove">30</div>
                <p>Estudiantes egresadas</p>
              </div>
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> MÉXICO</div>
                <div class="values margin-remove">30</div>
                <p>Estudiantes egresadas</p>
              </div>
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> SANTIAGO</div>
                <div class="values margin-remove">30</div>
                <p>Estudiantes egresadas</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Inicia segunda fila datos globales estudiantes actuales-->
        <div class="row margin-large shadow-row">
          <div class="col-xl-4 col-sm-12 col-md-12">
            <div class="text-lead"> Número total de estudiantes activas</div>
            <div class="big-values margin-remove">45 <i class="fas fa-female pink"></i></div>
            <p>Estudiantes cursando</p>
          </div>
          <div class="col-xl-8 col-sm-12 col-md-12">
            <p class="text-lead"> ¿Cuántas estudiantes activas por sede?</p>
            <div class="row">
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> LIMA</div>
                <div class="values margin-remove">15</div>
                <p>Estudiantes activas</p>
              </div>
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> MÉXICO</div>
                <div class="values margin-remove">15</div>
                <p>Estudiantes activas</p>
              </div>
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> SANTIAGO</div>
                <div class="values margin-remove">15</div>
                <p>Estudiantes activas</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Inicia tercer fila porcentaje global completitud LMS-->
        <div class="row margin-large shadow-row">
          <div class="col-xl-4 col-sm-12 col-md-12 border-right-xl">
            <div class="text-lead"> Porcentaje Global de completitud del LMS</div>
            <div class="big-values margin-remove pink">80% <i class="fas fa-chart-line"></i>

</div>
            <p>Estudiantes cursando</p>
          </div>
          <div class="col-xl-8 col-sm-12 col-md-12">
            <p class="text-lead"> Porcentaje de completitud del LMS por sede</p>
            <div class="row">
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> LIMA</div>
                <div class="values margin-remove">70%</div>

              </div>
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> MÉXICO</div>
                <div class="values margin-remove">85%</div>

              </div>
              <div class="col-xl-4 col-sm-12 col-md-4 margin-top">
                <div class="text-lead"> SANTIAGO</div>
                <div class="values margin-remove">65%</div>

              </div>
            </div>
          </div>

        </div>
      </div>`;
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
  result = '';
  document.getElementById('student-list').innerText = result;
  document.getElementById('titulos').style.display = 'block';
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
