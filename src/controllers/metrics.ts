import { Request, Response } from "express";
import Customer from "../models/customer";
import Order from "../models/order";


//Metrica que devuelve el nombre, apellido y email de todos los clientes
export const getCustomerList = async(req: Request, res: Response) => {

    const data = await Customer.find({});
    const customersArray: any[] = [];
    data.forEach(client => {
        let customer = {
            id: client._id,
            name: client.name,
            email: client.email
        };
        customersArray.push(customer);
    })


    res.status(200).json({
        message: 'getCustomerList',
        customersArray
    })
}

export const getTotalBilling = async (req: Request, res: Response) => {
    try {
        let totalBilling: number = 0;
        const orders = await Order.find({ $or: [ {paymentStatus:"payed"}, { paymentStatus:"completed"} ] });
    
        orders.forEach(order => {
            totalBilling += Number(order.price);
        })
        res.status(200).json({
            message: 'Total orders billed',
            total: totalBilling,
            orders
        })
    } catch (error) {
        return res.status(500).json(
            {
                error
            }
        )
    }

}

export const getOrdersByCustomer = async (req: Request, res: Response) => {
        const {id} = req.params;
           try {
            let total = 0;
            const {name, email} = await Customer.findById(id);
            const orders = await Order.find({customer: id});
            if(orders) {
                orders.forEach(order => {
                    total +=  Number(order.price);
                })
            }
            let avg = total / orders.length;
            let quantity = orders.length;
            res.status(200).json({
                name,
                email,
                avg,
                quantity,
                orders
            })
           } catch (error) {
               console.log(error);
           }
}