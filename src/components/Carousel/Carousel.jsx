/* import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { adidasBicolor } from './data.js';
import style from './Carousel.module.css';
import cart from '../../assets/cart.svg';

function CarouselAdidasBi() {
  return (<>
    <h1 className={style.encabezado}>Adidas Bicolor</h1>
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

export default CarouselAdidasBi; */

////////////////////////
/* import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { adidasBicolor } from './data.js';
import style from './Carousel.module.css';
import cart from '../../assets/cart.svg';
import arrow from '../../assets/slick-arrow.svg';

function CarouselAdidasBi() {
  return (<>
    <h1 className={style.carouselencabezado}>Adidas Bicolor</h1>
    <Carousel show={3.5} slide={2} transition={0.5} infinite
      responsive={[{
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }]}
      dots={false}
      slidesToShow={4}
      slidesToScroll={1}
      prevArrow={<img src={arrow} className={style.prevArrow} />}
      nextArrow={<img src={arrow} className={style.nextArrow} />}
    >
      {adidasBicolor.map(item => (
        <div key={item.id} className={style.carouseltarget}>
          <div className={style.carouselbackground}>
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
export default CarouselAdidasBi; */


////////////////////////////////////

/* import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { adidasBicolor } from './data.js';
import style from './Carousel.module.css';
import cart from '../../assets/cart.svg';

// Componente personalizado para la flecha previa
const CustomPrevArrow = ({ onClick }) => (

  <div className={style.customPrevArrow} onClick={onClick}>
    <i className="fa fa-angle-left"></i>
  </div>
);
// Componente personalizado para la flecha siguiente
const CustomNextArrow = ({ onClick }) => (

  <div className={style.customNextArrow} onClick={onClick}>
    <i className="fa fa-angle-right"></i>
  </div>
);
function CarouselAdidasBi() {
  return (
    <>
      <h1 className={style.carouselencabezado}>Adidas Bicolor</h1>
      <Carousel
        show={3.5}
        slide={2}
        transition={0.5}
        infinite
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
          },
          { breakpoint: 600, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]}
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        arrowPrev={<CustomPrevArrow />}
        arrowNext={<CustomNextArrow />}
      >
        {adidasBicolor.map(item => (
          <div key={item.id} className={style.carouseltarget}>
            <div className={style.carouselbackground}>
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
    </>
  );
}

export default CarouselAdidasBi; */

////////////////7

import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { adidasBicolor } from './data.js';
import style from './Carousel.module.css';
import cart from '../../assets/cart.svg';
import './custom-carousel.css'; // Importar el archivo de estilos

function CarouselAdidasBi() {
  return (
    <>
      <h1 className={style.carouselencabezado}>Adidas Bicolor</h1>
      <Carousel
        show={5}
        slide={2}
        transition={0.5}
        infinite
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
          },
          { breakpoint: 600, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]}
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        arrowStyle="custom-carousel-arrow" // Asignar la clase CSS modificada
      >
        {adidasBicolor.map(item => (
          <div key={item.id} className={style.carouseltarget}>
            <div className={style.carouselbackgroundAdidasBicolor}>
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
    </>
  );
}

export default CarouselAdidasBi;

