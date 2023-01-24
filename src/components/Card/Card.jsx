import style from "./Card.module.css"
export default function Card({name, photo, biography}){
    return(<>
    <div className={style.mainContainer}>
       <div className={style.photo}><img className={style.image} src = {photo}/></div>
       <div className={style.paragraph}>
        <h3>{name}</h3>
       <div ><p>{biography}</p></div>
       <div className={style.icons}>Redes sociales</div>
       </div>
    </div>
    </>)
}