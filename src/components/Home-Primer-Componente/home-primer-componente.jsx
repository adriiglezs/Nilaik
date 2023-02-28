import style from './home-primer-componente.module.css';



function PrimerComponente() {
  return (
    <div className={style.background}>

    <div className={style.homePrimerComponente}>

        <div className={style.box}>

          <div className={style.element}>
            <h3>Somos Nilaik</h3>
            <p>Conoce nuestra propuesta especialista en elevar el confort de la población infantil.</p>
            <a href="/characters">Conócenos</a>
          </div>
          
        </div>

        <div className={style.box}>

          <div className={style.element}>
            <h3>Jordan</h3>
            <p>Diseños exclusivos</p>
            <a href="/jordan-adidas">Comprar ahora</a>
          </div>

        </div>

        <div className={style.box}>

          <div className={style.element}>
            <h3>Adidas</h3>
            <p>Diseños exclusivos</p>
            <a href="/jordan-adidas">Comprar ahora</a>
          </div>
          
        </div>

        <div className={style.box}>

          <div className={style.element}>
            <h3>Nike</h3>
            <p>Diseños exclusivos</p>
            <a href="/nike-puma">Comprar ahora</a>
          </div>
          
        </div>

        <div className={style.box}>

          <div className={style.element}>
            <h3>Puma</h3>
            <p>Diseños exclusivos</p>
            <a href="/nike-puma">Comprar ahora</a>
          </div>
          
        </div>

      </div>

    </div>

  );
}

export default PrimerComponente;

