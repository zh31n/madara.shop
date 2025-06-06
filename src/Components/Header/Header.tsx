import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav.tsx";
import SearchInput from "../../UI/SearchInput/SearchInput.tsx";
import cartImg from '../../assets/img/basket.svg';
import profileImg from '../../assets/img/profile.svg';

const Header = () => {
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
                        <NavLink to={'/profile'}>
                            <img src={profileImg} alt="profile image"/>
                        </NavLink>
                    </section>
                </div>
            </div>
        </header>
    );
};

export default Header;