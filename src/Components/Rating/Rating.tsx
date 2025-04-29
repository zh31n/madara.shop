import s from './Rating.module.scss';
import star from "../../assets/img/Star.svg";
import {IRating} from "./Type.ts";

const Rating = ({rating,fz,fw,w}:IRating) => {
    return (
        <div className={s.rating} style={{fontWeight:`${fw}px`,fontSize:`${fz}px`}} >
            <img src={star} width={w} alt="star"/>
            {rating} / <span> 5</span>
        </div>
    );
};

export default Rating;