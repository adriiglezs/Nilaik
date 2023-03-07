/* import { Button } from "@mui/material/";
import style from "./Total.module.css";
import { getBasketTotal } from "../../reducer";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Total = ({ total }) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const username = userData ? userData.username : "";

  const [{ basket }, dispatch] = useStateValue();
  const getQuantity = () => {
    let sum = 0;
    total?.forEach((item, index) => {
      sum += (item?.num2 + item?.num4 + item?.num6 + item?.num8 + item?.num10 + item?.num12) * ([null, undefined, NaN, ''].includes(basket[index]?.precioMayoreo) ? 0 : 1)
    });
    return sum;
  }

  const getTotal = () => {
    let sum = 0;
    total?.forEach((item, index) => {
      sum += (item?.num2 + item?.num4 + item?.num6 + item?.num8 + item?.num10 + item?.num12) * (basket[index]?.precioMayoreo || 0)
    });
    return sum;
  }

  return (
    <div className={style.root}>
      <h2>Productos: {getQuantity()}</h2>
      <h2>Total: ${getTotal()}.00 MXN</h2>
      <Button
        component={Link}
        to="/checkout"
        className={style.btn}
        variant="contained"
        color="primary"
      >
        Check out
      </Button>
    </div>
  );
};

export default Total;
 */

import { Button } from "@mui/material/";
import style from "./Total.module.css";
import { getBasketTotal } from "../../reducer";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Total = ({ total }) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const username = userData ? userData.username : "";

  const [{ basket }, dispatch] = useStateValue();
  const getQuantity = () => {
    let sum1 = 0;
    total?.forEach((item, index) => {
      sum1 += (item?.num2 + item?.num4 + item?.num6 + item?.num8 + item?.num10 + item?.num12) * ([null, undefined, NaN, ''].includes(basket[index]?.precioMayoreo) ? 0 : 1)
    });
    return sum1;
  }

  const getTotal = () => {
    let sum2 = 0;
    total?.forEach((item, index) => {
      sum2 += (item?.num2 + item?.num4 + item?.num6 + item?.num8 + item?.num10 + item?.num12) * (basket[index]?.precioMayoreo || 0)
    });
    return sum2;
  }

  const handleCheckoutClick = () => {
    if (!username) {
      alert('Debe iniciar sesión primero');
      /* indow.location.href = "/login"; */
    } else {
      const orderData = {
        quantity: getQuantity(),
        total: getTotal()
      };
      const jsonOrder = JSON.stringify(orderData);
      localStorage.setItem('order', jsonOrder);
      window.location.href = "/checkout";
    }
  }


  return (
    <div className={style.root}>
      <h2>Productos: {getQuantity()}</h2>
      <h2>Total: ${getTotal()}.00 MXN</h2>
      <Link to="/login">
        <Button
          onClick={handleCheckoutClick}
          className={style.btn}
          variant="contained"
          color="primary"
        >
          Check out
        </Button>
      </Link>
    </div>
  );
};

export default Total;

