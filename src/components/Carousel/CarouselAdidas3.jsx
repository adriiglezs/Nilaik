/*import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './Carousel.module.css';
import Product from '../Products/ProductNike';

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
  return data.filter(item => item.marca === "Adidas 3");
}

export default function CarouselAdidas3() {
  const [adidas3, setAdidas3Items] = useState([]);

  useEffect(() => {
    fetchData().then(data => setAdidas3Items(data));
  }, []);
  return (<>
    <h1 className={style.carouselencabezado}>Adidas 3</h1>
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
      {adidas3.map(item => (
        <Product item={item} key={item.idProducto} />
      ))}
    </Carousel>
  </>);
}*/

import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './Carousel.module.css';
import Product from '../Products/ProductNike';
import { adidas3 } from './data';

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

export default function CarouselAdidas3() {
  const [adidas3Items, setadidas3Items] = useState([]);

  useEffect(() => {
    const filteredData = adidas3.filter(item => item.marca === "Adidas 3");
    setadidas3Items(filteredData);
  }, []);

  return (
    <>
      <h1 className={style.carouselencabezado}>Adidas 3</h1>
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
        {adidas3Items.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Carousel>

    </>
  );
}
