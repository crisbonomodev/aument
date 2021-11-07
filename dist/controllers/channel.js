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
exports.deleteChannel = exports.putChannel = exports.postChannel = exports.getChannelById = exports.getChannelByEcommerceId = void 0;
const channel_1 = __importDefault(require("../models/channel"));
const ecommerce_1 = __importDefault(require("../models/ecommerce"));
const getChannelByEcommerceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.headers['x-flow-ecommerce-id'];
    try {
        const ecommerceFound = yield ecommerce_1.default.findById(id);
        if (!ecommerceFound) {
            return res.status(400).json({
                message: 'ecommerce invalid'
            });
        }
        const channelsFound = yield channel_1.default.find({ ecommerce: ecommerceFound });
        return res.status(200).json({
            msg: `channels for e-commerce ${ecommerceFound.name}`,
            channelsFound
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting Channels by e-commerce'
        });
    }
});
exports.getChannelByEcommerceId = getChannelByEcommerceId;
const getChannelById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const channelFound = yield channel_1.default.findById(id);
        if (!channelFound) {
            return res.status(400).json({
                message: 'invalid channel id'
            });
        }
        return res.status(200).json({
            channelFound
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error getting Channel'
        });
    }
    res.json({
        msg: 'getChannelById',
        id
    });
});
exports.getChannelById = getChannelById;
const postChannel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, channelNumber } = req.body;
    const ecommerceId = req.headers['x-flow-ecommerce-id'];
    try {
        const ecommerce = yield ecommerce_1.default.findById(ecommerceId);
        if (!ecommerce) {
            return res.status(400).json({
                code: 'error',
                message: 'ecommerce not found'
            });
        }
        const channelFound = yield channel_1.default.findOne({ channelNumber: channelNumber, ecommerce: ecommerce });
        if (channelFound) {
            return res.status(400).json({
                code: 'error',
                message: 'Channel already created'
            });
        }
        const channel = new channel_1.default({ name, ecommerce, channelNumber });
        const newChannel = yield channel.save();
        res.status(201).json({
            msg: 'Channel created successfully',
            newChannel
        });
    }
    catch (error) {
        return res.status(500).json({
            code: 'error',
            message: 'Internal error'
        });
    }
});
exports.postChannel = postChannel;
const putChannel = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putChannel',
        id,
        body
    });
};
exports.putChannel = putChannel;
const deleteChannel = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteChannel',
        id
    });
};
exports.deleteChannel = deleteChannel;
