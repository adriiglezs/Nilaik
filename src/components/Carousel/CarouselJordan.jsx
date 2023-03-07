import React, { useState, useEffect } from 'react';
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
  return data.filter(item => item.marca === "Jordan");
}

export default function CarouselJordan() {
  const [jordan, setJordanItems] = useState([]);

  useEffect(() => {
    fetchData().then(data => setJordanItems(data));
  }, []);
  return (
    <>
      <h1 className={style.carouselencabezado}>Jordan</h1>
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
        {jordan.map((item) => (
          <Product item={item} key={item.idProduct} />
        ))}
      </Carousel>

    </>
  );
}