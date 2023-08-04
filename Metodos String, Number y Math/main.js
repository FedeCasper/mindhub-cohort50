// Métodos String

// toLowerCase() Convierte un String a minusculas
// const nombre = prompt("Ingresa tu nombre")

// console.log("Sin toLowerCase" + nombre)
// console.log("Con toLowerCase " + nombre.toLowerCase())

//toUpperCase() Convierte un String a Mayusculas.
// const nombre = "Flor"
// console.log(nombre)
// console.log(nombre.toUpperCase())

// Trim() Quita los espacios en blancos al principio y al final de un String (No elimina los del medio))

// const frase = "     Hola, Soy del Cohort 50      "
// console.log(frase)
// console.log(frase.trim())


// charAt(index) // Devuelve el caracter en la posición dada por index
// const nombre = "Guadalupe"
// console.log(nombre)
// console.log(nombre.charAt(3))

//Slice(indice inicial, indice final) Extrae una parte del string segun el indice inicial yfinal que indiquemos, admite numeros negativos
// No incluye el indice final

// Diferencia con Substring: Slice si admite negativos
// Diferencia 2 con Substring: Si el indice inicial es mayor que el final me devuelve un String vacío

// const nombre = "Guadalupe"
// console.log(nombre)
// console.log(nombre.slice(4,1))

//substring(indice inicial, indice final) 
// Extrae una parte del string segun el indice inicial yfinal que indiquemos, no admite numeros negativos
// No incluye el indice final
// console.log(nombre.substring(5,0))


//replace(viejoSubstring, nuevoSubstring)
// Importa respetar las mayusculas y minusculas

// let string = "Hola, tengo 23 años!"

// console.log(string)
// console.log(string.replace("23", "24"))

// split(separador) 
// Divide un string tomando de referencia el separador y lo convierte en array
// const texto = "Jack,Varela,Romeo,Roma,Roberto"
// console.log(texto)
// console.log(texto.split(","))

//startsWith(substring) // comprueba que un string comienza con x palabra.

// const texto = "Hola, alumna Bella"
// console.log(texto.startsWith("Bella"))

// pepe12
//          pepE12
// function pedirNombreUsuario() {
//     const nombreUsuario = prompt("Por favor, ingresa tu nombre de usuario")
//     console.log("El usuario ingresó:" + nombreUsuario)

//     const nombreUsuarioArreglado = nombreUsuario.toLowerCase().trim()

//     console.log("El usuario arreglado es:" + nombreUsuarioArreglado)

//     if (nombreUsuarioArreglado == "benja13") {
//         console.log("Has Iniciado Sesión")
//     }
//     else {
//         console.log("El nombre de usuario no coincide")
//     }
// }

// pedirNombreUsuario()


//Metodos Number 
//  parseInt(String) // Convierte el string a un numero entero y si tiene decimal no lo incluye ni redondea
// const num = prompt("Ingresa el número") // Acá el usuario introduce el número y nos trae ese número como String
// const numParseado = (parseInt(num)) // Creamos una variable para guardarnos el numero parseado. Así lo tenemos como numero

// if (numParseado === 33) {
//     console.log("Escribiste correctamente el número")
// }
// else {
//     console.log("No es correcto")
// }

// parseFloat(String) // Convierte el String a un numero y mantiene sus decimales.
// const num = prompt("Ingresa un número")
// console.log(num)
// const numParse = parseInt(num)
// const numFloat = parseFloat(num) 
// console.log(numFloat)
// console.log(numParse)

// isNaN(valor)
// SI NO es un NÚMERO devuelve TRUE porque comprueba que no sea un número

// // NaN = No es un número
// const numero = "Hola"
// console.log(isNaN(numero)) // Corrobora si es o no un numero

// Métodos MATH

//Math.round(valor)
// Nos devuelve el valor del numero redondeando al mas cercano. Si el decimal es mayor o igual  a 5 sube un número, si es menor, se conserva.
// const num = 3.1246
// console.log(Math.round(num))

// Math.random() Devuelve un numero entre 0 (inclusive) y 1 (excluye)

// const numeroAleatorio = Math.random()
// console.log(numeroAleatorio)

// const numeroAleatorio100 = numeroAleatorio * 100
// console.log(Math.round(numeroAleatorio100))


// Math.sqrt() 
// Devuelve la raíz cuadrada de un número
//  const numero = 4
//  console.log(Math.sqrt(numero))






