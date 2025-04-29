import s from './Footer.module.scss';
import visa from '../../assets/img/visa.svg';

const Footer = () => {
    return (
        <div className={'container'}>
            <div className={s.info}>
                <div className={s.name}>Anime.co © 2000-2023, All Rights Reserved</div>
                <img src={visa} alt="visa"/>
            </div>
        </div>
    );
};

export default Footer;