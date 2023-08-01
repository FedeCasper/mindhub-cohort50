// Objetos 

// Creando un objeto y guardándolo en una variable
const alumno = {
     // Propiedad - Tipo de dato String
     nombre: "Bella Ivana",
     // Propiedad - Tipo de dato String
     apellido: "Vergara",
     // Propiedad - Tipo de dato booleano
     esArgentina: true,
     // Propiedad - Tipo de dato Numérico
     edad: 22,
     // Propiedad - Tipo de dato Array
     mascota: ["Romeo", "Alana"],
     // Propiedad - Tipo de dato Método (una función dentro de un objeto es un método)
     saludo: function saludar (){
          console.log("Hola!");
     }
}

// Reasignamos un valor a una propiedad
alumno.nombre = "Federico"
// Crear una propiedad dentro del objeto
alumno.estudiaProgramacion = true
alumno.idiomas = ["español"]
// Borrar una propiedad
delete alumno.mascota

console.log(alumno);

// Formas de acceder a una propiedad de una objeto
console.log(alumno['nombre']);
console.log(alumno.nombre);


function nombrarAlumno (nombre, apellido, edad){
     console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad}`);
}

nombrarAlumno( alumno.nombre, alumno.apellido, alumno.edad );


// Arrays
//Array de Strings
let alumnos = ["Juan", "Marcos", "Silvina", "Federico"]

// Como saber el largo de una Array (uso de la propiedad length)
let largoArray = alumno.length
console.log(largoArray);

// Array de objetos
const mentores = [ 
     {
          nombre: "Flor",
          edad: 23
     },
     {
          nombre: "Sil",
          edad: 24
     },
     {
          nombre: "Fede",
          edad: 39
     }
]

// Como acceder a los elementos del array usando []
// Las posiciones de los array empiezan desde el 0
// [1] accede al segundo elemento de un array
console.log(mentores[1]);


// Creando una propiedad en uno de los objetos del array
mentores[2].mascotas = ["Barto", "Indi", "Buda", "Odin"]
console.log(mentores[2].mascotas);


