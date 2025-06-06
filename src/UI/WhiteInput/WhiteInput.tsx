import {IInputProps} from "./Types.ts";
import s from './WhiteInput.module.scss';


const WhiteInput = ({placeholder, w, h}: IInputProps) => {
    return (
        <input className={s.inp} style={{width: w, height: h}} placeholder={placeholder}/>
    );
};

export default WhiteInput;