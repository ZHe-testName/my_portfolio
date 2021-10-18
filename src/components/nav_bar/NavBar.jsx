import React from "react";
import CustomNavLink from "./custom_nav_link/CustomNavLink";

import c from './navbar.module.scss';

function NavBar(props) {

    return (
        <nav 
            className={`${c.navMain} ${props.navIsVisible && c.visible}`} 
            onClick={props.hiddeNav}>
                <ul className={c.menuLinkWrap}>
                    <li className={c.home}>
                        <CustomNavLink href="home" description="Домашняя" />
                    </li>

                    <li className={c.about}>
                        <CustomNavLink href="about_me" description="ПроMеня" />
                    </li>

                    <li className={c.works}>
                        <CustomNavLink href="works" description="Работы"/>
                    </li>
                    
                    <li className={c.contacts}>
                        <CustomNavLink href="contacts" description="Контакты"/>
                    </li>
                </ul>
        </nav>
    );
};

export default NavBar;