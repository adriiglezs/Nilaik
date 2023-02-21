import style from "./Contact.module.css";
import Footer from "../../components/Footer/Footer";
import whatsapp from "../../assets/social/whatsapp.svg";
import servicio from "../../assets/social/servicio.svg";
import Nuevo from "./nuevo";

export default function Contact() {
  return (
    <>
      <div className={style.background}>
        <div className={style.titulo}>
          <h1 className={style.Mh1}> Contáctanos </h1>
        </div>
        <div className={style.mainContainer}>
          <div className={style.containerLeft}>
            <div className={style.icons}>
              <img
                className={style.icons}
                src={whatsapp}
                alt="icono de whats"
              />
              <img
                className={style.icons}
                src={servicio}
                alt="icono de servicio"
              />
            </div>

            <h2 className={style.Mh2}>
              Si tienes alguna duda o necesitas contactarte directamente con
              nosotros. Por favor llena el formulario y nos pondremos en
              contacto contigo.
            </h2>
          </div>

          <div className={style.container}>
            <Nuevo></Nuevo>
          </div>
        </div>

        <Footer styleFoo={style.foo} />
      </div>
    </>
  );
}