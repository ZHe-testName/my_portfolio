import React from "react";
import Button from "../button/Button";

import c from './contacts.module.css';

function Contacts() {
    return (
        <section className={c.contacts} id='contacts'>
            <div className={c.header}>
                    <h1>НА
                        <span>Связи</span>
                    </h1>

                    <span>
                        Контакты
                    </span>
            </div>

            <div className={c.contactsWrap}>
                <div className={c.contactsShield}>
                    <h3>
                        не стесняйтесь!
                    </h3>
                    <p>
                        Не стесняйтесь связаться со мной. 
                        Я всегда открыт для обсуждения новых проектов, 
                        творческих идей или возможностей стать частью вашего видения.
                    </p>

                    <div className={c.contactCard}>
                        <div className={c.email}></div>

                        <div className={c.contact}>
                            <h6>mail me</h6>
                            <span>horunzhy.wgen@gmail.com</span>
                        </div>
                    </div>
                    <div className={c.contactCard}>
                        <div className={c.phone}></div>

                        <div className={c.contact}>
                            <h6>call me</h6>
                            <span>+3 8063 882 80 81</span>
                        </div>
                    </div>

                    <ul className={c.snLinksWrap}>
                        <li>
                            <a 
                                className={c.fb}
                                href="#"></a>
                        </li>

                        <li>
                            <a 
                                className={c.li}
                                href="#"></a>
                        </li>

                        <li>
                            <a 
                                className={c.git}
                                href="#"></a>
                        </li>
                    </ul>
                </div>

                <form>
                    <div className={c.inputWrap}>
                        <input type="text" />

                        <input type="text" />

                        <input type="text" />
                    </div>

                    <textarea name="textarea" maxLength='210'></textarea>

                    <Button title='Отправить'/>
                </form>
            </div>
        </section>
    );
};

export default Contacts;