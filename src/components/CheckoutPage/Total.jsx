import { Button } from "@mui/material/";
import style from "./Total.module.css";

import { getBasketTotal } from "../../reducer";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Total = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={style.root}>
      <h2>Productos: {basket?.length}</h2>
      <h2>Total: ${getBasketTotal(basket)}.00 MXN</h2>
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
