// Esta hoja debe contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos.


const url = 'https://raw.githubusercontent.com/BeryNice/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
window.onload = () => {
    fetch(url)
        .then(response => (response.json())
            .then((data) => {
              getSedes(data);
              getGeneracion(data);
              computeStudentsStats(data);



              //let arrDatosEstudiantes = getStudents(data);
              //Aquí armar una función para ir pintando nuestros valores en DOM
              //let result = '';


            })
            .catch((error) => {
                console.log('Error: ', error);
            }));
}

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
let listaEstudiantes = [];
//Aquí convertimos el objeto sedes en un arreglo
let sedes = Object.keys(data);
//Aquí recorremos cada una de las sedes
for (x = 0; x < sedes.length; x++) {
    let sedeActual = sedes[x];
//Aquí convertimos el objeto generaciones en un arreglo
    let generaciones = Object.keys(data[sedes[x]].generacion)
//Aquí recorremos cada una de las generaciones
    for (i = 0; i < generaciones.length; i++) {
        let generacionActual = generaciones[i];
//Aquí entramos al arreglo de estudiantes que contiene objetos
        let students = data[sedes[x]].generacion[generaciones[i]].estudiantes;
//Aquí recorremos el arreglo de estudiantes con map, recolectando un valor de retorno para cada elemento visitado
        let arrNewStudents = students.map((elementoDelArreglo) => {
//Aquí convertimos el objeto temas de todas las generaciones en todas las sedes, ubicado dentro del objeto progreso, en un arreglo
            let listaTemas = Object.keys(elementoDelArreglo.progreso.temas);
//Aquí obtenemos los porcentajeCompletado de todas las estudiantes de toda la data
            let porcentajeGeneralDeCompletitud = elementoDelArreglo.progreso.porcentajeCompletado;
            let correoEstudiante = elementoDelArreglo.correo;
            let turnoEstudiante = elementoDelArreglo.turno;

                                            /*for(z=0; z<listaTemas.length;z++){
                                                let temasList = listaTemas[z];
                                                //console.log(temasList);

                                                let listaSubtemas = Object.keys(elementoDelArreglo.progreso.temas[listaTemas[z]].subtemas)
                                                //console.log(listaSubtemas);

                                                for(m=0; m<listaSubtemas.length;m++){
                                                    let completedPercentage = listaSubtemas[m];
                                                    console.log(completedPercentage);
                                                }
                                            }*/
            return {
                name: elementoDelArreglo.nombre,
                correo : elementoDelArreglo.correo,
                turno : elementoDelArreglo.turno,
                progreso: elementoDelArreglo.progreso,
                porcentajeCompletado: porcentajeGeneralDeCompletitud,
                sede: sedeActual,
                generacion: generacionActual
            }
        })
        listaEstudiantes.push(arrNewStudents)
        //console.log(listaEstudiantes)
    }
}
return listaEstudiantes;


};

window.sortStudents = (data) => {

};

window.filterStudents = (data) => {

};
