import {BtnProps} from "./Types.ts";
import s from './BlackButton.module.scss';


const BlackButton = ({text, width = 210,height,fz}: BtnProps) => {
    return <button className={s.btn} style={{width: width,height:height,fontSize: fz}}>{text}</button>
};

export default BlackButton;