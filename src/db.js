import mongoose from "mongoose";

export const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL ||"mongodb://0.0.0.0:27017/proyectodb");
        console.log(">>> DB is conected");
    } catch (error) {
        console.log(error);
    }
};
