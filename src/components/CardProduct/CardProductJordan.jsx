import style from "./CardProduct.module.css";
import { jordan } from "../Carousel/data.js";
import cart from '../../assets/cart.svg';

export default function CardProductJordan() {
  return (<>
    <h1 className={style.cardProductencabezado}>Jordan</h1>
    {jordan.map(item => (
      <div key={item.id} className={style.cardProducttarget}>
        <div className={style.cardProductbackgroundJordan}>
          <img className={style.cardProductCardProduct} src={item.src} alt={item.name} />
          <div className={style.cardProductname}>
            <p className={style.cardProductpj}>{item.name}</p>
          </div>
          <div className={style.cardProductcod}>
            <p className={style.cardProductpj}>{item.category}</p>
          </div>
          <div className={style.cardProductcost}>
            <p className={style.cardProductpj}>{item.price}</p>
          </div>
          <div className={style.cardProductshopping}>
            <img className={style.cardProductcards} src={cart} alt="Shopping cart"></img>
          </div>
        </div>
      </div>
    ))}
  </>)
}