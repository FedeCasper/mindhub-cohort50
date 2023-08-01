// Función nombrada
// Esquema básico de una función: palabra reservada + nombre fn + ( parametros ) + { cuerpo de la fn }
// Declaración de Función 
function saludo (){
     let nombre = prompt("Ingrese un nombre")
     let edad = Number(prompt("Ingrese una edad"))
     console.log(nombre);
     console.log(edad);
     let presentacion = `Hola soy ${nombre} y tengo ${edad} años`
     console.log(presentacion);
}

// Llamado o Ejecución de una Función
saludo()

// Función nombrada
function saludar (){
     console.log("Hola");
}
saludar();


// Expresión de función
// Función Anónima ( no tiene nombre )
let funcion1 = function(){
     console.log("Hola");
}
funcion1();

// Parametros
let numero = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));

// Me lo permite el lenguaje pero NO SE DEBE HACER
// La función debe ingresar datos a través del uso de parámetros
function sumar (){
     console.log(numero + numero2);
}

// Declaración de fn -> Parámetros
function operacionSuma (numero , numero2){
     let edad = numero + numero2;
     console.log(`Soy Fede y mi edad es ${edad}`);
}

// Llamado o ejecución de la fn -> Argumentos
operacionSuma(numero, numero2)
operacionSuma(50, 50)
operacionSuma(numero, numero2)
operacionSuma("10", "20")

// Orden en que se asignan los argumentos a cada parámetro
function operacion (numero1, numero2, numero3){
     console.log( (numero1 + numero2) - numero3 )
}
operacion(40, 50, 1000)

// Return 
function calcularEdadYMostrarNombre (nombre ,fechaNacimiento, fechaActual){
     let edad = fechaActual - fechaNacimiento
     let resultado = ` Soy ${nombre} y tengo ${edad}` 
     return resultado
}

// Guardar en una variable lo que retorna la función
let primerMensaje = calcularEdadYMostrarNombre("Miguel", 1995, 2023)

let mensaje = `${primerMensaje} y vivo en Argentina`
console.log(mensaje);
