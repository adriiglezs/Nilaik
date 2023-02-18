import { useStateValue } from "../../StateProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { actionTypes } from "../../reducer";
import style from "./CheckoutCard.module.css";

const CheckoutCard = ({ item:{
    id,
    name,
    src,
    category,
    price, 
  }}) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
       id,
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
          <button className={style.btnCart} onClick={removeItem}>
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
