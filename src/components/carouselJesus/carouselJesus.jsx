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

/* import React from 'react';
import Carousel from 'react-material-ui-carousel'
import style from './carouselJesus.module.css';
import { puma } from '../Carousel/data';
import cart from '../../assets/cart.svg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Example() {
  return (
    <Carousel
    >
      {Array.from(Array(parseInt(puma?.length / 3)).keys()).map((i, index) => (
        <Box key={index} sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={2} md={4}>
              <div key={puma[index * 3].id} className={style.carouseltarget}>
                <div className={style.carouselbackgroundNike}>
                  <img className={style.carouselCardProduct} src={puma[index * 3].src} alt={puma[index * 3].name} />
                  <div className={style.carouselname}>
                    <h1 className={style.carouselnameL}>{puma[index * 3].name}</h1>
                  </div>
                  <div className={style.carouselcod}>
                    <h2 className={style.carouselcodL}>{puma[index * 3].category}</h2>
                  </div>
                  <div className={style.carouselcost}>
                    <h3 className={style.carouselcostL}>{puma[index * 3].price}</h3>
                  </div>
                  <div className={style.carouselshopping}>
                    <img className={style.carouselcards} src={cart} alt="Shopping cart"></img>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={2} md={4}>
              <div key={puma[(index * 3) + 1].id} className={style.carouseltarget}>
                <div className={style.carouselbackgroundNike}>
                  <img className={style.carouselCardProduct} src={puma[(index * 3) + 1].src} alt={puma[(index * 3) + 1].name} />
                  <div className={style.carouselname}>
                    <h1 className={style.carouselnameL}>{puma[(index * 3) + 1].name}</h1>
                  </div>
                  <div className={style.carouselcod}>
                    <h2 className={style.carouselcodL}>{puma[(index * 3) + 1].category}</h2>
                  </div>
                  <div className={style.carouselcost}>
                    <h3 className={style.carouselcostL}>{puma[(index * 3) + 1].price}</h3>
                  </div>
                  <div className={style.carouselshopping}>
                    <img className={style.carouselcards} src={cart} alt="Shopping cart"></img>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={2} md={4}>
              <div key={puma[(index * 3) + 2].id} className={style.carouseltarget}>
                <div className={style.carouselbackgroundNike}>
                  <img className={style.carouselCardProduct} src={puma[(index * 3) + 2].src} alt={puma[(index * 3) + 2].name} />
                  <div className={style.carouselname}>
                    <h1 className={style.carouselnameL}>{puma[(index * 3) + 2].name}</h1>
                  </div>
                  <div className={style.carouselcod}>
                    <h2 className={style.carouselcodL}>{puma[(index * 3) + 2].category}</h2>
                  </div>
                  <div className={style.carouselcost}>
                    <h3 className={style.carouselcostL}>{puma[(index * 3) + 2].price}</h3>
                  </div>
                  <div className={style.carouselshopping}>
                    <img className={style.carouselcards} src={cart} alt="Shopping cart"></img>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>


      ))}
    </Carousel>
  )
}  */

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './CarouselJesus.module.css';
import { puma } from '../Carousel/data';
import cart from '../../assets/cart.svg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
export default function Example() {
  return (<>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      arrows={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
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
    </Carousel>;
  </>);
}