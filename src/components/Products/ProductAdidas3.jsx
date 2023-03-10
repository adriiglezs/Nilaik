import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "../Carousel/Carousel.module.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import cart from "../../assets/cart.svg";

const ProductAdidas3 = ({ item: { id, name, src, category, price } }) => {
  const [{ basket }, dispatch] = useStateValue(0);

  const addToBasket = () => {
    if (basket?.filter((product) => (product?.id === id))?.length > 0) return;
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
      <div className={style.carouselbackgroundAdidas3}>
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

export default ProductAdidas3;
