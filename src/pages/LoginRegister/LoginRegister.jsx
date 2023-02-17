import style from "./LoginRegister.module.css";
import Footer from "../../components/Footer/Footer";
import nilaikFooter from "../../assets/brand.png";
import CardRegister from '../../components/Login/CardRegister';

export default function Register() {
  return (<>
    <div className={style.LoginPageContainerGlobal}>
      <div className={style.LoginPageContainerImg}>
        <img
          className={style.LoginPageImg}
          src={nilaikFooter}
          alt="Nilaik logo de colores diversos" />

      </div>
      <div className={style.LoginPageContainerLogin}>
        <CardRegister />

      </div>
    </div>
    <Footer styleFoo={style.foo} />

  </>)
}