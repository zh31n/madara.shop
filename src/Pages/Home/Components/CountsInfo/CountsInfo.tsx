import {CountsInfoProps} from "./Types.ts";
import s from './CountsInfo.module.scss';
import AnimatedCount from "../../../../Components/AnimatedCount/AnimatedCount.tsx";

const CountsInfo = ({number,sub,nulls}:CountsInfoProps) => {
    return (
        <div className={s.container}>
            <div className={s.count}>
                <AnimatedCount number={number} nulls={nulls}/>+
            </div>
            <p className={s.sub}>{sub}</p>
        </div>
    );
};

export default CountsInfo;