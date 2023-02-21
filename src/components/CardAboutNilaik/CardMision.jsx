import style from "./CardAboutNilaik.module.css";

export default function CardMision({ tittle, content }) {
  return (
    <div className={style.CardMision}>

      <h4>{tittle}</h4>
      <p>{content}</p>

    </div>
  );
}