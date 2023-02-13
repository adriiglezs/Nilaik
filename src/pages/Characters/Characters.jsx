import AppCarousel from "../../components/Carousel/Carousel";
import CarouselNike from "../../components/Carousel/CarouselNike";
import Footer from "../../components/Footer/Footer";
import style from "./Characters.module.css";

export default function Characters() {
  return (<>
    <AppCarousel />
    <CarouselNike />
    <Footer styleFoo={style.foo} />
  </>)
}