import style from "./AboutNilaik.module.css";
import walking from "../../assets/walkinG.png";
import CardVision from "../../components/CardAboutNilaik/CardVision";
import CardMision from "../../components/CardAboutNilaik/CardMision";
import CardValores from "../../components/CardAboutNilaik/CardValores";
import CardNosotros from "../../components/CardAboutNilaik/CardNosotros";
import Footer from "../../components/Footer/Footer";
export default function AboutNilaik() {
  return (
    <>
      <div className={style.content}>

        <h1 className={style.tittleAboutNilaik}>
          Acerca de Nosotros
        </h1>

        <CardVision
          tittle="Vision"
          content="Expandir nuestra presencia en territorio nacional, ampliando nuestro catálogo y producción para mantener el crecimiento constante de nuestro proyecto. Y vender productos para público infantil y adulto, a precios competentes, manteniendo la calidad que nos respalda."
        />

        <CardMision
          tittle="Mision"
          content="Somos un proyecto especialista en elevar el confort de la población infantil sin descartar el estilo, esto lo logramos ofreciendo diseños actuales y contemporáneos para que la ropa ayude a reflejar la personalidad de tus pequeños."
        />
        <div className={style.principal}>

          <div className={style.aprincipal}>
            <img className={style.aboutNilaikImg} src={walking} alt="personas caminando" />
          </div>


          <div className={style.ValoresNosotros}>
            <CardValores
              tittle="Nuestros valores"
              content="Somos un proyecto que está enfocado en ofrecer productos de calidad a un precio bajo, nos caracterizamos por ser un proyecto con valores como, accesibilidad, medio ambiente, inclusión y diversidad."
            />

            <CardNosotros
              tittle="Sobre nosotros"
              content="Somos un proyecto que está enfocado en ofrecer productos de calidad a un precio bajo, nos caracterizamos por ser un proyecto con valores como, accesibilidad, medio ambiente, inclusión y diversidad." />
          </div>
        </div>
      </div>
      <Footer styleFoo={style.foo} />
    </>

  );
}
