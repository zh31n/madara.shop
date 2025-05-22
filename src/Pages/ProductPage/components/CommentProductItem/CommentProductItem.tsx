import s from './CommentProductItem.module.scss';
import {FeedbackItemHomeProps} from "./Types.ts";
import Star from '../../../../assets/img/Star.svg';

const CommentProductItem = ({text, rating, name}: FeedbackItemHomeProps) => {
    return (
        <div className={s.item}>
            <div className={s.rating}>
                <img src={Star} alt=""/>{rating}
            </div>
            <div className={s.name}>{name}</div>
            <p className={s.text}>
                {text ?? 'Im blown away by the' +
                    ' quality and style of the clothes I received from Shop.co.From casual wear to elegant dresses,' +
                    ' every piece I ve bought has exceeded my expectations.'}
            </p>
            <span className={s.posted}>Posted on August 18, 2023</span>
        </div>
    );
};

export default CommentProductItem;