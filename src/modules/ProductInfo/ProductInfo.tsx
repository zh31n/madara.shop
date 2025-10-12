import s from './ProductInfo.module.scss';
import ProductPhotos from "./Components/ProductPhotos/ProductPhotos.tsx";
import Rating from "../../Components/Rating/Rating.tsx";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import ChooseSizeProduct from "./Components/ChooseSizeProduct/ChooseSizeProduct.tsx";
import Counter from "../../Components/Counter/Counter.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {addCartItemI, addCartItemThunk} from "../../Redux/thunkCreators/cartPage.ts";

const ProductInfo = ({data}: { data: any }) => {

    const dispatch = useAppDispatch();
    const userId = useAppSelector(state => state.auth.id);
    const {id,currentSize,productCount} = data;
    const submitAddToCart = () => {
        const payload:addCartItemI = {
            userId: +userId!,
            productId: id,
            count: productCount!,
            size: currentSize
        }
        dispatch(addCartItemThunk(payload))
    }

    return (
        <div className={s.productInfo}>
            <ProductPhotos path={data.photo}/>
            <div className={s.info}>
                <h1 className={s.title}>{data.name}</h1>
                <Rating rating={data.rating} fz={16}/>
                <div className={s.prices}>
                    <div className={s.price}>${data.price}</div>
                    {data.oldPrice && <div className={s.oldPrice}>${data.oldPrice}</div>}
                    {/*<DiscountProduct discount={false} fz={16} w={72} h={34}/>*/}
                </div>
                <div className={s.subtitle}>{data.desc}</div>
                <HorizontalLine margin={20}/>
                <ChooseSizeProduct sizes={data.size}/>
                <HorizontalLine margin={30}/>
                <div className={s.countAndAddCart}>
                    <Counter/>
                    <BlackButton onClick={submitAddToCart} text={'Add to Cart'} width={400}/>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;