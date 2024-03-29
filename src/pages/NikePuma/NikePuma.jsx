/* import CardProductNike from "../../components/CardProduct/CardProductNike";
import CardProductPuma from "../../components/CardProduct/CardProductPuma";
import CardProductPumaArlequin from "../../components/CardProduct/CardProductPumaArlequin"; */
import CarouselNike from "../../components/Carousel/CarouselNike";
import CarouselPuma from "../../components/Carousel/CarouselPuma";
import CarouselPumaArlequin from "../../components/Carousel/CarouselPumaArlequin";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Product/Products";

import SocialMedia from "../../components/Social-Media/SocialMedia";
import UniqueCollection from "../../components/UniqueCollection/UniqueCollection";
import style from "./NikePuma.module.css";



export default function NikePuma() {
  return (<>
    <div className={style.card}>
      <CarouselNike />
      <UniqueCollection />
      <CarouselPuma />
      <CarouselPumaArlequin />

    </div>
    <div className={style.cardmovil}>
      <CarouselPumaArlequin />
      <CarouselPuma />
      <UniqueCollection />
      <CarouselNike />

    </div>
    {/* <SocialMedia /> */}
    <Footer styleFoo={style.foo} />

  </>)
}
