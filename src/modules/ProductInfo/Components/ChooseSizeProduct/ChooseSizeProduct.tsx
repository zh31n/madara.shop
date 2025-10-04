import s from './ChooseSizeProduct.module.scss';
import BtnChooseSize from "./BtnChooseSize/BtnChooseSize.tsx";
import {stateSizeI} from "../../../../Redux/Reducers/productPageReducer.ts";
import {useAppSelector} from "../../../../Redux/store.ts";


const ChooseSizeProduct = ({sizes}:{sizes:stateSizeI[]}) => {

    const currentSize = useAppSelector(state => state.productPage.currentSize)

    const sizesMap = sizes.map((s) => <BtnChooseSize
        isActive={currentSize === s.nameSize.toLowerCase()} text={s.nameSize}
    />)


    return (
        <div className={s.cont}>
            <h3 className={s.title}>{'Choose Size'}</h3>
            <div className={s.btnSize}>{sizesMap}</div>
        </div>
    );
};

export default ChooseSizeProduct;