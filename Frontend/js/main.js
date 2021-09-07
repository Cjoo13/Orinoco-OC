import {callApi, listeAllTeddies} from '../js/index.js';
import {orderTeddy, recallApi, orderTeddi} from '../js/order.js';
import {panierTeddy} from '../js/checkout.js';
import {confirmationAchatTeddy} from '../js/confirmation.js';

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

callApi();
listeAllTeddies();

recallApi();
orderTeddy();
orderTeddi();


panierTeddy();

confirmationAchatTeddy();

