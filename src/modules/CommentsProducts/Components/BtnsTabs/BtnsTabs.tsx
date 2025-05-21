import s from './BtnsTabs.module.scss';

const BtnsTabs = () => {
    return (
        <section className={s.btnTabs}>
            <div className={s.btn}>Product Details</div>
            <div className={s.btnActive}>Rating & Reviews</div>
            <div className={s.btn}>FAQs</div>
        </section>
    );
};

export default BtnsTabs;