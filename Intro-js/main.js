// tipos de datos

// String - " ", ' ', ` `
/* console.log( "Nicolas Cirulli" )
console.log( 'Nicolas Cirulli' )
console.log( `Nicolas Cirulli` )
console.log( "El mentor dijo: \"Hagan preguntas\"" ) 
console.log( "I'm Nicolas" ) */

// Number
/* console.log( "5" )
console.log( 5 )
console.log( 5.5 )
console.log( -5 )
console.log( NaN ) */

// Boolean
/* console.log( true )
console.log( false ) */

// Undefined
/* console.log( undefined ) */

// Null
/* console.log( null ) */

// primitivos - String, Number, Boolean, Undefined, Null ( primitivo especial )

// Variables

// 3 formas de crear variables, var, let, const

/* VAR: Se puede reasignar y redeclarar */
var nombre 
nombre = "Nicolás"


console.log( nombre )

/* LET: Se puede reasignar pero no se puede redeclarar */
let segundoNombre = "Catrie"

segundoNombre = segundoNombre + "l"

console.log( segundoNombre )

/* CONST: En el momento de la declaración, se le asigna un dato y no puede cambiar */
const apellido = "Cirulli"
console.log( apellido )

let nombreCompleto = nombre + " " + segundoNombre + ' ' + apellido

let nombreCompletoDos = `${ nombre } ${ segundoNombre } ${ apellido }`

/*  
con salto de linea 
nombreCompleto = nombre + "\n" + segundoNombre + "\n" + apellido 
*/

console.log( nombreCompleto )
console.log( nombreCompletoDos )

// operadores

/* Aritmeticos */

// +, -, *, /, **, %
/* 
let suma = 5 + 5
console.log( suma )

let resta = 20 - 10
console.log( resta )

let producto = suma * resta
console.log( producto )

let division = producto / resta
console.log( division )

let resto = producto % 2 
console.log( resto )

let exponente = 4 ** 3
console.log( exponente ) 
*/

/* Comparacion */
/* < <= > >= == === != !== */

/* 
console.log( 5 < 10 )
console.log( 5 <= 5 )
console.log( 10 > 5 )
console.log( 10 >= 11 )
console.log( "A" < "B" )
console.log( 5 == "5" )
console.log( 5 === "5" )
console.log( 5 != "5" )
console.log( 5 !== "5" ) 
*/

/* Logicos */

// &&(AND) ||(OR) !(NOT)

console.log( "5 < 10 && 3 > 10 :", 5 < 10 && 3 > 10 )
console.log( "5 < 10 || 3 > 10 :", 3 > 10 || 5 < 10 )
console.log( !false   )

// Objetos

const celular = { 
    marca : "nokia",
    peso : 2000, 
    año: 1985, 
    existe:false
}

console.log( celular.marca + nombre )

const mentor = {
    nombre : 'Nicolás',
    segundo_nombre : segundoNombre,
    celular : celular.marca,
    edad : 29,
    mascotas : [ {nombre:'Kugi', tipo: 'gato'}, {nombre:'Nila', tipo: 'gato'} ]
}

console.log( mentor )

console.log( mentor.mascotas[0].nombre )

// Array
const alumnos = [ "Miguel", "Abel", "Ariel", "Aysen" ]

/* console.log( alumnos )
console.log( alumnos[0] )
console.log( "Cuantos elementos tiene el array alumnos:", alumnos.length ) */

const nombreIngresado = Number( prompt("Ingrese su nombre") )
alert(`Hola ${nombreIngresado}`)
console.log( nombreIngresado )