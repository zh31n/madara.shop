import {DiscountProps} from "./Types.ts";
import s from './DiscountProduct.module.scss';

const DiscountProduct = ({discount, h, w, fz}: DiscountProps) => {
    return (
        <div className={s.disc} style={{height: `${h}px`, width: `${w}px`, fontSize: `${fz}px`}}>
            -{discount}%
        </div>
    );
};

export default DiscountProduct;