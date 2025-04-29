import IntroHome from "./Components/IntroHome/IntroHome.tsx";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import TitleProductsItems from "../../Components/TitleProductsItems/TitleProductsItems.tsx";
import FeedbackItemsHome from "./Components/FeedbackItemsHome/FeedbackItemsHome.tsx";
import SubscribeNews from "../../modules/SubscribeNews/SubscribeNews.tsx";


const Home = () => {
    return (
        <section className={'container'}>
            <IntroHome/>
            <TitleProductsItems/>
            <HorizontalLine/>
            <TitleProductsItems title={'top selling'} />
            <FeedbackItemsHome/>
            <SubscribeNews/>
        </section>
    );
};

export default Home;