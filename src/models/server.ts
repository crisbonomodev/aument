
import  express, { Application, Request, Response, NextFunction } from "express"
import { dbConnection } from "../db/config";
import ecommerceRoutes from '../routes/ecommerce';
import channelRoutes from '../routes/channel';
import customerRoutes from '../routes/customer';
import orderRoutes from '../routes/order';
import metricRoutes from '../routes/metrics';

export class Server {

    private app: Application;
    private port: string;
    //paths para las rutas
    private apiPaths = {
        customers: '/api/customers',
        ecommerce: '/api/ecommerce',
        channel: '/api/channel',
        orders: '/api/orders',
        metrics: '/api/metrics'
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
        this.app.use(this.apiPaths.customers, customerRoutes);
        this.app.use(this.apiPaths.ecommerce, ecommerceRoutes);
        this.app.use(this.apiPaths.channel, channelRoutes);
        this.app.use(this.apiPaths.orders, orderRoutes);
        this.app.use(this.apiPaths.metrics, metricRoutes);
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