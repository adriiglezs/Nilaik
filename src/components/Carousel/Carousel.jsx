/* import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

import adrian from "../../assets/adrian-min.jpg";

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg",
    "https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg",
    "https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg",
    "https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg",
    "https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg",
    "https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg",
    "https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg"
  ];

  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      currentIndex={currentIndex}
      onChange={handleChange}
      infinite
    >
      {images.map(image => (
        <img key={image} src={image} alt="slide" />
      ))}
    </Carousel>
  );
};

export default MyCarousel; */

//.........................................................................

/* import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const Highlight = ({ color, children }) => (
  <div style={{ backgroundColor: color, height: '100%' }}>
    {children}
  </div>
);

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      currentIndex={currentIndex}
      onChange={handleChange}
      infinite
      show={3.5}
      slide={2}
      transition={0.5}
    >
      <Highlight color="#f27a1a">We love Trendyol orange</Highlight>
      <Highlight color="#d53f8c">This is our Github</Highlight>
      <Highlight color="#16be48">We love Trendyol green</Highlight>
      <Highlight color="#3f51b5">This is our website</Highlight>
    </Carousel>
  );
};

export default MyCarousel; */

//....................................................................

/* import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const Highlight = ({ color, children }) => (
  <div style={{ backgroundColor: color, padding: '50px' }}>
    {children}
  </div>
);

const MyCarousel = () => (
  <Carousel show={3.5} slide={2} transition={0.5} infinite>
    <Highlight color="#f27a1a">We love Trendyol orange</Highlight>
    <Highlight color="#d53f8c">This is our Github</Highlight>
    <Highlight color="#16be48">We love Trendyol green</Highlight>
    <Highlight color="#3f51b5">This is our website</Highlight>
  </Carousel>
);

export default MyCarousel; */

////::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/* import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const Highlight = ({ src, children }) => (
  <div>
    <img src={src} alt="highlight" />
    <p>{children}</p>
  </div>
);

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      currentIndex={currentIndex}
      onChange={handleChange}
      show={3.5}
      slide={2}
      transition={0.5}
      infinite
    >
      <Highlight src="https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg">We love Trendyol orange</Highlight>
      <Highlight src="https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg">This is our github</Highlight>
      <Highlight src="https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg">We love Trendyol green</Highlight>
      <Highlight src="https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg">This is our website</Highlight>
    </Carousel>
  );
};

export default MyCarousel; */

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/* import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const MyCarousel = () => {
  const images = [
    { src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg', alt: 'We love Trendyol orange' },
    { src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg', alt: 'This is our github' },
    { src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg', alt: 'We love Trendyol green' },
    { src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg', alt: 'This is our website' }
  ];

  return (
    <Carousel show={3.5} slide={2} transition={0.5} infinite>
      {images.map(image => (
        <img key={image.src} src={image.src} alt={image.alt} />
      ))}
    </Carousel>
  );
};

export default MyCarousel; */

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.
/* import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import style from './Carousel.module.css';

const MyCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      currentIndex={currentIndex}
      onChange={handleChange}
      infinite
    >
      {items.map(item => (
        <div className={style.target}>
          <div className={style.background}>
            <img className={style.CardProduct} src={item.photoUrl} alt={item.name} />
            <div className={style.name}>
              <h1>{item.name}</h1>
            </div>
            <div className={style.cod}>
              <h2>{item.code}</h2>
            </div>
            <div className={style.cost}>
              <h3>{item.cost}</h3>
            </div>
            <div className={style.shopping}>
              <img className={style.cards} src="/src/assets/cart.svg" alt="Shopping cart" />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel; */

/////////////////////////////////////////////////////////////////////
/* import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    <div className="target">
      <div className="background">
        <img
          className="CardProduct"
          src="https://ae01.alicdn.com/kf/HTB1N4Y0HVXXXXbEXXXXq6xXFXXXo/2015-ropa-de-los-ni%C3%B1os-masculinos-primavera-ni%C3%B1o-conjunto-ni%C3%B1o-conjunto-deportivo-de-manga-larga-conjunto.jpg"
          alt="Nike"
        />
        <div className="name">
          <h1>"Adidas Rosa"</h1>
        </div>
        <div className="cod">
          <h2>"CARS"</h2>
        </div>
        <div className="cost">
          <h3>"175.00"</h3>
        </div>
        <div className="shopping">
          <img
            className="cards"
            src="/src/assets/cart.svg"
            alt="carro de compra para añadir tus productos"
          />
        </div>
      </div>
    </div>
  ];

  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      currentIndex={currentIndex}
      onChange={handleChange}
      infinite
      responsive
    >
      {slides.map((slide, index) => (
        <div key={index}>{slide}</div>
      ))}
    </Carousel>
  );
};

export default MyCarousel; */


/////////////////////////////////////////////////////////////////////////////////////

