import { Formik, Form, Field, ErrorMessage } from "formik";

import style from "./Contact.module.css";
import Footer from "../../components/Footer/Footer";
import whatsapp from "../../assets/social/whatsapp.svg";
import servicio from "../../assets/social/servicio.svg";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bi0uqxh",
        "template_5xkfdzf",
        form.current,
        "LpNalDBsDJDLtYUgG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

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
            <Formik
              initialValues={{
                nombre: "",
                correo: "",
                phone: "",
              }}
              validate={(valores) => {
                let errores = {};

                // Validacion nombre
                if (!valores.nombre) {
                  errores.nombre = "Por favor ingresa un nombre";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                  errores.nombre =
                    "El nombre solo puede contener letras y espacios";
                }

                // Validacion correo
                if (!valores.correo) {
                  errores.correo = "Por favor ingresa un correo electronico";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.correo
                  )
                ) {
                  errores.correo =
                    "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
                }
                //Validacion telefono
                if (!valores.phone) {
                  errores.phone = "Por favor ingresa un numero telefonico";
                } else if (!/^[0-9]{1,10}$/.test(valores.phone)) {
                  errores.phone =
                    "EL numero de telefono debe de ser de 10 digitos";
                }

                return errores;
              }}
              onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log("Formulario enviado");
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 5000);
              }}
            >
              {({ errors }) => (
                <Form
                  className={style.formulario}
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div>
                    <label htmlFor="nombre">Nombre</label>
                    <Field
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingresa tu nombre"
                    />
                    <ErrorMessage
                      name="nombre"
                      component={() => (
                        <div className={style.error}>{errors.nombre}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label htmlFor="correo">Correo</label>
                    <Field
                      type="text"
                      id="correo"
                      name="correo"
                      placeholder="correo@correo.com"
                    />
                    <ErrorMessage
                      name="correo"
                      component={() => (
                        <div className={style.error}>{errors.correo}</div>
                      )}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Telefono</label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="55-5555-5555"
                    />
                    <ErrorMessage
                      name="phone"
                      component={() => (
                        <div className={style.error}>{errors.phone}</div>
                      )}
                    />
                  </div>

                  <div>
                    <Field name="mensaje" as="textarea" placeholder=" Mensaje" />
                  </div>

                  <button type="submit">Enviar</button>
                  {formularioEnviado && (
                    <p className={style.exito}>Formulario enviado con exito!</p>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <Footer styleFoo={style.foo} />
      </div>


      {/*
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="nombre" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="mensaje" />
      <input type="submit" value="Send" />
            </form>*/}

    </>
  );

}
