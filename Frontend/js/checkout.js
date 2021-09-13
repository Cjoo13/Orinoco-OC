import {url} from '../js/main.js';
export {panierTeddy, envoiForm};

function panierTeddy () {

    let checkoutResume = document.getElementById("resumeCartouche");

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

function envoiForm() {

    let checkoutFormulaire = document.getElementById("formulaire");

    let form = document.createElement("form");
    form.setAttribute("action", "hub");
    form.setAttribute("method", "POST");
    checkoutFormulaire.appendChild(form);

    let formCartouche = document.createElement("div");
    formCartouche.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche);

    let formNom = document.createElement("label");
    formNom.setAttribute("for", "name");
    formCartouche.appendChild(formLabel);
    formNom.textContent = "Nom :";

    let formPrénom = document.createElement("label");
    formPrénom.setAttribute("for", "surname");
    formCartouche.appendChild(formPrénom);
    formPrénom.textContent = "Prénom :";

    let formAdresse = document.createElement("label");
    formAdresse.setAttribute("for", "adress");
    formCartouche.appendChild(formAdresse);
    formAdresse.textContent = "Adresse :";

    let formVille = document.createElement("label");
    formVille.setAttribute("for", "city");
    formCartouche.appendChild(formVille);
    formVille.textContent = "Ville :";

    let formMail = document.createElement("label");
    formMail.setAttribute("for", "mail");
    formCartouche.appendChild(formMail);
    formMail.textContent ="Mail :";

    let btnEnvoi = document.createElement("button");
    btnEnvoi.setAttribute("class", "commander");
    checkoutFormulaire.appendChild(btnEnvoi);
    btnEnvoi.textContent = "Valider ma commande";
}

    





