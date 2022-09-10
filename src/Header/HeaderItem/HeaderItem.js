import s from "./HeaderItem.module.scss";
import { Link } from "react-router-dom";
import arrowdown from "../../assets/icons/arrowdown.svg"


function HeaderItem ({title, icon, multi}) {
    return (
        <div className={s.headerItem}>
            <div className={s.icon}>
                <img src={icon.src} alt={icon.alt} />
            </div>
            {/* <a href={`/${title}`} className={s.title}>{title}</a> */}
            <Link className={s.titleName} to={`/${title}`}>{title}</ Link>
            {multi && <img  src={arrowdown} alt={'arrowdown'} />}
        </div>
    ) 
}

export default HeaderItem;