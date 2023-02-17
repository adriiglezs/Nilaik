
import { popularProducts } from "../../data";
import Product from "./Product";
import style from "./Products.module.css";

const Products = () => {
  return (<>
    <div className={style.div}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  </>);

};

export default Products;