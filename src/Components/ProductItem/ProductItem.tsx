import s from './ProductItem.module.scss';
import {ProductItemProps} from "./Types.ts";
import imagePr from '../../assets/img/image 7.png';
import star from '../../assets/img/Star.svg';
import DiscountProduct from "./DiscountProduct/DiscountProduct.tsx";

const ProductItem = ({
                         image, name, price, oldPrice, rating, discount
                     }: ProductItemProps) => {
    return (
        <div className={s.item}>
            <div className={s.imageSec}>
                <img src={image || imagePr} alt={'image product'}/>
            </div>
            <div className={s.title}>{name}</div>
            <div className={s.rating}>
                <img src={star} alt="star"/>
                {rating} / <span> 5</span>
            </div>
            <div className={s.price}>
                ${price}
                {oldPrice && <div className={s.oldPrice}>${oldPrice}</div>}
                {discount && <DiscountProduct discount={discount}/>}
            </div>
        </div>
    );
};

export default ProductItem;