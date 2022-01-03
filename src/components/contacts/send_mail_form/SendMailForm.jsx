import { useFormik } from "formik";
import React from "react";
import Button from "../../button/Button";

import c from './form.module.scss';
import SuccessPopup from "../success_popup/SuccessPopup";

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
                    maxLength={210} 
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

export default SendMailForm;