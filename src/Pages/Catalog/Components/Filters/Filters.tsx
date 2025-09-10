import s from "./Filters.module.scss";
import filterImg from "../../../../assets/img/filters.svg";
import HorizontalLine from "../../../../UI/HorizontalLine/HorizontalLine.tsx";
import arrowUp from "../../../../assets/img/arrow_up.svg";
import SizeButton from "../SizeButton/SizeButton.tsx";
import BlackButton from "../../../../UI/BlackButton/BlackButton.tsx";
import dollarImg from "../../../../assets/img/Dollar.svg";
import {useAppDispatch, useAppSelector} from "../../../../Redux/store.ts";
import {
    setCurrentSizeFilter,
    setMaxPriceFilter,
    setMinPriceFilter
} from "../../../../Redux/Reducers/catalogPageReducer.ts";
// import CategorLink from "./components/categorLink/categorLink.tsx";


const Filters = () => {

    const dispatch = useAppDispatch();

    const setCurrentSizeOn = (size: string) => dispatch(setCurrentSizeFilter(size));


    const currentSize = useAppSelector(state => state.catalogPage.sizeFilter);
    const minPrice = useAppSelector(state => state.catalogPage.minPriceFilter);
    const maxPrice = useAppSelector(state => state.catalogPage.maxPriceFilter);

    const sizes = [
        {text: 'S'},
        {text: 'M'},
        {text: 'L'},
        {text: 'X'},
        {text: 'XL'},
    ];

    const sizesMap = sizes.map((size) => <SizeButton text={size.text} onClick={setCurrentSizeOn}
                                                     active={currentSize === size.text}/>)

    const handleMinPrice = (price: string) => dispatch(setMinPriceFilter(price));
    const handleMaxPrice = (price: string) => dispatch(setMaxPriceFilter(price));


    return (
        <div className={s.filtersNav}>
            <div className={s.title}>
                Filters
                <img src={filterImg} alt="filer image"/>
            </div>
            {/*<HorizontalLine margin={20}/>*/}
            {/*<div className={s.linksCategories}>*/}
            {/*    <CategorLink text={'T-shirts'}/>*/}
            {/*    <CategorLink text={'T-shirts'}/>*/}
            {/*    <CategorLink text={'T-shirts'}/>*/}
            {/*    <CategorLink text={'T-shirts'}/>*/}
            {/*</div>*/}
            <HorizontalLine margin={20}/>
            <div className={s.price}>
                <div className={s.title}>
                    Price
                </div>
                <div className={s.priceFiltersCont}>
                    <div className={s.priceFilter}>
                        <label>From</label>
                        <input type="text" onChange={(e) => handleMinPrice(e.target.value)} value={minPrice}/>
                    </div>
                    <div className={s.priceFilter}>
                        <label>To</label>
                        <input type="text" onChange={(e) => handleMaxPrice(e.target.value)} value={maxPrice}/>
                    </div>
                    <img src={dollarImg} alt=""/>
                </div>
            </div>
            <HorizontalLine margin={20}/>
            <div className={s.size}>
                <div className={s.title}>
                    Size
                    <img src={arrowUp} alt={'arrow-up'}/>
                </div>
                <div className={s.sizeButtons}>{sizesMap}</div>
            </div>
            <BlackButton text={'Apply Filters'} width={247}/>
        </div>
    );
};

export default Filters;
