import style from "./SpecialThanks.module.css";
import Footer from "../../components/Footer/Footer";
import CardThanks from "../../components/CardThanks/CardThanks";
import melanie from "../../assets/melanie-min.jpeg";
import victoria from "../../assets/victoria-min.jpg";
import diego from "../../assets/diego-min.png";
import nan from "../../assets/Nan.jpeg";
import tan from "../../assets/Tan.jpg";
import serch from "../../assets/Serch.png";
import mon from "../../assets/Mon.jpg";

export default function SpecialThanks() {
  return (<>
    <h1>Agradecimientos especiales</h1>
    <br />
    <h2 className={style.SpecialThanksh2}>Los 3 que se nos fueron y por eso somos 4</h2>
    <div className={style.contend}>
      <CardThanks
        photo={melanie}
        name="Melanie Leal"
        cargo="integrante"
      />
      <CardThanks
        photo={victoria}
        name="Victoria Bolaños"
        cargo="integrante"
      />
      <CardThanks
        photo={diego}
        name="Diego Pahua"
        cargo="integrante"
      />
    </div>
    <br />
    <h2 className={style.SpecialThanksh2}>Las 2 mentoras que aun son 2</h2>
    <div className={style.contend}>
      <CardThanks
        photo={nan}
        name="Nan"
        cargo="mentora"
      />
      <CardThanks
        photo={mon}
        name="Mon"
        cargo="mentora"
      />
    </div>
    <br />
    <h2 className={style.SpecialThanksh2}>Los 2 instructores que también siguen siendo 2</h2>
    <div className={style.contend}>
      <CardThanks
        photo={serch}
        name="Sergio"
        cargo="instructor lider"
      />
      <CardThanks
        photo={tan}
        name="Tania"
        cargo="instructora"
      />
    </div>


    <Footer styleFoo={style.foo} />

  </>)
}