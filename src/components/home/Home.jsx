import React from "react";
import AvatarImg from "../avatar_img/AvatarImg";
import {NavLink} from 'react-router-dom';
// import LanguageSwitch from "../lang_switch/LanguageSwitch";
import avatar from '../../imgs/avatar_photo.jpg';

import c from './home.module.scss';
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section className={c.myHome}>
      {/* <LanguageSwitch /> */}

      <div className={c.homeMeWrap}>
          <div className={c.homeMeImage}>
              <AvatarImg img={avatar}/>
          </div>

          <div className={c.homeMeDescription}>
            <div className={c.homeTitle}>
              <h1>
                {t('home.me')}
              </h1>

              <span>{t('home.job')}</span>
            </div>

            <p>
              {t('home.details')} 
            </p>
            <p>
              {t('home.extra')} 
            </p>

            <div className={c.buttonwrap}>
              <NavLink 
                to={'about_me'} 
                className={c.navlink}
                activeStyle={{
                                backgroundColor: '#ffb400;',
                            }}>
                <h4>
                    {t('navlinks.more')}...
                </h4>
              </NavLink>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Home;