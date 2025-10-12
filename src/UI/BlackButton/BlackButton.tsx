import {BtnProps} from "./Types.ts";
import s from './BlackButton.module.scss';


const BlackButton = ({text, width = 210,height,fz,onClick}: BtnProps) => {
    return <button onClick={onClick} className={s.btn} style={{width: width,height:height,fontSize: fz}}>{text}</button>
};

export default BlackButton;