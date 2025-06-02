import s from './CartCounter.module.scss';


const CartCounter = () => {
    return (
        <div className={s.counter}>
            <button>-</button>
            <div className={s.count}> 1 </div>
            <button>+</button>
        </div>
    );
};

export default CartCounter;