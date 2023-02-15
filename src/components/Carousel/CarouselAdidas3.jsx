import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { adidas3 } from './data.js';
import style from './Carousel.module.css';
import cart from '../../assets/cart.svg';

function CarouselAdidas3() {
  return (<>
    <h1 className={style.carouselencabezado}>Adidas 3</h1>
    <Carousel show={5} slide={2} transition={0.5} infinite
      responsive={[{
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }]}
      arrows={true}
      dots={false}
      slidesToShow={4}
      slidesToScroll={1}
    >
      {adidas3.map(item => (
        <div key={item.id} className={style.carouseltarget}>
          <div className={style.carouselbackgroundAdidas3}>
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

export default CarouselAdidas3;

