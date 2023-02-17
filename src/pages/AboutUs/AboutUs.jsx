import Card from "../../components/Card/Card";
import melanie from "../../assets/melanie-min.jpeg";
import alan from "../../assets/alan-min.png";
import axel from "../../assets/axel-min.jpeg";
import victoria from "../../assets/victoria-min.jpg";
//import diego from "../../assets/diego-min.png";
import jorge from "../../assets/jorge.jpg";
import adrian from "../../assets/adrian-min.jpg";
import Footer from "../../components/Footer/Footer";
import style from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <div className={style.background}>
        <Card
          name="Melanie Leal"
          changeColor={true}
          instagramUrl=""
          githubUrl="https://github.com/mondalnim"
          linkedinUrl="https://www.linkedin.com/in/melanie-l-04339025a"
          cvUrl="https://drive.google.com/file/d/1943JMzq3gUEc1SV-RhUHkDKO2P-xDjr4/view?usp=sharing"
          photo={melanie}
          biography="Originaria del estado de Hidalgo, graduada de la Licenciatura en Historia del Arte. Me gustan las caminatas al aire libre, soy una persona curiosa en busca de nuevas cosas que aprender. Integrante del development team en el proyecto."
        />

        <Card
          name="Alan Ramos"
          instagramUrl="https://instagram.com/josafat_preciado_?igshid=Zjc2ZTc4Nzk="
          githubUrl="https://github.com/Alan-codigo"
          linkedinUrl="https://www.linkedin.com/in/alan-josafat-ramos-preciado-4625751b9/"
          cvUrl=""
          photo={alan}
          biography="Estudiante de ingeniería en informática, originario de Guadalajara. Me gusta la natación, la mixología y salir a conocer restaurantes bonitos. Integrante del development team."
        />

        <Card
          name="Axel Mercado"
          changeColor={true}
          instagramUrl="https://instagram.com/joaxelrock?igshid=ZDdkNTZiNTM="
          githubUrl="https://github.com/AxelRoseCooper"
          linkedinUrl="https://www.linkedin.com/in/axel-joshua-mercado-moreno"
          cvUrl="https://drive.google.com/file/d/17Xi2tEFIohG9Lfw-ZzDHH74SUzGk5CsI/view?usp=sharing"
          photo={axel}
          biography="23 años, residente de la Ciudad de México, pasante de ingeniería en sistemas automotrices, 
          apasionado por las motocicletas, videojuegos, ejercicio y programación. Integrante del development team."
        />

        {/* <Card
          name="Victoria Bolaños"
          instagramUrl="https://www.instagram.com/mexavictoria/"
          githubUrl="https://github.com/mexavictoriab"
          linkedinUrl="https://www.linkedin.com/in/mexavictoria/"
          cvUrl="https://www.canva.com/design/DAFYoAp9a6o/3c_dzHUU9D5QE8PKjmVzuw/view?utm_content=DAFYoAp9a6o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          photo={victoria}
          biography="Amante de los libros, la danza, los idiomas, la tecnología y el diseño, licenciada en innovación de negocios y mercadotecnia. Mujer en búsqueda de respuestas a las mil y un preguntas formuladas cada día. Parte del development team en el proyecto."
        /> */}
        <Card
          name="Jorge Hernandez"
          instagramUrl=""
          githubUrl="https://github.com/jorhdz"
          linkedinUrl="https://www.linkedin.com/in/jorge-hern%C3%A1ndez-46083425a/"
          cvUrl="https://drive.google.com/drive/folders/18bL-lw_zD8LYwXaqqxUf66TCYzZBDXEM"
          photo={jorge}
          biography="Cocinero por profesión en búsqueda de nuevos aires y nuevos retos. Originario de Guadalajara, Jalisco. Tragón por excelencia. Integrante del development team."
        />
        {/* <Card
          name="Diego Pahua"
          instagramUrl="https://www.instagram.com/d7egps/"
          githubUrl="https://github.com/d7egps"
          linkedinUrl="https://www.linkedin.com/in/d7egps/"
          cvUrl="https://drive.google.com/file/d/1eASwwiZ0OJiNwNNOQERk7giu5dYBd9Rp/view"
          photo={diego}
          biography="Soy un miembro del equipo de desarrolladores con formación en Pedagogía y pasión por la arquitectura de software, con la necesidad de mantenerme actualizado y buscando oportunidades para crecer profesionalmente, con ganas de afrontar cualquier reto que se me presente."
        /> */}

        <Card
          name="Adrián González"
          changeColor={true}
          instagramUrl="https://instagram.com/adrii_wings?igshid=NmQ2ZmYxZjA="
          githubUrl="https://github.com/adriiglezs"
          linkedinUrl="https://www.linkedin.com/in/adri%C3%A1n-gonz%C3%A1lez-s%C3%A1nchez-649141253"
          cvUrl="https://drive.google.com/file/d/1vlJgcxMdQ644m2vCBInBFGT8dkn_5bKt/view?usp=sharing"
          photo={adrian}
          biography="Originario del Estado de México, estudiante de la M. en Cs. en Ingeniería de Sistemas y egresado de la Ing. Matemática, mantengo un alto interés en el desarrollo web. Dispuesto a aprender cosas nuevas y desarrollar soluciones de forma óptima, manteniendo comunicación, iniciativa y disponibilidad para el trabajo en equipo. Integrante del development team."
        />
      </div>
      <Footer styleFoo={style.foo} />
    </>
  );
}
