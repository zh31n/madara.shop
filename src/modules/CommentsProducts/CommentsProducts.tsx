import s from './CommentsProducts.module.scss';
import BtnsTabs from "./Components/BtnsTabs/BtnsTabs.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import CommentProductItem from "../../Pages/ProductPage/components/CommentProductItem/CommentProductItem.tsx";


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
            <div className={s.comments}>
                <div className={s.commentsContainer}>
                    <CommentProductItem name={'Ethan R.'} rating={4} text={"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."} />
                    <CommentProductItem name={'Ethan R.'} rating={4} text={"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."} />
                    <CommentProductItem name={'Ethan R.'} rating={4} text={"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."} />
                    <CommentProductItem name={'Ethan R.'} rating={4} text={"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."} />
                </div>
                <BlackButton text={'Load more'}/>
            </div>
        </div>
    );
};

export default CommentsProducts;