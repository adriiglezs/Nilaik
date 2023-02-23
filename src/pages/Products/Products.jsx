import React from "react";
import Style from "./Products.module.css"

function ProductDetails() {
  const product = {
    "id": 1,
    "name": "Adidas 3 rojo",
    "src": "https://res.cloudinary.com/ddwq0ulee/image/upload/v1676402924/Nilaik/adidas%203/IMG_20230212_153003-min_zwgojx.jpg",
    "category": "A3RJ",
    "price": 175.0
  };

  const images = {
    "i1": "https://res.cloudinary.com/ddwq0ulee/image/upload/v1676402954/Nilaik/adidas%20bicolor/IMG_20230212_145712-min_nublxu.jpg",
    "i2": "https://res.cloudinary.com/ddwq0ulee/image/upload/v1676402952/Nilaik/adidas%20bicolor/IMG_20230212_150246-min_kij1e3.jpg",
    "i3": "https://res.cloudinary.com/ddwq0ulee/image/upload/v1676402954/Nilaik/adidas%20bicolor/IMG_20230212_145100-min_pxzw00.jpg",
    "i4": "https://res.cloudinary.com/ddwq0ulee/image/upload/v1676403119/Nilaik/adidas%20bicolor/IMG_20230212_170322-min_etzuwp.jpg",
    "i5": "https://res.cloudinary.com/ddwq0ulee/image/upload/v1676402955/Nilaik/adidas%20bicolor/IMG_20230212_150000-min_moiwa9.jpg",
    "i6": "https://res.cloudinary.com/ddwq0ulee/image/upload/v1676402954/Nilaik/adidas%20bicolor/IMG_20230212_145421-min_ejwx2r.jpg"
  };

  return (
<div className={Style.todo}>
      <div className={Style.mainTop}>
        <h2 className={Style.h2s}>Detalles del producto</h2>
        <img className={Style.imgBig} src={product.src} alt={product.name} />
        <div className={Style.yellowcontainer}>
        <p className={Style.p1s}>ID: {product.id}</p>
        <p className={Style.p2s}>Nombre: {product.name}</p>
        <p className={Style.p3s}>Categoría: {product.category}</p>
        <p className={Style.p4s}>Precio: {product.price}</p>
        </div>
        <h3 className={Style.p5s}>Product Images</h3>
      </div>

      <div className={Style.contImgProducs}>

          {Object.values(images).map((image, index) => (
            <div className={Style.contImg} key={index}>
              <img className={Style.imgOthers} src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}

      </div>
    </div>
  );
}

export default ProductDetails;