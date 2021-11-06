"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const ecommerceSchema = new Schema({
    name: {
        type: String,
        required: [true, 'a name must be provided']
    },
    mail: {
        type: String,
        required: [true, 'an email must be provided']
    },
    password: {
        type: String,
        required: [true, 'a password must be provided']
    }
});
//Sobreescritura de motodo toJSON para no enviar __V ni password
ecommerceSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, password } = _a, ecommerce = __rest(_a, ["__v", "password"]);
    return ecommerce;
};
exports.default = model('Ecommerce', ecommerceSchema);
