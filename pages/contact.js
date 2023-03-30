import React from "react";
 export default function index(){

    return( 

        <div>
         <h1>hola mundo next contact</h1>

        </div>
    )
 }
 export async function getServerSideProps() {
    try {
      await dbConnect();
       //const res= await products.find({})

       let Product= await products.find({})
       Product = JSON.parse(JSON.stringify(Product))
       
      return { props: {Product} };
    } catch (error) {
      console.log(error);
    }
  }
 