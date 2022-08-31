import HeaderItem from "./HeaderItem/HeaderItem";
import s from "./Header.module.scss";
import { headerInfo } from "./constans";

function Header(){
    return(
        <header>
            <div className={s.logo}>Material Kit 2</div>
            <nav className={s.nav}>
                {headerInfo.map((item, idx) => <HeaderItem 
                    key={idx}
                    title={item.title} 
                    multi={item.multi}
                    icon={item.icon}
                    />)}
            </nav>

        </header>
    )
}

export default Header;