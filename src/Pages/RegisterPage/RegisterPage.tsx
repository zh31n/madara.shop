import s from './RegisterPage.module.scss';
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../Redux/store.ts";
import {registerThunk} from "../../Redux/thunkCreators/authorization.ts";

interface LoginFormValues {
    email: string;
    login: string;
    password: string;
}


const RegisterPage = () => {

    const dispatch = useAppDispatch();

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

    const onSubmit = (data: LoginFormValues) => {
        dispatch(registerThunk({email: data.email, password: data.password, login: data.login}));
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
            </form>

        </div>
    );
};

export default RegisterPage;