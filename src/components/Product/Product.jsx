import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./Product.module.css";

const Product = ({ item }) => {
  return (
    <div className={style.target}>
      <div className={style.background}>
        <img className={style.CardProduct} src={item.src} alt={item.name} />
        <div className={style.name}>
          <h1 className={style.nameL}>{item.name}</h1>
        </div>
        <div className={style.cod}>
          <h2 className={style.codL}>{item.category}</h2>
        </div>
        <div className={style.cost}>
          <h3 className={style.costL}>{item.price}</h3>
        </div>
        <div className={style.shopping}>
          <button className={style.btnCart} onClick={addToBasket}>
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
