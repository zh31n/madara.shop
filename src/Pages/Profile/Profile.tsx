import s from './Profile.module.scss';
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import {Link} from "react-router-dom";
import WhiteInput from "../../UI/WhiteInput/WhiteInput.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import PopUpSuccess from "../../UI/PopUpSuccess/PopUpSuccess.tsx";
import {changeLoginUserThunk} from "../../Redux/thunkCreators/authorization.ts";
import {setNewLoginR} from "../../Redux/Reducers/authReducer.ts";

const Profile = () => {

    const currentLogin = useAppSelector(state => state.auth.login);
    const currentEmail = useAppSelector(state => state.auth.email);
    const id = useAppSelector(state => state.auth.id);
    const [newLogin, setNewLogin] = useState<string>(currentLogin!);
    const [newEmail, setNewEmail] = useState<string>(currentEmail!)
    const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const onChangeLogin = (newLogin: string) => setNewLogin(newLogin);
    const onChangeEmail = (newEmail: string) => setNewEmail(newEmail);
    const onClosePopUp = () => setIsOpenPopUp(!isOpenPopUp);
    const onClickChangeLogin = () => {
        dispatch(changeLoginUserThunk({newLogin, id: id!}))
        dispatch(setNewLoginR(newLogin))
        setIsOpenPopUp(true)
    }


    return (
        <div className={'container'}>
            <div className={s.cont}>
                <div className={s.sideMenu}>
                    <Link to={'/profile'}>Personal information</Link>
                    <HorizontalLine margin={4}/>
                    <Link to={'/'}>Orders</Link>
                    <HorizontalLine margin={4}/>
                    <Link to={'/cart'}>Cart</Link>
                </div>
                <div className={s.inputs}>
                    <div>
                        <label>Your login</label>
                        <WhiteInput value={newLogin} onChange={onChangeLogin} placeholder={'Enter new name...'}
                                    w={509}/>
                        <BlackButton onClick={onClickChangeLogin} text={'change login'} width={160}/>
                    </div>
                    <div>
                        <label>Your email address</label>
                        <WhiteInput value={newEmail} onChange={onChangeEmail} placeholder={'Enter new email...'}
                                    w={509}/>
                        <BlackButton text={'change email'} width={160}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <BlackButton text={'change password '}/>
                    </div>
                    <BlackButton text={'Apply'} width={88} fz={14}/>
                </div>
            </div>
            <PopUpSuccess isOpen={isOpenPopUp} onClose={onClosePopUp} message={'Ваш логин успешно изменен'}/>
        </div>
    );
};

export default Profile;