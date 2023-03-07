import { useCookies } from 'react-cookie';
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import style from "./CheckoutCard.module.css";
import { withCookies } from 'react-cookie';

const CheckoutPage = ({ cookies }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [total, setTotal] = useState(cookies.get('cart') || Array.from(Array(10).keys())?.map(() => ({
    num2: 0, num4: 0, num6: 0, num8: 0, num10: 0, num12: 0, total: 0, precioMayoreo: 0, idProducto: 0
  })));
  /* console.log(total); */
  const [status, setStatus] = useState(0);
  useEffect(() => {
    cookies.set('cart', total)
  }, [total])

  function FormRow() {
    return (
      <div>
        {basket?.map((product, index) => (
          <div key={product.idProducto}>
            <CheckoutCard setTotal={setTotal} total={total} index={index} item={product} />
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
            <div className={style.Carro1}> Imagen </div>
            <div className={style.Carro2}> Nombre </div>
            <div className={style.Carro3}> Categoria </div>

            <div className={style.Carro4}> Tallas </div>

            <div className={style.Carro5}> precio </div>

            <div className={style.Carro6}> Borrar </div>
          </div>
          <FormRow />
        </div>
        <div>
          <div>
            <Total total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withCookies(CheckoutPage);
