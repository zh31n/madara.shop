import s from './BtnChooseSize.module.scss';
import {IBtnChooseSize} from "./Type.ts";
import {motion} from "framer-motion";


const BtnChooseSize = ({text, isActive}: IBtnChooseSize) => {
    return (
        <motion.button className={isActive ? s.activeBtn : s.btn}>{text}</motion.button>
    );
};

export default BtnChooseSize;