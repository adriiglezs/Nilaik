import style from "./CardProduct.module.css";
import { pumaArlequin } from "../Carousel/data.js";
import cart from '../../assets/cart.svg';
import Product from "../Products/Product"

export default function CardProductPumaArlequin() {
  return (
    <>
      <h1 className={style.cardProductencabezado}>Puma Arlequin</h1>
      {pumaArlequin.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </>
  );
}