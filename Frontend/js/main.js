import {callApi, listeAllTeddies} from '../js/index.js';
import {test} from '../js/order.js';
import {test2} from '../js/checkout.js';

export const url = "http://localhost:3000/api/teddies";
export class teddy {
    constructor(name, price, imageUrl, colors, quantity, _id) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.colors = colors;
        this.quantity = quantity;
        this._id = _id;
    }
};

callApi();
listeAllTeddies();
