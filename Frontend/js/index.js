export {callApi, listeAllTeddies};
import {url} from '../js/main.js';

let allTeddies
function callApi () {
    fetch(url).then((response) => 
        response.json().then((data) => {
           console.log(data);
        })

    )}
    
async function listeAllTeddies() {
    const teddies = await allTeddies;
    teddies.forEach(teddy => {
        let listeOurs = document.getElementById("selection");

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
        produitPrix.textContent = teddy.price / 100 + " €";

        let produitAfficher = document.createElement("div");
        produitAfficher.setAttribute("class", "selection__afficher");
        produitFigcaption.appendChild(produitAfficher);

        let produitDetails = document.createElement("p");
        produitDetails.setAttribute("class", "selection__details");
        produitAfficher.appendChild(produitDetails);
        

        let produitLink = document.createElement("a");
        produitLink.setAttribute("href","order.html?id" + teddy._id);
        produitDetails.appendChild(produitLink);
        produitLink.textContent = "Plus de détails";
        
    })
}



