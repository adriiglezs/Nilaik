import style from "./SpecialThanks.module.css";
import Footer from "../../components/Footer/Footer";
import CardThanks from "../../components/CardThanks/CardThanks";
import melanie from "../../assets/melanie-min.jpeg";
import victoria from "../../assets/victoria-min.jpg";
import diego from "../../assets/diego-min.png";

export default function SpecialThanks() {
  return (<>
    <h1>AGRADECIMIENTOS ESPECIALES</h1>
    <div className={style.contend}>

      <br />
      <CardThanks
        photo={melanie}
      />
      <CardThanks
        photo={victoria}
      />
      <CardThanks
        photo={diego}
      />
    </div>


    <Footer styleFoo={style.foo} />

  </>)
}