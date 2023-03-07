import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import brand from "../../assets/brand.png";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import menu from "../../assets/menu.svg"
import { useState } from "react";
import { useStateValue } from "../../StateProvider";
import { Badge } from "@mui/material/";


function Navbar() {
  const [isNavShow, setNavShow] = useState(false)
  const [{ basket }, dispatch] = useStateValue();
  const userData = JSON.parse(localStorage.getItem('user'));
  const username = userData ? "Un gusto tenerte de vuelta: " + userData.username : "";

  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Link to="/">
          <img
            className={style.img}
            src={brand}
            alt="Nilaik logo de colores diversos"
          />
          <h2>{username}</h2>
        </Link>
      </div>
      <div className={`${isNavShow ? style.false : style.true}`}>
        <Link to="/">
          <h2>Inicio</h2>
        </Link>
        {/* <Link to="/characters">
          <h2>Personajes</h2>
        </Link> */}
        <Link to="/nike-puma">
          <h2>Nike Puma</h2>
        </Link>
        <Link to="/jordan-adidas">
          <h2>Jordan Adidas</h2>
        </Link>
        <Link to="/aboutus">
          <h2>Sobre nosotros</h2>
        </Link>
        <Link to="/about">
          <h2>Acerca de</h2>
        </Link>
        <Link to="/contact">
          <h2>Contáctanos</h2>
        </Link>
        <Link to="/login">
          <img
            src={user}
            alt="usuario donde puedes logearte o comprobar si ya lo estas"
          />
        </Link>
        <Link to="/Cart">
          <Badge badgeContent={basket?.length} color="secondary">
            <img src={cart} alt="carro de compra para añadir tus productos" />
          </Badge>
        </Link>
      </div>
      <div
        className={`${isNavShow} ${style.hamburger}`}
        onClick={() => setNavShow(!isNavShow)}
      >
        <Badge badgeContent={basket?.length} color="primary">
          <img
            src={menu}
            className={`${isNavShow}`}
            alt="menu para desplegar opciones en dispositivos mobiles"
          />
        </Badge>
      </div>
    </nav>
  );
}
export default Navbar;
