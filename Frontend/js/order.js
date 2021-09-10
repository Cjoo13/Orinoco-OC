import {url} from '../js/main.js';
export {callOneTeddy, ajoutPanier};

let params = new URL(document.location).searchParams;
let id = params.get("id");

function callOneTeddy() {
    fetch(`http://localhost:3000/api/teddies/${id}`)
        .then(response => response.json())

        .then(getOneTeddy => {
            const oneTeddy = getOneTeddy
            let pageOrder = document.getElementById("orderConteneur");

            let orderArticle = document.createElement("article");
            orderArticle.setAttribute("class", "order__img");
            pageOrder.appendChild(orderArticle);

            let orderFigure = document.createElement("figure");
            orderFigure.setAttribute("class", "order__left");
            orderArticle.appendChild(orderFigure);

            let orderImg = document.createElement("img");
            orderImg.setAttribute("src", oneTeddy.imageUrl);
            orderFigure.appendChild(orderImg);

            let orderAside = document.createElement("aside");
            orderAside.setAttribute("class", "produit");
            pageOrder.appendChild(orderAside);

            let orderTexte = document.createElement("div");
            orderTexte.setAttribute("class", "produit__texte");
            orderAside.appendChild(orderTexte);

            let orderTitle = document.createElement("h2");
            orderTitle.setAttribute("class", "produit__title");
            orderTexte.appendChild(orderTitle);
            orderTitle.textContent = oneTeddy.name;

            let orderDescription = document.createElement("p");
            orderDescription.setAttribute("class", "produit__description");
            orderTexte.appendChild(orderDescription);
            orderDescription.textContent = oneTeddy.description;

            let orderQuantité = document.createElement("div");
            orderQuantité.setAttribute("class", "produit__quantité");
            orderAside.appendChild(orderQuantité);

            let orderQuantP = document.createElement("label");
            orderQuantité.appendChild(orderQuantP);
            orderQuantP.textContent = "Quantité :";

            let produitQuantité = document.createElement("div");
            produitQuantité.setAttribute("class", "produit__decompte");
            orderQuantité.appendChild(produitQuantité);

            let teddyQuantité = document.createElement("input");
            teddyQuantité.setAttribute("id", "teddyNum");
            teddyQuantité.setAttribute("value", 1);
            produitQuantité.appendChild(teddyQuantité);

            let divCouleur = document.createElement("div");
            divCouleur.setAttribute("class", "produit__couleur");
            orderAside.appendChild(divCouleur);

            let titreCouleur = document.createElement("label");
            titreCouleur.setAttribute("for", "ours");
            divCouleur.appendChild(titreCouleur);
            titreCouleur.textContent = "Couleurs :";

            let choixCouleur = document.createElement("select");
            choixCouleur.setAttribute("id", "ours_quanti");
            choixCouleur.setAttribute("name", "ours");
            divCouleur.appendChild(choixCouleur);
            for (let i = 0; i < oneTeddy.colors.length; i++) {
                let couleurTitre = document.createElement("option");
                couleurTitre.setAttribute("value", "choixcouleur");
                choixCouleur.appendChild(couleurTitre);
                couleurTitre.textContent = oneTeddy.colors[i];
            }

            let divPrix = document.createElement("div");
            divPrix.setAttribute("class", "produit__prix");
            orderAside.appendChild(divPrix);

            let prixProduit = document.createElement("p");
            prixProduit.setAttribute("class", "price");
            divPrix.appendChild(prixProduit);
            prixProduit.textContent = "Prix unitaire : " + oneTeddy.price / 100 + "€";

            let boutonPanier = document.createElement("button");
            boutonPanier.setAttribute("class", "bouton__panier");
            boutonPanier.setAttribute("type", "submit");
            orderAside.appendChild(boutonPanier);
            boutonPanier.textContent = "Ajouter au panier";

        })

}
function ajoutPanier() {
    boutonPanier.addEventListener("click", () => {
        let teddyAdded = {
            name: orderTitle.innerHTML,
            quantity: parseFloat(teddyQuantité.value),
            price: parseFloat(prixProduit.value),
            _id: id,
        };
    })
}

