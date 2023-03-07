import * as Yup from 'yup'
import style from "./Login.module.css";
import Footer from "../../components/Footer/Footer";
import nilaikFooter from "../../assets/brand.png";
import CardLogin from '../../components/Login/CardLogin';
export default function Login() {
    return (<>
        <div className={style.LoginPageContainerGlobal}>
            <div className={style.LoginPageContainerLogin}>
                <CardLogin />
            </div>
            <div className={style.LoginPageContainerImg}>
                <img
                    className={style.LoginPageImg}
                    src={nilaikFooter}
                    alt="Nilaik logo de colores diversos" />

            </div>
        </div>
        <Footer styleFoo={style.foo} />

    </>)
}