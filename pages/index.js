import React from "react";

import dbConnect from "../lib/dbConect";
import products from "../models/products";
 export default function index({Product}){
  //console.log(Product)

    return( 

        <div>
            {
                     Product.map(({_id, cantidad, categoria, codigo,nombre,imagen }) => (
                        <div className="{_id}" key={_id}>
                        <h1 key={nombre}>hola mundo next {nombre}</h1>

                            <img src={imagen}></img>
                     </div>
                     )
           ) }
       
         
       
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
 