//Función Nombrada
// function suma (num1, num2){
//      console.log("Funcion Nombrada: ", num1 + num2);
// }
// suma(2,5)

// Función Anónima
// let fnSuma = function (num1, num2){
//      console.log("Funcion Anónima: ", num1 + num2);
// }
// fnSuma(10,10)

// Funciones Flechas
// Si tiene una sola línea de instrucción: sacar las {} y sacar return
// let fnFlecha = (num1, num2) => console.log("Funcion Flecha: ", num1 + num2);

// Si tiene un solo parámetro puedo sacar los paréntesis
// let fnSumar2 = numero1 => numero1 + 50

// Si tiene dos líneas de instrucciones debe llevar {}
// let fnSumar3 = numero1 => {
//      let resultado = numero1 + 50
//      return resultado
// }


// Metodos de array: recibían un tipo de dato primitivo (string, number, boolean)

// Funciones de orden superior: Reciben una fn de argumento o retornan una fn

// forEach - No retorna nada
// let array = ["Fede", "Sil", "Cami", "Flor"]

// const fnParaForEach = (elementoActual, indice, arrayOriginal) => {
//      console.log(elementoActual);
//      console.log(indice);
//      console.log(arrayOriginal);
// }

// array.forEach( fnParaForEach )

// let numeros = [1,2,3,4,5]
// const fnParaForEach2 = (elementoActual, indice) => console.log("Elemento Actual: ", elementoActual, "Indice: ", indice);
// numeros.forEach( fnParaForEach2 )


// let numeros = ["Fede","Cami", "Flor", "Sil"]
// const fnParaForEach3 = (elementoActual, indice) => console.log(indice);
// numeros.forEach( fnParaForEach3 )

// console.log(mentoresFrontend);
// const fnParaForEach4 = elementoActual => console.log(elementoActual.nombre);
// mentoresFrontend.forEach( fnParaForEach4 )

// for(let objeto of mentoresFrontend){
//      console.log(objeto.nombre);
// }

// mentoresFrontend.forEach( elementoActual => console.log(elementoActual.edad) )

/*
las funciones de orden superior pasan 3 argumentos
1° vuelta - elmento actual, indice del elemento, array
1° vuelta - "Fede", 0, ["Fede", "Sil", "Cami", "Flor"]
2° vuelta - "Sil", 1, ["Fede", "Sil", "Cami", "Flor"]
3° vuelta - "Cami", 2, ["Fede", "Sil", "Cami", "Flor"]
4° vuelta - "Flor", 3, ["Fede", "Sil", "Cami", "Flor"]
*/

// 2 Map - retorna un array con la misma cantidad de elementos que el original

// Si no encuentra nada según lo que le pedimos, nos devuelve UNDEFINED
// const arrayNombre = mentoresFrontend.map( elementoActual => elementoActual.edad )

// Creo una propiedad nueva en el objeto del array
// const arrayConNuevaPropiedades = mentoresFrontend.map( elementoActual => {
//      elementoActual.empresa = "MindHub"
//      return elementoActual
// })

// console.log(arrayConNuevaPropiedades);

// const arrayNuevoObjeto = mentoresFrontend.map( objeto => {
//      return {
//           nombre: objeto.nombre,
//           edad: objeto.edad,
//           empresa: "Mindhub"
//      };
// } )

// console.log(arrayNuevoObjeto);

// Filter - nos devuelve un nuevo array con los elementos que cumplan con la condición 

// const mentoresMayoresDeEdad = mentoresFrontend.filter( elementoActual => elementoActual.edad > 18 )
// console.log(mentoresMayoresDeEdad);

// const arrayMentoresJS = mentoresFrontend.filter( elementoActual => elementoActual.modulo === "JS")
// console.log(arrayMentoresJS);

// console.log(data);

// const arrayPeliculasMonstruos = data.filter( objetoPelicula => objetoPelicula.gender === "monsters" )
// console.log(arrayPeliculasMonstruos); 

// console.log(mentoresFrontend);
// const nuevoArray = mentoresFrontend.filter( objetoMentor => objetoMentor.nombre.startsWith("F") ) 
// console.log(nuevoArray);

// Find retornar el primer elemento que cumple con un true 
// let objetoSil = mentoresFrontend.find( objetoMentor => objetoMentor.nombre === "Sil" )
// console.log(objetoSil);

// let objetoFlor = mentoresFrontend.find( objetoMentor => objetoMentor.nombre.startsWith("F") )
// console.log(objetoFlor);

// Reduce
// let array = [1,2,3,4]

// reduce recibe 4 parámetros - reduce retorna accumulador
// array.reduce( (accumulador, elementoActual, indice, array) => {} )

// let fnReduce =  (acc, elemActual, indice, array) => {
//      return acc + elemActual
// }

// Reduce recibe una fn como argumento y además PUEDE recibir un valor inicial para el accumulador
// let arrayReducido = array.reduce( fnReduce, 0 )
// console.log(arrayReducido);

/*
acumulador = fnReduce( 0 , 1, 0, [1,2,3,4] ) -> 1 
acumulador = fnReduce( 1 , 2, 1, [1,2,3,4] ) -> 3 
acumulador = fnReduce( 3 , 3, 2, [1,2,3,4] ) -> 6 
acumulador = fnReduce( 6 , 4, 3, [1,2,3,4] ) -> 10 
acumulador = 10
*/

// Hago lo mismo que reduce con for of
// let aux = 0
// for(let numero of array){
//      aux += numero
//      console.log(aux);
// }
// console.log(aux);

let array = ["Fede", "Sil", "Cami", "Flor"]

// Si el acumulador no tiene un valor inicial toma el primer elemento del array como valor
// let arrayReducido =  array.reduce( (acc, elementoActual) => { 
//      return `${acc} ${elementoActual}`
// } , "Nombre mentores ")

// console.log(arrayReducido);

/* 
1° - Nombre mentores Fede
2° - Nombre mentores Fede Sil
3° - Nombre mentores Fede Sil Cami
4° - Nombre mentores Fede Sil Cami Flor
*/

// Sort - sort modifica el array original
// let numero = [4,2,3,1,9,7,5,6]

// let numeroDeTresCifras = [101, 302, 1015, 800, 600, 200]

// numero.sort()
// array.sort()
// numeroDeTresCifras.sort()

// console.log(numero);
// console.log(array);


// numeroDeTresCifras.sort( (a,b) => b-a )
// console.log(numeroDeTresCifras);

// Cuando sort utiliza la fn espera recibir numero+ , numero- o un 0, en base a cada uno tiene un criterio de ordenamiento
// numeroDeTresCifras.sort( (a,b) => {
//      if(a < b){
//           return -1
//      }
//      if(b < a){
//           return 1
//      }
//      return 0
// })


// mentoresFrontend.sort( (a,b) =>  a.edad - b.edad )
// console.log(mentoresFrontend);

