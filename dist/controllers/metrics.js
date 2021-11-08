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
exports.getOrdersByCustomer = exports.getTotalBilling = exports.getCustomerList = void 0;
const customer_1 = __importDefault(require("../models/customer"));
const order_1 = __importDefault(require("../models/order"));
//Metrica que devuelve el nombre, apellido y email de todos los clientes
const getCustomerList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield customer_1.default.find({});
    const customersArray = [];
    data.forEach(client => {
        let customer = {
            id: client._id,
            name: client.name,
            email: client.email
        };
        customersArray.push(customer);
    });
    res.status(200).json({
        message: 'getCustomerList',
        customersArray
    });
});
exports.getCustomerList = getCustomerList;
const getTotalBilling = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let totalBilling = 0;
        const orders = yield order_1.default.find({ $or: [{ paymentStatus: "payed" }, { paymentStatus: "completed" }] });
        orders.forEach(order => {
            totalBilling += Number(order.price);
        });
        res.status(200).json({
            message: 'Total orders billed',
            total: totalBilling,
            orders
        });
    }
    catch (error) {
        return res.status(500).json({
            error
        });
    }
});
exports.getTotalBilling = getTotalBilling;
const getOrdersByCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let total = 0;
        const { name, email } = yield customer_1.default.findById(id);
        const orders = yield order_1.default.find({ customer: id });
        if (orders) {
            orders.forEach(order => {
                total += Number(order.price);
            });
        }
        let avg = total / orders.length;
        let quantity = orders.length;
        res.status(200).json({
            name,
            email,
            avg,
            quantity,
            orders
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOrdersByCustomer = getOrdersByCustomer;
