"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.putOrder = exports.postOrder = exports.getOrder = exports.getOrders = void 0;
const getOrders = (req, res) => {
    res.json({
        msg: 'getOrders'
    });
};
exports.getOrders = getOrders;
const getOrder = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getOrder',
        id
    });
};
exports.getOrder = getOrder;
const postOrder = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postOrder',
        body
    });
};
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
