import { Formik, Form, Field } from "formik";
import style from "./Contact.module.css";
import Footer from "../../components/Footer/Footer";
import whatsapp from '../../assets/social/whatsapp.svg'
import servicio from '../../assets/social/servicio.svg'
import Formulario from "../../components/Formulario/formulario";

export default function Contact() {
  function publish(value) {
    console.log(value);
  }
  return (
    <>
      
      <div className={style.background}>
        <div className={style.titulo}>
          <h1> Contactanos </h1>
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

            <h2>
              Si tienes alguna duda o necesitas contactarte directamente con
              nosotros. Por favor llena el formulario y nos pondremos en
              contacto contigo.
            </h2>
          </div>
          <div className={style.container}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              onSubmit={publish}
            >
              <Formulario/>
              <Form>
                <Field name="name" type="text" />
                <Field name="email" type="email" />
                <Field name="phone" type="tel" />
                <Field name="message" type="text" />
                <button type="submit">Contacta a Adrián</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
