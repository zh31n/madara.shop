import s from './TitleProductsItems.module.scss';
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import ProductItem from "../ProductItem/ProductItem.tsx";
import {ITitleProductsItemsProps} from "./Types.ts";


const TitleProductsItems = ({title,newArrivals}: ITitleProductsItemsProps) => {


    const itemsMap = newArrivals?.map(item => <ProductItem name={item.name} price={item.price} rating={item.rating}/>);
    // console.log(newArrivals)
    return (
        <section className={s.arrivals}>
            <h1 className={s.title}>{title ?? 'NEW ARRIVALS'}</h1>
            <div className={s.arrMap}>
                { !newArrivals.length ? 'load' : itemsMap}
                {/*<ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>*/}
                {/*<ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>*/}
                {/*<ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>*/}
                {/*<ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>*/}
            </div>
            <BlackButton text={'view all'}/>
        </section>
    );
};

export default TitleProductsItems;