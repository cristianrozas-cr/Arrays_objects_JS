import propiedades_alquiler from "./propiedades_alquiler.js";

const cardsIndex = document.querySelector(".alquiler-cards");
let propiedadesAlquilerIndex = "";

for (let index = 0; index < 3; index++) {
    propiedadesAlquilerIndex += `
    <div class="card m-3 col-md-4 mb-4">
        <img src=${propiedades_alquiler[index].src} class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${propiedades_alquiler[index].nombre}</h5>
          <p class="card-text">${propiedades_alquiler[index].descripcion}</p>
          <p>${propiedades_alquiler[index].ubicacion}</p> 
          <p>${propiedades_alquiler[index].habitaciones} habitaciones</p>
          <p>${propiedades_alquiler[index].costo}</p>
          <p>${propiedades_alquiler[index].smoke?"Esta permitido fumar": "No se permite fumar"}</p>
          <p>${propiedades_alquiler[index].pets? "Se permiten mascotas": "No se permiten mascotas"}</p>
        </div>
      </div>
      `
} 
cardsIndex.innerHTML = propiedadesAlquilerIndex;

import propiedades_venta from "./propiedades_venta.js";

const cardsVentaIndex = document.querySelector(".venta-cards");
let propiedadesVentaIndex = "";

for (let index = 0; index < 3; index++) {
    propiedadesVentaIndex += `
    <div class="card m-3 col-md-4 mb-4">
        <img src=${propiedades_venta[index].src} class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${propiedades_venta[index].nombre}</h5>
          <p class="card-text">${propiedades_venta[index].descripcion}</p>
          <p>${propiedades_venta[index].ubicacion}</p> 
          <p>${propiedades_venta[index].habitaciones} habitaciones</p>
          <p>${propiedades_venta[index].costo}</p>
          <p>${propiedades_venta[index].smoke?"Esta permitido fumar": "No se permite fumar"}</p>
          <p>${propiedades_venta[index].pets? "Se permiten mascotas": "No se permiten mascotas"}</p>
        </div>
      </div>
      `
} 
cardsVentaIndex.innerHTML = propiedadesVentaIndex;