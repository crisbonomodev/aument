"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(channel, cancelReason, currency, gateway, id, language, locationId, name, ownerNote, paymentStatus, status, subtotal, token, discount, price, priceUsd, weight, shippedAt, number, products, storefront, customer) {
        this.channel = channel;
        this.cancelReason = cancelReason;
        this.currency = currency;
        this.gateway = gateway;
        this.id = id;
        this.language = language;
        this.locationId = locationId;
        this.name = name;
        this.ownerNote = ownerNote;
        this.paymentStatus = paymentStatus;
        this.status = status;
        this.subtotal = subtotal;
        this.token = token;
        this.discount = discount;
        this.price = price;
        this.priceUsd = priceUsd;
        this.weight = weight;
        this.shippedAt = shippedAt;
        this.number = number;
        this.products = products;
        this.storefront = storefront;
        this.customer = customer;
    }
}
exports.default = Order;
