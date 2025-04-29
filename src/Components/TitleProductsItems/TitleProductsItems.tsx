import s from './TitleProductsItems.module.scss';
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import ProductItem from "../ProductItem/ProductItem.tsx";
import {ITitleProductsItemsProps} from "./Types.ts";


const TitleProductsItems = ({title}: ITitleProductsItemsProps) => {
    return (
        <section className={s.arrivals}>
            <h1 className={s.title}>{title ?? 'NEW ARRIVALS'}</h1>
            <div className={s.arrMap}>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
            </div>
            <BlackButton text={'view all'}/>
        </section>
    );
};

export default TitleProductsItems;