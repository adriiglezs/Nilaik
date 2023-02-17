import CardProductNike from "../../components/CardProduct/CardProductNike";
import CardProductPuma from "../../components/CardProduct/CardProductPuma";
import CardProductPumaArlequin from "../../components/CardProduct/CardProductPumaArlequin";
import Footer from "../../components/Footer/Footer";
import SocialMedia from "../../components/Social-Media/SocialMedia";
import UniqueCollection from "../../components/UniqueCollection/UniqueCollection";
import style from "./NikePuma.module.css";

export default function NikePuma() {
  return (<>
    <div className={style.card21}>
      <CardProductPumaArlequin />
      <CardProductPuma />
      <UniqueCollection />
      <CardProductNike />
    </div>
    <div className={style.card22}>

      <UniqueCollection />

    </div>
    <SocialMedia />
    <Footer styleFoo={style.foo} />

  </>)
}
