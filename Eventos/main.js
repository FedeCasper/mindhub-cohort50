const form = document.getElementById('form-js')
const contendor = document.getElementById('contenedor-principal')
const select = document.getElementById('tecnologias-js')
const input = document.getElementById('nombre-js')
/* 
const tecnologias = mentores.map( mentor => mentor.tecnologias ).flat()
// new Set me crea un set y le paso como argumento el array
const set = new Set( tecnologias )
//Array.from me crea un array y le paso como argumento el set
const array = Array.from( set )
console.log( set ) 
console.log(array)
*/

const tecnologias = Array.from( new Set(  mentores.map( mentor => mentor.tecnologias ).flat() ) )
console.log( tecnologias )


const templateOptions = tecnologias.reduce( (template, tecnologia) => template + `<option value="${tecnologia}">${tecnologia}</option>`, "" )

/* 
    reduce
    let acumulador = ""
    fnReduce( acumulador, tecnologias[0] ) -> acumulador = `<option value="react">React</option>`
    fnReduce( acumulador, tecnologias[1] ) -> acumulador = `<option value="react">React</option> <option value="react">React</option>`
    ....

    return acumulador
*/


select.innerHTML = templateOptions



form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const filtradoTecnologias = filtrarPorTecnologia( mentores, select.value )
    const filtradoPorNombre = filtrarPorNombre( filtradoTecnologias, input.value )
    console.log( filtradoPorNombre )
})

console.log( mentores )

function filtrarPorTecnologia(listaMentores, tecnologiaSeleccionada){
    const filtrado = listaMentores.filter( mentor => mentor.tecnologias.includes( tecnologiaSeleccionada ) )
    return filtrado
}

function filtrarPorNombre( listaMentores, nombre ){
    const filtrado = listaMentores.filter( mentor => mentor.nombre.toLowerCase().includes( nombre.toLowerCase() ) )
    return filtrado
}
