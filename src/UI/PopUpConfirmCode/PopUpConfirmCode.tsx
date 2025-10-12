import {useState, useEffect} from 'react';
import styles from './PopUpConfirmCode.module.scss';
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {setConfirmCode} from "../../Redux/Reducers/authReducer.ts";

/**
 * Компонент всплывающего окна для ввода кода верификации.
 * @param {boolean} isOpen - Управляет видимостью попапа.
 * @param {function} onClose - Функция, вызываемая при клике вне попапа.
 * @param {function} onSubmit - Функция, вызываемая при нажатии "Подтвердить".
 */


interface IProps {
    isOpen: boolean,
    onClose?: () => boolean,
    onSubmitCode: () => void,
    onResend: () => void,
}

function PopUpConfirmCode({isOpen, onSubmitCode,onResend}: IProps) {

    const dispatch = useAppDispatch();

    const code = useAppSelector(state => state.auth.confirmCode);
    const [timer, setTimer] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);


    // Состояние для управления тем, активна ли анимация появления/исчезновения
    const [isAnimating, setIsAnimating] = useState(false);

    // Эффект для управления анимацией появления/исчезновения
    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            setTimer(60); // Reset timer when popup opens
            setIsResendDisabled(true);
        }
    }, [isOpen]);

    useEffect(() => {
        let intervalId:any;
        if (timer > 0 && isOpen) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsResendDisabled(false); // Enable resend button
        }

        return () => clearInterval(intervalId); // Clear interval on unmount/update
    }, [timer, isOpen]);



    const handleSubmit = () => {
        onSubmitCode();
        setIsAnimating(false);
    };

    // Если isOpen false И мы не в процессе анимации (т.е. уже скрыли), не рендерим ничего
    if (!isOpen && !isAnimating) {
        return null;
    }

    // Классы: base class + animation class
    const overlayClasses = `${styles.overlay} ${isAnimating ? '' : styles.hidden}`;

    const handleResendClick = () => {
        onResend(); // Call the resend code function
        setTimer(60); // Reset timer
        setIsResendDisabled(true);
    };

    return (
        <div
            className={overlayClasses}
            // Принудительно устанавливаем класс fadeOut, когда isAnimating становится false
            // (Это нужно для React, чтобы он знал, какую анимацию применить)
        >
            <div
                className={styles.popupContainer}
                onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри
            >
                <h2>Подтверждение кода</h2>
                <p>Пожалуйста, введите код, отправленный на вашу почту:</p>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Введите код"
                    value={code}
                    onChange={(e) => dispatch(setConfirmCode(e.target.value))}
                />
                <button className={styles.button} onClick={handleSubmit}>
                    Подтвердить
                </button>
                <p style={{marginTop: '10px',textAlign:'center'}}>
                    {isResendDisabled ? (
                        `Повторная отправка через ${timer} секунд`
                    ) : (
                        <button onClick={handleResendClick}>Отправить код повторно</button>
                    )}
                </p>
            </div>
        </div>
    );
}

export default PopUpConfirmCode;
