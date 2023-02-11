import React from "react";
import productsData from "./ProductData";
import Product from "./Product"

export default function Products (){
  return(
  <div>
     {Products.map(product => (
      <Product key= {ProductsData.id} product = {ProductsData}/>
     ))}
  </div>)
}