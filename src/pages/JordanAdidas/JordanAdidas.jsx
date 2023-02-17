import Footer from "../../components/Footer/Footer";
import SocialMedia from "../../components/Social-Media/SocialMedia";
import UniqueCollection from "../../components/UniqueCollection/UniqueCollection";
import style from "./JordanAdidas.module.css";
import CardProductAdidas3 from "../../components/CardProduct/CardProductAdidas3"

export default function JordanAdidas() {
  return (<>
    <div className={style.card21}>
      <CardProductAdidas3 />


    </div>
    <div className={style.card22}>
    </div>
    <UniqueCollection />


    <SocialMedia />
    <Footer styleFoo={style.foo} />

  </>)
}