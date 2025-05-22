// import s from './ProductPage.module.scss';
import ProductInfo from "../../modules/ProductInfo/ProductInfo.tsx";
import CommentsProducts from "../../modules/CommentsProducts/CommentsProducts.tsx";
import AlsoLike from "./components/AlsoLike/AlsoLike.tsx";

const ProductPage = () => {

    return (
        <div className={'container'}>
            <ProductInfo/>
            <CommentsProducts/>
            <AlsoLike title={'You might also like'}/>
        </div>
    );
};

export default ProductPage;