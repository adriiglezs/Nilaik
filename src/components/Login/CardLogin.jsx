import { Link } from "react-router-dom";
import style from "./CardLogin.module.css";
import { useState } from 'react';

export default function CardLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);
  const [passwordClicked, setPasswordClicked] = useState(false);
  const [showError, setShowError] = useState(false);


  const handleEmailClick = () => setEmailClicked(true);
  const handlePasswordClick = () => setPasswordClicked(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Por favor llene todos los campos');
    } else {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (email === userData.email && password === userData.password) {
        setIsLoggedIn(true);
        console.log('Ha iniciado sesión correctamente.');
        setEmail('');
        setPassword('');
        setEmailClicked(false);
        setPasswordClicked(false);
      } else {
        setShowError(true);
      }
    }
  };

  return (<>
    <div className={style.loginCard}>
      <div className={style.loginCardHeader}>
      </div>
      <div className={style.loginCardBody}>
        <form onSubmit={handleSubmit}>
          <div className={style.loginFormGroup}>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              required
              className={style.loginFormControl}
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={handleEmailClick}
            />
            {emailClicked && email === '' && <span>Por favor ingrese su correo electrónico</span>}
          </div>
          <div className={style.loginFormGroup}>
            <label htmlFor="password">Contraseña:</label>
            <input
              required
              className={style.loginFormControl}
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={handlePasswordClick}
            />
            {/* {passwordClicked && password === '' && <span>Por favor ingrese su contraseña</span>} */}
            {showError && <span>El correo electrónico o la contraseña son incorrectos.</span>}
          </div>
          <input type="submit" className={style.loginBtn} value="Ingresar" />
          <Link to="/register "><label>Registrate</label></Link>
        </form>
        {isLoggedIn && <p>Ha iniciado sesión correctamente.</p>}
      </div>
    </div>
  </>);
}
