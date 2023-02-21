import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import productsData from '../ProductDetailF/productsData';


export const ItemDetailContainer=()=>{
    const [data,setData]= useState({});
useEffect (()=>{
   const getData=new Promise(resolve=>{
    setTimeout(()=>{
        resolve();
    }, 3000);
})
getData.then(res=>setData(res));
    }, [])

    return(
        <ItemDetail data={data}/>
    );
}
export default ItemDetailContainer;