/*
import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg',
      name: 'Adidas Azul',
      code: 'CARS-1',
      cost: '200.00',
      shoppingCart: '/src/assets/cart.svg'
    },
    {
      image: 'https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg',
      name: 'Adidas Verde',
      code: 'CARS-2',
      cost: '250.00',
      shoppingCart: '/src/assets/cart.svg'
    },
    {
      image: 'https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg',
      name: 'Adidas Rojo',
      code: 'CARS-3',
      cost: '300.00',
      shoppingCart: '/src/assets/cart.svg'
    },
    {
      image: 'https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg',
      name: 'Adidas Amarillo',
      code: 'CARS-4',
      cost: '150.00',
      shoppingCart: '/src/assets/cart.svg'
    },
    {
      image: 'https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg',
      name: 'Adidas Rosa',
      code: 'CARS-5',
      cost: '175.00',
      shoppingCart: '/src/assets/cart.svg'
    }
  ];

  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      currentIndex={currentIndex}
      onChange={handleChange}
      infinite
      responsive
    >
      {slides.map(slide => (
        <div className={style.target} key={slide.code}>
          <div className={style.background}>
            <img className={style.CardProduct} src={slide.image} alt={slide.name} />
            <div className={style.name}>
              <h1>{slide.name}</h1>
            </div>
            <div className={style.cod}>
              <h2>{slide.code}</h2>
            </div>
            <div className={style.cost}>
              <h3>{slide.cost}</h3>
            </div>
            <div className={style.shopping}>
              <img className={style.cards} src={slide.shoppingCart} alt="shopping cart" />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel; */

//////////////////////////////////////////////////////////////////

/* import React, { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg',
      name: 'Adidas 1',
      code: 'ABC1',
      cost: '100.00'
    },
    {
      src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg',
      name: 'Adidas 2',
      code: 'ABC2',
      cost: '200.00'
    },
    {
      src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg',
      name: 'Adidas 3',
      code: 'ABC3',
      cost: '150.00'
    },
    {
      src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/ConjuntoDeportivoKIDS-1.jpg',
      name: 'Adidas 4',
      code: 'ABC4',
      cost: '175.00'
    },
    {
      src: 'https://fugitivetrend.com/wp-content/uploads/2021/07/DeportivoPantsKIDS-1.jpg',
      name: 'Adidas 5',
      code: 'ABC5',
      cost: '250.00'
    }
  ];

  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      currentIndex={currentIndex}
      onChange={handleChange}
      infinite
      responsive
    >
      {images.map(({ src, name, code, cost }) => (
        <div className="product-card">
          <img src={src} alt={name} />
          <div className="product-info">
            <h1 className="product-name">{name}</h1>
            <h2 className="product-code">{code}</h2>
            <h3 className="product-cost">{cost}</h3>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel; */


/////////////////////////////////////////////////////

/* import React, { useState } from 'react';
import { Carousel } from "@trendyol-js/react-carousel";
import style from "./Carousel.module.css";

const images = [
  {
    src: "https://res.cloudinary.com/dwd3jknn9/image/upload/v1676247024/Nilaik/IMG_20230212_145421_ekhl09.jpg",
    alt: "Nike",
    name: "Adidas Rosa",
    cod: "COCHES",
    cost: "175.00"
  },
  {
    src: "https://res.cloudinary.com/dwd3jknn9/image/upload/v1676247024/Nilaik/IMG_20230212_150020_x3xdca.jpg",
    alt: "Adidas",
    name: "Nike Azul",
    cod: "ZAPATOS",
    cost: "200.00"
  },
  {
    src: "https://res.cloudinary.com/dwd3jknn9/image/upload/v1676247023/Nilaik/IMG_20230212_145718_szioqw.jpg",
    alt: "Puma",
    name: "Puma Verde",
    cod: "ROPA",
    cost: "150.00"
  },
  {
    src: "https://res.cloudinary.com/dwd3jknn9/image/upload/v1676247022/Nilaik/IMG_20230212_145103_qd5a64.jpg",
    alt: "Reebok",
    name: "Reebok Rojo",
    cod: "ACCESORIOS",
    cost: "100.00"
  },
  {
    src: "https://res.cloudinary.com/dwd3jknn9/image/upload/v1676247021/Nilaik/IMG_20230212_144529_lpkxss.jpg",
    alt: "New Balance",
    name: "New Balance Amarillo",
    cod: "DEPORTES",
    cost: "225.00"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
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
      currentIndex={currentIndex}
      onIndexChanged={index => setCurrentIndex(index)
      }
    >
      {images.map(({ src, alt, name, cod, cost }, index) => (
        <div key={index} className={style.target}>
          <div className={style.background}>
            <img
              className={style.CardProduct}
              src={src}
              alt={alt}
            />
            <div className={style.name}>
              <h1>{name}</h1>
            </div>
            <div className={style.cod}>
              <h2>{cod}</h2>
            </div>
            <div className={style.cost}>
              <h3>{cost}</h3>
            </div>
            <div className={style.shopping}>
              <img className={style.cards} alt="shopping cart" />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default App; */


///////////////////////////////////////////////////////////
import React from 'react';
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

export default CarouselAdidasBi;










