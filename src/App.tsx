import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.tsx";
import Home from "./Pages/Home/Home.tsx";
import Footer from "./Components/Footer/Footer.tsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
