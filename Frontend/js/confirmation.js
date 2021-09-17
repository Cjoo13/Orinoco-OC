let confirmationAchatTeddy = async () => {
    
    let confirmationMain = document.getElementById("confMain");

    let confirmationDiv = document.createElement("div");
    confirmationDiv.setAttribute("class", "confirmation");
    confirmationMain.appendChild(confirmationDiv);

    let confirmationTitre = document.createElement("h2");
    confirmationTitre.setAttribute("class", "confirmation__titre");
    confirmationDiv.appendChild(confirmationTitre);
    confirmationTitre.textContent = "Nous vous confirmons que la commande a bien été effectuée.";

    let confirmationP = document.createElement("p");
    confirmationP.setAttribute("class", "confirmation__texte");
    confirmationDiv.appendChild(confirmationP);
    confirmationP.textContent = "Merci pour votre confiance, votre colis arrivera dans quelques jours."

    let numeroCommande = document.createElement("p");
    numeroCommande.setAttribute("class", "confirmation__num");
    confirmationDiv.appendChild(numeroCommande);
    numeroCommande.textContent = "Numéro de commande : " + localStorage.getItem("orderId");
    
    let prixCommande = document.createElement("p");
    prixCommande.setAttribute("class", "confirmation__total");
    confirmationDiv.appendChild(prixCommande);
    prixCommande.textContent = localStorage.getItem("totalCommande");


}

confirmationAchatTeddy();