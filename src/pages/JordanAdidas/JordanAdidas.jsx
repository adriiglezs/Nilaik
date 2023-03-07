import Footer from "../../components/Footer/Footer";
import SocialMedia from "../../components/Social-Media/SocialMedia";
import UniqueCollection from "../../components/UniqueCollection/UniqueCollection";
import style from "./JordanAdidas.module.css";
/* import CardProductAdidas3 from "../../components/CardProduct/CardProductAdidas3"
import CardProductJordan from "../../components/CardProduct/CardProductJordan";
import CardProductAdidasBicolor from "../../components/CardProduct/CardProductBicolor"; */
import CarouselJordan from "../../components/Carousel/CarouselJordan";
import CarouselAdidas3 from "../../components/Carousel/CarouselAdidas3";
import CarouselAdidasBicolor from "../../components/Carousel/CarouselAdidasBicolor";

export default function JordanAdidas() {
  return (<>
    <div className={style.card}>
      <CarouselAdidasBicolor />
      <CarouselJordan />
      <CarouselAdidas3 />

    </div>
    {/*<div className={style.cardmovil}>
      <CarouselAdidasBicolor />
      <CarouselJordan />
      <CarouselAdidas3 />


  </div>*/}
    <UniqueCollection />
    <SocialMedia />
    <Footer styleFoo={style.foo} />

  </>)
}