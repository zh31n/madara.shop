import {FC} from "react";
import IntroHome from "./Components/IntroHome/IntroHome.tsx";
import NewArrivalsHome from "./Components/NewArrivalsHome/NewArrivalsHome.tsx";


const Home: FC = () => {
    return (
        <section className={'container'}>
            <IntroHome/>
            <NewArrivalsHome/>
        </section>
    );
};

export default Home;