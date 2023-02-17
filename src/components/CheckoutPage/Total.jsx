import { Button } from "@mui/material/";
import style from './Total.module.css'

//import { useStateValue } from "../StateProvider";
//import { getBasketTotal } from "../reducer";
import { Link } from "react-router-dom";



const Total = () => {
  
  //const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={style.root}>
      <h2>Total items : 3</h2>
      <h2>500</h2>
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
