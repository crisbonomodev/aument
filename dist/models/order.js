"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const orderSchema = new Schema({
    channel: {
        type: Number,
        required: [true, 'Channel must be provided']
    },
    cancelReason: {
        type: String,
    },
    currency: {
        type: String,
    },
    gateway: {
        type: String,
    },
    id: {
        type: Number,
    },
    language: {
        type: String,
    },
    locationId: {
        type: String,
    },
    name: {
        type: String,
    },
    ownerNote: {
        type: String,
    },
    paymentStatus: {
        type: String,
    },
    status: {
        type: String,
    },
    subtotal: {
        type: String,
    },
    token: {
        type: String,
    },
    discount: {
        type: String,
    },
    price: {
        type: String,
    },
    priceUsd: {
        type: String,
    },
    weight: {
        type: String,
    },
    shippedAt: {
        type: String,
    },
    number: {
        type: Number,
    },
    products: {
        type: Array,
    },
    storefront: {
        type: String,
    },
    customer: {
        type: Object,
    },
}, {
    timestamps: { createdAt: true, updatedAt: true }
});
exports.default = model('order', orderSchema);
