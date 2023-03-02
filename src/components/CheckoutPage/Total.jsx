import { Button } from "@mui/material/";
import style from "./Total.module.css";
import { getBasketTotal } from "../../reducer";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Total = ({ total }) => {
  const [{ basket }, dispatch] = useStateValue();
  const getQuantity = () => {
    let sum = 0;
    total?.forEach((item, index) => {
      sum += (item?.num2 + item?.num4 + item?.num6 + item?.num8 + item?.num10 + item?.num12) * ([null, undefined, NaN, ''].includes(basket[index]?.price) ? 0 : 1)
    });
    return sum;
  }

  const getTotal = () => {
    let sum = 0;
    total?.forEach((item, index) => {
      sum += (item?.num2 + item?.num4 + item?.num6 + item?.num8 + item?.num10 + item?.num12) * (basket[index]?.price || 0)
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
