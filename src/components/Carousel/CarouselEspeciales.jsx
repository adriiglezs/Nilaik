/*import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './Carousel.module.css';
import Product from '../Products/ProductNike';
import { carnal } from './data';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
async function fetchData() {
  const response = await fetch("https://nilaik.up.railway.app/productos/");
  const data = await response.json();
  return data.filter(item => item.marca === "Personajes");
}

export default function CarouselPersonajes() {
  const [personajes, setPersonajesItems] = useState([]);

  useEffect(() => {
    fetchData().then(data => setPersonajesItems(data));
  }, []);
  return (
    <>
      <h1 className={style.carouselencabezado}>Camuflajeados</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carnal.map((item) => (
          <Product item={item} key={item.idProducto} />
        ))}
      </Carousel>

    </>
  );
}*/

import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './Carousel.module.css';
import Product from '../Products/ProductNike';
import { carnal } from './data';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function Carouselcarnal() {
  const [carnalItems, setcarnalItems] = useState([]);

  useEffect(() => {
    const filteredData = carnal.filter(item => item.marca === "Camuflaje");
    setcarnalItems(filteredData);
  }, []);

  return (
    <>
      <h1 className={style.carouselencabezado}>Camuflajeados</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carnalItems.map((item) => (
          <Product item={item} key={item.idProducto} />
        ))}
      </Carousel>

    </>
  );
}