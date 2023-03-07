import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import nilaikFooter from "../../assets/nilaikFooter.png";


export default function Footer({ styleFoo }) {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
    // aquí también podrías redirigir al usuario a la página de inicio de sesión
  };

  return (
    <footer className={styleFoo ? styleFoo : style.Fcontent}>

      <div className={style.Fsection}>
        <Link to="/">
          <img
            className={style.Fimg}
            src={nilaikFooter}
            alt="Nilaik logo de colores diversos" />
        </Link>


        <p className={style.Faddress}>Direccion: Estado de México</p>
        <p className={style.Faddress}>Correo: niilaiik@hotmail.com</p>
        <p className={style.Faddress}></p>

      </div>
      <div className={style.Fsection2}>
        <div className={style.Fcatalogue}>
          <h4>Catálogo</h4>
          <ul className={style.Flis}>
            <Link to="/characters" ><li>Personajes</li>
            </Link>
            <Link to="/nike-puma"><li>Nike</li></Link>
            <Link to="/nike-puma"><li>Puma</li></Link>
            <Link to="/jordan-adidas"><li>Jordan</li></Link>
            <Link to="/jordan-adidas"><li>Adidas</li></Link>
          </ul>
        </div>

        <div className={style.Flinks}>
          <h4>Links</h4>
          <ul className={style.Flis}>
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/about"><li>Acerca de</li></Link>
            <Link to="/contact"><li>Contáctanos</li></Link>
            <Link to="/special-thanks"><li className={style.Special}>Agradecimientos Especiales</li></Link>
          </ul>
        </div>

        <div className={style.Fshipping}>
          <h4>Envíos</h4>
          <ul className={style.Flis}>
            <Link to="/AskQuestions"><li>Preguntas frecuentes</li></Link>
            <li className={style.cerrarSesion} id="logout-btn" onClick={handleLogout}>Cerrar sesión</li>
          </ul>
        </div>
      </div>

    </footer >
  );
}
