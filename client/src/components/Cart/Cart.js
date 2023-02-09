import React, {useContext} from 'react'
import ProductToCart from '../ProductToCart/ProductToCart'
import { MyContext } from '../../MyContext'
import Button from '@mui/material/Button';
import "./style.css"

function Cart() { 
  const dataFromContext = useContext(MyContext)
  
  const empty = () => {
    dataFromContext.setProductsToShop([])
  }

  return (
    <div className="productToShop">cart:
    <Button onClick={empty} className={"empty"}>empty</Button>  
      {dataFromContext.productsToShop?.map((p,index) => <ProductToCart 
      key={index} 
      title={p.title}
      price={p.price}
      image={p.image}
      id={p.id}
      />)}
    </div>
  )
}

export default Cart