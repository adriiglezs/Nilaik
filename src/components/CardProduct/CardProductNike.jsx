/* import style from "./CardProduct.module.css";
import { nike } from "../Carousel/data.js";
import cart from '../../assets/cart.svg';

export default function CardProductNike() {
  return (<>
    <h1 className={style.cardProductencabezado}>Nike</h1>
    {nike.map(item => (
      <div key={item.id} className={style.cardProducttarget}>
        <div className={style.cardProductbackgroundNike}>
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
} */