import s from './ProductInfo.module.scss';
import ProductPhotos from "./Components/ProductPhotos/ProductPhotos.tsx";
import Rating from "../../Components/Rating/Rating.tsx";
import DiscountProduct from "../../Components/ProductItem/DiscountProduct/DiscountProduct.tsx";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import ChooseSizeProduct from "./Components/ChooseSizeProduct/ChooseSizeProduct.tsx";
import Counter from "../../Components/Counter/Counter.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";

const ProductInfo = () => {
    return (
        <div className={s.productInfo}>
            <ProductPhotos/>
            <div className={s.info}>
                <h1 className={s.title}>{'Naruto Shippuden Jacket'}</h1>
                <Rating rating={4.5} fz={16}/>
                <div className={s.prices}>
                    <div className={s.price}>${260}</div>
                    <div className={s.oldPrice}>${300}</div>
                    <DiscountProduct discount={40} fz={16} w={72} h={34}/>
                </div>
                <div className={s.subtitle}>
                    {'This graphic patterned jacket is perfect for any occasion.\ ' +
                        'Made of soft and breathable fabric, it provides superior comfort and style.'}
                </div>
                <HorizontalLine margin={20}/>
                <ChooseSizeProduct/>
                <HorizontalLine margin={30}/>
                <div className={s.countAndAddCart}>
                    <Counter/>
                    <BlackButton text={'Add to Cart'} width={400}/>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;