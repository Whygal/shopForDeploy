import "./style.css"
import React, {useContext} from "react";
import Product from "../Product/Product";
import { MyContext } from "../../MyContext";


const Products = () => {
const dataFromContext= useContext(MyContext)

return(
        <section className="products">
      {dataFromContext.productsInCat.map((p) => <Product 
      key={p.id}
      id={p.id}
      title={p.title}
       price={p.price}
       image={p.image}
       des={p.description}
       />
       )}
    </section>
    )
}
export default Products