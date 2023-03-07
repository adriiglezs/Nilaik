import Footer from "../../components/Footer/Footer";
import style from "./Checkout.module.css";
import nilaikFooter from "../../assets/brand.png";

export default function Checkout() {
  return (
    <>
      <div className={style.LoginPageContainerGlobal}>
        <div className={style.LoginPageContainerLogin}>
          <div className={style.loginCard}>
            
            <div className={style.loginCardBody}>
              <form>
                <div className={style.loginFormGroup}>
                  <label htmlFor="email">Nombre de usuario: </label>
                  <label className={style.label2}>Adriiana </label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Apellido: </label>
                  <label className={style.label2}>hola </label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Email: </label>
                  <label className={style.label2}>hola@gmail.com </label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Direccion: </label>
                  <label className={style.label2}> Av. hola </label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Fecha pedido: </label>
                  <label className={style.label2}> 07 - marzo- 2023 </label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">ID Cliente: </label>
                  <label className={style.label2}>123456 </label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">ID Carrito: </label>
                  <label className={style.label2}>1</label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={style.LoginPageContainerImg}>
          <img
            className={style.LoginPageImg}
            src={nilaikFooter}
            alt="Nilaik logo de colores diversos"
          />
        </div>
      </div>

      <Footer styleFoo={style.foo} />
    </>
  );
};