import style from "./home-primer-componente.module.css";
import { Link } from "react-router-dom";

function PrimerComponente() {
  return (
    <div className={style.background}>
      <div className={style.homePrimerComponente}>
        <div className={style.box}>
          <div className={style.element}>
            <h3>Somos Nilaik</h3>
            <p>
              Conoce nuestra propuesta especialista en elevar el confort de la
              población infantil.
            </p>
            <Link to="/about">
              <h4>Conócenos</h4>
            </Link>
          </div>
        </div>

        <div className={style.box}>
          <div className={style.element}>
            <h3>Jordan</h3>
            <p>Diseños exclusivos</p>
            <Link to="/jordan-adidas">
              <h4>Comprar ahora</h4>
            </Link>
          </div>
        </div>

        <div className={style.box}>
          <div className={style.element}>
            <h3>Adidas</h3>
            <p>Diseños exclusivos</p>
            <Link to="/jordan-adidas">
              <h4>Comprar ahora</h4>
            </Link>
          </div>
        </div>

        <div className={style.box}>
          <div className={style.element}>
            <h3>Nike</h3>
            <p>Diseños exclusivos</p>
            <Link to="/nike-puma">
              <h4>Comprar ahora</h4>
            </Link>
          </div>
        </div>

        <div className={style.box}>
          <div className={style.element}>
            <h3>Puma</h3>
            <p>Diseños exclusivos</p>
            <Link to="/nike-puma">
              <h4>Comprar ahora</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimerComponente;