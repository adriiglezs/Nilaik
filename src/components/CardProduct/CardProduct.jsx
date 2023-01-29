import style from "./CardProduct.module.css";

export default function CardProduct({ name, photoUrl, code, cost }) {
  return (<>
    <div className={style.target}>
      <div className={style.background}>
        <img className={style.CardProduct} src={photoUrl} alt="Nike" />
        <div className={style.name}>
          <h1  >{name}</h1>
        </div>
        <div className={style.cod} >
          <h2>{code}</h2>
        </div>
        <div className={style.cost}>
          <h3 >{cost}</h3>
        </div>
        <div className={style.shopping} >
          <img src="/src/assets/cart.svg" alt="carro de compra para añadir tus productos"></img>
        </div>
      </div>
    </div>
  </>)
}