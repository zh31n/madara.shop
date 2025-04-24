import {BtnProps} from "./Types.ts";
import s from './BlackButton.module.scss';


const BlackButton = ({text, width = 210}: BtnProps) => {
    return <button className={s.btn} style={{width: width}}>{text}</button>
};

export default BlackButton;