import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { nike } from './data.js';
import style from './Carousel.module.css';
import cart from '../../assets/cart.svg';

function CarouselNike() {
  return (<>
    <h1 className={style.encabezado}>Nike</h1>
    <Carousel show={3.5} slide={2} transition={0.5} infinite
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
      {nike.map(item => (
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

export default CarouselNike;