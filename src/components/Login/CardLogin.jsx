import style from "./CardLogin.module.css";

export default function CardLogin() {
  return (<>
    <div class={style.loginCard}>
      <div class={style.loginCardHeader}>
      </div>
      <div class={style.loginCardBody}>
        <form action="#">
          <div class={style.loginFormGroup}>
            <label for="username">Nombre:</label>
            <input required="" class={style.loginFormControl} name="username" id="username" type="text" />
          </div>
          <div class={style.loginFormGroup}>
            <label for="email">Correo electronico:</label>
            <input required="" class={style.loginFormControl} name="email" id="email" type="email" />
          </div>
          <div class={style.loginFormGroup}>
            <label for="password">Contraseña:</label>
            <input required="" class={style.loginFormControl} name="password" id="password" type="password" />
          </div>
          <div class={style.loginFormGroup}>
            <label for="confirmpassword">Confirmar contraseña:</label>
            <input required="" class={style.loginFormControl} ame="confirm-password" id="confirm-password" type="password" />
          </div>
          <input type="submit" class={style.loginBtn} value="Resgistrar" />
          <label>ya tengo cuenta</label>
        </form>
      </div>
    </div>

  </>)
}