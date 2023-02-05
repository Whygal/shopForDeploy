import "./style.css"
import React, {useContext, useState} from "react"
import { MyContext } from "../../MyContext"
import Card from "@mui/material/Card"
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardContent, Typography, Grid, Tooltip , Fade } from "@mui/material"


const Product = (p) => {
  const dataFromContext= useContext(MyContext)
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

   function productToCart() {
    dataFromContext.setProductsToShop((oldCart) => [...oldCart.filter((prop)=> prop.id !== p.id), p]) 
  }

  return(
      <Card className="product-card" id={p.id}>
        <CardActionArea>
            <CardMedia 
            component="img"
            src={p.image}
            alt=""
            />
            <CardContent>
          <Typography variant="body2" component="div">
          {p.title}
        </Typography>
        <Typography variant="body3" component="div">
          {p.price}$
        </Typography>
                <Tooltip
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                    onClick={handleTooltipOpen}
                    onClose={handleTooltipClose}
                    open={open}
                    title="Add"
                  >
                    <Grid display="flex" justifyContent="center" alignItems="center">  
                                <CardMedia
                              component="img"
                              className="shoppingCartImg"
                              src={dataFromContext.cartImg} 
                              alt="" 
                              onClick={productToCart}
                              sx={{ maxWidth: 42}}
                              />
                       </Grid>
                  </Tooltip>
              </CardContent>
              </CardActionArea>
        </Card>
    )
  }

  export default Product