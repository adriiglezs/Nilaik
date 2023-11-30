import style from "./videoIngles.module.css";
import InglesVideo from "../../components/InglesVideo/inglesVideo";
import videoa from "../../assets/videosingles/aurora.mp4"
import videob from "../../assets/videosingles/jose.mp4"

function VideoIngles() {
  return (
    <>
      <div className={style.central}>
        <InglesVideo
          videoSource={videoa}
          nombre="Aurora"
          descripcion="home-office worker as an accountant assistant"
        />
        <InglesVideo
          videoSource={videob}
          nombre="Jose"
          descripcion="Currently working at a company"
        />
      </div>
    </>
  );
}
export default VideoIngles;