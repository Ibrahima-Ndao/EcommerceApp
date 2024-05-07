// import { products } from "./database";
const products = [
  {
    nom: "Mackbook pro",
    image: "img/image1.jpg",
    prix: 300000,
    stock: 12,
  },
  {
    nom: "Lenovo",
    image: "img/image2.jpg",
    prix: 350000,
    stock: 6,
  },
  {
    nom: "HP-Litebook",
    image: "img/image7.jpg",
    prix: 250000,
    stock: 42,
  },
  {
    nom: "Dell pro",
    image: "img/image3.jpg",
    prix: 100000,
    stock: 25,
  },
  {
    nom: "Mackbook pro",
    image: "img/image4.jpg",
    prix: 500000,
    stock: 112,
  },
  {
    nom: "Mackbook pro",
    image: "img/image5.jpg",
    prix: 300000,
    stock: 125,
  },
  {
    nom: "Mackbook pro",
    image: "img/image6.jpg",
    prix: 40000,
    stock: 14,
  },
];
const card = document.querySelector("#cards");
function productsList() {
  for (const product of products) {
    card.innerHTML += `
    <div class="col-sm-4 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
        <img src="${product.image}" class="card-img-top" alt="${product.nom}">
          <h3 class="card-title text-center">${product.nom.toLocaleUpperCase()}</h3>
          <h5 class="card-text text-primary text-center">${
            product.prix
          } FCFA</h5>
          <h5 class="card-text"><span >Stock: </span> ${product.stock}</h5>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary" type="button" onclick="addBasket()">Ajouter au panier</button>
          </div>
        </div>
      </div>
    `;
  }

  // Fonction pour afficher ou cacher le panier
  function togglePanier() {
    var panier = document.getElementById("panier");
    if (panier.style.display === "none") {
      panier.style.display = "block";
    } else {
      panier.style.display = "none";
    }
  }
  function addBasket() {
    card.innerHTML = "<h1>je change</h1>";
  }
}
