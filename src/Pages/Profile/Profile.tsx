import s from './Profile.module.scss';
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import {Link} from "react-router-dom";
import WhiteInput from "../../UI/WhiteInput/WhiteInput.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";

const Profile = () => {
    return (
        <div className={'container'}>
            <div className={s.cont}>
                <div className={s.sideMenu}>
                    <Link to={'/profile'} >Personal information</Link>
                    <HorizontalLine margin={4}/>
                    <Link to={'/'}>Orders</Link>
                    <HorizontalLine margin={4}/>
                    <Link to={'/cart'}>Cart</Link>
                </div>
                <div className={s.inputs}>
                    <div>
                        <label>Your name</label>
                        <WhiteInput placeholder={'Enter new name...'} w={509} />
                    </div>
                    <div>
                        <label>Your surname</label>
                        <WhiteInput placeholder={'Enter new surname...'} w={509} />
                    </div>
                    <div>
                        <label>Your phone number</label>
                        <WhiteInput placeholder={'Enter phone number...'} w={509} />
                    </div>
                    <div>
                        <label>Your email address</label>
                        <WhiteInput placeholder={'Enter new email...'} w={509} />
                    </div>
                    <BlackButton text={'Apply'} width={88} fz={14}/>
                </div>
            </div>
        </div>
    );
};

export default Profile;