//Aquí poner todo el código que tenga que ver con mostrar los datos en la pantalla

//Variable que voy a usar para pintar data
const container = document.getElementById('resultados');
let result = '';

//OBTENIENDO LAS SEDES
getSedes = (data) => {
    document.getElementById('sedesBtn').addEventListener('click', (event) => {

        for (item in data) {
            const p = document.createElement('p');
            const sedes = item;
            const containerSedes = document.getElementById('resultados');
            /*p.innerHTML = sedes;
            containerSedes.appendChild(p);*/
            container.innerHTML = '';
        }
    })
};

//Función para filtrar dentro de arrDatosEstudiantes con parámetros generación y sede
//Gen y sede son variables que ya están declaradas en la función del evento, son etiquetas que contienen
//el nombre de las propiedades del objeto sobre el que se va a realizar el filtrado, así lo podrá reconocer y comparar
const filterStudentsStats = (array, gen, sede) =>{

        //Declaramos una variable para guardar un nuevo arreglo
        let arrFilteredStudents = [];
        //Accedemos a cada arreglo dentro del arreglo listaEStudiante (9 arreglos en total)
        for (let i=0; i<array.length; i++) {
            //Guardamos cada iteración dentro del arreglo en una variable
            const separatedArr = array[i];
            //Accedemos dentro de cada arreglo al objeto estudiantes
            for (let j= 0; j < separatedArr.length; j++) {
                //Comparamos que sede y generación sean igual al valor de los dos datasets
                if (separatedArr[j].sede === event.target.dataset.campus && separatedArr[j].generacion === event.target.dataset.gen){
                    //Si la condición se cumple, crear un nuevo arreglo con solo los valores de esas propiedades
                  arrFilteredStudents.push(separatedArr[j]);
                }
            }
        }

        console.log(arrFilteredStudents);
        for (i=0; i< arrFilteredStudents.length; i++) {
            //result = "";
            result += `<div class="row">
            <div class="col-1">
                <p>'#'</p>
            </div>
            <div class="col-4">
                <p>${arrFilteredStudents[i].name}</p>
            </div>
            <div class="col-3">
                <p>${arrFilteredStudents[i].correo}</p>
            </div>
            <div class="col-3">
                <p>${arrFilteredStudents[i].turno}</p>
            </div>
            <div class="col-1">
                 <p>${arrFilteredStudents[i].porcentajeCompletado}</p>
            </div>
            </div>`

        container.innerHTML = result;

        }

        return arrFilteredStudents;
    };


getGeneracion = (data) => {
    const eventFunction = (event) => {
        //Las let declaradas aquí no logran funcionar en nuestro doble for para filtrar...esto pasa por qué es let?
        let gen = event.target.dataset.gen;
        let sede = event.target.dataset.campus;
				console.log(sede, gen);
	//Asigna la función getStudents con parámetro data a una variable para usarla en Función de filtrado
        const arrDatosEstudiantes = computeStudentsStats(data);
     //Constante que tiene una función anónima, el callback para filter
        filterStudentsStats(arrDatosEstudiantes, gen, sede);
    };

        /*for (item in data) {
            const p = document.createElement('p');
            const generations = Object.keys(data[item].generacion);
            const containerGeneraciones = document.getElementById('resultados');
            p.innerHTML = generations;
            containerGeneraciones.appendChild(p);
        };*/

    const btnGeneraciones = document.getElementsByClassName('btnGeneraciones');
    for(let i= 0; i< btnGeneraciones.length; i++) {
        btnGeneraciones[i].addEventListener('click', eventFunction);
    }
};

window.getStudents = (data) => {
    //document.getElementById('btnLima4').addEventListener('click', (event) => {


    };






//Item es el arreglo de estudiantes, cada unidad del arreglo en formato Objeto de cada Estudiante
                    /*array[i].filter((item) => {
            });*/

        /*array.filter((item) => {
        //return item.campus === sede;
		//&& return item.campus === generacion;
    })*/
    //estudianteSede.filter()
   // console.log(array, gen)



/*drawFilterStudentStats(gen, sede) => {
    document.getElementById("resultados").innerHTML = array.arrDatosEstudiantes(filterStudentsStats);
};*/



        /*let prueba = listaEstudiantes.filter((item)=>{
            return item[2] == "lima" && item[3] == "cuarta"
                    }) */

         /*let lima = listaEstudiantes.filter(lista => {
             return lista.sede === 'lima';
         })
            //console.log(lima);*/

        //  })
