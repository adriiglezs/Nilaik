import { useStateValue } from "../../StateProvider";
//import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxTrash } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { actionTypes } from "../../reducer";
import style from "./CheckoutCard.module.css";


const CheckoutCard = ({ setTotal, index, total, item: { idProducto, marca, codigo, color, precioMayoreo, url } }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      idProducto,
    });
  };

  const onAdd = (key) => {
    switch (key) {
      case 2:
        let val2 = Array.from(total);
        val2[index] = { ...val2[index], num2: val2[index]?.num2 + 1 };
        setTotal(val2);
        break;
      case 4:
        let val4 = Array.from(total);
        val4[index] = { ...val4[index], num4: val4[index]?.num4 + 1 };
        setTotal(val4);
        break;
      case 6:
        let val6 = Array.from(total);
        val6[index] = { ...val6[index], num6: val6[index]?.num6 + 1 };
        setTotal(val6);
        break;
      case 8:
        let val8 = Array.from(total);
        val8[index] = { ...val8[index], num8: val8[index]?.num8 + 1 };
        setTotal(val8);
        break;
      case 10:
        let val10 = Array.from(total);
        val10[index] = { ...val10[index], num10: val10[index]?.num10 + 1 };
        setTotal(val10);
        break;
      case 12:
        let val12 = Array.from(total);
        val12[index] = { ...val12[index], num12: val12[index]?.num12 + 1 };
        setTotal(val12);
        break;
    }
  }

  const onRemove = (key) => {
    switch (key) {
      case 2:
        let val2 = Array.from(total);
        if ((val2[index]?.num2 - 1) >= 0) {
          val2[index] = { ...val2[index], num2: val2[index]?.num2 - 1 }
          setTotal(val2)
        }
        break;
      case 4:
        let val4 = Array.from(total);
        if ((val4[index]?.num4 - 1) >= 0) {
          val4[index] = { ...val4[index], num4: val4[index]?.num4 - 1 }
          setTotal(val4)
        }
        break;
      case 6:
        let val6 = Array.from(total);
        if ((val6[index]?.num6 - 1) >= 0) {
          val6[index] = { ...val6[index], num6: val6[index]?.num6 - 1 }
          setTotal(val6)
        }
        break;
      case 8:
        let val8 = Array.from(total);
        if ((val8[index]?.num8 - 1) >= 1) {
          val8[index] = { ...val8[index], num8: val8[index]?.num8 - 1 }
          setTotal(val8)
        }
        break;
      case 10:
        let val10 = Array.from(total);
        if ((val10[index]?.num10 - 1) >= 0) {
          val10[index] = { ...val10[index], num10: val10[index]?.num10 - 1 }
          setTotal(val10)
        }
        break;
      case 12:
        let val12 = Array.from(total);
        if ((val12[index]?.num12 - 1) >= 0) {
          val12[index] = { ...val12[index], num12: val12[index]?.num12 - 1 }
          setTotal(val12)
        }
        break;
    }
  }

  return (
    <div key={idProducto} className={style.target}>
      <div className={style.background}>
        <img className={style.CardProduct} src={url} alt={marca + " " + color} />
        <div className={style.name}>
          <h1 className={style.nameL}>{marca + " " + color}</h1>
        </div>
        <div className={style.cod}>
          <h2 className={style.codL}>{codigo}</h2>
        </div>

        {/* <div className={style.tallas}>
          <h2 className={style.labelNumT}>2</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => onAdd(2)}>
              +
            </button>
            <label className={style.labelNumC} type="number" id="label2">
              {total[index]?.num2}
            </label>
            <button className={style.tallasB} onClick={() => onRemove(2)}>
              -
            </button>
          </div>
        </div>
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>4</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => onAdd(4)}>
              +
            </button>
            <label className={style.labelNumC} type="number" id="label2">
              {total[index]?.num4}
            </label>
            <button className={style.tallasB} onClick={() => onRemove(4)}>
              -
            </button>
          </div>
        </div>
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>6</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => onAdd(6)}>
              +
            </button>
            <label className={style.labelNumC} type="number" id="label2">
              {total[index]?.num6}
            </label>
            <button className={style.tallasB} onClick={() => onRemove(6)}>
              -
            </button>
          </div>
        </div> */}
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>Unitalla</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => onAdd(8)}>
              +
            </button>
            <label className={style.labelNumC} type="number" id="label2">
              {total[index]?.num8}
            </label>
            <button className={style.tallasB} onClick={() => onRemove(8)}>
              -
            </button>
          </div>
        </div>
        {/* <div className={style.tallas}>
          <h2 className={style.labelNumT}>10</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => onAdd(10)}>
              +
            </button>
            <label className={style.labelNumC} type="number" id="label2">
              {total[index]?.num10}
            </label>
            <button className={style.tallasB} onClick={() => onRemove(10)}>
              -
            </button>
          </div>
        </div>
        <div className={style.tallas}>
          <h2 className={style.labelNumT}>12</h2>
          <div className={style.labelNum}>
            <button className={style.tallasB} onClick={() => onAdd(12)}>
              +
            </button>
            <label className={style.labelNumC} type="number" id="label2">
              {total[index]?.num12}
            </label>
            <button className={style.tallasB} onClick={() => onRemove(12)}>
              -
            </button>
          </div>
        </div> */}

        <div className={style.cost}>
          <h3 className={style.costL}>
            ${(total[index]?.num2 + total[index]?.num4 + total[index]?.num6
              + total[index]?.num8 + total[index]?.num10 + total[index]?.num12) * precioMayoreo}
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
