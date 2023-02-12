import './style.css' 
import React from "react";
import { useLocation, useParams } from 'react-router-dom'
import { Typography, CardMedia, Card } from '@mui/material';

export const SingleProductReview = () => {
    const location = useLocation()
    const object = location.state.p
    const param = useParams()
    return(
        <Card>
            <Typography variant='h1'>
            {object.title}
            </Typography>
        <Typography variant='h2'>
             product number: {param.productId}
        </Typography>
        <CardMedia
        sx={[{width: 300}, {height:320}]}
        component="img"
        src={object.image}
        alt=""
        />
        <Typography variant='body1' component="div">
           description: {object.description}
        </Typography>
        <Typography variant="body2" component="div">
          {object.title}
        </Typography>
        <Typography variant="body3" component="div">
          {object.price}$
        </Typography>
       </Card>        
    )
}

