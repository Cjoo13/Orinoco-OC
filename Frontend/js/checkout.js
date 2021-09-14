import {url} from '../js/main.js';

let localS = JSON.parse(localStorage.getItem("teddies"));
let checkoutTitle = document.querySelector(".resume__title");


let panierTeddy = async () => {

    await localStorage.getItem("teddies");

    for (let teddy in localS) {

        let checkoutResume = document.getElementById("resumePanier");
    
        let achatResume = document.createElement("div");
        achatResume.setAttribute("class", "resume__achat");
        checkoutResume.appendChild(achatResume);

        let produitResume = document.createElement("div");
        produitResume.setAttribute("class", "resume__produit");
        achatResume.appendChild(produitResume);

        let produitTitre = document.createElement("h3");
        produitTitre.setAttribute("class", "resume__titre");
        produitResume.appendChild(produitTitre);
        produitTitre.innerHTML = localS[teddy].name;

        let produitDivQuantité = document.createElement("div");
        produitDivQuantité.setAttribute("class", "resume__quantité");
        produitResume.appendChild(produitDivQuantité);

        let produitQuantité = document.createElement("p");
        produitQuantité.setAttribute("class", "resume__quantxt");
        produitDivQuantité.appendChild(produitQuantité);
        produitQuantité.innerHTML = "Quantité : " + localS[teddy].quantity;

        let resumeDivPrix = document.createElement("div");
        resumeDivPrix.setAttribute("class", "resume__prix");
        achatResume.appendChild(resumeDivPrix);

        let resumePrix = document.createElement("p");
        resumePrix.setAttribute("class", "resume__prix-p");
        resumeDivPrix.appendChild(resumePrix);
        resumePrix.innerHTML = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(localS[teddy].price * localS[teddy].quantity);

        }

        let checkoutResume = document.getElementById("resumePanier");

        let resumeDivTotal = document.createElement("div");
        resumeDivTotal.setAttribute("class", "resume__total");
        checkoutResume.appendChild(resumeDivTotal);

        let resumeTotal = document.createElement("p");
        resumeTotal.setAttribute("class", "resume__total-p");
        resumeDivTotal.appendChild(resumeTotal);

        let btnViderPanier = document.createElement("button");
        btnViderPanier.setAttribute("class", "supprimer__panier");
        checkoutResume.appendChild(btnViderPanier);
        btnViderPanier.textContent = "Vider le panier";

}

let viderPanier = async() => {

    let btnViderPanier = document.querySelector(".supprimer__panier");
    await btnViderPanier.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
}

let envoiForm = async() => {

    let checkoutFormulaire = document.getElementById("formulaire");

    let formTitle = document.createElement("h2");
    formTitle.setAttribute("class", "formulaire__title");
    checkoutFormulaire.appendChild(formTitle);
    formTitle.textContent = "Formulaire de livraison :";

    let form = document.createElement("form");
    form.setAttribute("action", "hub");
    form.setAttribute("method", "POST");
    checkoutFormulaire.appendChild(form);

    let formCartouche = document.createElement("div");
    formCartouche.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche);

    let formNom = document.createElement("label");
    formNom.setAttribute("for", "name");
    formCartouche.appendChild(formNom);
    formNom.textContent = "Nom :";

    let formCartouche2 = document.createElement("div");
    formCartouche2.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche2);

    let formPrénom = document.createElement("label");
    formPrénom.setAttribute("for", "surname");
    formCartouche2.appendChild(formPrénom);
    formPrénom.textContent = "Prénom :";

    let formCartouche3 = document.createElement("div");
    formCartouche3.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche3);

    let formAdresse = document.createElement("label");
    formAdresse.setAttribute("for", "adress");
    formCartouche3.appendChild(formAdresse);
    formAdresse.textContent = "Adresse :";

    let formCartouche4 = document.createElement("div");
    formCartouche4.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche4);

    let formVille = document.createElement("label");
    formVille.setAttribute("for", "city");
    formCartouche4.appendChild(formVille);
    formVille.textContent = "Ville :";

    let formCartouche5 = document.createElement("div");
    formCartouche5.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche5);

    let formMail = document.createElement("label");
    formMail.setAttribute("for", "mail");
    formCartouche5.appendChild(formMail);
    formMail.textContent ="Mail :";

    let btnEnvoi = document.createElement("button");
    btnEnvoi.setAttribute("class", "commander");
    checkoutFormulaire.appendChild(btnEnvoi);
    btnEnvoi.textContent = "Valider ma commande";
}

panierTeddy().then(data => viderPanier());
envoiForm();
    





