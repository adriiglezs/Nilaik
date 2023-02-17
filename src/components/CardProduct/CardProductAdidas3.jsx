import style from "./CardProduct.module.css";
import { adidas3 } from "../Carousel/data.js";
import cart from '../../assets/cart.svg';

export default function CardProductAdidas3() {
  return (<>
    <h1 className={style.encabezado}>Adidas 3</h1>
    {adidas3.map(item => (
      <div key={item.id} className={style.cardProducttarget}>
        <div className={style.cardProductbackgroundAdidas3}>
          <img className={style.cardProductCardProduct} src={item.src} alt={item.name} />
          <div className={style.cardProductname}>
            <p className={style.cardProductp}>{item.name}</p>
          </div>
          <div className={style.cardProductcod}>
            <p className={style.cardProductp}>{item.category}</p>
          </div>
          <div className={style.cardProductcost}>
            <p className={style.cardProductp}>{item.price}</p>
          </div>
          <div className={style.cardProductshopping}>
            <img className={style.cardProductcards} src={cart} alt="Shopping cart"></img>
          </div>
        </div>
      </div>
    ))}
  </>)
}

