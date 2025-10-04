import s from "./Accordeon.module.scss";
import {faqData} from "../../Pages/ProductPage/FaqStaticData.ts";
import AccordeonItem from "./AccordeonItem/AccordeonItem.tsx";

const Accordeon = () => {

    const accordeonItems = faqData.map(i => <AccordeonItem ans={i.ans} ques={i.ques}/>);

    return (
        <div className={s.faqs}>
            {accordeonItems}
        </div>
    );
};

export default Accordeon;