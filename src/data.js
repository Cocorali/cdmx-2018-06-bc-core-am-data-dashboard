// Esta hoja debe contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos.


const url = 'https://raw.githubusercontent.com/BeryNice/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
window.onload = () => {
  fetch(url)
    .then(response => (response.json())
      .then((data) => {
        getSedes(data);
        getGeneracion(data);

        // probando llamar a drawFilterStudentStats con paramnetro gen y campus
        // drawFilterStudentStats(gen, sede);
        // probando llamar a filterStudentsStats con paramnetro gen y campus
        // filterStudentsStats(gen, campus);

        // let arrDatosEstudiantes = getStudents(data);
        // Aquí armar una función para ir pintando nuestros valores en DOM
        // let result = '';
      })
      .catch((error) => {
        console.log('Error: ', error);
      }));
};

window.computeGenerationsStats = (data) => {
// 1 debería retornar un arreglo de generaciones con propiedad average y count
// 2 generation para la primera generación en data de prueba - ver carpeta data/
// 2.1 debería tener una propiedad average con valor 75
// 2.2 debería tener una propiedad count con valor 15

  /*    const generacionesArr = [];
  const obj = {
  campus : '',
  generation: ' ',
  average : 0,
  count : 0,
};
  let average = 0;
  for (key in laboratoria) {
    obj.campus = key;
    const generations = Object.keys([laboratoria[key].generacion]);
    generations.forEach((generation) => {
      obj.generation = generation;
      const students = laboratoria[key].generacion[generation].estudiantes;
      for (student in students) {
        average += students[student].progreso.porcentajeCompletado;
        average = average / students.length;
        obj.average = average;
        obj.count = students.length;
        generacionesArr.push(obj);
      }
    })
  }
return generacionesArr; */

};

window.computeStudentsStats = (data) => {
// 1 debería retornar arreglo de students con propiedad campus y propiedad generation
// 2 debería retornar arreglo de students con propiedad stats
// 3 student.stats para el primer usuario en data de prueba - ver carpeta data
// 3.1 debería tener propiedad completedPercentage con valor 89
// 3.2 debería tener propiedad completedPercentage dentro de propiedad topics con valor 80
// 3.3 debería tener propiedad percentageDuration dentro de propiedad topics con valor 79
// 3.4 debería tener propiedad subtopics que es un objeto con primera key "0-bienvenida-orientacion" con valor {completado: 1, duracionSubtema: 55, tipo: "lectura"}
/*
const topics = Object.keys(processed[0].stats.topics);
const subTopics = Object.keys(processed[0].stats.topics[topics[0]].subtopics);
*/

  for (item in data) {
    console.log(Object.keys(data[item]));
  };
};

window.sortStudents = (data) => {

};

window.filterStudents = (data) => {

};