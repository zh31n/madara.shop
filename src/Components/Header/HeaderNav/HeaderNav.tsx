import s from "./HeaderNav.module.scss";
import {NavLink} from "react-router-dom";
import arrowDown from "../../../assets/img/arrowDown.svg";


const HeaderNav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to={'/catalog'} className={s.navItem}>
                Shop
                <img src={arrowDown} alt={'arrow down'}/>
            </NavLink>
            <NavLink to={'/'} className={s.navItem}>On Sale</NavLink>
            <NavLink to={'/'} className={s.navItem}>New Arrivals</NavLink>
            <NavLink to={'/'} className={s.navItem}>Brands</NavLink>
        </nav>
    );
};

export default HeaderNav;