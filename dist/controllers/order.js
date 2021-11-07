"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.putOrder = exports.postOrder = exports.getOrdersByCustomer = exports.getOrdersByEcommerce = exports.getOrderById = void 0;
const customer_1 = __importDefault(require("../models/customer"));
const ecommerce_1 = __importDefault(require("../models/ecommerce"));
const order_1 = __importDefault(require("../models/order"));
const channel_1 = __importDefault(require("../models/channel"));
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const orderFound = yield order_1.default.findById(id);
        if (!orderFound) {
            return res.status(400).json({
                message: 'order id invalid'
            });
        }
        return res.status(200).json({
            orderFound
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting order'
        });
    }
});
exports.getOrderById = getOrderById;
const getOrdersByEcommerce = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.headers['x-flow-ecommerce-id'];
    try {
        const ecommerceFound = yield ecommerce_1.default.findById(id);
        if (!ecommerceFound) {
            return res.status(400).json({
                message: 'ecommerce invalid'
            });
        }
        const orders = yield order_1.default.find({ ecommerce: ecommerceFound });
        return res.status(200).json({
            msg: `orders for e-commerce ${ecommerceFound.name}`,
            orders
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting orders by e-commerce'
        });
    }
});
exports.getOrdersByEcommerce = getOrdersByEcommerce;
const getOrdersByCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const customerFound = yield customer_1.default.findById(id);
        if (!customerFound) {
            return res.status(400).json({
                message: 'customer id invalid'
            });
        }
        const orders = yield order_1.default.find({ customer: customerFound });
        return res.status(200).json({
            message: `Orders for customer ${customerFound.name}`,
            orders
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting order'
        });
    }
});
exports.getOrdersByCustomer = getOrdersByCustomer;
const postOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { channel, cancelReason, currency, gateway, id, languaje, locationId, name, ownerNote, paymentStatus, status, subtotal, token, discount, price, priceUsd, weight, shippedAt, number, products, storefront, customer } = req.body;
    const ecommerceId = req.headers['x-flow-ecommerce-id'];
    try {
        //validamos el ecommerce
        const ecommerce = yield ecommerce_1.default.findById(ecommerceId);
        if (!ecommerce) {
            return res.status(400).json({
                message: 'Invalid ecommerce'
            });
        }
        //validamos en channel
        const channelId = yield channel_1.default.findOne({ channelNumber: channel });
        if (!channelId) {
            return res.status(400).json({
                message: 'Invalid channel'
            });
        }
        //buscamos si la orden ya existe
        const existingOrder = yield order_1.default.findOne({ number: number, ecommerceId: ecommerce });
        if (existingOrder) {
            return res.status(400).json({
                message: `Order number ${number} already exists`
            });
        }
        //Buscamos si el cliente ya existe, sino lo creamos
        const foundCustomer = yield customer_1.default.findOne({ id: customer.id });
        if (!foundCustomer) {
            const newCustomer = yield new customer_1.default(customer).save();
            customer = newCustomer;
        }
        else {
            customer = foundCustomer;
        }
        ;
        const newOrder = yield new order_1.default({ channel, cancelReason, currency, gateway, id, languaje, locationId, name, ownerNote,
            paymentStatus, status, subtotal, token, discount, price, priceUsd, weight, shippedAt,
            number, products, storefront, ecommerce, channelId, customer }).save();
        res.json({
            msg: 'Order created',
            newOrder
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error creating order'
        });
    }
});
exports.postOrder = postOrder;
const putOrder = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putOrder',
        id,
        body
    });
};
exports.putOrder = putOrder;
const deleteOrder = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteOrder',
        id
    });
};
exports.deleteOrder = deleteOrder;
