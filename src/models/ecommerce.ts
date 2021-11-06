import mongoose from "mongoose";

const {Schema, model} = mongoose;

const ecommerceSchema = new Schema({
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

//Sobreescritura de motodo toJSON para no enviar __V ni password
ecommerceSchema.methods.toJSON = function() {
    const {__v, password, ...ecommerce} = this.toObject();
    return ecommerce;
}



export default model('Ecommerce', ecommerceSchema);