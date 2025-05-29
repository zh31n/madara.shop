import s from './Catalog.module.scss';
import filterImg from '../../assets/img/filters.svg';
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import arrowRight from '../../assets/img/aerrow_right.svg';
import arrowUp from '../../assets/img/arrow_up.svg';
import SizeButton from "./Components/SizeButton/SizeButton.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";

const Catalog = () => {
    return (
        <div className={'container'}>
            <div className={s.pageContainer}>
                <div className={s.filtersNav}>
                    <div className={s.title}>
                        Filters
                        <img src={filterImg} alt="filer image"/>
                    </div>
                    <HorizontalLine margin={20}/>
                    <div className={s.linksCategories}>
                        <div className={s.categorieLink}>
                            T-shirts
                            <img src={arrowRight} alt={'arrow-right'}/>
                        </div>
                        <div className={s.categorieLink}>
                            T-shirts
                            <img src={arrowRight} alt={'arrow-right'}/>
                        </div>
                        <div className={s.categorieLink}>
                            T-shirts
                            <img src={arrowRight} alt={'arrow-right'}/>
                        </div>
                        <div className={s.categorieLink}>
                            T-shirts
                            <img src={arrowRight} alt={'arrow-right'}/>
                        </div>
                        <div className={s.categorieLink}>
                            T-shirts
                            <img src={arrowRight} alt={'arrow-right'}/>
                        </div>
                    </div>
                    <HorizontalLine margin={20}/>
                    <div className={s.title}>Price</div>
                    <HorizontalLine margin={20}/>
                    <div className={s.size}>
                        <div className={s.title}>
                            Size
                            <img src={arrowUp} alt={'arrow-up'} />
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
            </div>
        </div>
    );
};

export default Catalog;
