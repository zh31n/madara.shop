import s from "./CartItem.module.scss";
import Trash from "../../../../assets/img/trash.svg";
import CartCounter from "../CartCounter/CartCounter.tsx";

interface CartItem {
    name:string
    photo:string
    price:number
    size:string
}

const CartItem = ({name,photo,price,size}:CartItem) => {
    return (
        <div className={s.cartItem}>
            <div className={s.photo}>
                <img src={photo} alt="image product"/>
            </div>
            <div className={s.cartItemInfo}>
                <div className={s.nameTrash}>
                    <div className={s.name}>{name}</div>
                    <img src={Trash} alt={'Trash'}/>
                </div>
                <div className={s.otherInfo}>
                    <div className={s.title}>Size:</div>{size}
                </div>
                <div className={s.priceCounter}>
                    <div className={s.price}>${price}</div>
                    <CartCounter/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;