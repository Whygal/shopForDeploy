import "./style.css"
import React, {useContext} from "react"
import { MyContext } from "../../MyContext"
import Button from '@mui/material/Button';
import Amount from "../Amount/Amount";

const ProductToCart = (p) => {
 const dataFromContext = useContext(MyContext)
  const cart = dataFromContext.productsToShop
  
  const setCart = () => {
  const a = cart.filter(prop=> !(prop.id === p.id))
  dataFromContext.setProductsToShop(a)
  }

  return(
      <div className="product-card2">
        product:
          <div className="product-image">
            <img 
              src={p.image}
            alt=""
            />
          </div>
          <div className="product-info">
            <h5>{p.title}</h5>
            <h6>{p.price}$</h6>
          <Button>
            <img className="shoppingCartImg"
            src={dataFromContext.removeImgCart} 
            alt="" 
            onClick={setCart}
            />
            </Button>
          </div>
          <Amount/>
        </div>
    )
  }

  export default ProductToCart