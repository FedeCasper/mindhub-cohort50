// Función nombrada - palabra reservada + nombre fn + ( parametros ) + { cuerpo de la fn }
// Declaración de Función 
// function saludo (){
//      let nombre = prompt("Ingrese un nombre")
//      let edad = Number(prompt("Ingrese una edad"))
//      console.log(nombre);
//      console.log(edad);
//      let presentacion = `Hola soy ${nombre} y tengo ${edad} años`
//      console.log(presentacion);
// }

// Llamado o Ejecución de una Función
// saludo()
// saludo()
// saludo()


// Función nombrada
// function saludar (){
//      console.log("Hola");
// }
// saludar();


// Expresión de función - Función Anónima 
// let funcion1 = function(){
//      console.log("Hola");
// }
// funcion1();

// Parametros
// let numero = Number(prompt("Ingrese un número"));
// let numero2 = Number(prompt("Ingrese otro número"));

// Me lo permite el lenguaje pero NO SE DEBE HACER
// function sumar (){
//      console.log(numero + numero2);
// }

// Declaración de fn -> Parámetros
// function operacionSuma (numero , numero2){
//      let edad = numero + numero2;
//      console.log(`Soy Fede y mi edad es ${edad}`);
// }

// Llamado o ejecución de la fn -> Argumentos
// operacionSuma(numero, numero2)
// operacionSuma(50, 50)
// operacionSuma(numero, numero2)
// operacionSuma("10", "20")

// function operacion (numero1, numero2, numero3){
//      console.log( (numero1 + numero2) - numero3 )
// }
// operacion(40, 50, 1000)

// Return 
// function calcularEdadYMostrarNombre (nombre ,fechaNacimiento, fechaActual){
//      let edad = fechaActual - fechaNacimiento
//      let resultado = ` Soy ${nombre} y tengo ${edad}` 
//      return resultado
// }

// let primerMensaje = calcularEdadYMostrarNombre("Miguel", 1995, 2023)

// let mensaje = `${primerMensaje} y vivo en Argentina`
// console.log(mensaje);

// function saludarPorConsola (){
//      console.log("Hola");
// }

// console.log( saludarPorConsola() );

// function saludar2 (){
//      let mesaje = "Hola como les va?"
//      return mesaje
// }

// console.log( saludar2() );

// let numero = 5
// let numero2 = 10

// function sumar (){
//      console.log(numero + numero2);
//      let numero3 = 15
// }

// console.log(numero3);

// sumar()

// Objetos 

// const alumno = {
//      nombre: "Bella Ivana",
//      apellido: "Vergara",
//      esArgentina: true,
//      edad: 22,
//      mascota: ["Romeo", "Alana"],
//      saludo: function saludar (){
//           console.log("Hola!");
//      }
// }

// Reasignamos un valor a una propiedad
// alumno.nombre = "Federico"
// Crear una propiedad dentro del objeto
// alumno.estudiaProgramacion = true
// alumno.idiomas = ["español"]
// Borrar una propiedad
// delete alumno.mascota

// console.log(alumno);

// console.log(alumno['nombre']);
// console.log(alumno.nombre);


// console.log(alumno);
// console.log(alumno.nombre);
// console.log(alumno.edad);

// function nombrarAlumno (nombre, apellido, edad){
//      console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad}`);
// }

// nombrarAlumno( alumno.nombre, alumno.apellido, alumno.edad );


// Arrays
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

console.log(mentores);
mentores[2].mascotas = ["Barto", "Indi", "Buda", "Odin"]
console.log(mentores[2].mascotas);

