import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={'container'}>
                <div className={s.hInner}>
                    <div className={s.logo}>Shop.co</div>
                </div>
            </div>
        </header>
    );
};

export default Header;