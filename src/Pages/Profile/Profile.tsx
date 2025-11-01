import s from './Profile.module.scss';
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import {Link, Outlet} from "react-router-dom";

const Profile = () => {

    return (
        <div className={'container'}>
            <div className={s.cont}>
                <div className={s.sideMenu}>
                    <Link to={'/profile'}>Personal information</Link>
                    <HorizontalLine margin={4}/>
                    <Link to={'/profile/orders'}>Orders</Link>
                    <HorizontalLine margin={4}/>
                    <Link to={'/cart'}>Cart</Link>
                    <HorizontalLine margin={4}/>
                    <Link to={'/profile/sessions'}>Sessions</Link>
                </div>
                <Outlet/>
            </div>

        </div>
    );
};

export default Profile;