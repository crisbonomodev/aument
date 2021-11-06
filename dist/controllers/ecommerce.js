"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEcommerce = exports.putEcommerce = exports.postEcommerce = exports.getEcommerce = exports.getEcommerces = void 0;
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
const postEcommerce = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postEcommerce',
        body
    });
};
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
