import { products } from "./database.js";

const card = document.querySelector("#cards");
const data = products;

for (const product of data) {
  card.innerHTML += `
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
      <img src="${product.image}" class="card-img-top" alt="${product.nom}">
        <h3 class="card-title text-center">${product.nom.toLocaleUpperCase()}</h3>
        <h5 class="card-text text-primary text-center">${product.prix} FCFA</h5>
        <h5 class="card-text"><span >Stock: </span> ${product.stock}</h5>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary" type="button">Ajouter au panier</button>
        </div>
      </div>
    </div>
  `;
}
