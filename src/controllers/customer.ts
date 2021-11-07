import { Request, Response } from "express";
import Customer from "../models/customer";

export const getCustomers = (req: Request, res: Response) => {
    res.json({
        msg: 'getCustomers'
    })
}

export const getCustomer = (req: Request, res: Response) => {
const {id} = req.params;

    res.json({
        msg: 'getCustomer',
        id
    })
}

export const postCustomer = async (req: Request, res: Response) => {
    const {email, id, lastOrderId, name, totalSpent, totalSpentCurrency} = req.body;

    try {
        const customerFound = await Customer.findOne({id: id})
        if(customerFound) {
            return customerFound;
        }

        const customer = new Customer({email, id, lastOrderId, name,totalSpent,totalSpentCurrency}).save();

        return customer;

    } catch (error) {
        throw new Error('error creating customer');
    }
}

export const putCustomer = (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    
        res.json({
            msg: 'putCustomer',
            id,
            body
        })
}

export const deleteCustomer = (req: Request, res: Response) => {
    const {id} = req.params;
        
        res.json({
            msg: 'deleteCustomer',
            id
        })
}