import React from "react";
import CustomNavLink from "./custom_nav_link/CustomNavLink";

import c from './navbar.module.css';

function NavBar() {
    return (
        <nav className={c.navMain} >
                <ul className={c.menuLinkWrap}>
                    <li>
                        <CustomNavLink href="home" description="Домашняя" bgImageURL={'../../icons/iconmonstr-home-6.svg'}/>
                    </li>

                    <li className={c.about}>
                        <CustomNavLink href="about_me" description="ПроMеня"/>
                    </li>

                    <li className={c.works}>
                        <CustomNavLink href="works" description="Работы"/>
                    </li>
                    
                    <li className={c.contacts}>
                        <CustomNavLink href="contacts" description="Контакты"/>
                    </li>

                    <li className={c.remote}>
                        <CustomNavLink href="remote_job" description="Удалёнка"/>
                    </li>
                </ul>
        </nav>
    );
};

export default NavBar;