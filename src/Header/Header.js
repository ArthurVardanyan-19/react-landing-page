import HeaderItem from "./HeaderItem/HeaderItem";
import s from "./Header.module.scss";
import { headerInfo } from "./constans";
import CustomButton from "../Custom/CustomButton";
import { useEffect, useRef } from "react";
import { setName } from "../Redux/Action";
import { useDispatch } from 'react-redux';

function Header(){
    const dispatch = useDispatch();
    
    useEffect(() => console.log('a'));

    return(

        <div className={s.main}>
        <header>
            <div onClick={() => dispatch(setName('Material Kit 2'))} className={s.logo}>Material Kit 2</div>
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