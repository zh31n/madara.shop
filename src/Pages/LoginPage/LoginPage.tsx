import s from './LoginPage.module.scss';
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../Redux/store.ts";
import {loginThunk} from "../../Redux/thunkCreators/authorization.ts";

interface LoginFormValues {
    email: string;
    password: string;
}


const LoginPage = () => {

    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState,
    } = useForm<LoginFormValues>({
        mode: 'onBlur',
        defaultValues: { // Начальные значения (опционально)
            email: '',
            password: ''
        }// Валидация при потере фокуса
    });

    const onSubmit = (data: LoginFormValues) => {
        dispatch(loginThunk({ email: data.email, password: data.password }));
    }

    return (
        <div className={s.login}>
            <h1>Login</h1>
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
                <div className={s.inpEmailCont} style={{marginBottom: '30px'}}>
                    <input aria-label={'password'} className={s.inpEmail} placeholder={'password'} type={'password'}
                           {...register('password', {
                               required: 'Пожалуйста, введите ваш пароль',
                               minLength: {
                                   value: 5,
                                   message:'Пароль должен состоять минимум из 5 символов'
                               },
                               maxLength: 20
                           })}
                    />
                    {formState.errors.password && (
                        <p style={{color: 'red'}}>{formState.errors.password.message as string}</p>
                    )}
                </div>
                <BlackButton text={'login'}/>
            </form>

        </div>
    );
};

export default LoginPage;