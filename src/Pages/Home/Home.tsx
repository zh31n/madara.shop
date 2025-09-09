import IntroHome from "./Components/IntroHome/IntroHome.tsx";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import TitleProductsItems from "../../Components/TitleProductsItems/TitleProductsItems.tsx";
import FeedbackItemsHome from "./Components/FeedbackItemsHome/FeedbackItemsHome.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {newArrivalsI} from "../../types/thunks.ts";
import {getNewArrivalsThunk, getTopSallingThunk} from "../../Redux/thunkCreators";


const Home = () => {

    const dispatch = useAppDispatch();
    const newArrivals: newArrivalsI[] = useAppSelector(state => state.mainPage.newArrivals.items);
    const topSalling:newArrivalsI[] = useAppSelector(state => state.mainPage.topSelling.items);


    useEffect(() => {
        dispatch(getNewArrivalsThunk());
        dispatch(getTopSallingThunk())
    }, [dispatch]);

    return (
        <section className={'container'}>
            <IntroHome/>
            <TitleProductsItems newArrivals={newArrivals} />
            <HorizontalLine/>
            <TitleProductsItems title={'top selling'} newArrivals={topSalling}/>
            <FeedbackItemsHome/>
        </section>
    );
};

export default Home;