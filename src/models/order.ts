import mongoose from "mongoose";

const {Schema, model} = mongoose;

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
},
{
    timestamps: {createdAt: true, updatedAt: true}
});

export default model('order', orderSchema);