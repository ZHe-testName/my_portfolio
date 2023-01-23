import { useTranslation } from "react-i18next";

function useValidateForm () {
  const {t} = useTranslation();

  return values => {
    const errors = {};
  
    if (!values.name){
      errors.name = t('validation.name');
    }else if (values.name.length >= 15){
      errors.name = t('validation.name_length');
    }
  
    if (!values.email){
      errors.email = t('validation.email');
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = t('validation.incorrect');
    }
  
    if (!values.subject){
      errors.subject = t('validation.subject');
    }else if (values.subject.length >= 25){
      errors.subject = t('validation.subject_length');
    }
  
    if (!values.message){
      errors.message = t('validation.message');
    }
  
    return errors;
  };
};

export default useValidateForm;