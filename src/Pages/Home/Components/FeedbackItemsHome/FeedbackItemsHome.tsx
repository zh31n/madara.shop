import s from './FeedbackItemsHome.module.scss';
import arrowLeft from '../../../../assets/img/arrowLeft.svg';
import arrowRight from '../../../../assets/img/arrowRight.svg';
import FeedBackItemHome from "./components/FeedBackItemHome/FeedBackItemHome.tsx";
import {feedbackItemDbI} from "../../../../types/thunks.ts";



const FeedbackItemsHome = ({items}:{items: feedbackItemDbI[]}) => {

    const feedbackItemsMap = items?.map(item => <FeedBackItemHome rating={item.rating} name={item.name} text={item.text}/>)

    return (
        <section className={s.feed}>
            <div className={s.titleAndArrows}>
                <h1 className={s.title}>OUR HAPPY CUSTOMERS</h1>
                <div className={s.arrows}>
                    <img src={arrowLeft} alt=""/>
                    <img src={arrowRight} alt=""/>
                </div>
            </div>
            <div className={s.itemsMap}>
                {feedbackItemsMap ?? 'loading...'}
            </div>
        </section>
    );
};

export default FeedbackItemsHome;