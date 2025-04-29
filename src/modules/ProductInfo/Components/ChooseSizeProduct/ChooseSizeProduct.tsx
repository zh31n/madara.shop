import s from './ChooseSizeProduct.module.scss';
import BtnChooseSize from "./BtnChooseSize/BtnChooseSize.tsx";


const ChooseSizeProduct = () => {
    return (
        <div className={s.cont}>
            <h3 className={s.title}>{'Choose Size'}</h3>
            <div className={s.btnSize}>
                <BtnChooseSize text={'4XL'}/>
                <BtnChooseSize text={'M'}/>
                <BtnChooseSize text={'S'} isActive={true}/>
            </div>
        </div>
    );
};

export default ChooseSizeProduct;