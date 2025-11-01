import {IInputProps} from "./Types.ts";
import s from './WhiteInputNumber.module.scss';


const WhiteInputNumber = ({placeholder, w, h, value,onChange}: IInputProps) => {

    return (

            <input
                style={{width: w, height: h}}
                className={s.inp}
                value={value}
                onChange={onChange}
                id="phone"
                type="tel"
                placeholder={placeholder}
            />
    );
};

export default WhiteInputNumber;