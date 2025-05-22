import s from './AlsoLike.module.scss';
import {ITitleProductsItemsProps} from "./Types.ts";
import ProductItem from "../../../../Components/ProductItem/ProductItem.tsx";


const AlsoLike = ({title}: ITitleProductsItemsProps) => {
    return (
        <section className={s.arrivals}>
            <h1 className={s.title}>{title ?? 'NEW ARRIVALS'}</h1>
            <div className={s.arrMap}>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
            </div>
        </section>
    );
};

export default AlsoLike;