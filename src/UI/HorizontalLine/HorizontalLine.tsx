import s from './HorizontalLine.module.scss';
import {IHorizontalLine} from "./Types.ts";


const HorizontalLine = ({margin}: IHorizontalLine) => {
    return <div className={s.line} style={{marginTop: `${margin}px`, marginBottom: `${margin}px`}}></div>;
};

export default HorizontalLine;


