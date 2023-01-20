import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import brand from "../../assets/brand.png";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Link to="/">
          <img
            className={style.img}
            src={brand}
            alt="Nilaik logo de colores diversos"
          />
        </Link>
      </div>
      <div className={style.options}>
        <Link to="/products">
          <h2>Productos</h2>
        </Link>
        <Link to="/about">
          <h2>Acerca de</h2>
        </Link>
        <Link to="/contact">
          <h2>Contactanos</h2>
        </Link>
        <Link to="/login">
          <img
            src={user}
            alt="usuario donde puedes logearte o comprobar si ya lo estas"
          />
        </Link>
        <Link to="/Cart">
          <img src={cart} alt="carro de compra para añadir tus productos" />
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
