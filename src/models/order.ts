import mongoose from "mongoose";

const {Schema, model} = mongoose;

const orderSchema = new Schema({
    name: {
        type: String,
        required: [true,'a name must be provided']
    },
    mail: {
        type: String,
        required: [true,'an email must be provided']
    },
     password: {
         type: String,
         required: [true, 'a password must be provided']
     }
});

export default model('order', orderSchema);