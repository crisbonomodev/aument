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
exports.deleteCustomer = exports.putCustomer = exports.postCustomer = exports.getCustomer = exports.getCustomers = void 0;
const customer_1 = __importDefault(require("../models/customer"));
const getCustomers = (req, res) => {
    res.json({
        msg: 'getCustomers'
    });
};
exports.getCustomers = getCustomers;
const getCustomer = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getCustomer',
        id
    });
};
exports.getCustomer = getCustomer;
const postCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, id, lastOrderId, name, totalSpent, totalSpentCurrency } = req.body;
    try {
        const customerFound = yield customer_1.default.findOne({ id: id });
        if (customerFound) {
            return customerFound;
        }
        const customer = new customer_1.default({ email, id, lastOrderId, name, totalSpent, totalSpentCurrency }).save();
        return customer;
    }
    catch (error) {
        throw new Error('error creating customer');
    }
});
exports.postCustomer = postCustomer;
const putCustomer = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putCustomer',
        id,
        body
    });
};
exports.putCustomer = putCustomer;
const deleteCustomer = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteCustomer',
        id
    });
};
exports.deleteCustomer = deleteCustomer;
