import s from './CartCounter.module.scss';


interface CartCounterProps {
    count: number;
    increment: () => void;
    decrement: () => void;
    hideCount?: boolean;
}


const CartCounter = ({count, decrement, increment, hideCount}: CartCounterProps) => {
    return (
        <div className={s.counter}>
            {hideCount ? '' : <button onClick={decrement}>-</button>}
            <div className={s.count}> {count} </div>
            {hideCount ? '' : <button onClick={increment}>+</button>}
        </div>
    );
};

export default CartCounter;