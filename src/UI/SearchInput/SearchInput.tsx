import s from './SearchInput.module.scss';
import lupa from '../../assets/img/lupa.svg';
import {SearchInputProps} from "./Types.ts";

const SearchInput = ({img, width, placeholder, type}: SearchInputProps) => {
    return (
        <div className={s.inpCont} style={{width: `${width}px`}}>
            <img src={img ?? lupa} alt={'lupa'}/>
            <input type={type ?? "text"} placeholder={placeholder ?? 'Search for products'}/>
        </div>
    );
};

export default SearchInput;