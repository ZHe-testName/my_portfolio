import React from "react";
import CustomNavLink from "./custom_nav_link/CustomNavLink";

import c from './navbar.module.css';

function NavBar() {
    return (
        <nav className={c.navMain} >
                <ul className={c.menuLinkWrap}>
                    <li>
                        <CustomNavLink href="home" description="Домашняя"/>
                    </li>

                    <li>
                        <CustomNavLink href="about_me" description="Про меня"/>
                    </li>

                    <li>
                        <CustomNavLink href="skills" description="Скилы"/>
                    </li>

                    <li>
                        <CustomNavLink href="works" description="Работы"/>
                    </li>
                    
                    <li>
                        <CustomNavLink href="contacts" description="Контакты"/>
                    </li>
                </ul>
        </nav>
    );
};

export default NavBar;