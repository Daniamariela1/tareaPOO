import mongoose = require("mongoose");
import {IPaquete, getPaquetes} from "./Paquetes"
import {connectMongoDB} from "./helpers"

export interface IRepartidor extends mongoose.Document { 
    name: string;
    direccion: string;
    correo: string;
    telefono: string;
    paquete: IPaquete;
}

const RepartidorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    correo: {type: String, required: true},
    direccion: { type: String, required: true },
    telefono: {type: String, required: true},
    paquete: { type: mongoose.Schema.Types.ObjectId, ref: "Paquete" }
});

export const Repartidor = mongoose.model<IRepartidor>("Repartidor", RepartidorSchema);

export const CreateRepartidor = async function(namePaquetes: string, name: string, direccion: string, correo: string, telefono: string){
    await connectMongoDB;

    const paq: any = await getPaquetes(namePaquetes);

    const newOne = new Repartidor();
    newOne.name = name;
    newOne.direccion = direccion;
    newOne.correo = correo;
    newOne.telefono = telefono;
    newOne.paquete = paq;

    newOne.save( (err:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOne);
        }
    } );
}


