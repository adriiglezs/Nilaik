
import CarouselP from "../../components/CarouselP/Carouselp.jsx";
import Footer from "../../components/Footer/Footer";
import style from "./Characters.module.css";

export default function Characters() {
  return (<>
    <CarouselP />
    <Footer styleFoo={style.foo} />
  </>)
}