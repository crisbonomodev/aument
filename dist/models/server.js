"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const order_1 = __importDefault(require("../routes/order"));
const ecommerce_1 = __importDefault(require("../routes/ecommerce"));
class Server {
    constructor() {
        //paths para las rutas
        this.apiPaths = {
            users: '/api/users',
            orders: '/api/orders',
            ecommerce: '/api/ecommerce'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.routes();
    }
    //Metodo para las rutas
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
        this.app.use(this.apiPaths.orders, order_1.default);
        this.app.use(this.apiPaths.ecommerce, ecommerce_1.default);
        //Error handling
        this.app.use((err, req, res, next) => {
            res.status(500).json({
                message: err.message
            });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
