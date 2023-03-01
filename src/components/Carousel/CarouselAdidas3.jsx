import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './Carousel.module.css';
import { adidas3 } from './data';
import cart from '../../assets/cart.svg';
import ProductAdidas3 from '../Products/ProductAdidas3';

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
        <ProductAdidas3 item={item} key={item.id} />
      ))}
    </Carousel>
  </>);
}