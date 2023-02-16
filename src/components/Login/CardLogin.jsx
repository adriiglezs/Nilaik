import style from "./CardLogin.module.css";
import { useState } from 'react';

export default function CardLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Por favor llene todos los campos');
    } else {
      setIsLoggedIn(true);
      console.log('Correo electrónico:', email);
      console.log('Contraseña:', password);
      setEmail('');
      setPassword('');
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
            <input required className={style.loginFormControl} name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {email === '' && <span>Por favor ingrese su correo electrónico</span>}
          </div>
          <div className={style.loginFormGroup}>
            <label htmlFor="password">Contraseña:</label>
            <input required className={style.loginFormControl} name="password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {password === '' && <span>Por favor ingrese su contraseña</span>}
          </div>
          <input type="submit" className={style.loginBtn} value="Ingresar" />
        </form>
        {isLoggedIn && <p>Ha iniciado sesión correctamente.</p>}
      </div>
    </div>
  </>);
}