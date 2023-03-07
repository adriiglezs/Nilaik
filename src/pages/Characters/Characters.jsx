import CarouselEspeciales from "../../components/Carousel/CarouselEspeciales";
import Footer from "../../components/Footer/Footer";
import style from "./Characters.module.css";

export default function Characters() {
  return (<>

    <CarouselEspeciales/> 
    <Footer styleFoo={style.foo} />
  </>)
}