import React from "react";
import PageHeader from "../page_header/PageHeader";
// import RemoteJob from "../remote_job/RemoteJob";
import SendMailForm from "./send_mail_form/SendMailForm";

import c from './contacts.module.scss';

function Contacts({ onSubmit, sendingStatus }) {
    return (
        <section className={c.contacts} id='contacts'>
            <PageHeader whiteLetters="НА" yellowLetters="Связи" shadowWord="Контакты"/>

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
                            <a
                                className={c.phoneNum}
                                href="mailto:horunzhy.wgen@gmail.com">horunzhy.wgen@gmail.com</a>
                        </div>
                    </div>

                    <div className={c.contactCard}>
                        <div className={c.phone}></div>

                        <div className={c.contact}>
                            <h6>call me</h6>
                            <span>
                                <a 
                                    className={c.phoneNum}
                                    href="tel:{+380638828081}">+3 8063 882 80 81</a>
                            </span>
                        </div>
                    </div>

                    <ul className={c.snLinksWrap}>
                        <li>
                            <a 
                                className={c.fb}
                                href="https://www.facebook.com/horunzhy.wgen"
                                target="_blank"
                                rel="noreferrer">facebook link</a>
                        </li>

                        <li>
                            <a 
                                className={c.li}
                                href="https://linkedin.com/in/евгений-хорунжий-10556b223"
                                target="_blank"
                                rel="noreferrer">linkedin link</a>
                        </li>

                        <li>
                            <a 
                                className={c.git}
                                href="https://github.com/ZHe-testName" 
                                target="_blank"
                                rel="noreferrer">github link</a>
                        </li>
                    </ul>
                </div>

                <SendMailForm onSubmit={onSubmit} sendingStatus={sendingStatus}/>
            </div>

            <hr className={c.separator}/>

            {/* <RemoteJob/> */}
        </section>
    );
};

export default Contacts;