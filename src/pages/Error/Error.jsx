import style from "./Error.module.css"
import Footer from "../../components/Footer/Footer"
import Img from "../../assets/cono.png"
function Error(){
return(
    
<div>
    <div className={style.error404}>
        <div className={style.izq404}>
            <p className={style.p1error}>404</p>
            <p className={style.p2error}>La pagina no fue encontrada</p>
        </div>
        
        <div className={style.der404}>
            <img className={style.imgerror} src={Img} alt="" />
        </div>

    </div>

<Footer/>
</div>
    
    )
}
export default Error