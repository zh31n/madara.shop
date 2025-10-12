import s from './Header.module.scss';
import {Link, NavLink} from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav.tsx";
import SearchInput from "../../UI/SearchInput/SearchInput.tsx";
import cartImg from '../../assets/img/basket.svg';
// import profileImg from '../../assets/img/profile.svg';
import ProfileDropdown from "../../UI/DropDownProfile/DropDownProfile.tsx";
import {useAppSelector} from "../../Redux/store.ts";


const Header = () => {

    const user = useAppSelector(state => state.auth.login);
    const isAuthenticated = useAppSelector(state => state.auth.isAuth);
    const cartItemsCount = useAppSelector(state => state.cart.cartItems.length);

    return (
        <header className={s.header}>
            <div className={'container'}>
                <div className={s.hInner}>
                    <NavLink to={'/'} className={s.logo}>anime.co</NavLink>
                    <HeaderNav/>
                    <SearchInput/>
                    <section className={s.cartProfile}>
                        <NavLink to="/cart" className={s.cartLink}>
                            <div className={s.cartIconContainer}>
                                <img src={cartImg} alt="Корзина" className={s.cartIcon} />
                                {cartItemsCount > 0 && (
                                    <div className={s.cartItemCount}>
                                        {cartItemsCount}
                                    </div>
                                )}

                            </div>
                        </NavLink>
                        {isAuthenticated ? (
                            <ProfileDropdown
                                buttonClassName={''}
                                iconClassName={''}
                                userName={user || 'Профиль'}
                            />
                        ) : (
                            <Link to="/login">Войти</Link>
                        )}

                    </section>
                </div>
            </div>
        </header>
    );
};

export default Header;