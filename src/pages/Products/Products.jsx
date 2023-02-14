import SocialMedia from "../../components/Social-Media/SocialMedia"
import CardProduct from "../../components/CardProduct/CardProduct"
import Footer from "../../components/Footer/Footer"
import { Carousel } from "@trendyol-js/react-carousel"
import ProductDetail from "../../components/ProductDetailF/productDetail"


function Products(){
    return(<>
  
  <Carousel show={3.5} slide={3} swiping={true}>
   
   
</Carousel>
    
    <SocialMedia/>
    <Footer/>
    </>)
}
export default Products 