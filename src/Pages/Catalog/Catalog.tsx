import s from './Catalog.module.scss';
import filterImg from '../../assets/img/filters.svg';
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import arrowRight from '../../assets/img/aerrow_right.svg';

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
                </div>
            </div>
        </div>
    );
};

export default Catalog;
