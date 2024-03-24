import propiedades_venta from "./propiedades_venta.js";

const cardsContainer = document.querySelector(".cards");
let allCards = "";

for (const propiedad of propiedades_venta) {
    allCards += `
    <div class="card m-3 col-md-4 mb-4">
        <img src=${propiedad.src} class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p>${propiedad.ubicacion}</p> 
          <p>${propiedad.habitaciones} habitaciones</p>
          <p>${propiedad.costo}</p>
          <p>${propiedad.smoke?"Esta permitido fumar": "No se permite fumar"}</p>
          <p>${propiedad.pets? "Se permiten mascotas": "No se permiten mascotas"}</p>
        </div>
      </div>
`
}

cardsContainer.innerHTML = allCards;