import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "../Carousel/Carousel.module.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import cart from "../../assets/cart.svg";

const Product = ({ item: { idProducto, articulo, marca, codigo, color, precioMayoreo, precioMenudeo, existencias, url } }) => {
  const [{ basket }, dispatch] = useStateValue(0);

  const addToBasket = () => {
    if (basket?.filter((product) => (product?.idProducto === idProducto))?.length > 0) return;
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        idProducto,
        articulo,
        marca,
        codigo,
        color,
        precioMayoreo,
        precioMenudeo,
        existencias,
        url
      },
    });
  };

  return (
    <div key={idProducto} className={style.carouseltarget}>
      <div className={style.carouselbackgroundNike}>
        <img className={style.carouselCardProduct} src={url} alt={marca + " " + color} />
        <div className={style.carouselname}>
          <p className={style.carouselp}>{marca + " " + color}</p>
        </div>
        <div className={style.carouselcod}>
          <p className={style.carouselp}>{codigo}</p>
        </div>
        <div className={style.carouselcost}>
          <p className={style.carouselp}>${precioMayoreo}.00</p>
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

export default Product;