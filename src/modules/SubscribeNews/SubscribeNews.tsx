import s from './SubscribeNews.module.scss';
import SearchInput from "../../UI/SearchInput/SearchInput.tsx";
import Mail from "../../assets/img/mail.svg";
import WhiteButton from "./WhiteButton/WhiteButton.tsx";

const SubscribeNews = () => {
    return (
        <div className={s.subscribe}>
            <h1 className={s.title}>STAY UPTO DATE ABOUT<br/> OUR LATEST OFFERS</h1>
            <div className={s.form}>
                <SearchInput img={Mail} width={349} placeholder={'Enter your email address'} type={'email'} />
                <WhiteButton/>
            </div>
        </div>
    );
};

export default SubscribeNews;