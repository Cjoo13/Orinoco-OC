import {callApi, listeAllTeddies} from './index.js';

export const url = "http://localhost:3000/api/teddies";
export class teddy {
    constructor(name, price, imageUrl, color, quantity, _id) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.color = color;
        this.quantity = quantity;
        this._id = _id;
    }
};