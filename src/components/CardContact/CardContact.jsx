
import style from "./CardContact.module.css";
export default function CardContactVision({ tittle, content }) {
  return (
    <div className={style.CardContactVision}>

      <h4>{tittle}</h4>
      <p>{content}</p>

    </div>
  );
}
