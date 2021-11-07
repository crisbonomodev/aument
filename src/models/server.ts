
import  express, { Application, Request, Response, NextFunction } from "express"
import { dbConnection } from "../db/config";
import ecommerceRoutes from '../routes/ecommerce';
import channelRoutes from '../routes/channel';
import userRoutes from '../routes/user';
import orderRoutes from '../routes/order';

export class Server {

    private app: Application;
    private port: string;
    //paths para las rutas
    private apiPaths = {
        users: '/api/users',
        ecommerce: '/api/ecommerce',
        channel: '/api/channel',
        orders: '/api/orders'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.database();
        this.parser();
        this.routes();
    }

    //Metodo para conexion a db
    async database() {
        await dbConnection();
    }

    parser() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    //Metodo para las rutas
    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.ecommerce, ecommerceRoutes);
        this.app.use(this.apiPaths.channel, channelRoutes);
        this.app.use(this.apiPaths.orders, orderRoutes);
        //Error handling
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({
        message: err.message
    })
})
    }


    listen() {
        try{
            this.app.listen(this.port, () => {
                console.log(`Server running on port ${this.port}`);
            });
        }
        catch (error) {
        console.log(error);
    }
    }
}