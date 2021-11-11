import { useFormik, useFormikContext } from "formik";
import React from "react";
import Button from "../button/Button";
import PageHeader from "../page_header/PageHeader";
import RemoteJob from "../remote_job/RemoteJob";

import c from './contacts.module.scss';
import SuccessPopup from "./success_popup/SuccessPopup";

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
                                rel="noreferrer"></a>
                        </li>

                        <li>
                            <a 
                                className={c.li}
                                href="https://www.facebook.com/horunzhy.wgen"
                                target="_blank"
                                rel="noreferrer"></a>
                        </li>

                        <li>
                            <a 
                                className={c.git}
                                href="https://github.com/ZHe-testName" 
                                target="_blank"
                                rel="noreferrer"></a>
                        </li>
                    </ul>
                </div>


                <SendMailForm onSubmit={onSubmit} sendingStatus={sendingStatus}/>
            </div>

            <hr className={c.separator}/>

            <RemoteJob/>
        </section>
    );
};

const validate = values => {
    const errors = {};

    if (!values.name){
        errors.name = 'Name is Required';
    }else if (values.name.length >= 15){
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.email){
        errors.email = 'Email is Required';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Incorect e-mail adress';
    }

    if (!values.subject){
        errors.subject = 'Subject is Required';
    }else if (values.subject.length >= 25){
        errors.subject = 'Must be 25 characters or less';
    }

    if (!values.message){
        errors.message = 'Message is Required';
    }

    return errors;
};

const SendMailForm = ({onSubmit, sendingStatus}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },

        validate,
    
        onSubmit: (values, e) => {
            onSubmit(values);

            e.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={c.inputWrap}>
                <div>
                    <input 
                        name="name"
                        type="text" 
                        placeholder="YOUR NAME"
                        onChange={formik.handleChange}
                        value={formik.values.name}/>

                        {formik.errors.name && formik.touched.name 
                            ? <div className={c.errorMessage}>{formik.errors.name}</div> 
                            : null}
                </div>

                <div>
                    <input 
                        name="email"
                        type="text" 
                        placeholder="YOUR EMAIL"
                        onChange={formik.handleChange}
                        value={formik.values.email}/>

                        {formik.errors.email && formik.touched.email 
                            ? <div className={c.errorMessage}>{formik.errors.email}</div> 
                            : null}
                </div>

                <div>
                    <input 
                        name="subject"
                        type="text" 
                        placeholder="YOUR SUBJECT"
                        onChange={formik.handleChange}
                        value={formik.values.subject}/>

                        {formik.errors.subject && formik.touched.subject 
                            ? <div className={c.errorMessage}>{formik.errors.subject}</div> 
                            : null}
                </div>
            </div>

            <div className={c.textareaWrap}>
                <textarea 
                    name="message" 
                    maxLength='210' 
                    placeholder="YOUR MESSAGE"
                    onChange={formik.handleChange}
                    value={formik.values.message}></textarea>

                    {formik.errors.message && formik.touched.message 
                        ? <div className={c.errorMessage}>{formik.errors.message}</div> 
                        : null}
            </div>

            <div className={c.buttonWrap}>
                <Button title="Отправить" type="submit"/>

                <SuccessPopup status={sendingStatus}/>
            </div>
        </form>
    );
};

export default Contacts;