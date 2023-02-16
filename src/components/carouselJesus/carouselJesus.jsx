/* import React from 'react';
import Carousel from 'react-material-ui-carousel'
import style from './CarouselJesus.module.css';
import { puma } from '../Carousel/data';
import cart from '../../assets/cart.svg';

export default function Example() {
  return (
    <Carousel>
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
  )
} */

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import style from './carouselJesus.module.css';
import { puma } from '../Carousel/data';
import cart from '../../assets/cart.svg';

export default function Example() {
  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysVisible={true}
      swipe={true}
      indicators={false}
      interval={4000}
      navButtonsProps={{ style: { background: "transparent" } }}
      slidesToShow={3} // Mostrar 3 imágenes a la vez
      slidesToScroll={3} // Desplazarse 3 imágenes cada vez
    >
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
  )
} 