import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import c from './curtain.module.scss';

const Curtain = ({ title, classPosition, isOn, link, tec, isDesktop, isAdaptive }) => {
  const [style, setStyle] = useState({});
  const {t} = useTranslation();
  const showLink = isDesktop || isAdaptive;

  useEffect(() => {
      isOn
        ? setStyle({
            top: '0px',
            left: '0px',
        })
        : setStyle({});
      
  }, [isOn]);

  const onClickHandler = (e) => {
    !showLink && e.preventDefault();
  };

  return (
    <a 
      href={link}
      className={`${c.curtain} ${c[classPosition]} ${!showLink && c.disabled}`}
      style={style}
      target='_blank'
      rel="noreferrer"
      onClick={e => {onClickHandler(e)}}>
      {
        showLink
            ? <>
                <div>
                  { title }
                </div>

                <ul>
                  {tec.map(el => <li key={el}>{el}</li>)}
                </ul>
              </>
            : <h3 className={c.disabledTitle}>
                {t('curtain.full_screen')}
              </h3>
      }
    </a>
  );
};

export default Curtain;