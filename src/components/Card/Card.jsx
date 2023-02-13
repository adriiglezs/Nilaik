import style from "./Card.module.css"
import instagram from "../../assets/social/instagram.svg"
import github from "../../assets/social/github.svg"
import linkedin from "../../assets/social/linkedin.svg"
import cv from "../../assets/social/cv.svg"
export default function Card({ name, photo, biography, instagramUrl, githubUrl, linkedinUrl, cvUrl, changeColor, changeImage }) {
    return (<>
        <div className={style.mainContainer}>
            <div className={style.photo}><img className={changeImage ? style.imageb : style.imagea} src={photo} /></div>
            <div className={changeColor ? style.contentColor : style.content}>
                <h3>{name}</h3>
                <div>
                    <p>{biography}</p>
                </div>
                <div className={style.icons}>
                    <a className={style.anchor} href={instagramUrl} target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="icono de instagram" />
                    </a>
                    <a className={style.anchor} href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="icono de linkedin" />
                    </a>
                    <a className={style.anchor} href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="icono de github" />
                    </a>
                    <a className={style.anchor} href={cvUrl} target="_blank" rel="noopener noreferrer">
                        <img src={cv} alt="icono para enviar al cv" />
                    </a>
                </div>
            </div>
        </div>
    </>)
}