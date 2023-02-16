import React from "react";

//import { useStateValue } from "../StateProvider";
import CheckoutCard from "./CheckoutCard";
//import Total from "./Total";

import adidasBicolor from './data'



const CheckoutPage = () => {
  
  //const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <div>
        {adidasBicolor.map((item) => (
          <div >
            <CheckoutCard key={item.id} product={item} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={style.hola}>
      <div >
        <div >
          <p>
            Shopping Cart
          </p>
        </div>
        <div   >
          <FormRow />
        </div>
        <div >
          <div >
            Total
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
