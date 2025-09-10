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
    const hasMore = useAppSelector(state => state.catalogPage.hasMore);
    const page = useAppSelector(state => state.catalogPage.page);

    useEffect(() => {
        dispatch(getCatalogItemsThunk(page))
    }, [dispatch,page]);

    useEffect(() => {
        dispatch(applyFilters())
    }, [currentSortFilter,minPrice,maxPrice,sizeFilter,dispatch,catalog]);

    useEffect(() => {
        dispatch(getCatalogItemsThunk(page));
        dispatch(incrementPage())
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
            return;
        }
        getCatalogItemsThunk(page)
    };




    const catalogItemsMap = data.map(i => <ProductItem name={i.name} price={i.price} rating={i.rating}/>)

    const options = [
        {value:'Most Popular'},
        {value:'Rating'},
        {value:'Min Price'},
        {value:'Max price'},
    ];

    const hadleOption = (name:string) => dispatch(changeSortFilter(name))

    const optMap = options.map(o => <option value={o.value}>{o.value}</option>)

    return (
        <div className={'container'}>
            <div className={s.pageContainer}>
                <Filters/>
                <div className={s.itemsAndSort}>
                    <div className={s.sort}>
                        Sort by:
                        <select onChange={(e) => hadleOption(e.target.value) } value={currentSortFilter}>
                            {optMap}
                        </select>
                    </div>
                    <div className={s.items}>{!catalogItemsMap.length ? 'loading' : catalogItemsMap}</div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
