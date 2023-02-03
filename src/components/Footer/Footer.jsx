import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import nilaikFooter from "../../assets/nilaikFooter.png";


export default function Footer({ styleFoo }) {
  return (
    <footer className={styleFoo ? styleFoo : style.content}>
      <div className={style.section}>
        <Link to="/">
          <img
            className={style.img}
            src={nilaikFooter}
            alt="Nilaik logo de colores diversos" />
        </Link>


        <p className={style.address}>Direccion: Estado de México</p>
        <p className={style.address}>Correo: niilaiik@hotmail.com</p>
        <p className={style.address}></p>

      </div>

      <div className={style.catalogue}>
        <h4>Catálogo</h4>
        <ul>
          <Link to="/characters" ><li>Personajes</li>
          </Link>
          <Link to="/nike-puma"><li>Nike</li></Link>
          <Link to="/nike-puma"><li>Puma</li></Link>
          <Link to="/jordan-adidas"><li>Jordan</li></Link>
          <Link to="/jordan-adidas"><li>Adidas</li></Link>
        </ul>
      </div>

      <div className={style.links}>
        <h4>Links</h4>
        <ul>
          <Link to="/"><li>Inicio</li></Link>
          <Link to="/about"><li>Acerca de</li></Link>
          <Link to="/contact"><li>Contáctanos</li></Link>
        </ul>
      </div>

      <div className={style.shipping}>
        <h4>Envíos</h4>
        <ul>
          <Link to="/AskQuestions"><li>Preguntas frecuentes</li></Link>
          <Link to="/AskQuestions"><li>Rastreo de envío</li></Link>
        </ul>
      </div>
    </footer>
  );
}