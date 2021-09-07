import {url} from '../js/main.js';
export {orderTeddy, recallApi, orderTeddi};

let selectTeddy
function recallApi() {
    selectTeddy = new Promise((resolve) => {
        let request = new XMLHttpRequest()
    request.onload = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            resolve(JSON.parse(this.responseText))
        } else {
            reject = console.log('erreur lors du chargement de la page')
            return
        }
    }

    request.open("GET", url);
    request.send();
    });
}

async function orderTeddy () {
    const teddies = await selectTeddy;
}

async function orderTeddi () {
    const teddies = await selectTeddy;
    
    var pathname = window.location.href; 
    var id = pathname.split("?id");
    

    teddies.forEach(teddy => {
        if ((teddy._id) === id[1]) {
          let pageOrder = document.getElementById("orderConteneur");

    let orderArticle = document.createElement("article");
    orderArticle.setAttribute("class", "order__img");
    pageOrder.appendChild(orderArticle);

    let orderFigure = document.createElement("figure");
    orderFigure.setAttribute("class", "order__left");
    orderArticle.appendChild(orderFigure);

    let orderImg = document.createElement("img");
    orderImg.setAttribute("src", teddy.imageUrl);
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
    orderTitle.textContent = teddy.name;

    let orderDescription = document.createElement("p");
    orderDescription.setAttribute("class", "produit__description");
    orderTexte.appendChild(orderDescription);
    orderDescription.textContent = teddy.description;

    let orderQuantité = document.createElement("div");
    orderQuantité.setAttribute("class", "produit__quantité");
    orderAside.appendChild(orderQuantité);

    let orderQuantP = document.createElement("p");
    orderQuantité.appendChild(orderQuantP);
    orderQuantP.textContent = "Quantité :";

    let divPlusOuMoins = document.createElement("div");
    divPlusOuMoins.setAttribute("class", "produit__posneg");
    orderQuantité.appendChild(divPlusOuMoins);

    let divMoins = document.createElement("div");
    divMoins.setAttribute("class", "moins");
    divPlusOuMoins.appendChild(divMoins);

    let moins = document.createElement("i");
    moins.setAttribute("class", "fas fa-minus");
    divMoins.appendChild(moins);

    let divPlus = document.createElement("div");
    divPlus.setAttribute("class", "plus");
    divPlusOuMoins.appendChild(divPlus);

    let plus = document.createElement("i");
    plus.setAttribute("class", "fas fa-plus");
    divPlus.appendChild(plus);

    let divCouleur = document.createElement("div");
    divCouleur.setAttribute("class", "produit__couleur");
    orderAside.appendChild(divCouleur);

    let titreCouleur = document.createElement("label");
    titreCouleur.setAttribute("for", "ours");
    divCouleur.appendChild(titreCouleur);
    titreCouleur.textContent = "Couleurs :";

    let choixCouleur = document.createElement("select");
    choixCouleur.setAttribute("name", "ours");
    divCouleur.appendChild(choixCouleur);

    let couleurTitre = document.createElement("option");
    couleurTitre.setAttribute("value", "choixcouleur");
    choixCouleur.appendChild(couleurTitre);
    couleurTitre.textContent = "Choisissez votre couleur :"
   
    let couleur1 = document.createElement("option");
    couleur1.setAttribute("value", "couleur1");
    choixCouleur.appendChild(couleur1);

    let couleur2 = document.createElement("option");
    couleur2.setAttribute("value", "couleur2");
    choixCouleur.appendChild(couleur2);

    let couleur3 = document.createElement("option");
    couleur3.setAttribute("value", "couleur3");
    choixCouleur.appendChild(couleur3);

    let divPrix = document.createElement("div");
    divPrix.setAttribute("class", "produit__prix");
    orderAside.appendChild(divPrix);

    let prixProduit = document.createElement("p");
    prixProduit.setAttribute("class", "price");
    divPrix.appendChild(prixProduit);
    prixProduit.textContent = "Prix : " + teddy.price / 100 + "€";

    let boutonPanier = document.createElement("button");
    boutonPanier.setAttribute("class", "bouton__panier");
    orderAside.appendChild(boutonPanier);
    boutonPanier.textContent = "Ajouter au panier";

        }
    })

}