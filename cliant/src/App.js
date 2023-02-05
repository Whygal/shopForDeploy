import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Products from "./components/Products/Products"
import { MyContext } from './MyContext';
import Cart from './components/Cart/Cart';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const App = () => {
  const [products ,setProducts] = useState([])
  const [productsInCat, setProductsInCat] = useState([])
  const [category, setCategory] = useState('All The Products')
  const price = products.map(p=> p.price)
  const [filterByPrice, setFilterByPrice] = useState([1,1000])
  const [productsToShop, setProductsToShop] = useState([])
  const [productsInShop, setProductsInShop] = useState([])
  const [openCart, setOpenCart]= useState(false)

  const cartImg="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
  const removeImgCart = "https://thumbs.dreamstime.com/z/remove-cart-icon-delete-shopping-cart-well-organized-fully-editable-remove-cart-icon-delete-shopping-cart-any-167546275.jpg"

  const getProducts = async function () {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const answer = await response.json();
      setProductsInCat(answer);
      setProducts(answer);
    } catch (error) {
      console.log(error);
    }
  };

 useEffect ( ()=>{
    getProducts();
  },[])
  
  useEffect ( ()=>{
    onCatFilterChange();
  },[category, filterByPrice])

  const onCatFilterChange = () =>{
    if(category === "All The Products"){
      console.log(category)
      setProductsInCat(products.filter(el => el.price >= filterByPrice[0] && el.price <= filterByPrice[1]))
    }else{
      const dataToFilter = products.filter((el) => el.category === category && el.price >= filterByPrice[0] && el.price <= filterByPrice[1])
      setProductsInCat(dataToFilter)
    } 
  }
  
  const onPriceFilterChange = (event, newValue) => {
    setFilterByPrice(newValue)
  };

  

   return (
      <MyContext.Provider value = {{setProductsInCat ,productsInCat ,products,cartImg,
      productsToShop, setProductsToShop, removeImgCart, productsInShop, setProductsInShop, filterByPrice,
       setFilterByPrice, price, onCatFilterChange, onPriceFilterChange, category, setCategory}}>
        <div className="App">
        <Header />
        <React.Fragment>
              <IconButton color="primary" aria-label="add to shopping cart" onClick={() => setOpenCart(true)}>
                <ShoppingCartCheckoutIcon />
            </IconButton>
    </React.Fragment>
        <Nav/>
         <Products/> 
          <Drawer className='Drawer' anchor={"left"} open={openCart} onClose={() => setOpenCart(false)}>
            <div><Cart/></div>
          </Drawer>
        </div>
      </MyContext.Provider>
  );
}

export default App;
