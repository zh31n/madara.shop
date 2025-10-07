import { useState, useEffect } from 'react';
import styles from './PopUpConfirmCode.module.scss';

/**
 * Компонент всплывающего окна для ввода кода верификации.
 * @param {boolean} isOpen - Управляет видимостью попапа.
 * @param {function} onClose - Функция, вызываемая при клике вне попапа.
 * @param {function} onSubmit - Функция, вызываемая при нажатии "Подтвердить".
 */


interface IProps {
    isOpen: boolean,
    onClose:() => boolean,
    onSubmit:(code) => void
}

function PopUpConfirmCode({ isOpen, onClose, onSubmit }:IProps) {
    const [code, setCode] = useState('');
    // Состояние для управления тем, активна ли анимация появления/исчезновения
    const [isAnimating, setIsAnimating] = useState(false);

    // Эффект для управления анимацией появления/исчезновения
    useEffect(() => {
        if (isOpen) {
            // Если открываем, устанавливаем видимое состояние и позволяем анимации fadeIn отработать
            setIsAnimating(true);
        }
    }, [isOpen]);

    const handleOverlayClick = (e:any) => {
        // Закрываем только если клик был на сам Overlay, а не на содержимое PopupContainer
        if (e.target.classList.contains(styles.overlay)) {
            // Начинаем анимацию fadeOut
            setIsAnimating(false);
            // Ждем завершения анимации перед полным удалением из DOM
            const timer = setTimeout(onClose, 200); // 200ms соответствует длительности анимации в CSS
            return () => clearTimeout(timer);
        }
    };

    const handleSubmit = () => {
        onSubmit(code);
        // Начинаем анимацию fadeOut перед закрытием
        setIsAnimating(false);
        const timer = setTimeout(onClose, 200);
        return () => clearTimeout(timer);
    };

    // Если isOpen false И мы не в процессе анимации (т.е. уже скрыли), не рендерим ничего
    if (!isOpen && !isAnimating) {
        return null;
    }

    // Классы: base class + animation class
    const overlayClasses = `${styles.overlay} ${isAnimating ? '' : styles.hidden}`;

    return (
        <div
            className={overlayClasses}
            onClick={handleOverlayClick}
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
                    onChange={(e) => setCode(e.target.value)}
                />
                <button className={styles.button} onClick={handleSubmit}>
                    Подтвердить
                </button>
            </div>
        </div>
    );
}

export default PopUpConfirmCode;
