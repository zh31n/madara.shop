import s from './ForgotPassword.module.scss';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {useForm} from "react-hook-form";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {
    resendResetCodeThunk,
    sendResetPasswordCodeThunk,
    verifyCodeThunk
} from "../../Redux/thunkCreators/resetPassword.ts";
import PopUpConfirmCode from "../../UI/PopUpConfirmCode/PopUpConfirmCode.tsx";
import {setCode, setEmailReset} from "../../Redux/Reducers/resetPasswordReducer.ts";
import {useEffect} from "react";


interface LoginFormValues {
    email: string;
}

const ForgotPassword = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isSend = useAppSelector(state => state.resetPassword.isSend);
    const code = useAppSelector(state => state.resetPassword.code);
    const email = useAppSelector(state => state.resetPassword.email);
    const isConfirmed = useAppSelector(state => state.resetPassword.isConfirm);
    const {
        register,
        handleSubmit,
        formState,
    } = useForm<LoginFormValues>({
        mode: 'onBlur',
        defaultValues: { // Начальные значения (опционально)
            email: '',
        }// Валидация при потере фокуса
    });

    const onSubmit = (data: LoginFormValues) => {
        dispatch(sendResetPasswordCodeThunk(data.email))
        dispatch(setEmailReset(data.email))
    }

    const onSubmitCode = () => {
        // @ts-ignore
        dispatch(verifyCodeThunk(email,code))

    }

    const onResend = () => {
        dispatch(resendResetCodeThunk(email))
    }

    useEffect(() => {
        if(isConfirmed){
            navigate('/reset')
        }
    },[isConfirmed])

    return (
        <div className={s.cont}>
            <h1>Recovery password</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.inpEmailCont}>
                    <input aria-label={'email'} className={s.inpEmail} placeholder={'email'} type={'email'}
                           {...register('email', {
                               required: 'Email обязателен для заполнения',
                               pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                   message: 'Некорректный формат email',
                               },
                               minLength: {
                                   value: 5,
                                   message: 'Email должен быть не менее 5 символов'
                               }
                           })}
                    />
                    {formState.errors.email && (
                        <p style={{color: 'red'}}>{formState.errors.email.message as string}</p>
                    )}
                </div>
                <BlackButton text={'send email code'}/>
                <PopUpConfirmCode isOpen={isSend} onSubmitCode={onSubmitCode} onResend={onResend} code={code}
                                  setConfirmCode={setCode} />
            </form>
        </div>
    );
};

export default ForgotPassword;