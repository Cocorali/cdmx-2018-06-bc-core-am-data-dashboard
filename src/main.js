//Aquí poner todo el código que tenga que ver con mostrar los datos en la pantalla

//Variable que voy a usar para pintar data
const contenido = document.getElementById("contenido");

//OBTENIENDO LAS SEDES

getSedes = (data) => {
    document.getElementById('sedesBtn').addEventListener('click', (event) => {

        for (item in data) {
            const p = document.createElement('p');
            const sedes = item;
            const containerSedes = document.getElementById('resultados');
            p.innerHTML = sedes;
            containerSedes.appendChild(p);
        }
    })
};

//OBTENIENDO LAS GENERACIONES

//Función para filtrar dentro de arrDatosEstudiantes con parámetros generación y sede
const filterStudentsStats = (array, gen, sede) =>{
		//Item es el arreglo de estudiantes, cada unidad del arreglo en formato Objeto de cada Estudiante
		array.filter((item) => {
        //return item.campus === sede;
        console.log(item);
				//&& return item.campus === generacio;

    })
    //estudianteSede.filter()


// console.log(array, gen)
};


/*drawFilterStudentStats(gen, sede) => {
    document.getElementById("resultados").innerHTML = array.arrDatosEstudiantes(filterStudentsStats);
};*/

getGeneracion = (data) => {
    //console.log(data);
    const eventFunction = (event) => {
        //console.log(this)
        let gen = event.target.dataset.gen;
        let sede = event.target.dataset.campus;
				//console.log(sede, gen);
	//Asigna la función getStudents con parámetro data a una variable para usarla en Función de filtrado
        const arrDatosEstudiantes = getStudents(data);

        //Constante que tiene una función anónima, el callback del filter
        filterStudentsStats(arrDatosEstudiantes, gen, sede)


        /*for (item in data) {
            const p = document.createElement('p');
            const generations = Object.keys(data[item].generacion);
            const containerGeneraciones = document.getElementById('resultados');
            p.innerHTML = generations;
            containerGeneraciones.appendChild(p);
        };*/


    };
    const btnGeneraciones = document.getElementsByClassName('btnGeneraciones')
    for(let i= 0; i< btnGeneraciones.length; i++){
        btnGeneraciones[i].addEventListener('click', eventFunction)

    }


};

window.getStudents = (data) => {
    //document.getElementById('btnLima4').addEventListener('click', (event) => {

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
                    let porcentajeGeneralDeCompletitud = elementoDelArreglo.progreso.porcentajeCompletado

                    /*
                                                    for(z=0; z<listaTemas.length;z++){
                                                        let completedPercentage[primer tema]
                                                        let completedPercentage[segundo tema]
                                                        let completedPercentage[tercer tema]

                                                        let listaSubtemas = Object.keys(elementoDelArreglo.progreso.temas[listaTemas[z]].subtemas)
                                                        for(m=0;m<listaSubtemas.length;m++){
                                                            let completedPercentage[PrimerSubtema]
                                                        }
                                                    }
                    */

                    return {
                        name: elementoDelArreglo.nombre,
                        progreso: elementoDelArreglo.progreso,
                        sede: sedeActual,
                        generacion: generacionActual,
                        porcentajeCompletado: porcentajeGeneralDeCompletitud
                    }
                })

                listaEstudiantes.push(arrNewStudents)

            }
        }

        /*let prueba = listaEstudiantes.filter((item)=>{
            return item[2] == "lima" && item[3] == "cuarta"
                    }) */

         /*let lima = listaEstudiantes.filter(lista => {
             return lista.sede === 'lima';
         })
            //console.log(lima);*/
            //console.log(listaEstudiantes)

        return listaEstudiantes;
  //  })
};