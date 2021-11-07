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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("../db/config");
const ecommerce_1 = __importDefault(require("../routes/ecommerce"));
const channel_1 = __importDefault(require("../routes/channel"));
const user_1 = __importDefault(require("../routes/user"));
const order_1 = __importDefault(require("../routes/order"));
class Server {
    constructor() {
        //paths para las rutas
        this.apiPaths = {
            users: '/api/users',
            ecommerce: '/api/ecommerce',
            channel: '/api/channel',
            orders: '/api/orders'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.database();
        this.parser();
        this.routes();
    }
    //Metodo para conexion a db
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    parser() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    }
    //Metodo para las rutas
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
        this.app.use(this.apiPaths.ecommerce, ecommerce_1.default);
        this.app.use(this.apiPaths.channel, channel_1.default);
        this.app.use(this.apiPaths.orders, order_1.default);
        //Error handling
        this.app.use((err, req, res, next) => {
            res.status(500).json({
                message: err.message
            });
        });
    }
    listen() {
        try {
            this.app.listen(this.port, () => {
                console.log(`Server running on port ${this.port}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.Server = Server;
