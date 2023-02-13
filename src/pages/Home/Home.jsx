import SocialMedia from "../../components/Social-Media/SocialMedia"
import Footer from "../../components/Footer/Footer"
import CarouselJordan from "../../components/Carousel/CarouselJordan"
import CarouselNike from "../../components/Carousel/CarouselNike"
import CarouselPuma from "../../components/Carousel/CarouselPuma"
import CarouselAdidasBi from "../../components/Carousel/Carousel"
import CarouselPumaArlequin from "../../components/Carousel/CarouselPumaArlequin"
import style from "./Home.module.css";
import CarouselAdidas3 from "../../components/Carousel/CarouselAdidas3"

function Home() {
    return (<>
        <CarouselJordan />
        <CarouselAdidas3 />
        <CarouselAdidasBi />
        <CarouselNike />
        <CarouselPuma />
        <CarouselPumaArlequin />


        <SocialMedia />
        <Footer styleFoo={style.foo} />
    </>)
}
export default Home
