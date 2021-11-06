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
exports.deleteEcommerce = exports.putEcommerce = exports.postEcommerce = exports.getEcommerce = exports.getEcommerces = void 0;
const ecommerce_1 = __importDefault(require("../models/ecommerce"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getEcommerces = (req, res) => {
    res.json({
        msg: 'getEcommerces'
    });
};
exports.getEcommerces = getEcommerces;
const getEcommerce = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getEcommerce',
        id
    });
};
exports.getEcommerce = getEcommerce;
const postEcommerce = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, password, mail } = req.body;
    const salt = bcrypt_1.default.genSaltSync();
    password = bcrypt_1.default.hashSync(password, salt);
    const ecommerce = new ecommerce_1.default({ name, password, mail });
    const verifyEmail = yield ecommerce_1.default.findOne({ mail });
    if (verifyEmail) {
        return res.status(400).json({
            error: 'Email already in use'
        });
    }
    const newEcommerce = yield ecommerce.save();
    res.status(201).json({
        msg: 'Ecommerce created successfully',
        newEcommerce
    });
});
exports.postEcommerce = postEcommerce;
const putEcommerce = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putEcommerce',
        id,
        body
    });
};
exports.putEcommerce = putEcommerce;
const deleteEcommerce = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteEcommerce',
        id
    });
};
exports.deleteEcommerce = deleteEcommerce;
