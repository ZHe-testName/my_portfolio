import React from "react";
import CustomNavLink from "./custom_nav_link/CustomNavLink";
import homeIcon from '../../icons/iconmonstr-home-6.svg';

import c from './navbar.module.scss';
import { useTranslation } from "react-i18next";

function NavBar(props) {
  const {t} = useTranslation();

  return (
    <nav 
      className={`${c.navMain} ${props.navIsVisible ? c.visible : undefined}`} 
      onClick={props.hiddeNav}
      >
      <ul className={c.menuLinkWrap}>
        <li className={c.home}>
          <CustomNavLink href="home" description={t('navlinks.home')} icon={homeIcon}/>
        </li>

        <li className={c.about}>
          <CustomNavLink href="about_me" description={t('navlinks.about')} />
        </li>

        <li className={c.works}>
          <CustomNavLink href="works" description={t('navlinks.works')}/>
        </li>
        
        <li className={c.contacts}>
          <CustomNavLink href="contacts" description={t('navlinks.contacts')}/>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;