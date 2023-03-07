import style from "./UniqueCollection.module.css";


export default function UniqueCollection() {
  return (
    <div className={style.content1}>
      <section className={style.content}>
        <img
          src="https://res.cloudinary.com/ddwq0ulee/image/upload/v1676402974/Nilaik/colleccion%20unica/IMG_20230212_173330-min_z7bhub.jpg"
          alt=""
          className={style.img}
        />
        <img
          src="https://res.cloudinary.com/ddwq0ulee/image/upload/v1676402972/Nilaik/colleccion%20unica/IMG_20230212_173624-min_ucy2i1.jpg"
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
