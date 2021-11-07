import { Request, Response } from "express";
import Ecommerce from '../models/ecommerce'; 
import bcrypt from "bcrypt";

export const getEcommerce = async (req: Request, res: Response) => {

    const {id} = req.params;

    const ecommerceFound = await Ecommerce.findById(id);

    res.status(200).json({
       ecommerceFound
    })
}


export const postEcommerce = async (req: Request, res: Response) => {
    let {name, password, mail} = req.body;
    const salt = bcrypt.genSaltSync();

    password = bcrypt.hashSync(password,salt);

    const ecommerce = new Ecommerce({name, password, mail});

    const verifyEmail = await Ecommerce.findOne({mail});

        if(verifyEmail) {
          return res.status(400).json({
               error: 'Email already in use'
            });
        }

        const newEcommerce = await ecommerce.save();

        res.status(201).json({
            msg: 'Ecommerce created successfully',
            newEcommerce
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