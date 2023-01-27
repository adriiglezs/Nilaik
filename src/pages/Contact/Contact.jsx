import { Formik, Form, Field } from "formik";
import style from "./Contact.module.css";

export default function Contact() {
  function publish(value) {
    console.log(value);
  }
  return (
    <>
      {/* <div className={style.container}>
        <div className="left-container"></div>
        <div className="form-container"> */}
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
          <Form>
            <Field name="name" type="text" />
            <Field name="email" type="email" />
            <Field name="phone" type="tel" />
            <Field name="message" type="text" />
            <button type="submit">Contacta a Adrián</button>
          </Form>
        </Formik>
      </div>
      {/* </div>
      </div> */}
    </>
  );
}
