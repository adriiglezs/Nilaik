import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { puma } from '../Carousel/data';
import style from './Carouselp.module.css';
import cart from '../../assets/cart.svg';

function CarouselNike() {
  return (<>
    <h1 className={style.carouselencabezado}>Nike</h1>
    <Carousel showThumbs={false} infiniteLoop={true} dynamicHeight={false} swipeable={true} emulateTouch={true} stopOnHover={true} transitionTime={500} interval={5000} selectedItem={0} showArrows={true} showStatus={false} showIndicators={false} centerMode={true} centerSlidePercentage={25}>
      {puma.map(item => (
        <div key={item.id} className={style.carouseltarget}>
          <div className={style.carouselbackgroundNike}>
            <img className={style.carouselCardProduct} src={item.src} alt={item.name} />
            <div className={style.carouselname}>
              <h1 className={style.carouselnameL}>{item.name}</h1>
            </div>
            <div className={style.carouselcod}>
              <h2 className={style.carouselcodL}>{item.category}</h2>
            </div>
            <div className={style.carouselcost}>
              <h3 className={style.carouselcostL}>{item.price}</h3>
            </div>
            <div className={style.carouselshopping}>
              <img className={style.carouselcards} src={cart} alt="Shopping cart"></img>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </>);
}

export default CarouselNike;