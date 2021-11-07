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
exports.deleteChannel = exports.putChannel = exports.postChannel = exports.getChannel = exports.getChannels = void 0;
const channel_1 = __importDefault(require("../models/channel"));
const ecommerce_1 = __importDefault(require("../models/ecommerce"));
const getChannels = (req, res) => {
    res.json({
        msg: 'getChannels'
    });
};
exports.getChannels = getChannels;
const getChannel = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getChannel',
        id
    });
};
exports.getChannel = getChannel;
const postChannel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, ecommerceId } = req.body;
    try {
        const channelFound = yield channel_1.default.findOne({ name: name });
        if (channelFound) {
            return res.status(400).json({
                code: 'error',
                message: 'Channel already created'
            });
        }
        const ecommerce = yield ecommerce_1.default.findById(ecommerceId);
        if (!ecommerce) {
            return res.status(400).json({
                code: 'error',
                message: 'ecommerce not found'
            });
        }
        const channel = new channel_1.default({ name, ecommerce });
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
