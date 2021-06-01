import {url} from '../js/main.js';
export {test};

function test () {

    let blocPage = document.getElementById("bloc-page");

    let mainOrder = document.createElement("main");
    mainOrder.setAttribute("class", "order");
    blocPage.appendChild(mainOrder);

    let pageOrder = document.createElement("section");
    pageOrder.setAttribute("class", "order__conteneur");
    mainOrder.appendChild(pageOrder);

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

}


