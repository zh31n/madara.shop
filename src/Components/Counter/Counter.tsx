import s from './Counter.module.scss';
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import {decrementProductCount, incrementProductCount} from "../../Redux/Reducers/productPageReducer.ts";

const Counter = () => {

    const count = useAppSelector(state => state.productPage.productCount);
    const dispatch = useAppDispatch();

    return (
        <div className={s.counter}>
            <button onClick={() => dispatch(decrementProductCount())}>-</button>
            <div className={s.count}> {count} </div>
            <button onClick={() => dispatch(incrementProductCount())}>+</button>
        </div>
    );
};

export default Counter;