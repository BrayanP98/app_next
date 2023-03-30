const { connect }=require('mongoose');
require('dotenv').config()

const URI_MONGO=process.env.URI_MONGO;
const dbconect= async() => {
    

     try{


      const db =await connect(process.env.URI_MONGO);
  // const db =await connect("mongodb://{localhost}/usuarios");

        console.log("db connected");

     }catch(error){
        console.error(error);

        
     }
}
export default dbconect;
