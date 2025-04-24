import {DiscountProps} from "./Types.ts";
import s from './DiscountProduct.module.scss';

const DiscountProduct = ({discount}:DiscountProps) => {
    return (
        <div className={s.disc}>-{discount}%</div>
    );
};

export default DiscountProduct;