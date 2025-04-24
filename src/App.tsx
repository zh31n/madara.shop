import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.tsx";
import Home from "./Pages/Home/Home.tsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
