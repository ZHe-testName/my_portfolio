import React, { useContext, useState } from 'react';
import i18n from '../../i18n';
import LocaleContext from '../../LocaleContext';

import c from './lang_switch.module.scss';

function LanguageSwitch() {
  const {locale} = useContext(LocaleContext);

  function changeLangHandler() {
    if (locale === 'en') {
      i18n.changeLanguage('ua');

      return;
    };

    i18n.changeLanguage('en');
  };

  return (
    <div className={c.toggle_wrapper}>
      <div className={c.checkcross}>
        <input 
          id="checkcross" 
          type="checkbox" 
          checked={locale === 'ua' ? true : false}
          onChange={changeLangHandler}/>

        <label className={c.toggle_item} htmlFor="checkcross">
          <div className={c.check}></div>
        </label>
      </div>
    </div>
  );
}

export default LanguageSwitch;