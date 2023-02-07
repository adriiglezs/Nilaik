
import style from "./CardAboutNilaik.module.css";

export default function CardVision({ tittle, content }) {
  return (
    <div className={style.CardVision}>

      <h4>{tittle}</h4>
      <p>{content}</p>

    </div>
  );
}
