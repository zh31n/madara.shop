import React from 'react';
import s from './SearchInput.module.scss';
import lupa from '../../assets/img/lupa.svg';

const SearchInput = () => {
    return (
        <div className={s.inpCont}>
            <img src={lupa} alt={'lupa'}/>
            <input type="text" placeholder={'Search for products'}/>
        </div>
    );
};

export default SearchInput;