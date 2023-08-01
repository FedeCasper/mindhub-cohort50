//Bucles : Son estructuras que nos permiten repetir acciones de código.
// Cuando se cumpla una condición
// Tipo de bucle (condicion) {
    //Ejecución de código
//}

// Iterable: Un iterable es lo que se puede recorrer secuencialmente para acceder a sus elementos

// Los arrays comienzan en indice 0.
// El largo del array empieza en 1



const personas = [
    {
       nombre: "Flor",
       edad: "38" ,
       profesion: "Diseñadora de Videojuegos",
       mascota: true
    },
    {
        nombre: "Fede",
        edad: "28" ,
        profesion: "Ingeniero",
        mascota: false
     },
     {
        nombre: "Sil",
        edad: "25" ,
        profesion: "Abogada",
        mascota: false
     },
     {
        nombre: "Lucre",
        edad: "32" ,
        profesion: "Arquitecta",
        mascota: true
     },
     {
        nombre: "Nico",
        edad: "30" ,
        profesion: "Programador",
        mascota: true
     },
]
// console.log(personas[0].edad)
// console.log(personas[1].nombre)
// console.log(personas[2])
// console.log(personas[3])
// console.log(personas[4])

//Tipos de bucle: For, while, do while, for in, for of

//Bucle For
// El bucle for es ideal cuando se conoce previamente la cantidad exacta de iteraciones que se realizarán
// Sintaxis:
// for(variableInicializacion; condición, incremento) {
//     // Código a repetir en cada iteración
// }

// const numeros = [1,22,34,46,53]
//               0  1  2  3  4 

// Variable i que se inicializa en 0, condición que en este caso es que i sea menor al tamaño del arreglo. / El incremento de i
// for (let i = 0; i < numeros.length; i++) { 
//     console.log(numeros[i])
// }

// for (let i = 0; i < personas.length; i++) { 
//     console.log(personas[i])
// }

// console.log(personas[0])
// console.log(personas[1])
// console.log(personas[2])



// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log("Nombre: " + personas[0].nombre)
// console.log("Edad: " + personas[0].edad)
// console.log("Profesion: " + personas[0].profesion)
// console.log("Tiene Mascota? " + personas[0].mascota)
// console.log("--------------------------" )
// console.log("Nombre: " + personas[1].nombre)
// console.log("Edad: " + personas[0].edad)
// console.log("Profesion: " + personas[0].profesion)
// console.log("Tiene Mascota? " + personas[0].mascota)
// console.log("--------------------------" )

//  for (let i = 0; i < personas.length; i++) { 
//          let auxiliar = personas[i]
//         console.log("Nombre: " + auxiliar.nombre)
//          console.log("Edad: " + auxiliar.edad)
//          console.log("Profesion: " + auxiliar.profesion)
//          console.log("Tiene Mascota? " + auxiliar.mascota)
//          console.log("--------------------------" )
//  }

 // Mostrar personas menores a 30 años.

// for (let i = 0; i < personas.length; i++) {
//    const auxiliar = personas[i]
//    if (auxiliar.edad < 30) {
//     console.log("Las siguientes personas tienen menos de 30 años " + auxiliar.nombre)
//     console.log("-----------")
//    }
//    else {
//     console.log("Las siguientes personas tienen mas de 30 años " + auxiliar.nombre)
//    }
// }

// El bucle While a diferencia del for no necesitamos saber cuantas veces va a iterar.
//sintaxis :
//while(condición) {
    // Codigo a repetir en cada iteración
    // Asegurense de que en algún momento la condición cambie para no generar bucles infinitos
//}

// const persona = {
//     nombre: "Benja",
//     edad: 27,
//     profesión: 'Programador',
//     mascota: "true"
// }

// Suma la edad de Benja hasta 40.

// while (persona.edad < 40) {
//     console.log(`${persona.nombre}  tiene:  ${persona.edad}`)
    
// }
//La contraseña queremos que sea pepe
// let contrasenia = prompt("Ingrese Contraseñá")

// while (contrasenia != "pepe") {
//      contrasenia = prompt("Ingrese Contraseñá nuevamente")
// }

// Do while 

// Sintaxis:
//do {
    // Codigo a repetir en cada iteración
    // Asegurense que la condición cambie en algún momento para evitar el bucle infinito
//} while (condición)


// let contrasenia = "pepe"

// Comienza bucle
// do {
//     contrasenia = prompt("Ingrese Contraseña")

// } while (contrasenia != "pepe");  // Mientras la contraseña no sea pepe hago lo del do.
   
// termina bucle

// console.log("Contraseña correcta")

// For of
// Nos permite recorrer elementos de un iterable.
// A diferencia del for el bucle for of no necesita un indice sino que directamente recorre los elementos.
//Sintaxis:
//for (variable of iterable) {
    // Codio a repetir en cada iteración, utiliza esa la variable para acceder al elemento actual del iterable.
//}

// const numeros = [1,2,3,4,5]

// for (let aux of numeros) {
//     console.log(aux)
// }

// for (let mentor of personas) {
//     console.log(mentor)
// }
// for (let perro of personas) {
//     if (perro.edad > 30)
//     console.log(perro)
// }

// let nombre = "Carlos"
// for (let aux of nombre) {
//     console.log(aux)
// }

// console.log(personas)

//For in 
// El bucle For in nos permite recorrer las propiedades de un objeto. Y se utiliza especialmente para objetos y no iterables.

// sintaxis :

// for (variable in objeto) {
//     //Codigo a repetir en cada iteración. (Utilizamos la variable auxiliar para acceder a cada propiedad del objeto.)
// }

// const estudiante = {
//     nombre: "Juan",
//     edad: 20,
//     asignaturas: {
//         matematicas: 90,
//         historia: 85,
//         ingles: 78,
//         ciencias: 95
//     }
// }
// let sumaNotas = 0
// for (let asignatura in estudiante.asignaturas) {
//     sumaNotas += estudiante.asignaturas[asignatura];
//      // sumaNotas = SumaNotas + algo
// }

// console.log("Ëstudiante:" + estudiante.nombre)
// console.log("Las sumas de sus notas es: " + sumaNotas)




