/* import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} 
from "@material-ui/icons"; */

import style from "./Products.module.css";

const Product = ({ item }) => {
  return (
    <div className={Container2}>
      <div className={style.Circle} />
      <img className={style.img} src={item.img} />
      <div className={style.Info}>
        <div className={style.Icon}>
          <ShoppingCartOutlined />
        </div>
        <div className={style.Icon}>
          <SearchOutlined />
        </div>
        <div className={style.Icon}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;