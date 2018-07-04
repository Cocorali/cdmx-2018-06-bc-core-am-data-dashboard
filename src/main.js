//Aquí poner todo el código que tenga que ver con mostrar los datos en la pantalla

//Variable que voy a usar para pintar data
const contenido = document.getElementById("contenido");
//const result = '';

//OBTENIENDO LAS SEDES

getSedes = (data) => {
    document.getElementById('sedesBtn').addEventListener('click', (event) => {

    for (item in data) {
        //console.log(item);
        const p = document.createElement('p');
        const sedes = item;
        //console.log(sedes);
        const containerSedes = document.getElementById('resultados');
        p.innerHTML = sedes;
        containerSedes.appendChild(p);
    }    
  })
};

//OBTENIENDO LAS GENERACIONES
getGeneracion = (data) => {
    document.getElementById('btnLima3').addEventListener('click', (event) => {
    for (item in data) {
        const p = document.createElement('p');
        const generations = Object.keys(data[item].generacion);
        //console.log(generaciones);
        const containerGeneraciones = document.getElementById('resultados');
        p.innerHTML = generations;
        containerGeneraciones.appendChild(p);
        };
    });

};


getStudents = (data) => {
    document.getElementById('btnLima4').addEventListener('click', (event) => {
        
            //Aquí nos imprime las cuartas generaciones de las 3 sedes
            for (item in data) {
            let students = data[item].generacion.cuarta.estudiantes;
             //console.log(students);
            for (i = 0; i < students.length; i++) {
              let name = students[i].nombre;
              //Aquí nos imprime los 45 nombres de las cuartas generaciones de las 3 sedes
              console.log(name);
            }
           
        }
      
    })
};

        
        //Aquí nos imprime los arreglos de objetos de todas las generaciones
        /*for (item in data) {
            const generations = Object.keys(data[item].generacion);
            console.log(generations);
            generations.forEach( (generation) => {
            const generacionPrint = generation
            //console.log(generacionPrint);
            const students = data[item].generacion[generacionPrint].estudiantes;
            console.log(students);
          })
        }*/


      /*Esto al parecer no hace nada
         const students = Object.keys(data).lima.generacion.cuarta.estudiantes;
          console.log(students);
           for (let i = 0; i < students.length; i++) {
            const students = students[i].cuarta;
           }; */

    //Esto solo muestra las propiedades del objeto generación de cada sede (3) ["cuarta", "quinta", "tercera"] x3
       /* for (item in data) {
           const generations = Object.keys(data[item].generacion);
           console.log(generations);
        };*/


        /*generations.forEach((generation) => {
          const students = data[item].generacion[generation].estudiantes;
          console.log(students);
    })*/