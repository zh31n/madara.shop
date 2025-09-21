import s from './ProductItem.module.scss';
import {ProductItemProps} from "./Types.ts";
import imagePr from '../../assets/img/image 7.png';
import DiscountProduct from "./DiscountProduct/DiscountProduct.tsx";
import Rating from "../Rating/Rating.tsx";
import {NavLink} from "react-router-dom";

const ProductItem = ({
                         image, name, price, oldPrice, rating, discount,id
                     }: ProductItemProps) => {
    return (
        <NavLink className={s.navv} to={'/product/' + id}>
            <div className={s.item}>
                <div className={s.imageSec}>
                    <img src={image || imagePr} alt={'image product'}/>
                </div>
                <div className={s.title}>{name}</div>
                <Rating rating={rating}/>
                <div className={s.price}>
                    ${price}
                    {oldPrice && <div className={s.oldPrice}>${oldPrice}</div>}
                    {discount && <DiscountProduct discount={discount}/>}
                </div>
            </div>
        </NavLink>

    );
};

export default ProductItem;