import SocialMedia from "../../components/Social-Media/SocialMedia"
import CardProduct from "../../components/CardProduct/CardProduct"
import Footer from "../../components/Footer/Footer"
import { Carousel } from "@trendyol-js/react-carousel"
import ProductDetail from "../../components/ProductDetailF/productDetail"
import ShowProduct from "../../components/ProductDetailF/ShowProduct"

import React from "react";
import productsData from "../../components/ProductDetailF/productsData";
import { Link } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail"

<ItemDetail/>



/* const Products = () => {
  const products= productsData.map(product => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Precio: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
};

export default Products; */
{/*   -------------- */}
/* function Products(){
    return(<>
   

  <Carousel show={4} slide={4} swiping={true}>
   
   
</Carousel>
    
    <SocialMedia/>
    <Footer/>
    </>)
}
//export default Products  */