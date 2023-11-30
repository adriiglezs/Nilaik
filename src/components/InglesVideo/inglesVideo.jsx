import style from './inglesVideo.module.css';
import React from 'react';

function InglesVideo({ videoSource, nombre, descripcion }) {
  return (
    <div className={style.myCard}>
      <div className={style.innerCard}>
        <div className={style.frontSide}>
          <p className={style.title}>{nombre}</p>
          <p>{descripcion}</p>
        </div>
        <div className={style.backSide}>
          {/* Utiliza la etiqueta <video> para mostrar el video */}
          <video controls className={style.viddeo}>
            <source src={videoSource} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
      </div>
    </div>
  );
}

export default InglesVideo;
