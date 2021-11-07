import { Request, Response } from "express";

export const getOrders = (req: Request, res: Response) => {
    res.json({
        msg: 'getOrders'
    })
}

export const getOrder = (req: Request, res: Response) => {
const {id} = req.params;

    res.json({
        msg: 'getOrder',
        id
    })
}

export const postOrder = (req: Request, res: Response) => {
    
    const {body} = req;
    
        res.json({
            msg: 'postOrder',
            body
        })
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