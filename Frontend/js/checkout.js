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
        resumePrix.innerHTML = "Prix : " + localS[teddy].price * localS[teddy].quantity + " €";

    }

    let checkoutResume = document.getElementById("resumePanier");

    let resumeTotalCartouche = document.createElement("div");
    resumeTotalCartouche.setAttribute("class", "resume__cartouche");
    checkoutResume.appendChild(resumeTotalCartouche);

    let resumeDivTotal = document.createElement("div");
    resumeDivTotal.setAttribute("class", "resume__total");
    resumeTotalCartouche.appendChild(resumeDivTotal);

    let resumeTotal = document.createElement("p");
    resumeTotal.setAttribute("class", "resume__total-p");
    resumeDivTotal.appendChild(resumeTotal);

    let btnViderPanier = document.createElement("button");
    btnViderPanier.setAttribute("class", "supprimer__panier");
    resumeTotalCartouche.appendChild(btnViderPanier);
    btnViderPanier.textContent = "Vider le panier";

}

let viderPanier = async() => {

    let btnViderPanier = document.querySelector(".supprimer__panier");
    await btnViderPanier.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
}

let calculTotal = async () => {

    let tableauCalcul = [];
    let resumeTotal = document.querySelector(".resume__total-p");

    for (let p = 0; p < localS.length; p++) {
        let prixProduitPanier = localS[p].price * localS[p].quantity;

        tableauCalcul.push(prixProduitPanier);
        

        console.log(tableauCalcul);
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const prixTotal = tableauCalcul.reduce(reducer,0);

    console.log(prixTotal);

    resumeTotal.innerHTML = "Prix de la commande : " + prixTotal + " €";
    
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
    form.setAttribute("class", "formulaire__complet");
    checkoutFormulaire.appendChild(form);

    let formCartouche = document.createElement("div");
    formCartouche.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche);

    let formNom = document.createElement("label");
    formNom.setAttribute("for", "name");
    formCartouche.appendChild(formNom);
    formNom.textContent = "Nom :";

    let formNomInput = document.createElement("input");
    formNomInput.setAttribute("id", "name");
    formCartouche.appendChild(formNomInput);

    let formCartouche2 = document.createElement("div");
    formCartouche2.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche2);

    let formPrénom = document.createElement("label");
    formPrénom.setAttribute("for", "surname");
    formCartouche2.appendChild(formPrénom);
    formPrénom.textContent = "Prénom :";

    let formPrénomInput = document.createElement("input");
    formPrénomInput.setAttribute("id", "suname");
    formCartouche2.appendChild(formPrénomInput);

    let formCartouche3 = document.createElement("div");
    formCartouche3.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche3);

    let formAdresse = document.createElement("label");
    formAdresse.setAttribute("for", "adress");
    formCartouche3.appendChild(formAdresse);
    formAdresse.textContent = "Adresse :";

    let formAdresseInput = document.createElement("input");
    formAdresseInput.setAttribute("id", "adress");
    formCartouche3.appendChild(formAdresseInput);

    let formCartouche4 = document.createElement("div");
    formCartouche4.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche4);

    let formVille = document.createElement("label");
    formVille.setAttribute("for", "city");
    formCartouche4.appendChild(formVille);
    formVille.textContent = "Ville :";

    let formVilleInput = document.createElement("input");
    formVilleInput.setAttribute("id", "city");
    formCartouche4.appendChild(formVilleInput);

    let formCartouche5 = document.createElement("div");
    formCartouche5.setAttribute("class", "formulaire__cartouche");
    form.appendChild(formCartouche5);

    let formMail = document.createElement("label");
    formMail.setAttribute("for", "mail");
    formCartouche5.appendChild(formMail);
    formMail.textContent ="Mail :";

    let formMailInput = document.createElement("input");
    formMailInput.setAttribute("id", "mail");
    formCartouche5.appendChild(formMailInput);

    let btnEnvoi = document.createElement("button");
    btnEnvoi.setAttribute("class", "commander");
    checkoutFormulaire.appendChild(btnEnvoi);
    btnEnvoi.textContent = "Valider ma commande";

    btnEnvoi.addEventListener("click", (event) => {
        event.preventDefault();

        if (
            !formNomInput.value ||
            !formPrénomInput.value ||
            !formAdresseInput.value ||
            !formVilleInput.value ||
            !formMailInput.value
        ) {
            alert("Merci de remplir tous les champs");

        } else {

            let produitsAjoutés = [];
            produitsAjoutés.push(localS);

            console.log(produitsAjoutés);

            const formEtPanier = {
                contact: {
                    firstName: formNomInput.value,
                    lastName: formPrénomInput.value,
                    adress:  formAdresseInput.value,
                    city: formVilleInput.value,
                    email: formMailInput.value
                },

                products: produitsAjoutés,
                
            };

            console.log(formEtPanier);

            let prixConfirmation = document.querySelector(".resume__total-p").innerText;
            
            fetch("http://localhost:3000/api/teddies/order", {
                method: "POST",
                body: JSON.stringify(formEtPanier),
                headers: { "Content-Type": "application/json" },
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem("orderId", data.orderId);
                    localStorage.setItem("totalCommande", prixConfirmation);
                    window.location = "confirmation.html";
                })
                    
                

        }
    })
}



panierTeddy().then(data => viderPanier()).then(data => calculTotal()).then(data => envoiForm());
    





