"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const channel_1 = __importDefault(require("./channel"));
const ecommerce_1 = __importDefault(require("./ecommerce"));
const order_1 = __importDefault(require("./order"));
exports.default = {
    Channel: channel_1.default,
    Ecommerce: ecommerce_1.default,
    Order: order_1.default
};
