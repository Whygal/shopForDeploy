import "./style.css"
import React, {useContext} from "react"
import { Link } from "react-router-dom";
import { MyContext } from "../../MyContext";
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom" 
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Header = () =>{
  const dataFromContext = useContext(MyContext)
  const navigate = useNavigate()
  const productsToManege = dataFromContext.products
  console.log(productsToManege)
    return(
      <React.Fragment>
        <div className="Header">
      <IconButton color="primary" aria-label="add to shopping cart" onClick={() => dataFromContext.setOpenCart(true)}>
        <ShoppingCartCheckoutIcon />
    </IconButton>
    <Link to="/admin" state={{productsToManege}}>
    <IconButton onClick={()=> navigate("/admin")}>
      <AdminPanelSettingsIcon/>
    </IconButton>
    </Link>
    <Typography variant="h2">
      yaniv's shop
    </Typography>
    <Button variant="outlined" onClick={()=> navigate("about")}>
      about
    </Button>
      </div>
</React.Fragment>
    )
  }

  export default Header