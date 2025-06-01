import s from "./categorLink.module.scss";
import arrowRight from "../../../../../../assets/img/aerrow_right.svg";
import {ICategoryLink} from "./Types.ts";


const CategorLink = ({text}:ICategoryLink) => {
    return (
        <div className={s.categorieLink}>
            {text}
            <img src={arrowRight} alt={'arrow-right'}/>
        </div>
    );
};

export default CategorLink;