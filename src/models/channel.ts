import mongoose from "mongoose";

const {Schema, model} = mongoose;

const channelSchema = new Schema({
    ecommerce: {
        type: Schema.Types.ObjectId,
        ref: 'Ecommerce',
        required: [true,'an associated ecommerce must be provided']
    },
    name: {
        type: String,
        required: [true,'a name must be provided']
    },
    channelNumber: {
        type: Number,
        required: [true,'Channel number must be provided']
    }
});


export default model('Channel', channelSchema);