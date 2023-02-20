import { Link } from "react-router-dom";
import style from "./CardLogin.module.css";
import { useState, useEffect } from "react";

export default function CardRegister() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    setError("");
    if (!username || !email || !password || !confirm_password) {
      setError("Por favor llene todos los campos");
      return;
    }

    if (password !== confirm_password) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Crear objeto JSON con los datos del formulario
    const formData = {
      username,
      email,
      password,
      confirm_password
    };

    // Convertir objeto a formato JSON
    const jsonData = JSON.stringify(formData);

    // Imprimir objeto JSON en consola para verificar
    console.log(jsonData);

    // Aquí va la lógica para enviar el formulario

    // Si se envía correctamente, limpiamos el formulario y activamos el estado de éxito
    resetForm();
    setSuccess(true);
  };

  const resetForm = () => {
    const form = document.getElementById("register-form");
    form.reset();
  };

  const resetMessage = () => {
    setError("");
    setSuccess(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      resetMessage();
    }, 5000);
    return () => clearTimeout(timer);
  }, [error, success]);

  return (
    <>
      <div className={style.loginCard}>
        <div className={style.loginCardHeader}></div>
        <div className={style.loginCardBody}>
          <form id="register-form" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            {success && <p>¡Registro exitoso!</p>}
            <div className={style.loginFormGroup}>
              <label htmlFor="username">Nombre:</label>
              <input
                required
                className={style.loginFormControl}
                name="username"
                id="username"
                type="text"
              />
            </div>
            <div className={style.loginFormGroup}>
              <label htmlFor="email">Correo electrónico:</label>
              <input
                required
                className={style.loginFormControl}
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className={style.loginFormGroup}>
              <label htmlFor="password">Contraseña:</label>
              <input
                required
                className={style.loginFormControl}
                name="password"
                id="password"
                type="password"
              />
            </div>
            <div className={style.loginFormGroup}>
              <label htmlFor="confirm_password">Confirmar contraseña:</label>
              <input
                required
                className={style.loginFormControl}
                name="confirm_password"
                id="confirm_password"
                type="password"
              />
            </div>
            <input type="submit" className={style.loginBtn} value="Registrar" />
            <Link to="/login "><label>Ya tengo cuenta</label></Link>
          </form>
        </div>
      </div>
    </>
  );
}
