import s from './Counter.module.scss';

const Counter = () => {
    return (
        <div className={s.counter}>
            <button>-</button>
            <div className={s.count}>1</div>
            <button>+</button>
        </div>
    );
};

export default Counter;