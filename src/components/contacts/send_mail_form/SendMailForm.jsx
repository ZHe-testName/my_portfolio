import { useFormik } from "formik";
import React from "react";
import Button from "../../button/Button";

import c from './form.module.scss';
import SuccessPopup from "../success_popup/SuccessPopup";
import { useTranslation } from "react-i18next";
import useValidateForm from "../../../hooks/useValidateForm";

const SendMailForm = ({onSubmit, sendingStatus}) => {
  const {t} = useTranslation();
  const validate = useValidateForm();

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
            placeholder={t('mail_form.your_name')}
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
              placeholder={t('mail_form.your_email')}
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
              placeholder={t('mail_form.your_subject')}
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
          placeholder={t('mail_form.your_message')}
          onChange={formik.handleChange}
          value={formik.values.message}></textarea>

          {formik.errors.message && formik.touched.message 
            ? <div className={c.errorMessage}>{formik.errors.message}</div> 
            : null}
      </div>

      <div className={c.buttonWrap}>
        <Button title={t('mail_form.send')} type="submit"/>

        <SuccessPopup status={sendingStatus}/>
      </div>
    </form>
  );
};

export default SendMailForm;