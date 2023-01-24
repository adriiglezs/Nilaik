import style from "./Error.module.css"
import error from "../../assets/error.svg"
import Footer from "../../components/Footer/Footer"
function Error(){
return(<div className={style.container}>
    <img src={error} className={style.svg} alt="error esta pagina no existe" />
    <p>No se encontro esta pagina</p>
    <Footer/>
    </div>
    )
}
export default Error