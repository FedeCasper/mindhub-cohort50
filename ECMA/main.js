/* Ternarios 

function par(){
    return 'par'
}

function impar(){
    return 'impar'
}

function esPar( numero ){
    return numero % 2 === 0 
        ? par() 
        : impar()
}

console.log( esPar( 10 ) )
console.log( esPar( 15 ) ) */



// Destructuring [] {}

const alumnos = [ "Manuel", "Aysen", "Bella", "Benja" ]

/* const primerNombre = alumnos[0]
const segundoNombre = alumnos[1] */
/* {
    const [ primerNombre, segundoNombre ] = alumnos
    console.log( primerNombre )
    console.log( segundoNombre )
} */

const mentor = {
    nombre : "Fede",
    edad : 39,
    tomaMate : true,
    poderOculto : "super tostadas", 
    mascota : {
        nombre : "Barto",
        edad : 3
    }

}

/* 
const poderOculto = mentor.poderOculto
const edad = mentor.edad */

const { poderOculto:poderFede, edad, tomaMate } = mentor

{  
    const poderFede = mentor.poderOculto
}

/* function crearSaludo( { nombre, edad }, bool  ){
    console.log(`Hola soy ${nombre} y tengo ${edad} años`)
} 

crearSaludo( mentor, true ) */


const numeros = [ 1, 2, 3, 4, 5, 6, 5, 5, 5]

/* const numerosSinPetidos = new Set( numeros )

console.log( [ ...numerosSinPetidos ] )

const copiaMentor =  { ...mentor  }

console.log( Math.min( ...numeros ) ) */

/* 
function sumar( ){
    console.log( arguments )
} 

sumar(  1, 2, 3, 4, 5, 6, 5, 5, 5000 ) */


/* const sumar = (...pepito) => pepito.reduce( (acc, act) => acc + act, 0 )

const resultadoSuma = sumar(10,20,30,20,30)
console.log( resultadoSuma ) */

import { crearTemplate, renderCards } from './module/funciones.js'

const $contendor = document.getElementById('contenedor-cards')

const url = "https://valorant-api.com/v1/agents"

fetch( url )
    .then( (response) => response.json() )
    .then( ({data}) => {
        const filtrado = data.filter( item => item.isPlayableCharacter )
        renderCards( filtrado, $contendor )
    } )
    .catch(err => console.log(err))



