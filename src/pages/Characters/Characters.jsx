import CarouselAdidasBi from "../../components/Carousel/Carousel";
import Carouselp from "src/components/CarouselP/Carouselp.jsx";
import Footer from "../../components/Footer/Footer";
import style from "./Characters.module.css";

export default function Characters() {
  return (<>
    <CarouselAdidasBi />

    <Carouselp />

    <Footer styleFoo={style.foo} />
  </>)
}