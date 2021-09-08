import React from "react";
import Button from "../button/Button";

import c from './contacts.module.css';

function Contacts() {
    return (
        <section className={c.contacts} id='contacts'>
            <div className={c.contactsWrap}>
                <h3>
                    Контакты
                </h3>

                <form>
                    <input type="text" />

                    <input type="text" />

                    <textarea name="textarea" maxLength='210'></textarea>
                </form>

                <Button title='Отправить'/>
            </div>
        </section>
    );
};

export default Contacts;