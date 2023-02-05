import "./style.css"
import React from "react"
import FilterBy from "../FilterBy/FilterBy"
import SortBy from "../SortBy/SortBy"

const Nav = () => {
    return(
        <nav className="product-filter">    
        <FilterBy />
        <SortBy />
      </nav>
    )
}

export default Nav