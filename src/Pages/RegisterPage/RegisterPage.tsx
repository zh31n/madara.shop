import s from './RegisterPage.module.scss';
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {registerThunk, resendEmailThunk, verifyEmailThunk} from "../../Redux/thunkCreators/authorization.ts";
import PopUpConfirmCode from "../../UI/PopUpConfirmCode/PopUpConfirmCode.tsx";
import {setEmail} from "../../Redux/Reducers/authReducer.ts";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

interface LoginFormValues {
    email: string;
    login: string;
    password: string;
}


const RegisterPage:FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isRegistered = useAppSelector(state => state.auth.isRegistered);
    const currentEmail = useAppSelector(state => state.auth.email);
    const confirmCode = useAppSelector(state => state.auth.confirmCode);
    const isConfirmed = useAppSelector(state => state.auth.isConfirmed);

    const handleCodeSubmit = () => dispatch(verifyEmailThunk({code: confirmCode}));

    const {
        register,
        handleSubmit,
        formState,
    } = useForm<LoginFormValues>({
        mode: 'onBlur',
        defaultValues: { // Начальные значения (опционально)
            email: '',
            login: '',
            password: ''
        }// Валидация при потере фокуса
    });

    const onSubmit = (data: LoginFormValues,e:any) => {
        e.preventDefault();
        dispatch(registerThunk({email: data.email, password: data.password, login: data.login}));
        dispatch(setEmail(data.email));
    }

    const onResend = () => dispatch(resendEmailThunk({email: currentEmail!}))

    if(isConfirmed){
        navigate('/login');
    }

    return (
        <div className={s.login}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.inpEmailCont}>
                    <input aria-label={'email'} className={s.inpEmail} placeholder={'email'} type={'email'}
                           {...register('email', {
                               required: 'Пожалуйста, введите ваш email',
                               pattern: {
                                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                   message: 'Неверный формат email',
                               },
                           })}
                    />
                    {formState.errors.email && (
                        <p style={{color: 'red'}}>{formState.errors.email.message as string}</p>
                    )}
                </div>
                <div className={s.inpEmailCont}>
                    <input aria-label={'login'} className={s.inpEmail} placeholder={'login'} type={'text'}
                           {...register('login', {
                               required: 'Пожалуйста, введите ваш login',
                               maxLength: {
                                   value: 20,
                                   message: 'Максимум длина логина 20 символов'
                               },
                               minLength: {
                                   value: 5,
                                   message: 'Максимум длина логина 5 символов'
                               }
                           })}
                    />
                    {formState.errors.login && (
                        <p style={{color: 'red'}}>{formState.errors.login.message as string}</p>
                    )}
                </div>
                <div className={s.inpEmailCont} style={{marginBottom: '30px'}}>
                    <input aria-label={'password'} className={s.inpEmail} placeholder={'password'} type={'password'}
                           {...register('password', {
                               required: 'Пожалуйста, введите ваш пароль',
                               minLength: {
                                   value: 5,
                                   message: 'Пароль должен состоять минимум из 5 символов'
                               },
                               maxLength: 20
                           })}
                    />
                    {formState.errors.password && (
                        <p style={{color: 'red'}}>{formState.errors.password.message as string}</p>
                    )}
                </div>
                <BlackButton text={'register'}/>
                <PopUpConfirmCode isOpen={isRegistered} onResend={onResend} onSubmitCode={handleCodeSubmit}/>
            </form>
        </div>
    );
};

export default RegisterPage;