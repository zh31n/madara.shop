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
import LoginPage from "./Pages/LoginPage/LoginPage.tsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./Redux/store.ts";
import {fetchCurrentUser, refreshTokenAuth} from "./Redux/thunkCreators/authorization.ts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.tsx";
import {getCartItemsUserThunk} from "./Redux/thunkCreators/cartPage.ts";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword.tsx";
import ResetPasswordPage from "./Pages/ResetPasswordPage/ResetPasswordPage.tsx";
import ProfileInfo from "./Pages/Profile/Components/ProfileInfo/ProfileInfo.tsx";
import UserSessions from "./Pages/Profile/Components/UserSessions/UserSessions.tsx";
import CreateOrderPage from "./Pages/CreateOrderPage/CreateOrderPage.tsx";

function App() {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(state => state.auth.id);
    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            dispatch(refreshTokenAuth())
            dispatch(fetchCurrentUser())
        }
    }, [localStorage.getItem('access_token')]);

    useEffect(() => {
        if (userId) {
            dispatch(getCartItemsUserThunk(+userId));
        }
    }, [userId]);

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'product/:id?'} element={<ProductPage/>}/>
                <Route path={'catalog/'} element={<Catalog/>}/>
                <Route path={'cart/'} element={<PrivateRoute><Cart/></PrivateRoute>}/>
                <Route path={'create-order/'} element={<CreateOrderPage/>}/>
                <Route path={'profile/'} element={<PrivateRoute><Profile/></PrivateRoute>}>
                    <Route index={true} element={<ProfileInfo/>}/>
                    <Route path={'sessions'} element={<UserSessions/>}/>

                </Route>
                <Route path={'login/'} element={<LoginPage/>}/>
                <Route path={'register/'} element={<RegisterPage/>}/>
                <Route path={'forgot/'} element={<ForgotPassword/>}/>
                <Route path={'reset/'} element={<ResetPasswordPage/>}/>

            </Routes>
            <SubscribeNews/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
