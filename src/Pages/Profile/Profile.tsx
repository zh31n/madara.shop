import s from './Profile.module.scss';
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import {Link} from "react-router-dom";
import WhiteInput from "../../UI/WhiteInput/WhiteInput.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import PopUpSuccess from "../../UI/PopUpSuccess/PopUpSuccess.tsx";
import {
    changeEmailThunk,
    changeLoginUserThunk,
    resendChangeEmailCodeThunk,
    sendChangeEmailCodeThunk, verifyEmailChangeCode
} from "../../Redux/thunkCreators/authorization.ts";
import {setNewLoginR} from "../../Redux/Reducers/authReducer.ts";
import PopUpConfirmCode from "../../UI/PopUpConfirmCode/PopUpConfirmCode.tsx";

const Profile = () => {

    const currentLogin = useAppSelector(state => state.auth.login);
    const currentEmail = useAppSelector(state => state.auth.email);
    const id = useAppSelector(state => state.auth.id);

    const [newLogin, setNewLogin] = useState<string>(currentLogin!);
    const [newEmail, setNewEmail] = useState<string>(currentEmail!)
    const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);
    const [confirmCode, setConfirmCode] = useState<string>('');
    const [isOpenConfirmPopUp, setIsOpenConfirmPopUp] = useState<boolean>(false);
    const [isOpenConfirmSuccess, setIsOpenConfirmSuccess] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const onChangeLogin = (newLogin: string) => setNewLogin(newLogin);

    const onChangeEmail = (newEmail: string) => setNewEmail(newEmail);

    const onClosePopUp = () => setIsOpenPopUp(!isOpenPopUp);

    const onClosePopUpSuccess = () => setIsOpenConfirmSuccess(!isOpenConfirmSuccess);


    const onClickChangeLogin = () => {
        dispatch(changeLoginUserThunk({newLogin, id: id!}))
        dispatch(setNewLoginR(newLogin))
        setIsOpenPopUp(true)
    }

    const onClickChangeEmail = () => {
        if (currentEmail === newEmail) {
            alert('Новый логин совпадает с текущим. Пожалуйста, введите другой логин.')
            return;
        }
        dispatch(sendChangeEmailCodeThunk({oldEmail: currentEmail!, email: newEmail}))
        setIsOpenConfirmPopUp(true)
    }

    const resendChangeEmailCode = () => {
        dispatch(resendChangeEmailCodeThunk({oldEmail: currentEmail!, email: newEmail}))
    }
    const submitEmailCode = () => {
        if (currentEmail === newEmail) {
            alert('Новый логин совпадает с текущим. Пожалуйста, введите другой логин.')
            return;
        }
        dispatch(verifyEmailChangeCode({email: currentEmail!, code: confirmCode!}))
        dispatch(changeEmailThunk({email: newEmail!, id: id!}))
        setIsOpenConfirmSuccess(true)
        setIsOpenConfirmPopUp(false)
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
                        <BlackButton onClick={onClickChangeEmail} text={'change email'} width={160}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <BlackButton text={'change password '}/>
                    </div>
                    <BlackButton text={'Apply'} width={88} fz={14}/>
                </div>
            </div>
            <PopUpSuccess isOpen={isOpenPopUp} onClose={onClosePopUp} message={'Ваш логин успешно изменен'}/>
            <PopUpSuccess isOpen={isOpenConfirmSuccess} onClose={onClosePopUpSuccess}
                          message={'Ваш email успешно изменен'}/>
            <PopUpConfirmCode isOpen={isOpenConfirmPopUp} onSubmitCode={submitEmailCode}
                              onResend={resendChangeEmailCode}
                              code={confirmCode}
                              setConfirmCode={setConfirmCode}/>
        </div>
    );
};

export default Profile;