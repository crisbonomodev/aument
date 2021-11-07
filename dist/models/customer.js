"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
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
}, {
    timestamps: { createdAt: true, updatedAt: true }
});
exports.default = model('Customer', customerSchema);
