//import Product from "../Product/Product";
//import Products from "../Product/Products";
//import Total from "./Total";
//import {adidasBicolor, nike} from "./data";

import React from "react";
import { useStateValue } from '../../StateProvider';
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import style from "./CheckoutCard.module.css"

const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <div>
        {basket?.map((product) => (
          <div>
            <CheckoutCard key={product.id} item={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className={style.TituloCart}>
          <h1>Shopping Cart</h1>
        </div>
        <div>
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
