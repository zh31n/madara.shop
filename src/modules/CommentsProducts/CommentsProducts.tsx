import s from './CommentsProducts.module.scss';
import BtnsTabs from "./Components/BtnsTabs/BtnsTabs.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";


const CommentsProducts = () => {
    return (
        <div className={'container'}>
            <BtnsTabs/>
            <div className={s.btnFilters}>
                <div className={s.commentCount}>
                    All Reviews
                    <span className={s.count}>(74)</span>
                </div>
                <div className={s.filters}>
                    <div className={s.dropDown}>
                        <select>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                    <BlackButton text={'Write a Review'} width={166} height={48}/>
                </div>
            </div>
        </div>
    );
};

export default CommentsProducts;