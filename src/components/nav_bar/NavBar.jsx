import React from "react";
import CustomNavLink from "./custom_nav_link/CustomNavLink";

import c from './navbar.module.css';

function Header() {
    return (
        <header className={c.header} id='header'>
            <div className={c.menuWrap}>
                <nav className={c.menuLinkWrap}>
                    <CustomNavLink href="home" description="Домашняя"/>

                    <CustomNavLink href="about_me" description="Про меня"/>

                    <CustomNavLink href="skills" description="Скилы"/>

                    <CustomNavLink href="works" description="Работы"/>

                    <CustomNavLink href="contacts" description="Контакты"/>
                </nav>
            </div>
        </header>
    );
};

export default Header;