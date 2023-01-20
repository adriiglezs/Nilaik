import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
function Navbar(){
return(
<nav className={style.nav}>
    <div className={style.logo}>
    <Link to="/">
        <h1>Nilaik</h1>
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
        <h2>Login</h2>
    </Link>
    <Link to="/Cart">
        <h2>Carrito</h2>
    </Link>
    </div>
</nav>)
}
export default Navbar