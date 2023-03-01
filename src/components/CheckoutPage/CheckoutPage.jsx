import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import style from "./CheckoutCard.module.css";

const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <div>
        {basket?.map((product) => (
          <div key={product.id}>
            <CheckoutCard item={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className={style.TituloCart}>
          <h1>Carrito de compra</h1>
          <div className={style.linea}></div>
        </div>
        <div>
          <div className={style.prueba}>
            <h2 className={style.Carro1}> Imagen </h2>
            <h2 className={style.Carro2}> Nombre </h2>
            <h2 className={style.Carro3}> Categoria </h2>

            <h2 className={style.Carro4}> Tallas </h2>

            <h2 className={style.Carro5}> precio </h2>

            <h2 className={style.Carro6}> Borrar </h2>
          </div>
          <FormRow />
        </div>
        <div>
          <div>
            <Total />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
