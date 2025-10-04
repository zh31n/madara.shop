import s from './BtnChooseSize.module.scss';
import {IBtnChooseSize} from "./Type.ts";
import {motion} from "framer-motion";
import {useAppDispatch} from "../../../../../Redux/store.ts";
import {setCurrentSize} from "../../../../../Redux/Reducers/productPageReducer.ts";


const BtnChooseSize = ({text, isActive}: IBtnChooseSize) => {

    const dispatch =  useAppDispatch();

    return (
        <motion.button onClick={() => dispatch(setCurrentSize(text.toLowerCase()))}
                       className={isActive ? s.activeBtn : s.btn}
        >
            {text}
        </motion.button>
    );
};

export default BtnChooseSize;