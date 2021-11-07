import mongoose from "mongoose";

const {Schema, model} = mongoose;

const customerSchema = new Schema({
    id: {
        type: Number
    },
    email: {
        type: String
    },
    lastOrderId: {
        type: Number
    },
    name: {
        type: String
    },
    totalSpent: {
        type: String
    },
    totalSpentCurrency: {
        type: String
    }
},
{
    timestamps: {createdAt: true, updatedAt: true}
});

export default model('Customer', customerSchema);