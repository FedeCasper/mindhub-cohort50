let mentoresJS = ["Nico", "Lucre", "Fede"]
let mentoresWeb = ["Cami", "Flor", "Sil"]
let mentoresJava = ["Guille", "Facu", "Martin", "Elias", "Seba"]
let numeros = [9,5,4,6,3,2,1]
let numerosDosCifras = [20, 53, 54, 16, 75, 95, 15]
let numerosTresCifras = [20, 10, 120, 56, 741, 62, 30, 301]

// Métodos de Array

// push
// mentoresJS.push("Flor")

// pop
// let nombreGuardado = mentoresJS.pop() // Quita el último elemento del array
// let ultimoElemento = mentoresJava.pop()

// shift
// let nombreGuardado2 = mentoresWeb.shift() // Quita el primer elemento del array

// unshift
// console.log(mentoresJS) // Agrega un elemento al principio del array
// mentoresJS.unshift("Sil")

// indexof
// console.log(mentoresJava); // Devuelve la posición en el array de 1 elemento
// console.log(mentoresJava.indexOf("Elias")); 
// console.log(mentoresJava.indexOf("Flor")); 

// includes
// console.log(mentoresJava) // Retorna un booleano que dice si incluye o no un elemento
// console.log(mentoresJava.includes("Fede"));

// toString
// console.log(mentoresJS); // Convierte un array a u tipo de dato string
// console.log(mentoresJS.toString()); 
// console.log(numerosDosCifras);
// console.log(numerosDosCifras.toString());

// concat
// console.log(mentoresJS);
// console.log(mentoresWeb);
// console.log(mentoresJava);
// Une 2 o más arrays en un nuevo array
// console.log(mentoresJS.concat(mentoresWeb)); 
// const mentoresMindHub = mentoresJS.concat(mentoresWeb, mentoresJava)
// console.log(mentoresJS);

// join
// console.log(mentoresJava); // Devuelve 1 String formado por los elementos de uun array y separados por lo que queramos
// console.log(mentoresJava.join(" & "));

// revese
// console.log(mentoresJava); // Da vuelta el array y modifica el array original
// console.log(mentoresJava.reverse());

// slice devuelve 1 copia de una parte del array 
// console.log(mentoresJava);
// let porcionDeArray = mentoresJava.slice(1,3) 
// 1er argumento es donde empieza y lo incluye - por defecto comienza desde 0
// 2do arg es donde termna y no lo incluye - por defecto toma length / el final del array
// console.log(porcionDeArray);

// sort importante ordena pero modifica el array original

// mentoresJava.sort()
// console.log(mentoresJava);
// console.log(numeros.sort());
// console.log(numerosDosCifras.sort());
// console.log(numerosTresCifras.sort()); // esto no funcionó
// console.log( numerosTresCifras.sort( (a,b) => a-b) ); // esto no funcionó

// splice recibir hasta 3 parametros
// console.log(mentoresJS);
// mentoresJS.splice(1, 2, "NAZA", "SOFI", "SANTI")
// console.log(mentoresJS);

// Métodos de Objetos
let persona = {
     nombre: "Marcos",
     nacionalidad: "Uruguayo",
     esMayorDeEdad: true,
     hijos: false,
     edad: 40,
     mascotas: ["Tino", "Kity"],
     hobbies: {
          deporte: "Fútbol",
          videoJuegos: "Doom",
          arte: "Fotografía"
     }
} 

const mentor1 = {
     nombre: "Sil",
     especialidad: "Tester"
}

const mentor2 = {
     nombre: "Flor",
     edad: 23
}


// keys devuelve un array con las propiedadesd el objeto 
// console.log( Object.keys(persona) ); 

// assign funde 2 objetos en 1 modifica el objeto original
// 1° arg es el objetivo donde vamos a fundir
// 2° arg es la fuente de donde van a venir las propiedades
// console.log( Object.assign( mentor1, mentor2 ));
// console.log(mentor1); // Se modificó
// console.log(mentor2); // No se modificó

// values devuelve un array con los valores de las propiedadees del objeto 
// console.log( Object.values(persona) );

console.log( Object.keys(mentoresJS) );


