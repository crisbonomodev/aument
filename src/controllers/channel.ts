import { Request, Response } from "express";
import Channel from '../models/channel'; 
import Ecommerce from "../models/ecommerce";

export const getChannelByEcommerceId = async (req: Request, res: Response) => {

    const id = req.headers['x-flow-ecommerce-id'];

    try {
        const ecommerceFound = await Ecommerce.findById(id);
    
        if(!ecommerceFound) {
          return  res.status(400).json({
                message: 'ecommerce invalid'
            })
        }
    
    
        const channelsFound = await Channel.find({ecommerce: ecommerceFound});
    
        return res.status(200).json({
            msg: `channels for e-commerce ${ecommerceFound.name}`,
            channelsFound
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting Channels by e-commerce'
        });
    }
    

}

export const getChannelById = async (req: Request, res: Response) => {
const {id} = req.params;

try {
    const channelFound = await Channel.findById(id);

    if(!channelFound) {
        return res.status(400).json({
            message: 'invalid channel id'
        });
    }
    return res.status(200).json({
        channelFound
    });


} catch (error) {
    res.status(500).json({
            message: 'Error getting Channel'
        });
}

    res.json({
        msg: 'getChannelById',
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