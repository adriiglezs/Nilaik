import React from "react";
import Product from "../Product/Product";
import Products from "../Product/Products";

//import { useStateValue } from "../StateProvider";
import CheckoutCard from "./CheckoutCard";
//import Total from "./Total";

import {adidasBicolor, nike} from "./data";
import Total from "./Total";

const CheckoutPage = () => {
  //const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <div>
        {nike.map((item) => (
          <div>
            <Product key={item.id} item={item} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div >
      <div>
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <div>
          <FormRow/>
        </div>
        <div>
          <div><Total/> </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
