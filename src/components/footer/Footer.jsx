import React from "react";

import c from './footer.module.css';

function Footer() {
    return (
        <footer className={c.footer}>
            <div className={c.footerWrap}>
                <h3>
                    Хорунжий Евгений
                </h3>

                <div className={c.footerItemWrap}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <span>&copy; 2019 Все права защищены</span>
            </div>
        </footer>
    );
};

export default Footer;