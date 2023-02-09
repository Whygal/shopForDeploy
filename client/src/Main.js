import App from "./App.js"
import { SingleProductReview } from "./components/SingleProductReview/SingleProductReview.js"
import {BrowserRouter, Routes, Route} from "react-router-dom"  
import Admin from "./components/Admin/Admin.js"

const Main = () => {
return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App></App>}/>
        <Route path="/:productId" element={<SingleProductReview/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="about" element={<div>this is first yaniv galili web app!</div>}/>
        <Route path="*" element={<div>Not Found</div>}/>
    </Routes>
    </BrowserRouter>
)    
}

export default Main;