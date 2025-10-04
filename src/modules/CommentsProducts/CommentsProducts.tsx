import BtnsTabs from "./Components/BtnsTabs/BtnsTabs.tsx";
import CommentProductItem from "../../Pages/ProductPage/components/CommentProductItem/CommentProductItem.tsx";
import {stateReviewsI} from "../../Redux/Reducers/productPageReducer.ts";
import Accordeon from "../../UI/Accordeon/Accordeon.tsx";
import s from './CommentsProducts.module.scss'
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useAppSelector} from "../../Redux/store.ts";


const CommentsProducts = ({reviews}: { reviews: stateReviewsI[] }) => {

    const commentsProductMap = reviews.map(r => <CommentProductItem rating={r.rating}
                                                                    name={r.name} text={r.text} key={r.id}/>);
    const currentTab = useAppSelector(state => state.productPage.currentTab)


    return (
        <div className={'container'}>
            <BtnsTabs/>
            { currentTab === 1 && <div>
                <div className={s.btnFilters}>
                    <div className={s.commentCount}>All Reviews<span className={s.count}>({reviews.length})</span></div>
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
                <div className={s.comments}>
                    <div className={s.commentsContainer}>{commentsProductMap}</div>
                    {reviews.length < 4 ? '' : <BlackButton text={'Load more'}/>}
                </div>
            </div>}
            {currentTab === 2 && <Accordeon/>}
        </div>
    );
};

export default CommentsProducts;