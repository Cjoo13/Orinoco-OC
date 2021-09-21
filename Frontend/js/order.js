// Récupération de l'id de l'article concerné
let params = new URL(document.location).searchParams;
let id = params.get("id");

// Récupération de l'article dans l'API
let callOneTeddy = async() => {

    // L'article est défini grâce à l'id spécifié
    await fetch(`http://localhost:3000/api/teddies/${id}`)
        .then(response => response.json())

        // Répartition des données de l'article dans le DOM        
        .then(getOneTeddy => {
            const oneTeddy = getOneTeddy
            let pageOrder = document.getElementById("orderConteneur");

            let orderArticle = document.createElement("article");
            orderArticle.setAttribute("class", "order__img");
            pageOrder.appendChild(orderArticle);

            let orderFigure = document.createElement("figure");
            orderFigure.setAttribute("class", "order__left");
            orderArticle.appendChild(orderFigure);

            let orderImg = document.createElement("img");
            orderImg.setAttribute("src", oneTeddy.imageUrl);
            orderImg.setAttribute("alt", "Image d'ours en peluche");
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
            orderTitle.textContent = oneTeddy.name;

            let orderDescription = document.createElement("p");
            orderDescription.setAttribute("class", "produit__description");
            orderTexte.appendChild(orderDescription);
            orderDescription.textContent = oneTeddy.description;

            let orderQuantité = document.createElement("div");
            orderQuantité.setAttribute("class", "produit__quantité");
            orderAside.appendChild(orderQuantité);

            let orderQuantP = document.createElement("label");
            orderQuantité.appendChild(orderQuantP);
            orderQuantP.textContent = "Quantité :";

            let produitQuantité = document.createElement("div");
            produitQuantité.setAttribute("class", "produit__decompte");
            orderQuantité.appendChild(produitQuantité);

            let teddyQuantité = document.createElement("input");
            teddyQuantité.setAttribute("id", "teddyNum");
            teddyQuantité.setAttribute("value", 1);
            produitQuantité.appendChild(teddyQuantité);

            let divCouleur = document.createElement("div");
            divCouleur.setAttribute("class", "produit__couleur");
            orderAside.appendChild(divCouleur);

            let titreCouleur = document.createElement("label");
            titreCouleur.setAttribute("for", "ours");
            divCouleur.appendChild(titreCouleur);
            titreCouleur.textContent = "Couleurs :";

            let choixCouleur = document.createElement("select");
            choixCouleur.setAttribute("id", "#idQuanti");
            choixCouleur.setAttribute("name", "ours");
            divCouleur.appendChild(choixCouleur);
            for (let i = 0; i < oneTeddy.colors.length; i++) {
                let couleurTitre = document.createElement("option");
                couleurTitre.setAttribute("value", "choixcouleur");
                choixCouleur.appendChild(couleurTitre);
                couleurTitre.textContent = oneTeddy.colors[i];
            }

            let divPrix = document.createElement("div");
            divPrix.setAttribute("class", "produit__prix");
            orderAside.appendChild(divPrix);

            let prixProduit = document.createElement("p");
            prixProduit.setAttribute("class", "price");
            divPrix.appendChild(prixProduit);
            oneTeddy.price = oneTeddy.price / 100;
            
            //Formatage du prix en euros
            prixProduit.innerText = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
              })
            .format(oneTeddy.price);

            let boutonPanier = document.createElement("button");
            boutonPanier.setAttribute("class", "bouton__panier");
            boutonPanier.setAttribute("type", "submit");
            orderAside.appendChild(boutonPanier);
            boutonPanier.textContent = "Ajouter au panier";

        })

}

// Création de l'action d'ajout au panier
let ajoutPanier = async() => {

    let clickBtnPanier = document.querySelector(".bouton__panier");
    clickBtnPanier.addEventListener("click", () => {

        // Création de l'article ajouté au panier
        let teddySelec = {
            name: document.querySelector(".produit__title").innerHTML,
            quantity: teddyNum.value,
            price: parseFloat (document.querySelector(".price").innerHTML),
            _id: id,
        };

        // Gestion du localStorrage        
        let arrayPanier = [];

        // Si la key "teddies" existe déjà et que le localStorrage n'est pas vide, on envoie son contenu dans arrayPanier       
        if (localStorage.getItem("teddies") !== null) {
            arrayPanier = JSON.parse(localStorage.getItem("teddies"));
        }

        // Sinon on remplit le localStorrage avec l'article ajouté au panier      
        arrayPanier.push(teddySelec);
        localStorage.setItem("teddies", JSON.stringify(arrayPanier));

        // Validation visuelle de l'action d'ajout au panier
        alert("L'article a été ajouté au panier");        
    })
}

// Appel des fonctions de la page
callOneTeddy().then(data => ajoutPanier());

