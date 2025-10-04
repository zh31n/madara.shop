import s from './AlsoLike.module.scss';
import {ITitleProductsItemsProps} from "./Types.ts";
import ProductItem from "../../../../Components/ProductItem/ProductItem.tsx";


const AlsoLike = ({title, items}: ITitleProductsItemsProps) => {

    const baseUrl = 'http://localhost:3003';

    const alsoLikeMap = items.map(a => <ProductItem oldPrice={a.oldPrice} name={a.name} price={a.price} rating={a.rating}
                                                    id={a.id} key={a.id} image={baseUrl + a.photo}  />)

    return (
        <section className={s.arrivals}>
            <h1 className={s.title}>{title ?? 'NEW ARRIVALS'}</h1>
            <div className={s.arrMap}>{alsoLikeMap}</div>
        </section>
    );
};

export default AlsoLike;