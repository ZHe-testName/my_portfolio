import React from "react";

import c from './header.module.css';

function Header() {
    return (
        <header className={c.header} id='header'>
            <div className={c.menuWrap}>
                <nav className={c.menuLinkWrap}>
                    <a href='#'>Главная</a>

                    <a href='#skills'>Скилы</a>

                    <a href='#my_works'>Работы</a>

                    <a href='#contacts'>Контакты</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;