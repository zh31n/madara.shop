// import s from './ProductPage.module.scss';
import ProductInfo from "../../modules/ProductInfo/ProductInfo.tsx";
import CommentsProducts from "../../modules/CommentsProducts/CommentsProducts.tsx";
import AlsoLike from "./components/AlsoLike/AlsoLike.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getProductDataThunk} from "../../Redux/thunkCreators/productPage.ts";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";

const ProductPage = () => {

    const { id } = useParams();
    const dispatch  = useAppDispatch();
    const dataProduct = useAppSelector(state => state.productPage);

    useEffect(() => {
        dispatch(getProductDataThunk(id!))
    }, [id, dispatch]);


    return (
        <div className={'container'}>
            <ProductInfo data={dataProduct}/>
            <CommentsProducts />
            <AlsoLike title={'You might also like'}/>
        </div>
    );
};

export default ProductPage;