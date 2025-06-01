import s from './Catalog.module.scss';
import Filters from "./Components/Filters/Filters.tsx";
import ProductItem from "../../Components/ProductItem/ProductItem.tsx";

const Catalog = () => {
    return (
        <div className={'container'}>
            <div className={s.pageContainer}>
                <Filters/>
                <div className={s.itemsAndSort}>
                    <div className={s.sort}>
                        Sort by:
                        <select>
                            <option value="">Most Popular</option>
                            <option value="">Rating</option>
                            <option value="">Min Price</option>
                            <option value="">Max price</option>
                        </select>
                    </div>
                    <div className={s.items}>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                        <ProductItem name={'T-shirt'} price={500} rating={4}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
