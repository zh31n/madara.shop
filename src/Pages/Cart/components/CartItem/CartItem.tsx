import s from "./CartItem.module.scss";
import imageProduct from "../../../../assets/img/image 7.png";
import Trash from "../../../../assets/img/trash.svg";
import CartCounter from "../CartCounter/CartCounter.tsx";


const CartItem = () => {
    return (
        <div className={s.cartItem}>
            <div className={s.photo}>
                <img src={imageProduct} alt="image product"/>
            </div>
            <div className={s.cartItemInfo}>
                <div className={s.nameTrash}>
                    <div className={s.name}>Gradient Graphic T-shirt</div>
                    <img src={Trash} alt={'Trash'}/>
                </div>
                <div className={s.otherInfo}>
                    <div className={s.title}>Size:</div>XL
                </div>
                <div className={s.priceCounter}>
                    <div className={s.price}>$500</div>
                    <CartCounter/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;