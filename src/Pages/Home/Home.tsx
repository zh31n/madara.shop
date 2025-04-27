import IntroHome from "./Components/IntroHome/IntroHome.tsx";
import HorizontalLine from "../../Components/HorizontalLine/HorizontalLine.tsx";
import TitleProductsItems from "../../Components/TitleProductsItems/TitleProductsItems.tsx";


const Home = () => {
    return (
        <section className={'container'}>
            <IntroHome/>
            <TitleProductsItems/>
            <HorizontalLine/>
            <TitleProductsItems title={'top selling'} />
        </section>
    );
};

export default Home;