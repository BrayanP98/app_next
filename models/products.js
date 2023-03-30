import mongoose from "mongoose";

const prodSchema= new mongoose. Schema({
    cantidad:{
        type:String,
        required:true,
        unique:false,
        trim:true
           },
    categoria:{
        type:String,
        required:true,
        unique:false,
    },
    codigo:{
        type:String,
       
        unique:true,
        trim:true

    },
    nombre:{
        type:String,
       
        unique:true,
        trim:true

    },
    valor:{
        type:String,
        required:true,
        trim:true

     },
    descripcion:{
        type:String,
        required:true },

   

    imagen:{
        type:String
    },

     done: Boolean,},{
        timestamps:true,
        versionKey:false
     
});

export default mongoose.models.product || mongoose.model('product', prodSchema)
