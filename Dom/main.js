/* 
// me trae la referencia a un elemento que coincida con el id, de no existir me trae un null
const h1 = document.getElementById( 'titulo' )


// de encontrar una etiqueta p nos trae la referencia y si no un null
const primerParrafo = document.querySelector('p')
console.log( primerParrafo )


// te da un nodelist con los elementos que coinciden con el selector, o un nodelist vacio
const parrafos = document.querySelectorAll('article')
console.log( parrafos )
 */






/* 
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7tvLEqNsaZUiAXzOJK9Z1xLnzD31mHD2Kde45W5YZI_mVCjEP3GKItIkr2VNcE_EDtM&usqp=CAU
*/

/* const michi = {
    nombre : 'Peludo',
    color : 'Gris',
    imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7tvLEqNsaZUiAXzOJK9Z1xLnzD31mHD2Kde45W5YZI_mVCjEP3GKItIkr2VNcE_EDtM&usqp=CAU'
}

const tarjeta = document.getElementById( 'tarjeta' )
const img = tarjeta.children[0]
const nombre = document.querySelector( '.card-body .card-title ')
const color = document.querySelector( '.card-body p ')
nombre.textContent = michi.nombre
color.textContent = michi.color
img.setAttribute( "src", michi.imagen )
 */

/* const contenedorPrincipal = document.getElementById('contenedor-principal') */

/* function crearTarjeta( mentor ){
    const div = document.createElement( 'div' )

    div.classList.add( 'card' )
    div.classList.add( 'border-primary' )
    div.classList.add( 'col-4' )

    const img = document.createElement('img')
    img.classList.add('card-img-top')
    img.setAttribute( 'src', mentor.imagen )

    const divInterior = document.createElement('div')
    divInterior.className = 'card-body'

    const h4 = document.createElement('h4')
    h4.className = 'card-title'
    h4.textContent = mentor.nombre

    const p = document.createElement('p')
    p.className = 'card-text text-algo'
    p.textContent = mentor.modulo

    divInterior.append( h4, p )

    div.append( img, divInterior )
    
    return div
} 



function mostrarLasTarjetas( listaMentores, contenedor ){
    for (const mentor of listaMentores) {
        const nodo = crearTarjeta( mentor )
        contenedor.appendChild( nodo )
    }
} 
mostrarLasTarjetas( mentoresFrontend, contenedorPrincipal ) */

/* 
 <div class="card border-primary">
         <img class="card-img-top" src="holder.js/100px180/" alt="Title">
         <div class="card-body">
           <h4 class="card-title">Title</h4>
           <p class="card-text">Text</p>
         </div>
       </div>
*/

// Sin createElement

const contenedorPrincipal = document.getElementById('contenedor-principal')

function filtrarMentores( mentores ){
    const mentoresFiltrados = []
    for (const mentor of mentores) {
        if( mentor.modulo == "WEB" ){
            mentoresFiltrados.push( mentor )
        }
    }
    return mentoresFiltrados
} 
const mentoresWeb = filtrarMentores( mentoresFrontend )

console.log( mentoresWeb )

function crearTarjeta( mentor ){
    return `<div class="card border-primary col-3">
    <img class="card-img-top" src="${mentor.imagen}" alt="Title">
    <div class="card-body">
      <h4 class="card-title">${mentor.nombre}</h4>
      <p class="card-text text-algo">${mentor.modulo}</p>
    </div>
  </div>`
}


function mostrarLasTarjetas( listaDeMentores, contenedor ){
    let template = ''
    for (const mentor of listaDeMentores) {
        const aux = crearTarjeta( mentor )
        template += aux
    }
    contenedor.innerHTML = template
}
mostrarLasTarjetas( mentoresWeb, contenedorPrincipal )




