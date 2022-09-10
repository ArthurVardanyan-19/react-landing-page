import HeaderItem from "./HeaderItem/HeaderItem";
import s from "./Header.module.scss";
import { headerInfo } from "./constans";
import CustomButton from "../Custom/CustomButton";

function Header(){
    return(
        <div className={s.main}>
        <header>
            <div className={s.logo}>Material Kit 2</div>
            <nav className={s.nav}>
                {headerInfo.map((item, idx) => <HeaderItem 
                    key={idx}
                    title={item.title} 
                    multi={item.multi}
                    icon={item.icon}
                    />)}
                    <CustomButton value={'Free Download'} />
            </nav>
        </header>
        </div>
    )
}

export default Header;