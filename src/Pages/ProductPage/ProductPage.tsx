// import s from './ProductPage.module.scss';
import ProductInfo from "../../modules/ProductInfo/ProductInfo.tsx";
import CommentsProducts from "../../modules/CommentsProducts/CommentsProducts.tsx";

const ProductPage = () => {

    return (
        <div className={'container'}>
            <ProductInfo/>
            <CommentsProducts/>
        </div>
    );
};

export default ProductPage;