import "./style.css"
import * as React from 'react'
import Box from "@mui/material/Box"
import { Slider, Typography } from "@mui/material"
import { useContext } from "react"
import { MyContext } from "../../MyContext"

const valueText = (value) => {
     return  `${value}$`
  }

const SortBy = () => {
  const dataFromContext = useContext(MyContext)
   const price = dataFromContext.price

    return(
    <div>
       <Box sx={{ width: 300 }}>
       <Typography id="input-slider" gutterBottom>
        filter by price:
      </Typography>
      <Slider
        getAriaLabel={() => 'price range'}
        value={dataFromContext.filterByPrice}
        onChange={dataFromContext.onPriceFilterChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
        color='success'
        min={Math.min(...price)}
        max={Math.max(...price)}
      />
    </Box>
    </div>
    )
}

  export default SortBy