
import CarouselP from "../../components/CarouselP/Carouselp";
import Footer from "../../components/Footer/Footer";
import style from "./Characters.module.css";

export default function Characters() {
  return (<>
    <CarouselP />
    <Footer styleFoo={style.foo} />
  </>)
}