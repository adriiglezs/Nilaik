import style from "./CardAboutNilaik.module.css";

export default function CardValores({ tittle, content }) {
  return (
    <div className={style.CardValores}>

      <h4>{tittle}</h4>
      <p>{content}</p>

    </div>
  );
}