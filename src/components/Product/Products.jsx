import React from "react";
import { nike } from "././../CheckoutPage/data";
import Product from "./Product";
import style from "./Products.module.css";

const Products = () => {
  return (
    <div className={style.productContainer}>
      {nike.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
