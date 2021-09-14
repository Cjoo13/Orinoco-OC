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

