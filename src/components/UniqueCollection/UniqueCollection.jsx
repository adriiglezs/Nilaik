import style from "./UniqueCollection.module.css";


export default function UniqueCollection() {
  return (
    <div className={style.content1}>
      <section className={style.content}>
        <img
          src="https://res.cloudinary.com/dwd3jknn9/image/upload/v1676281067/Nilaik/Colecci%C3%B3n%20%C3%BAnica/IMG_20230212_174117_yl9ttv.jpg"
          alt=""
          className={style.img}
        />
        <img
          src="https://res.cloudinary.com/dwd3jknn9/image/upload/v1676281068/Nilaik/Colecci%C3%B3n%20%C3%BAnica/IMG_20230212_173351_u27viu.jpg"
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
