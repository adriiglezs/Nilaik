import CardProduct from "../../components/CardProduct/CardProduct";
import Footer from "../../components/Footer/Footer";
import SocialMedia from "../../components/Social-Media/SocialMedia";
import UniqueCollection from "../../components/UniqueCollection/UniqueCollection";
import style from "./JordanAdidas.module.css";
import {ProductsData} from "../../pages/Products/ProductData";

export default function JordanAdidas({
  ProductsData: { name, photoUrl, code, cost },
}) {
  return (
    <>
      <CardProduct name={name} photoUrl={photoUrl} code={code} cost={cost} />
      <CardProduct
        name={name}
        photoUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/31bff7a0-98d2-470a-8b1c-46e0e087211d/conjunto-de-sudadera-con-gorro-sin-cierre-y-joggers-jordan-jumpman-BWcjk2.png"
        code="CJRJ"
        cost="175.00"
      />
      <CardProduct
        name="Nike Gris"
        photoUrl="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b5c3da8-1fb1-420a-874f-52523e6b0111/conjunto-de-pantal%C3%B3n-y-sudadera-con-gorro-y-cierre-y-sportswear-tech-fleece-gXB0r3.png"
        code="CNIG"
        cost="175.00"
      />
      <CardProduct
        name="Adidas Rosa"
        photoUrl="https://ae01.alicdn.com/kf/HTB1N4Y0HVXXXXbEXXXXq6xXFXXXo/2015-ropa-de-los-ni%C3%B1os-masculinos-primavera-ni%C3%B1o-conjunto-ni%C3%B1o-conjunto-deportivo-de-manga-larga-conjunto.jpg"
        code="CARS"
        cost="175.00"
      />
      <CardProduct
        name="Jordan Rojo"
        photoUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/31bff7a0-98d2-470a-8b1c-46e0e087211d/conjunto-de-sudadera-con-gorro-sin-cierre-y-joggers-jordan-jumpman-BWcjk2.png"
        code="CJRJ"
        cost="175.00"
      />
      <CardProduct
        name="Nike Gris"
        photoUrl="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b5c3da8-1fb1-420a-874f-52523e6b0111/conjunto-de-pantal%C3%B3n-y-sudadera-con-gorro-y-cierre-y-sportswear-tech-fleece-gXB0r3.png"
        code="CNIG"
        cost="175.00"
      />

      <UniqueCollection />
      <CardProduct
        name="Adidas Rosa"
        photoUrl="https://ae01.alicdn.com/kf/HTB1N4Y0HVXXXXbEXXXXq6xXFXXXo/2015-ropa-de-los-ni%C3%B1os-masculinos-primavera-ni%C3%B1o-conjunto-ni%C3%B1o-conjunto-deportivo-de-manga-larga-conjunto.jpg"
        code="CARS"
        cost="175.00"
      />
      <CardProduct
        name="Jordan Rojo"
        photoUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/31bff7a0-98d2-470a-8b1c-46e0e087211d/conjunto-de-sudadera-con-gorro-sin-cierre-y-joggers-jordan-jumpman-BWcjk2.png"
        code="CJRJ"
        cost="175.00"
      />
      <CardProduct
        name="Nike Gris"
        photoUrl="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b5c3da8-1fb1-420a-874f-52523e6b0111/conjunto-de-pantal%C3%B3n-y-sudadera-con-gorro-y-cierre-y-sportswear-tech-fleece-gXB0r3.png"
        code="CNIG"
        cost="175.00"
      />
      <CardProduct
        name="Adidas Rosa"
        photoUrl="https://ae01.alicdn.com/kf/HTB1N4Y0HVXXXXbEXXXXq6xXFXXXo/2015-ropa-de-los-ni%C3%B1os-masculinos-primavera-ni%C3%B1o-conjunto-ni%C3%B1o-conjunto-deportivo-de-manga-larga-conjunto.jpg"
        code="CARS"
        cost="175.00"
      />
      <CardProduct
        name="Jordan Rojo"
        photoUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/31bff7a0-98d2-470a-8b1c-46e0e087211d/conjunto-de-sudadera-con-gorro-sin-cierre-y-joggers-jordan-jumpman-BWcjk2.png"
        code="CJRJ"
        cost="175.00"
      />
      <CardProduct
        name="Nike Gris"
        photoUrl="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b5c3da8-1fb1-420a-874f-52523e6b0111/conjunto-de-pantal%C3%B3n-y-sudadera-con-gorro-y-cierre-y-sportswear-tech-fleece-gXB0r3.png"
        code="CNIG"
        cost="175.00"
      />
      <UniqueCollection />
      <CardProduct
        name="Adidas Rosa"
        photoUrl="https://ae01.alicdn.com/kf/HTB1N4Y0HVXXXXbEXXXXq6xXFXXXo/2015-ropa-de-los-ni%C3%B1os-masculinos-primavera-ni%C3%B1o-conjunto-ni%C3%B1o-conjunto-deportivo-de-manga-larga-conjunto.jpg"
        code="CARS"
        cost="175.00"
      />
      <CardProduct
        name="Jordan Rojo"
        photoUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/31bff7a0-98d2-470a-8b1c-46e0e087211d/conjunto-de-sudadera-con-gorro-sin-cierre-y-joggers-jordan-jumpman-BWcjk2.png"
        code="CJRJ"
        cost="175.00"
      />
      <CardProduct
        name="Nike Gris"
        photoUrl="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b5c3da8-1fb1-420a-874f-52523e6b0111/conjunto-de-pantal%C3%B3n-y-sudadera-con-gorro-y-cierre-y-sportswear-tech-fleece-gXB0r3.png"
        code="CNIG"
        cost="175.00"
      />
      <CardProduct
        name="Adidas Rosa"
        photoUrl="https://ae01.alicdn.com/kf/HTB1N4Y0HVXXXXbEXXXXq6xXFXXXo/2015-ropa-de-los-ni%C3%B1os-masculinos-primavera-ni%C3%B1o-conjunto-ni%C3%B1o-conjunto-deportivo-de-manga-larga-conjunto.jpg"
        code="CARS"
        cost="175.00"
      />
      <CardProduct
        name="Jordan Rojo"
        photoUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/31bff7a0-98d2-470a-8b1c-46e0e087211d/conjunto-de-sudadera-con-gorro-sin-cierre-y-joggers-jordan-jumpman-BWcjk2.png"
        code="CJRJ"
        cost="175.00"
      />
      <CardProduct
        name="Nike Gris"
        photoUrl="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b5c3da8-1fb1-420a-874f-52523e6b0111/conjunto-de-pantal%C3%B3n-y-sudadera-con-gorro-y-cierre-y-sportswear-tech-fleece-gXB0r3.png"
        code="CNIG"
        cost="175.00"
      />
      <SocialMedia />
      <Footer styleFoo={style.foo} />
    </>
  );
}
