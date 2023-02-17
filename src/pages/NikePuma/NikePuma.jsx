import Footer from "../../components/Footer/Footer";

import SocialMedia from "../../components/Social-Media/SocialMedia";
import UniqueCollection from "../../components/UniqueCollection/UniqueCollection";
import style from "./NikePuma.module.css";



export default function NikePuma() {
  return (
    <>
     
      <UniqueCollection />
      
      
      <UniqueCollection />
      <SocialMedia />
      
      <Footer styleFoo={style.foo} />
    </>
  );
};
