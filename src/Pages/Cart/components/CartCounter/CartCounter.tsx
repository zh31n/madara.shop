import s from './CartCounter.module.scss';


interface CartCounterProps {
    count: number;
    increment: () => void;
    decrement: () => void;
}


const CartCounter = ({count,decrement,increment}:CartCounterProps) => {
    return (
        <div className={s.counter}>
            <button onClick={decrement}>-</button>
            <div className={s.count}> {count} </div>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default CartCounter;