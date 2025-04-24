import s from './NewArrivalsHome.module.scss';
import BlackButton from "../../../../Components/BlackButton/BlackButton.tsx";
import ProductItem from "../../../../Components/ProductItem/ProductItem.tsx";


const NewArrivalsHome = () => {
    return (
        <section className={s.arrivals}>
            <h1 className={s.title}>NEW ARRIVALS</h1>
            <div className={s.arrMap}>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
                <ProductItem name={'Gradient Graphic T-shirt'} price={240} discount={20} rating={4.5} oldPrice={260}/>
            </div>
            <BlackButton text={'view all'}/>
        </section>
    );
};

export default NewArrivalsHome;