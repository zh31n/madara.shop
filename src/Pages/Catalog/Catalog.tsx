import s from './Catalog.module.scss';
import Filters from "./Components/Filters/Filters.tsx";
import ProductItem from "../../Components/ProductItem/ProductItem.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {getCatalogItemsThunk} from "../../Redux/thunkCreators/catalogPage.ts";
import {applyFilters, changeSortFilter, incrementPage} from "../../Redux/Reducers/catalogPageReducer.ts";

const Catalog = () => {

    const dispatch = useAppDispatch();

    const catalog = useAppSelector(state => state.catalogPage.catalogItems);
    const data = useAppSelector(state => state.catalogPage.filteredProducts);
    const currentSortFilter = useAppSelector(state => state.catalogPage.sortBy);
    const minPrice = useAppSelector(state => state.catalogPage.minPriceFilter);
    const maxPrice = useAppSelector(state => state.catalogPage.maxPriceFilter);
    const sizeFilter = useAppSelector(state => state.catalogPage.sizeFilter);
    const page = useAppSelector(state => state.catalogPage.page);
    const pageSize = useAppSelector(state => state.catalogPage.pageSize);
    const count = useAppSelector(state => state.catalogPage.count);
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


    const catalogItemsMap = data.map(i => <ProductItem name={i.name} price={i.price} rating={i.rating}/>)

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
