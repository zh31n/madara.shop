import styles from './PopUpSuccess.module.scss'


interface PopUpSuccessProps {
    isOpen: boolean;
    onClose: () => any;
    message: string;
}

const PopUpSuccess = ({isOpen, onClose, message}: PopUpSuccessProps) => {
    if (!isOpen) {
        return null;
    }

    // Добавляем класс 'visible' только когда isOpen true
    const overlayClasses = `${styles.popupOverlay} ${isOpen ? styles.visible : ''}`;

    return (
        <div
            className={overlayClasses}
            onClick={onClose} // Закрываем при клике на фон
        >
            <div
                className={styles.popupContent}
                onClick={(e) => e.stopPropagation()} // Останавливаем всплытие клика, чтобы не закрыть попап при клике внутри
            >
                <div className={styles.popupHeader}>
                    <h2 className={styles.popupTitle}>Успех!</h2>
                    <button
                        className={styles.popupCloseButton}
                        onClick={onClose} // Закрываем при клике на крестик
                        aria-label="Close popup" // Для доступности
                    >
                        &times;
                    </button>
                </div>
                <div className={styles.popupBody}>
                    <p className={styles.popupMessage}>{message || 'Ваш логин успешно изменен.'}</p>
                </div>
                <div className={styles.popupFooter}>
                    <button
                        className={styles.popupOkButton}
                        onClick={onClose} // Закрываем при клике на ОК
                    >
                        ОК
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopUpSuccess;