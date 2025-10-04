import s from './TitleProductsItems.module.scss';
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import ProductItem from "../ProductItem/ProductItem.tsx";
import {ITitleProductsItemsProps} from "./Types.ts";


const TitleProductsItems = ({title,newArrivals}: ITitleProductsItemsProps) => {

     const baseUrlPhoto = 'http://localhost:3003'

    const itemsMap = newArrivals?.map(item => <ProductItem id={item.id} oldPrice={item.oldPrice} name={item.name} image={baseUrlPhoto + item.photo } price={item.price} rating={item.rating}/>);

    return (
        <section className={s.arrivals}>
            <h1 className={s.title}>{title ?? 'NEW ARRIVALS'}</h1>
            <div className={s.arrMap}>
                { !newArrivals.length ? 'load' : itemsMap}
            </div>
            <BlackButton text={'view all'}/>
        </section>
    );
};

export default TitleProductsItems;