import mongoose from "mongoose";

export const dbConnection = async() => {
    try {
        const url = process.env.MONGO_URL || 'mongodb://localhost:27017/';
        await mongoose.connect(
            url          
        )
        console.log('Database connected');
    } catch (error) {
        console.error(error);
        throw new Error('Error al iniciar la base de datos');
    }
}