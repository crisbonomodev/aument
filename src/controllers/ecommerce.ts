import { Request, Response } from "express";

export const getEcommerces = (req: Request, res: Response) => {
    res.json({
        msg: 'getEcommerces'
    })
}

export const getEcommerce = (req: Request, res: Response) => {
const {id} = req.params;

    res.json({
        msg: 'getEcommerce',
        id
    })
}

export const postEcommerce = (req: Request, res: Response) => {
    const {body} = req;
    
        res.json({
            msg: 'postEcommerce',
            body
        })
}

export const putEcommerce = (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    
        res.json({
            msg: 'putEcommerce',
            id,
            body
        })
}

export const deleteEcommerce = (req: Request, res: Response) => {
    const {id} = req.params;
        
        res.json({
            msg: 'deleteEcommerce',
            id
        })
}