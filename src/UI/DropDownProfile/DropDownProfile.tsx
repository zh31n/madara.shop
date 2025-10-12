// src/components/ProfileDropdown.jsx (обновленный)
import {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './DropDownProfile.module.scss'
import {useAppDispatch} from "../../Redux/store.ts";
import {logoutThunk} from "../../Redux/thunkCreators/authorization.ts";
import {cleanCart} from "../../Redux/Reducers/cartReducer.ts";

// import {clearCart} from '../store/cartSlice';


interface Props {
    buttonClassName:any, iconClassName:any, userName:any
}

// Добавляем пропсы для кнопки и имени
function ProfileDropdown({ buttonClassName, iconClassName, userName }:Props) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const dispatch = useAppDispatch();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        //@ts-ignore
        const handleClickOutside = (event) => {
            //@ts-ignore
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        dispatch(logoutThunk());
        dispatch(cleanCart());
        navigate('/login');
        setIsOpen(false);
    };

    return (
        <div className={styles.profileDropdown} ref={dropdownRef}>
            {/* Используем переданные классы для кнопки */}
            <button onClick={toggleDropdown} className={buttonClassName}>
                {iconClassName && <span className={iconClassName}></span>} {/* Иконка, если передана */}
                {userName || 'Профиль'} {/* Отображаем имя пользователя */}
            </button>

            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <ul>
                        <li>
                            <Link to="/profile" onClick={() => setIsOpen(false)}>
                                Перейти в профиль
                            </Link>
                        </li>
                        <li>
                            <div onClick={handleLogout} className={`${styles.logoutButton} ${styles.logoutButton}`}>
                                Выйти
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;