import s from './Cart.module.scss';
import CartItem from "./components/CartItem/CartItem.tsx";

const Cart = () => {
    return (
        <div className={'container'}>
            <div className={s.title}>your cart</div>
            <div className={s.cartContainer}>
                <div className={s.cartItems}>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
            </div>
        </div>
    );
};

export default Cart;