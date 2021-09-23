// Déclaration d'une variable dans laquelle on récupère les données du localStorage
let localS = JSON.parse(localStorage.getItem("teddies"));

// Déclaration du résumé du panier et du formulaire pour pouvoir les réutiliser dans le DOM
let checkoutResume = document.getElementById("resumePanier");
let checkoutFormulaire = document.getElementById("formulaire");

// On crée le panier
let panierTeddy = async () => {

    // On attend de récupérer les données contenues dans le localStorage
    await localStorage.getItem("teddies");

    // Pour chaque article présent dans le localStorage, on crée les éléments du DOM suivant et on insère les données récupérées
    for (let teddy in localS) {
        
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
    
    // On affiche ensuite dans le DOM le montant total de la commande ainsi qu'un bouton permettant de vider le panier
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

    // Si le panier est vide, on cache le bouton "Vider le panier" et on insère a la place un message d'erreur
    if(!localS) {
        btnViderPanier.style.display = "none";

        let messageErreur = document.createElement("h2");
        messageErreur.setAttribute("class", "message__erreur");
        checkoutResume.appendChild(messageErreur);
        messageErreur.textContent = "Votre panier est vide !";
    }

}

// On crée l'action qui nous permet de pouvoir vider le panier
let viderPanier = async() => {

    // Le panier et le localStorage sont vidés lorsqu'on clique sur le bouton
    let btnViderPanier = document.querySelector(".supprimer__panier");
    btnViderPanier.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });
}

// Calcul du montant total de la commande
let calculTotal = async () => {

    // On crée un tableau dans lequel on va mettre tous les prix du panier
    let tableauCalcul = [];
    let resumeTotal = document.querySelector(".resume__total-p");

    // On récupère les montants total de chaque article, en fonction de la quantité de produit
    for (let p = 0; p < localS.length; p++) {
        let prixProduitPanier = localS[p].price * localS[p].quantity;

        // On push les prix dans le tableau
        tableauCalcul.push(prixProduitPanier);
        

        console.log(tableauCalcul);
    }

    // On additionne les prix dans le tableau
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const prixTotal = tableauCalcul.reduce(reducer,0);

    console.log(prixTotal);

    // Affichage du montant total de la commande
    resumeTotal.innerHTML = "Prix de la commande : " + prixTotal + " €";
    
}

// Création du formulaire d'envoi de commande
let envoiForm = async() => {

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

    // La commande est envoyée lorsqu'on clique sur le bouton
    btnEnvoi.addEventListener("click", (event) => {
        event.preventDefault();
        let testMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formMailInput.value)

        // Vérification si tous les champs sont remplis, si ce n'est pas le cas, on affiche un message d'erreur
        if (
            !formNomInput.value ||
            !formPrénomInput.value ||
            !formAdresseInput.value ||
            !formVilleInput.value ||
            !formMailInput.value
        ) {
            alert("Merci de remplir tous les champs");

         // Vérification si le champ contient bien une adresse mail, si l'adresse mail n'est pas valide, on affiche un message d'erreur
        } else if(!testMail){
            alert("Merci de saisir une adresse mail valide")
            return false
        
        // Si tous les champs sont remplis et que l'adresse mail est valide, on crée un tableau dans lequel on va mettre l'id des articles du panier    
        } else {
            let produitsAjoutés = [];
            for(let produit of localS){
                produitsAjoutés.push(produit._id);
            }
            

            console.log(produitsAjoutés);

            // On crée un objet contenant les informations de l'acheteur et l'id des produits du panier
            const formEtPanier = {
                contact: {
                    firstName: formNomInput.value,
                    lastName: formPrénomInput.value,
                    address:  formAdresseInput.value,
                    city: formVilleInput.value,
                    email: formMailInput.value
                },

                products: produitsAjoutés,
                
            };

            console.log(formEtPanier);

            // On récupère le texte du prix total de la commande afin de pouvoir le réutiliser 
            let prixConfirmation = document.querySelector(".resume__total-p").innerText;
            
            // Envoi de le requête POST au backend
            fetch("http://localhost:3000/api/teddies/order", {            
                method: "POST",
                body: JSON.stringify(formEtPanier),
                headers: { "Content-Type": "application/json" },
            })
                .then(response => response.json())
                // Lorsque la commande est envoyée, on change de page et le localStorage ne contient plus que l'id de la commande ainsi que le prix total de la commande
                .then(data => {
                    localStorage.clear();
                    localStorage.setItem("orderId", data.orderId);
                    localStorage.setItem("totalCommande", prixConfirmation);
                    window.location = "confirmation.html";
                })
                    
                

        }
    })
}


// Appel des fonctions de la page
panierTeddy().then(data => viderPanier()).then(data => calculTotal()).then(data => envoiForm());
    





