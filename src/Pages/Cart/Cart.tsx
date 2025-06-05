import s from './Cart.module.scss';
import CartItem from "./components/CartItem/CartItem.tsx";
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";

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
                <div className={s.infoCart}>
                    <div className={s.title}>Order Summary</div>
                    <div className={s.infoLine}>
                        <div className={s.sub}>Subtotal</div>
                        <div className={s.price}>$565</div>
                    </div>
                    <div className={s.infoLine}>
                        <div className={s.sub}>Discount (-20%)</div>
                        <div className={s.price}>-$113</div>
                    </div>
                    <div className={s.infoLine}>
                        <div className={s.sub}>Delivery Fee</div>
                        <div className={s.price}>$15</div>
                    </div>
                    <HorizontalLine margin={10} />
                    <div className={s.total}>
                        <div className={s.sub}>Total</div>
                        <div className={s.price}>$467</div>
                    </div>
                    <div className={s.promo}>
                        <input placeholder={'Add promo code'}/>
                        <BlackButton text={'Apply'} width={119} height={48} />
                    </div>
                    <BlackButton text={'Go to Checkout'} width={457} fz={16}/>
                </div>
            </div>
        </div>
    );
};

export default Cart;