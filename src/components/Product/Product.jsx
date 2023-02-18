import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./Product.module.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Product = ({ item:{
    id,
    name,
    src,
    category,
    price,
  } }) => {

 const [{basket},dispatch] = useStateValue();

  const addToBasket = () => {
  dispatch({
    type: actionTypes.ADD_TO_BASKET,
    item: {
      id,
      name,
      src,
      category,
      price,
    },
  });
};
  

  return (
    <div key={id} className={style.target}>
      <div className={style.background}>
        <img className={style.CardProduct} src={src} alt={name} />
        <div className={style.name}>
          <h1 className={style.nameL}>{name}</h1>
        </div>
        <div className={style.cod}>
          <h2 className={style.codL}>{category}</h2>
        </div>
        <div className={style.cost}>
          <h3 className={style.costL}>{price}</h3>
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
