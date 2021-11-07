"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const channelSchema = new Schema({
    ecommerce: {
        type: Schema.Types.ObjectId,
        ref: 'Ecommerce',
        required: [true, 'an associated ecommerce must be provided']
    },
    name: {
        type: String,
        required: [true, 'a name must be provided']
    },
});
exports.default = model('Channel', channelSchema);
