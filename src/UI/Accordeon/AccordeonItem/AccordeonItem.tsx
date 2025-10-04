import s from "../Accordeon.module.scss";
import {useState} from "react";

const AccordeonItem = ({ans,ques}:{ans:string,ques:string}) => {

    const [active, setActive] = useState(false);

    return (
        <div className={s.faqItem}>
            <div onClick={() => setActive(!active)} className={s.fHeader}>
                {ques}
                <span className={ active ? s.activePlus : s.plus}>+</span>
            </div>
            { active && <div style={active && {opacity:'100%'}} className={s.text}>{ans}</div>}
        </div>
    );
};

export default AccordeonItem;