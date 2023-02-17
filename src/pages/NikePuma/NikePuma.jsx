import Footer from "../../components/Footer/Footer";
import SocialMedia from "../../components/Social-Media/SocialMedia";
import UniqueCollection from "../../components/UniqueCollection/UniqueCollection";
import style from "./NikePuma.module.css";

export default function NikePuma() {
  return (<>
    <div className={style.card}>
      <UniqueCollection />
    </div>
    <div className={style.cardmovil}>

      <UniqueCollection />

    </div>
    <SocialMedia />
    <Footer styleFoo={style.foo} />

  </>)
}
