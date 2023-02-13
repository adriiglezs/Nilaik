
import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { adidasBicolor } from './data.js';
import style from './Carousel.module.css';
import cart from '../../assets/cart.svg';

function CarouselAdidasBi() {
  return (<>
    <h1 className={style.encabezado}>Adidas Bicolor</h1>
    <Carousel autoplay={2000} show={3} slide={1} transition={0.5} infinite
      responsive={[{
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }]}
      /* arrows={true} */
      dots={false}
      slidesToShow={4}
      slidesToScroll={1}

    >
      {adidasBicolor.map(item => (
        <div key={item.id} className={style.target}>
          <div className={style.background}>
            <img className={style.CardProduct} src={item.src} alt={item.name} />
            <div className={style.name}>
              <h1 className={style.nameL}>{item.name}</h1>
            </div>
            <div className={style.cod}>
              <h2 className={style.codL}>{item.category}</h2>
            </div>
            <div className={style.cost}>
              <h3 className={style.costL}>{item.price}</h3>
            </div>
            <div className={style.shopping}>
              <img className={style.cards} src={cart} alt="Shopping cart"></img>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </>);
}

export default CarouselAdidasBi;










