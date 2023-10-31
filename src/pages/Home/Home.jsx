import SocialMedia from "../../components/Social-Media/SocialMedia";
import PrimerComponente from "../../components/Home-Primer-Componente/home-primer-componente";
import Footer from "../../components/Footer/Footer";
import CarouselPumaArlequin from "../../components/Carousel/CarouselPumaArlequin";
import style from "./Home.module.css";
import CaroucelPuma from "../../components/Carousel/CarouselPuma";
import CaroucelJordan from "../../components/Carousel/CarouselJordan";
import CaroucelAdidas3 from "../../components/Carousel/CarouselAdidas3";
import CaroucelAdidasBicolor from "../../components/Carousel/CarouselAdidasBicolor";
import CaroucelNike from "../../components/Carousel/CarouselNike";
import Descubre from "../../components/Descubre/Descubre";
import Carouselcarnal from "../../components/Carousel/CarouselEspeciales";

function Home() {
  return (
    <>
      <PrimerComponente />
      <Carouselcarnal />
      <CaroucelAdidasBicolor />
      <CaroucelNike />
      <CaroucelPuma />
      <CaroucelJordan />
      <CaroucelAdidas3 />
      <CarouselPumaArlequin />
      <Descubre />
      <SocialMedia />
      <Footer styleFoo={style.foo} />
    </>
  );
}
export default Home;
