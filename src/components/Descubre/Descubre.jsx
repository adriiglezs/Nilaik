import style from './../Descubre/Descubre.module.css'

import img from "../../assets/Descubre/imginfantil.png";
import img2 from "../../assets/Descubre/imginfantil2.png";

export default function Descubre() {
  return <>
    <div className={style.DescubreMovil}>
      <h1 className={style.h1Descubre} > Explora nuestros productos</h1>
      <img className={style.ImgMovil} src={img} alt="" />
      <img className={style.ImgMovil2} src={img2} alt="" />
      <img className={style.ImgMovil} src={img} alt="" />
      <img className={style.ImgMovil2} src={img2} alt="" />
    </div>


    <div className={style.contentDescubre}>
      <div className={style.left}>
        <h1>
          Descubre nuestros productos
        </h1>
        <br />
        <p>
          Nos caracterizamos por ser un proyecto íntegro, ya que nos vemos involucrados en el proceso que va desde la fabricación hasta la distribución de los productos. Por lo tanto nos encargamos de la selección de la tela, la confección y el desarrollo de los diseños.
          <br />
          <br />
          Nuestra calidad es superior a la que se encuentra en el mercado y al mismo tiempo ofrecemos precios accesibles. Duplicamos la calidad, pero no duplicamos el precio.
          <br />
          <br />
          Tenemos la mejor plataforma para que realices tu compra de manera 100% segura, puedes ver nuestro inventario en tiempo real y con la seguridad de comprar en un sitio confiable, donde tus datos están a salvo y tu experiencia será agradable.
        </p>
      </div>
      <div className={style.rigth}>

        <div className={style.top}>
          <div>
            <img className={style.imgDescubreOpc} src={img} alt="" />

          </div>
          <div>
            <img className={style.imgDescubre} src={img} alt="" />
          </div>
        </div>

        <div className={style.bottom}>
          <div>
            <img className={style.imgDescubre} src={img2} alt="" />
          </div>
          <div>
            <img className={style.imgDescubreOpc} src={img2} alt="" />

          </div>
        </div>
      </div>
    </div>

  </>
}