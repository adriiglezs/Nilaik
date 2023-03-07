import style from './home-primer-componente.module.css';



function PrimerComponente() {
  return (
    <div className={style.background}>

      <div className={style.homePrimerComponente}>
        <div className={style.ParteA}>

          <div className={style.boxa}>
            <h3>...SOMOS NILAIK...</h3>
            <p>Conoce nuestra propuesta especialista en elevar el confort de la población infantil.</p>
            <a href="/about">Conócenos</a>
          </div>
        </div>
        <div className={style.ParteB}>

          <div className={style.boxb}>
            <h3>...NIKE...</h3>
            <p>Diseños exclusivos</p>
            <a href="/nike-puma">Comprar ahora</a>
          </div>

          <div className={style.boxc}>
            <h3>...JORDAN...</h3>
            <p>Diseños exclusivos</p>
            <a href="/jordan-adidas">Comprar ahora</a>
          </div>

          <div className={style.boxd}>
            <h3>...PUMA...</h3>
            <p>Diseños exclusivos</p>
            <a href="/nike-puma">Comprar ahora</a>
          </div>

          <div className={style.boxe}>
            <h3>...ADIDAS...</h3>
            <p>Diseños exclusivos</p>
            <a href="/jordan-adidas">Comprar ahora</a>
          </div>
        </div>

      </div>

    </div>

  );
}

export default PrimerComponente;

/*import style from "./home-primer-componente.module.css";
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

export default PrimerComponente;*/
