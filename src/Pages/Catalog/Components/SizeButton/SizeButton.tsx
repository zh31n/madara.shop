import s from './SizeButton.module.scss';
import {SizeButtonI} from "./Types.ts";

const SizeButton = ({text, active,onClick}: SizeButtonI) => {



    return (
        <div onClick={() => onClick ? onClick(text) : ''} className={s.button} style={{color: active ? 'white' : '', background: active ? 'black' : ''}}>{text}</div>
    );
};

export default SizeButton;