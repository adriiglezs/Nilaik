import style from './SocialMedia.module.css';
import WA from "../../assets/Íconos/WA-Icono.png";
import IG from "../../assets/Íconos/IG-Icono.png";
import FB from "../../assets/Íconos/FB-Icono.png";


function SocialMedia() {
  return (


    <nav className={style.background}>

      <h1 className={style.h1social}>Redes sociales</h1>

      <div className={style.SocialNetworksLogo}>
        <a href="https://wa.me/525513513242">
          <img
            className={style.imgWA}
            src={WA}
            alt="Logo Whatsapp"
          />
        </a>
      </div>

      <div className={style.SocialNetworksLogo}>
        <a href="https://www.instagram.com/nilaik_/?igshid=ZDdkNTZiNTM%3D">
          <img
            className={style.imgIG}
            src={IG}
            alt="Logo Instagram"
          />
        </a>
      </div>

      <div className={style.SocialNetworksLogo}>
        <a href="https://www.facebook.com/Nilaik-113751054955804/">
          <img
            className={style.imgFB}
            src={FB}
            alt="Logo Facebook"
          />
        </a>
      </div>

    </nav>
  );
}

export default SocialMedia;

