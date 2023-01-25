import style from "./CardContact.module.css";
export default function CardContact({ tittle, content, img }) {
  return (
    <div className={style.carding}>
      <h4>{tittle}</h4>
      <p>{content}</p>
    </div>
  );
}
