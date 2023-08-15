export function crearTemplate({displayName,fullPortrait,description}){
    return `<div class="card col-3">
    <img class="card-img-top" src="${fullPortrait}" alt="Title">
    <div class="card-body">
      <h4 class="card-title">${displayName}</h4>
      <p class="card-text">${description}</p>
    </div>
  </div>`
} 


export function renderCards( list, conteiner ){
    let template = ""
    for (const item of list) {
        template += crearTemplate( item )
    }
    conteiner.innerHTML = template
}
