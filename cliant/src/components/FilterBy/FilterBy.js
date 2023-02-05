import "./style.css"
import React from "react"
import { useContext } from "react"
import { MyContext } from "../../MyContext"
import { FormControl, MenuItem, Select, InputLabel, Box } from "@mui/material"

const FilterBy = () => { 
  const dataFromContext = useContext(MyContext);

  const categories = dataFromContext.products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index); 
  categories.unshift('All The Products')
  
  const change = (e) => {
    dataFromContext.setCategory(e.target.value)
  }
    return(
      <div>
      <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Filter  By:</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
               value={dataFromContext.category}
               label="Filter  By:" 
                onChange={change}
                >
                {categories.map((el,index) => <MenuItem key={index} value={el}>{el}</MenuItem>)}
              </Select>           
    </FormControl>
    </Box>
    </div>
    )
  }

  export default FilterBy