import s from "./CartItem.module.scss";
import Trash from "../../../../assets/img/trash.svg";
import CartCounter from "../CartCounter/CartCounter.tsx";
import {useAppDispatch} from "../../../../Redux/store.ts";
import {
    changeCountCartItem,
    deleteCartItemUser, outputDataChangeCounterI,
    outputDataDeleteCartItemI
} from "../../../../Redux/thunkCreators/cartPage.ts";
import {decrementCartItem, incrementCartItem} from "../../../../Redux/Reducers/cartReducer.ts";

export interface CartItemI {
    name:string
    photo:string
    price:number
    size:string
    count:number
    productId:string
    userId:number,
    hideCount?: boolean
    hideDel?:boolean
}

const CartItem = ({name,photo,price,size,count,productId,userId,hideCount,hideDel}:CartItemI) => {

    const dispatch = useAppDispatch();
    const dataT: outputDataChangeCounterI = {
        userId,
        productId,
        count: count - 1
    }
    const dataTInc: outputDataChangeCounterI = {
        userId,
        productId,
        count: count + 1
    }
    const deleteCartItem = () => {
        const data: outputDataDeleteCartItemI= {
            userId,
            productId:productId,
        }
        dispatch(deleteCartItemUser(data))
    };

    const decrement = () => {
        dispatch(decrementCartItem(productId));
        dispatch(changeCountCartItem(dataT))
    }
    const increment = () => {
        dispatch(incrementCartItem(productId));
        dispatch(changeCountCartItem(dataTInc))
    }

    return (
        <div className={s.cartItem}>
            <div className={s.photo}>
                <img src={photo} alt="image product"/>
            </div>
            <div className={s.cartItemInfo}>
                <div className={s.nameTrash}>
                    <div className={s.name}>{name}</div>
                    { hideDel ? '' : <img onClick={deleteCartItem} src={Trash} alt={'Trash'}/>}
                </div>
                <div className={s.otherInfo}>
                    <div className={s.title}>Size:</div>{size.toUpperCase()}
                </div>
                <div className={s.priceCounter}>
                    <div className={s.price}>${price}</div>
                    <CartCounter hideCount={hideCount} decrement={decrement} increment={increment} count={count}/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;