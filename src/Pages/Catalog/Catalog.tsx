import s from './Catalog.module.scss';
import Filters from "./Components/Filters/Filters.tsx";
import ProductItem from "../../Components/ProductItem/ProductItem.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {getCatalogItemsThunk} from "../../Redux/thunkCreators/catalogPage.ts";
import {applyFilters, changeSortFilter, incrementPage} from "../../Redux/Reducers/catalogPageReducer.ts";

const Catalog = () => {

    const dispatch = useAppDispatch();
    const catalogData = useAppSelector(state => state.catalogPage);
    const baseUrlPhoto = 'http://localhost:3003';
    const catalog = catalogData.catalogItems
    const data = catalogData.filteredProducts
    const currentSortFilter = catalogData.sortBy
    const minPrice = catalogData.minPriceFilter
    const maxPrice = catalogData.maxPriceFilter;
    const sizeFilter = catalogData.sizeFilter;
    const page = catalogData.page;
    const pageSize = catalogData.pageSize;
    const count = catalogData.count;
    const pageCount = Math.ceil(count / pageSize);

    useEffect(() => {
        dispatch(getCatalogItemsThunk(1))
    }, []);

    useEffect(() => {
        if (page > 1) {
            dispatch(getCatalogItemsThunk(page));
        }
    }, [page]);

    useEffect(() => {
        dispatch(applyFilters())
    }, [currentSortFilter, minPrice, maxPrice, sizeFilter, catalog,page]);

    const handleClickMore = () => {
        dispatch(incrementPage())
        dispatch(getCatalogItemsThunk(page))
    };


    const catalogItemsMap = data.map(i => <ProductItem id={i.id} key={i.id} name={i.name}
                                                       image={baseUrlPhoto + i.photo} oldPrice={i.oldPrice} price={i.price} rating={i.rating}/>)

    const options = [
        {value: 'Most Popular'},
        {value: 'Rating'},
        {value: 'Min price'},
        {value: 'Max price'},
    ];

    const handleOption = (name: string) => dispatch(changeSortFilter(name))

    const optMap = options.map(o => <option value={o.value}>{o.value}</option>)

    return (
        <div className={'container'}>
            <div className={s.pageContainer}>
                <Filters/>
                <div className={s.itemsAndSort}>
                    <div className={s.sort}>
                        Sort by:
                        <select onChange={(e) => handleOption(e.target.value)} value={currentSortFilter}>
                            {optMap}
                        </select>
                    </div>
                    <div className={s.list}>
                        <div className={s.items}>{!catalogItemsMap.length ? 'loading' : catalogItemsMap}</div>
                        {page > pageCount
                            ? <p className={s.textOver}>Данных для загрузки нет</p>
                            : <button onClick={handleClickMore} className={s.btnMore}>Add More</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
