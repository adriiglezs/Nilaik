import { useStateValue } from "../../StateProvider";
//import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxTrash } from "react-icons/rx";

import React, { useState } from "react";

import { actionTypes } from "../../reducer";
import style from "./CheckoutCard.module.css";

const CheckoutCard = ({ item: { id, name, src, category, price } }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id,
    });
  };

  const [num2, setNum2] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num6, setNum6] = useState(0);
  const [num8, setNum8] = useState(0);
  const [num10, setNum10] = useState(0);
  const [num12, setNum12] = useState(0);
  const handleDecrease2 = () => {
    if (num2 > 0) {
      setNum2(num2 - 1);
    }
  };

  const handleDecrease4 = () => {
    if (num4 > 0) {
      setNum4(num4 - 1);
    }
  };
  const handleDecrease6 = () => {
    if (num6 > 0) {
      setNum6(num6 - 1);
    }
  };
  const handleDecrease8 = () => {
    if (num8 > 0) {
      setNum8(num8 - 1);
    }
  };
  const handleDecrease10 = () => {
    if (num10 > 0) {
      setNum10(num10 - 1);
    }
  };
  const handleDecrease12 = () => {
    if (num12 > 0) {
      setNum12(num12 - 1);
    }
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

        <div className={style.tallas}>
          <h2 className={style.labelNumT}>2</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => setNum2(num2 + 1)}>
              +
            </button>
            <label className={style.labelNumC} type="number" id="label2">
              {num2}
            </label>
            <button className={style.tallasB} onClick={handleDecrease2}>
              -
            </button>
          </div>
        </div>
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>4</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => setNum4(num4 + 1)}>
              +
            </button>
            <label className={style.labelNumC}>{num4}</label>
            <button className={style.tallasB} onClick={handleDecrease4}>
              -
            </button>
          </div>
        </div>
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>6</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => setNum6(num6 + 1)}>
              +
            </button>
            <label className={style.labelNumC}>{num6}</label>
            <button className={style.tallasB} onClick={handleDecrease6}>
              -
            </button>
          </div>
        </div>
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>8</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => setNum8(num8 + 1)}>
              +
            </button>
            <label className={style.labelNumC}>{num8}</label>
            <button className={style.tallasB} onClick={handleDecrease8}>
              -
            </button>
          </div>
        </div>
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>10</h2>
          <div className={style.labelNum}>
            <button
              className={style.tallasB}
              onClick={() => setNum10(num10 + 1)}
            >
              +
            </button>
            <label className={style.labelNumC}>{num10}</label>
            <button className={style.tallasB} onClick={handleDecrease10}>
              -
            </button>
          </div>
        </div>
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>12</h2>
          <div className={style.labelNum}>
            <button
              className={style.tallasB}
              onClick={() => setNum12(num12 + 1)}
            >
              +
            </button>
            <label className={style.labelNumC}>{num12}</label>
            <button className={style.tallasB} onClick={handleDecrease12}>
              -
            </button>
          </div>
        </div>

        <div className={style.cost}>
          <h3 className={style.costL}>
            {/*price*/}
            {(num2 + num4 + num6 + num8 + num10 + num12) * price}
          </h3>
        </div>
        <div className={style.shopping}>
          <button className={style.btnCart} onClick={removeItem}>
            <RxTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
