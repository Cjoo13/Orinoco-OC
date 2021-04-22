export {callApi, listeAllTeddies};
import {url} from 'main.js';

let allTeddies
function callApi () {
    allTeddies = new Promise((resolve) => {
        let request = new XMLHttpRequest()
    request.onreadystatechange = function () {
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

async function listeAllTeddies() {
    const teddies = await allTeddies;
    teddies.forEach(teddy => {
        let blocPage = document.getElementById("bloc-page");

        let conteneurOurs = document.createElement("main");
        conteneurOurs.setAttribute("class", "conteneur"); 
        blocPage.appendChild(conteneurOurs);

        let divTitre = document.createElement("div");
        divTitre.setAttribute("class", "conteneur__div");
        conteneurOurs.appendChild(divTitre);

        let titrePage = document.createElement("h2");
        titrePage.setAttribute("class", "conteneur__title");
        divTitre.appendChild(titrePage);
        titrePage.textContent = "Voici notre séléction d'ours en peluche :";

        let listeOurs = document.createElement("section");
        listeOurs.setAttribute("class", "selection");
        conteneurOurs.appendChild(listeOurs);

        let produitFigure = document.createElement("figure");
        produitFigure.setAttribute("class", "selection__pic");
        listeOurs.appendChild(produitFigure);

        let produitImg = document.createElement("img");
        produitImg.setAttribute("src", teddy.imageUrl);
        produitImg.setAttribute("alt", "Image d'ours en peluche");
        produitFigure.appendChild(produitImg);

        let produitFigcaption = document.createElement("figcaption");
        produitFigcaption.setAttribute("class", "selection__figcaption");
        produitFigure.appendChild(produitFigcaption);

        let produitTexte = document.createElement("div");
        produitTexte.setAttribute("class", "selection__texte");
        produitFigcaption.appendChild(produitTexte);

        let produitNom = document.createElement("h3");
        produitNom.setAttribute("class", "selection__nom");
        produitTexte.appendChild(produitNom);
        produitNom.textContent = teddy.name;

        let produitPrix = document.createElement("p");
        produitPrix.setAttribute("class", "selection__prix");
        produitTexte.appendChild(produitPrix);
        produitPrix.textContent = teddy.price;

        let produitAfficher = document.createElement("div");
        produitAfficher.setAttribute("class", "selection__afficher");
        produitFigcaption.appendChild(produitAfficher);

        let produitDetails = document.createElement("p");
        produitDetails.setAttribute("class", "selection__details");
        produitAfficher.appendChild(produitDetails);

        let produitLink = document.createElement("a");
        produitLink.setAttribute("href", );
        produitDetails.appendChild(produitLink);
    })
}



