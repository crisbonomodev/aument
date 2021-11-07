import { Request, Response } from "express";

import Customer from '../models/customer';
import Ecommerce from "../models/ecommerce";
import Order from "../models/order";
import Channel from "../models/channel";

export const getOrderById = async (req: Request, res: Response) => {

    const {id} = req.params;

    try {
        const orderFound = await Order.findById(id);
    
        if(!orderFound) {
          return  res.status(400).json({
                message: 'order id invalid'
            })
        }

        return res.status(200).json({
            orderFound
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting order'
        });
    }
}

export const getOrdersByEcommerce = async (req: Request, res: Response) => {
    const id = req.headers['x-flow-ecommerce-id'];

    try {
        const ecommerceFound = await Ecommerce.findById(id);
    
        if(!ecommerceFound) {
          return  res.status(400).json({
                message: 'ecommerce invalid'
            })
        }
    
    
        const orders = await Order.find({ecommerce: ecommerceFound});
    
        return res.status(200).json({
            msg: `orders for e-commerce ${ecommerceFound.name}`,
            orders
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting orders by e-commerce'
        });
    }
}

export const getOrdersByCustomer = async (req: Request, res: Response) => {

    const {id} = req.params;

    try {

        const customerFound = await Customer.findById(id);

        if(!customerFound) {
            return  res.status(400).json({
                message: 'customer id invalid'
            })
        }

        const orders = await Order.find({customer: customerFound});


        return res.status(200).json({
            message: `Orders for customer ${customerFound.name}`,
            orders
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting order'
        });
    }
}

export const postOrder = async (req: Request, res: Response) => {

    let {channel, cancelReason, currency, gateway, id, languaje, locationId, name, ownerNote, 
        paymentStatus, status, subtotal, token, discount, price, priceUsd, weight, shippedAt, 
        number, products, storefront, customer} = req.body;
    const ecommerceId = req.headers['x-flow-ecommerce-id'];
        try {
                //validamos el ecommerce
                const ecommerce = await Ecommerce.findById(ecommerceId);
                if(!ecommerce) {
                    return res.status(400).json({
                        message: 'Invalid ecommerce'
                    });
                }
                //validamos en channel
                const channelId = await Channel.findOne({channelNumber: channel});
                if(!channelId) {
                    return res.status(400).json({
                        message: 'Invalid channel'
                    });
                }
                //buscamos si la orden ya existe
                const existingOrder = await Order.findOne({number: number, ecommerceId: ecommerce});
                if(existingOrder) {
                    return res.status(400).json({
                        message: `Order number ${number} already exists`
                    });
                }
                
                //Buscamos si el cliente ya existe, sino lo creamos
                const foundCustomer = await Customer.findOne({id: customer.id});

                if(!foundCustomer) {
                const newCustomer = await new Customer(customer).save();
                customer = newCustomer;
                }
                else 
                {
                    customer = foundCustomer;
                };

                const newOrder = await new Order({channel, cancelReason, currency, gateway, id, languaje, locationId, name, ownerNote, 
                paymentStatus, status, subtotal, token, discount, price, priceUsd, weight, shippedAt, 
                number, products, storefront,ecommerce, channelId, customer}).save();

                res.json({
                    msg: 'Order created',
                    newOrder
        });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating order'
            });
        }

}

export const putOrder = (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    
        res.json({
            msg: 'putOrder',
            id,
            body
        })
}

export const deleteOrder = (req: Request, res: Response) => {
    const {id} = req.params;
        
        res.json({
            msg: 'deleteOrder',
            id
        })
}