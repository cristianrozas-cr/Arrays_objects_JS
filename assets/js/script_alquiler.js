 // importar los arreglos acá

import propiedades_alquiler from "./propiedades_alquiler.js";

const cardsContainer = document.querySelector(".cards");
let allCards = "";

for (const propiedad of propiedades_alquiler) {
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



















 
 //Ejemplo del objeto
/* <div class="card">
<img
  src="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
  class="card-img-top"
  alt="Imagen del departamento"
/>
<div class="card-body">
  <h5 class="card-title">
    Apartamento de lujo en zona exclusiva
  </h5>
  <p class="card-text">
    Este apartamento de lujo está ubicado en una exclusiva zona
    residencial
  </p>
  <p>
    <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
    Prestige Suburb, CA 45678
  </p>
  <p>
    <i class="fas fa-bed"></i> 4 Habitaciones |
    <i class="fas fa-bath"></i> 4 Baños
  </p>
  <p><i class="fas fa-dollar-sign"></i> 5.000</p>
  <p class="text-danger">
    <i class="fas fa-smoking-ban"></i> No se permite fumar
  </p>
  <p class="text-danger">
    <i class="fa-solid fa-ban"></i> No se permiten mascotas
  </p>
</div>
</div> */