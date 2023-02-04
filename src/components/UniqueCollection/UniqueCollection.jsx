import style from "./UniqueCollection.module.css";


export default function UniqueCollection() {
  return (
    <div className={style.content1}>
      <section className={style.content}>
        <img
          src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={style.img}
        />
        <img
          src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={style.img}
        />
        <div className={style.text}>
          <h3>Colección única</h3>
          <p>
            Nuestro principal objetivo es la comodidad y que las personas que
            utilicen nuestras prendas se vean y se sientan bien. Encuentra el
            atuendo perfecto y desafía al mundo.
          </p>
        </div>
      </section>
    </div>
  );
}
