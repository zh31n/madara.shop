import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.tsx";
import Home from "./Pages/Home/Home.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import SubscribeNews from "./modules/SubscribeNews/SubscribeNews.tsx";
import ProductPage from "./Pages/ProductPage/ProductPage.tsx";
import Catalog from "./Pages/Catalog/Catalog.tsx";
import Cart from "./Pages/Cart/Cart.tsx";
import Profile from "./Pages/Profile/Profile.tsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'product/:id?'} element={<ProductPage/>}/>
                <Route path={'catalog/'} element={<Catalog/>}/>
                <Route path={'cart/'} element={<Cart/>}/>
                <Route path={'profile/'} element={<Profile/>}/>
            </Routes>
            <SubscribeNews/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
