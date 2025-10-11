import s from './Header.module.scss';
import {Link, NavLink} from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav.tsx";
import SearchInput from "../../UI/SearchInput/SearchInput.tsx";
import cartImg from '../../assets/img/basket.svg';
// import profileImg from '../../assets/img/profile.svg';
import {useAppSelector} from "../../Redux/store.ts";
import ProfileDropdown from "../../UI/DropDownProfile/DropDownProfile.tsx";

const Header = () => {

    const user = useAppSelector(state => state.auth.login);
    const isAuthenticated = useAppSelector(state => state.auth.isAuth);

    return (
        <header className={s.header}>
            <div className={'container'}>
                <div className={s.hInner}>
                    <NavLink to={'/'} className={s.logo}>anime.co</NavLink>
                    <HeaderNav/>
                    <SearchInput/>
                    <section className={s.cartProfile}>
                        <NavLink to={'/cart'}>
                            <img src={cartImg} alt="cart image"/>
                        </NavLink>

                        {/*<img src={profileImg} alt="profile image"/>*/}
                        {isAuthenticated ? (
                            // Если пользователь авторизован, показываем выпадающее меню профиля
                            // Передаем стили, чтобы кнопка профиля выглядела как navLink
                            <ProfileDropdown
                                buttonClassName={''} // Передаем класс для стилизации кнопки
                                iconClassName={''} // Передаем класс для иконки (если есть)
                                userName={user || 'Профиль'} // Имя пользователя
                            />
                        ) : (
                            // Если не авторизован, показываем кнопку "Войти"
                            <Link to="/login">Войти</Link>
                        )}

                    </section>
                </div>
            </div>
        </header>
    );
};

export default Header;