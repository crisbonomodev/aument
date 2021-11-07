"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const orderSchema = new Schema({
    name: {
        type: String,
        required: [true, 'a name must be provided']
    },
    mail: {
        type: String,
        required: [true, 'an email must be provided']
    },
    password: {
        type: String,
        required: [true, 'a password must be provided']
    }
});
exports.default = model('order', orderSchema);
