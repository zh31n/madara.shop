import s from './Cart.module.scss';
import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine.tsx";
import BlackButton from "../../UI/BlackButton/BlackButton.tsx";
import {useAppDispatch, useAppSelector} from "../../Redux/store.ts";
import CartItem from "./components/CartItem/CartItem.tsx";
import {useEffect} from "react";
import {getCartItemsUserThunk} from "../../Redux/thunkCreators/cartPage.ts";
import {Link, useNavigate} from "react-router-dom";
import {setTotalPrice} from "../../Redux/Reducers/ordersReducer.ts";

const Cart = () => {

    const dispatch = useAppDispatch();
    const baseUrl = 'http://localhost:3003';
    const cartItems = useAppSelector(state => state.cart.cartItems);
    const userId = useAppSelector(state => state.auth.id);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCartItemsUserThunk(+userId!))
    }, []);

    const totalSum = cartItems.reduce((accumulator, currentProduct) => {
        return accumulator + (currentProduct.price * currentProduct.count);
    }, 0);
    let persent = '20%'
    let discardSum =  totalSum / 100 * parseFloat(persent)
    let totalsSum = totalSum - (discardSum - 15);

    useEffect(() => {
        dispatch(setTotalPrice(totalsSum))
    }, [totalsSum]);


    return (
        <div className={'container'}>
            { cartItems.length > 0 ? <>
                <div className={s.title}>your cart</div>
                <div className={s.cartContainer}>
                    <div className={s.cartItems}>
                        {cartItems.map((c, index) => <CartItem
                            photo={baseUrl + c.photo} price={c.price} count={c.count} userId={+userId!}
                            productId={c.productId} name={c.name} key={index} size={c.size}/>)}
                    </div>
                    <div className={s.infoCart}>
                        <div className={s.title}>Order Summary</div>
                        <div className={s.infoLine}>
                            <div className={s.sub}>Subtotal</div>
                            <div className={s.price}>${totalSum}</div>
                        </div>
                        <div className={s.infoLine}>
                            <div className={s.sub}>Discount (-20%)</div>
                            <div className={s.price}>-${discardSum.toFixed(1)}</div>
                        </div>
                        <div className={s.infoLine}>
                            <div className={s.sub}>Delivery Fee</div>
                            <div className={s.price}>$15</div>
                        </div>
                        <HorizontalLine margin={10}/>
                        <div className={s.total}>
                            <div className={s.sub}>Total</div>
                            <div className={s.price}>${totalsSum}</div>
                        </div>
                        <div className={s.promo}>
                            <input placeholder={'Add promo code'}/>
                            <BlackButton text={'Apply'} width={119} height={48}/>
                        </div>
                        <BlackButton onClick={() => navigate('/create-order')}  text={'Go to Checkout'} width={457} fz={16}/>
                    </div>
                </div>
            </> : <div className={s.cartNobody}>
                <p>Cart is empty</p>
                <Link to={'/catalog'}>
                    <BlackButton text={'Go to shop'}/>
                </Link>
            </div>}

        </div>
    );
};

export default Cart;