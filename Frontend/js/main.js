import {callApi, listeAllTeddies} from 'index.js';
import {test} from 'order.js';
import {test2} from 'checkout.js';

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