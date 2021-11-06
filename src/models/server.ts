
import  express, { Application, Request, Response, NextFunction } from "express"
import { dbConnection } from "../db/config";
import userRoutes from '../routes/user';
import orderRoutes from '../routes/order';
import ecommerceRoutes from '../routes/ecommerce';

export class Server {

    private app: Application;
    private port: string;
    //paths para las rutas
    private apiPaths = {
        users: '/api/users',
        orders: '/api/orders',
        ecommerce: '/api/ecommerce'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.database();
        this.routes();
    }

    //Metodo para conexion a db
    async database() {
        await dbConnection();
    }

    //Metodo para las rutas
    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.orders, orderRoutes);
        this.app.use(this.apiPaths.ecommerce, ecommerceRoutes);
        //Error handling
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({
        message: err.message
    })
})
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}