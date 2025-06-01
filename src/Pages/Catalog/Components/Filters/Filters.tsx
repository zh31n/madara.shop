import s from "./Filters.module.scss";
import filterImg from "../../../../assets/img/filters.svg";
import HorizontalLine from "../../../../UI/HorizontalLine/HorizontalLine.tsx";
import arrowUp from "../../../../assets/img/arrow_up.svg";
import SizeButton from "../SizeButton/SizeButton.tsx";
import BlackButton from "../../../../UI/BlackButton/BlackButton.tsx";
import CategorLink from "./components/categorLink/categorLink.tsx";
import dollarImg from "../../../../assets/img/dollar.svg";


const Filters = () => {
    return (
        <div className={s.filtersNav}>
            <div className={s.title}>
                Filters
                <img src={filterImg} alt="filer image"/>
            </div>
            <HorizontalLine margin={20}/>
            <div className={s.linksCategories}>
                <CategorLink text={'T-shirts'}/>
                <CategorLink text={'T-shirts'}/>
                <CategorLink text={'T-shirts'}/>
                <CategorLink text={'T-shirts'}/>
            </div>
            <HorizontalLine margin={20}/>
            <div className={s.price}>
                <div className={s.title}>
                    Price
                </div>
                <div className={s.priceFiltersCont}>
                    <div className={s.priceFilter}>
                        <label>From</label>
                        <input type="number"/>
                    </div>
                    <div className={s.priceFilter}>
                        <label>To</label>
                        <input type="number"/>
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
                <div className={s.sizeButtons}>
                    <SizeButton text={'XXL'} active={true}/>
                    <SizeButton text={'M'}/>
                    <SizeButton text={'M'}/>
                    <SizeButton text={'M'}/>
                    <SizeButton text={'M'}/>
                    <SizeButton text={'M'}/>
                </div>
            </div>
            <BlackButton text={'Apply Filters'} width={247}/>
        </div>
    );
};

export default Filters;
