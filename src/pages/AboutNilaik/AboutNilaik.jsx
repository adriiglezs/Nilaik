import CardContact from "../../components/CardContact/CardContact";
import style from "./AboutNilaik.module.css";
export default function AboutNilaik() {
  return (
    <div className={style.content}>
      <CardContact
        tittle="Mision"
        content="Somos un proyecto especialista en elevar el confort de la población infantil sin descartar el estilo, esto lo logramos ofreciendo diseños actuales y contemporáneos para que la ropa ayude a reflejar la personalidad de tus pequeños."
      />
      <CardContact
        tittle="Vision"
        content="Expandir nuestra presencia en territorio nacional, ampliando nuestro catálogo y producción para mantener el crecimiento constante de nuestro proyecto. Y vender productos para público infantil y adulto, a precios competentes, manteniendo la calidad que nos respalda."
      />
      <CardContact
        tittle="Nuestros valores"
        content="Somos un proyecto que está enfocado en ofrecer productos de calidad a un precio bajo, nos caracterizamos por ser un proyecto con valores como, accesibilidad, medio ambiente, inclusión y diversidad."
      />
      <CardContact tittle="" content="" />
    </div>
  );
}
