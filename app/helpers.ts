import mongoose = require("mongoose");
import { resolve } from "dns";

const uri: string = "mongodb+srv://Dania:12345@cluster0-8ggvt.azure.mongodb.net/test?retryWrites=true&w=majority";
export const connectMongoDB  = new Promise<void>(resolve => {
    mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa");
        }
        resolve();
    });
});
