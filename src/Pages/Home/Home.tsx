import IntroHome from "./Components/IntroHome/IntroHome.tsx";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import TitleProductsItems from "../../Components/TitleProductsItems/TitleProductsItems.tsx";
import FeedbackItemsHome from "./Components/FeedbackItemsHome/FeedbackItemsHome.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {feedbackItemDbI, newArrivalsI} from "../../types/thunks.ts";
import {getFeedbackThunk, getNewArrivalsThunk, getTopSallingThunk} from "../../Redux/thunkCreators/homePage.ts";


const Home = () => {

    const dispatch = useAppDispatch();
    const newArrivals: newArrivalsI[] = useAppSelector(state => state.mainPage.newArrivals.items);
    const topSalling:newArrivalsI[] = useAppSelector(state => state.mainPage.topSelling.items);
    const feedback:feedbackItemDbI[] = useAppSelector(state => state.mainPage.feedback.items);


    useEffect(() => {
        dispatch(getNewArrivalsThunk());
        dispatch(getTopSallingThunk())
        dispatch(getFeedbackThunk())
    }, [dispatch]);

    return (
        <section className={'container'}>
            <IntroHome/>
            <TitleProductsItems newArrivals={newArrivals} />
            <HorizontalLine/>
            <TitleProductsItems title={'top selling'} newArrivals={topSalling}/>
            <FeedbackItemsHome items={feedback}/>
        </section>
    );
};

export default Home;