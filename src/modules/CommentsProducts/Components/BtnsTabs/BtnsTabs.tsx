import s from './BtnsTabs.module.scss';
import {useAppDispatch, useAppSelector} from "../../../../Redux/store.ts";
import {setCurrentTab} from "../../../../Redux/Reducers/productPageReducer.ts";

const BtnsTabs = () => {

    const currentTab = useAppSelector(state => state.productPage.currentTab);
    const dispatch = useAppDispatch();

    return (
        <section className={s.btnTabs}>
            <div onClick={() => dispatch(setCurrentTab(1))}
                 className={ currentTab === 1 ? s.btnActive : s.btn}>Rating & Reviews</div>
            <div onClick={() => dispatch(setCurrentTab(2))}
                 className={currentTab === 2 ? s.btnActive : s.btn}>FAQs</div>
        </section>
    );
};

export default BtnsTabs;