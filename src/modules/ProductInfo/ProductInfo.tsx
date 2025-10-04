import s from './ProductInfo.module.scss';
import ProductPhotos from "./Components/ProductPhotos/ProductPhotos.tsx";
import Rating from "../../Components/Rating/Rating.tsx";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import ChooseSizeProduct from "./Components/ChooseSizeProduct/ChooseSizeProduct.tsx";
import Counter from "../../Components/Counter/Counter.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";

const ProductInfo = ({data}:{data:any}) => {

    console.log(data.oldPrice)

    return (
        <div className={s.productInfo}>
            <ProductPhotos path={data.photo}/>
            <div className={s.info}>
                <h1 className={s.title}>{data.name}</h1>
                <Rating rating={data.rating} fz={16}/>
                <div className={s.prices}>
                    <div className={s.price}>${data.price}</div>
                    { data.oldPrice && <div className={s.oldPrice}>${data.oldPrice}</div>}
                    {/*<DiscountProduct discount={false} fz={16} w={72} h={34}/>*/}
                </div>
                <div className={s.subtitle}>{data.desc}</div>
                <HorizontalLine margin={20}/>
                <ChooseSizeProduct sizes={data.size} />
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