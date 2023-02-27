import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./Contact.module.css";
import * as Yup from "yup";

export default function Nuevo() {
  const initialValues = {
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  };
  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres.")
      .max(50, "El nombre no puede ser mayor de 50 caracteres.")
      .required("Por favor ingresa tu nombre."),
    correo: Yup.string()
      .email("Ingresa un correo electrónico válido.")
      .required("Ingresa tu correo electrónico."),
    telefono: Yup.string()
      .min(10, "El teléfono debe tener al menos 10 números.")
      .max(15, "El teléfono debe tener máximo 15 números.")
      .required("Por favor ingresa tu teléfono."),
    mensaje: Yup.string()
      .min(10, "El mensaje debe tener al menos 10 caracteres.")
      .max(1000, "El mensaje no puede superar los 1000 caracteres.")
      .required("Por favor ingresa tu mensaje."),
  });
  const onSubmit = (values, { resetForm }) => {
    emailjs
      .send("service_bi0uqxh", "template_5xkfdzf", values, "LpNalDBsDJDLtYUgG")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm();
    alert("Formulario enviado.");
    console.log("Formulario enviado", values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors }) => (
          <Form className={style.formulario}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Helena "
              />
              <ErrorMessage name="nombre" />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
              />
              <ErrorMessage name="correo" />
            </div>
            <div>
              <label htmlFor="telefono">Teléfono</label>
              <Field
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="55-5555-5555"
              />
              <ErrorMessage name="telefono" />
            </div>

            <div>
              <label htmlFor="mensaje">Mensaje</label>
              <Field name="mensaje" as="textarea" placeholder=" Mensaje" />
              <ErrorMessage name="mensaje" />
            </div>

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
