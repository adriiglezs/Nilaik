import style from "./CardContact.module.css";
export default function CardNosotros({ tittle, content }) {
  return (
    <div className={style.Nosotros}>

      <h4>{tittle}</h4>
      <p>{content}</p>

    </div>
  );
}