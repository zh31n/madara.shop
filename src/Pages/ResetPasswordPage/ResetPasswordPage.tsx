import s from './ResetPasswordPage.module.scss';
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {resetPasswordThunk} from "../../Redux/thunkCreators/resetPassword.ts";

interface LoginFormValues {
    passwordConfirm: string;
    password: string;
}


const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const email = useAppSelector(state => state.resetPassword.email);
    const isSuccess = useAppSelector(state => state.resetPassword.isSuccess);
    const {
        watch,
        register,
        handleSubmit,
        formState,
    } = useForm<LoginFormValues>({
        mode: 'onBlur',
        defaultValues: { // Начальные значения (опционально)
            password: '',
            passwordConfirm: ''
        }// Валидация при потере фокуса
    });

    const password = watch('password');
    const confirmPassword = watch('passwordConfirm');


    const onSubmit = (data: LoginFormValues) => {

        const outReset = {
            password: data.password!,
            code: localStorage.getItem('code')!,
            email: email!
        }

        dispatch(resetPasswordThunk(outReset));
    }

    useEffect(() => {
        if (isSuccess) {
            console.log("LoginPage: Email received, navigating to /");
            navigate("/login");
        }
    }, [isSuccess]);



    return (
        <div className={s.login}>
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.inpEmailCont}>
                    <input aria-label={'password'} className={s.inpEmail} placeholder={'пароль'} type={'password'}
                           {...register('password', {
                               required: 'Пожалуйста, введите ваш пароль',
                               validate: (value) =>
                                   value === confirmPassword || 'Пароли не совпадают',
                           })}
                    />
                    {formState.errors.password && (
                        <p style={{color: 'red'}}>{formState.errors.password.message as string}</p>
                    )}
                </div>
                <div className={s.inpEmailCont} style={{marginBottom: '30px'}}>
                    <input aria-label={'passwordConfirm'} className={s.inpEmail} placeholder={'подтверждение пароля'}
                           type={'password'}
                           {...register('passwordConfirm', {
                               required: 'Пожалуйста, подтвердите ваш пароль',
                               minLength: {
                                   value: 5,
                                   message: 'Пароль должен состоять минимум из 5 символов'
                               },
                               maxLength: 20,
                               validate: (value) => value === password || 'Пароли не совпадают',
                           })}
                    />
                    {formState.errors.passwordConfirm && (
                        <p style={{color: 'red'}}>{formState.errors.passwordConfirm.message as string}</p>
                    )}
                </div>
                <BlackButton text={'reset'}/>
            </form>

        </div>
    );
};

export default ResetPasswordPage;