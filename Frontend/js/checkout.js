import {url} from '../js/main.js';
export {test2};

function test2 () {

    let blocPage = document.getElementById("bloc-page");

    let mainCheckout = document.createElement("main");
    mainCheckout.setAttribute("class", "checkout");
    blocPage.appendChild(mainCheckout);

    let checkoutResume = document.createElement("section");
    checkoutResume.setAttribute("class", "resume");
    mainCheckout.appendChild(checkoutResume);

    let achatResume = document.createElement("div");
    achatResume.setAttribute("class", "resume__achat");
    checkoutResume.appendChild(achatResume);

    let produitResume = document.createElement("div");
    produitResume.setAttribute("class", "resume__produit");
    achatResume.appendChild(produitResume);

    let produitTitre = document.createElement("h2");
    produitTitre.setAttribute("class", "resume__titre");
    produitResume.appendChild(produitTitre);

    let produitDivQuantité = document.createElement("div");
    produitDivQuantité.setAttribute("class", "resume__quantité");
    produitResume.appendChild(produitDivQuantité);

    let produitQuantité = document.createElement("p");
    produitQuantité.setAttribute("class", "resume__quantxt");
    produitDivQuantité.appendChild(produitQuantité);

    let divPlusOuMoins = document.createElement("div");
    divPlusOuMoins.setAttribute("class", "produit__posneg");
    produitDivQuantité.appendChild(divPlusOuMoins);

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

    let produitCouleur = document.createElement("p");
    produitCouleur.setAttribute("class", "resume__couleur");
    produitResume.appendChild(produitCouleur);

    let divResumePrix = document.createElement("div");
    divResumePrix.setAttribute("class", "resume__prix");
    achatResume.appendChild(divResumePrix);

    let resumePrix = document.createElement("p");
    resumePrix.setAttribute("class", "resume__prix-p");
    divResumePrix.appendChild(resumePrix);
}



