import s from './Catalog.module.scss';
import Filters from "./Components/Filters/Filters.tsx";

const Catalog = () => {
    return (
        <div className={'container'}>
            <div className={s.pageContainer}>
                <Filters/>
            </div>
        </div>
    );
};

export default Catalog;
