import { Request, Response } from "express";
import Channel from '../models/channel'; 
import Ecommerce from "../models/ecommerce";

export const getChannels = (req: Request, res: Response) => {
    res.json({
        msg: 'getChannels'
    })
}

export const getChannel = (req: Request, res: Response) => {
const {id} = req.params;

    res.json({
        msg: 'getChannel',
        id
    })
}

export const postChannel = async (req: Request, res: Response) => {
    let {name,channelNumber} = req.body;
    const ecommerceId = req.headers['x-flow-ecommerce-id'];
    try {


        const ecommerce = await Ecommerce.findById(ecommerceId);

        if(!ecommerce) {
            return res.status(400).json({
                code: 'error',
                message: 'ecommerce not found'
            });
        }

        const channelFound = await Channel.findOne({channelNumber: channelNumber, ecommerce: ecommerce});
        if(channelFound) {
            return res.status(400).json({
                code: 'error',
                message: 'Channel already created'
            });
        }
    
        const channel = new Channel({name, ecommerce, channelNumber});
        const newChannel = await channel.save();
    
        res.status(201).json({
                msg: 'Channel created successfully',
                newChannel
            })
    } catch (error) {
        return res.status(500).json({
            code:'error',
            message: 'Internal error'
        })
    }

   
}

export const putChannel = (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    
        res.json({
            msg: 'putChannel',
            id,
            body
        })
}

export const deleteChannel = (req: Request, res: Response) => {
    const {id} = req.params;
        
        res.json({
            msg: 'deleteChannel',
            id
        })
}