// import s from './ProductPage.module.scss';
import ProductInfo from "../../modules/ProductInfo/ProductInfo.tsx";
import CommentsProducts from "../../modules/CommentsProducts/CommentsProducts.tsx";
import AlsoLike from "./components/AlsoLike/AlsoLike.tsx";
import {useLocation, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAlsoLikeThunk, getProductDataThunk} from "../../Redux/thunkCreators/productPage.ts";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";

const ProductPage = () => {

    const { id } = useParams();
    const dispatch  = useAppDispatch();
    const dataProduct = useAppSelector(state => state.productPage);

    const { pathname } = useLocation(); // Получаем текущий путь

    useEffect(() => {
        window.scrollTo(0, 0); // Прокручиваем в начало при изменении пути
    }, [pathname]);

    useEffect(() => {
        dispatch(getProductDataThunk(id!))
        dispatch(getAlsoLikeThunk())
    }, [id, dispatch]);


    return (
        <div className={'container'}>
            <ProductInfo data={dataProduct}/>
            <CommentsProducts reviews={dataProduct.reviews} />
            <AlsoLike items={dataProduct.alsoLike} title={'You might also like'}/>
        </div>
    );
};

export default ProductPage;