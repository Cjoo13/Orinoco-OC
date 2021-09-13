// Import des fonctions à appeler depuis les autres pages js

import {callApi} from '../js/index.js';
import {callOneTeddy, ajoutPanier} from '../js/order.js';
import {panierTeddy} from '../js/checkout.js';
import {confirmationAchatTeddy} from '../js/confirmation.js';

// Export de l'url et de l'objet vers les autres pages js

export const url = "http://localhost:3000/api/teddies";
export class teddy {
    constructor(name, price, imageUrl, colors, quantity, _id, description) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.colors = colors;
        this.quantity = quantity;
        this._id = _id;
        this.description = description;
    }
};

//----- Appel des fonctions

// Fonction de la page index.js

callApi();

// Fonctions de la page order.js

callOneTeddy();
ajoutPanier();

// Fonctions de la page checkout.js

panierTeddy();
envoiForm();

// Fonctions de la page confirmation.js

confirmationAchatTeddy();

