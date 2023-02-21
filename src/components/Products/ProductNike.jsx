import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "../Carousel/Carousel.module.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import cart from "../../assets/cart.svg";

const ProductNike = ({ item: { id, name, src, category, price } }) => {
  const [{ basket }, dispatch] = useStateValue(0);

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
    <div key={id} className={style.carouseltarget}>
      <div className={style.carouselbackgroundNike}>
        <img className={style.carouselCardProduct} src={src} alt={name} />
        <div className={style.carouselname}>
          <p className={style.carouselp}>{name}</p>
        </div>
        <div className={style.carouselcod}>
          <p className={style.carouselp}>{category}</p>
        </div>
        <div className={style.carouselcost}>
          <p className={style.carouselp}>${price}.00</p>
        </div>
        <div className={style.carouselshopping} onClick={addToBasket}>
          <img
            className={style.carouselcards}
            src={cart}
            alt="Shopping cart"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ProductNike;
