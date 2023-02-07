import style from "./CardAboutNilaik.module.css";

export default function CardNosotros({ tittle, content }) {
  return (
    <div className={style.CardNosotros}>

      <h4>{tittle}</h4>
      <p>{content}</p>

    </div>
  );
}