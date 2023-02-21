import React from 'react';
import productsData from '../ProductDetailF/productsData';
import {product} from productsData


export const ItemDetail=({productsData})=>{
    return(
        <div className="container">
            <div className="detail">
                <img className="detail-image" src= {img.productsData} alt = ""/>
        <div>
        <h1>{product.name}</h1>
        </div>
        </div>
        </div>
    );
}
export default ItemDetail;