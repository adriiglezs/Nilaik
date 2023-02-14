import style from "../../components/ProductDetailF/ShowProduct.module.css"

function ShowProduct(){
  return (<>
    <div className={style.ShowProductContainer}>
      <h1>{productName}</h1>
      <img
      src= {photoUrl}/>
    </div>
    <div className={style.ShowProductDetails}>
    <button>Proceder con el pago</button>
    </div>
    </>
  )
}