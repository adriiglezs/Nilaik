import style from "./Footer.module.css";
export default function Footer({ styleFoo }) {
  return (
    <footer className={styleFoo ? styleFoo : style.content}>
      <p className={style.text}>Direccion: Estado de México</p>
      <p>Catalogo</p>
    </footer>
  );
}
