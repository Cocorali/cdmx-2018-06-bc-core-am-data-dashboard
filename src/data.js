// Esta hoja debe contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos.
/*
window.computeGenerationsStats = (laboratoria) => {
    const generacionesArr = [];
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
     return generacionesArr;
    }
*/