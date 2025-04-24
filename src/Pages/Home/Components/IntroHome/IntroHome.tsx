import {FC} from "react";
import s from './Intro.module.scss';
import BlackButton from "../../../../Components/BlackButton/BlackButton.tsx";
import {Link} from "react-router-dom";
import CountsInfo from "../CountsInfo/CountsInfo.tsx";
import Madara from '../../../../assets/img/madara.png';

const IntroHome: FC = () => {
    return (
            <div className={s.container}>
                <div className={s.info}>
                    <p className={s.text}>FIND CLOTHES<br/> THAT MATCHES<br/>YOUR STYLE</p>
                    <p className={s.sub}>
                        Browse through our diverse range of meticulously crafted garments,<br/>
                        designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Link to={'/'}>
                        <BlackButton text={'Shop now'}/>
                    </Link>
                    <div className={s.counts}>
                        <CountsInfo number={200} nulls={0} sub={'International Brands'}/>
                        <div className={s.stripe}/>
                        <CountsInfo number={2} sub={'High-Quality Products'}/>
                        <div className={s.stripe}/>
                        <CountsInfo number={30} sub={'Happy Customers'}/>
                    </div>
                </div>
                <div className={s.infoImg}>
                    <img src={Madara} height={660} alt={'madara'}/>
                </div>
            </div>
    );
};

export default IntroHome;