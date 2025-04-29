import IntroHome from "./Components/IntroHome/IntroHome.tsx";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import TitleProductsItems from "../../Components/TitleProductsItems/TitleProductsItems.tsx";
import FeedbackItemsHome from "./Components/FeedbackItemsHome/FeedbackItemsHome.tsx";


const Home = () => {
    return (
        <section className={'container'}>
            <IntroHome/>
            <TitleProductsItems/>
            <HorizontalLine/>
            <TitleProductsItems title={'top selling'} />
            <FeedbackItemsHome/>
        </section>
    );
};

export default Home;