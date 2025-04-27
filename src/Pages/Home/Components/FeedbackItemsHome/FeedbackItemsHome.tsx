import s from './FeedbackItemsHome.module.scss';
import arrowLeft from '../../../../assets/img/arrowLeft.svg';
import arrowRight from '../../../../assets/img/arrowRight.svg';
import FeedBackItemHome from "./components/FeedBackItemHome/FeedBackItemHome.tsx";



const FeedbackItemsHome = () => {


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
                <FeedBackItemHome rating={4} name={'Sarah M.'} />
                <FeedBackItemHome rating={4} name={'Sarah M.'} />
                <FeedBackItemHome rating={4} name={'Sarah M.'} />
            </div>
        </section>
    );
};

export default FeedbackItemsHome;