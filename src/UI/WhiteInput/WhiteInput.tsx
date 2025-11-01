import {IInputProps} from "./Types.ts";
import s from './WhiteInput.module.scss';


const WhiteInput = ({placeholder, w, h, onChange, value, type}: IInputProps) => {
    return (
        <input value={value} type={type} onChange={(e) => onChange!(e.target.value)}
               className={s.inp} style={{width: w, height: h}} placeholder={placeholder}/>
    );
};

export default WhiteInput;