import React from "react";
import Skills from "./skills/Skills";

import c from './about_me.module.scss';
import Education from "./education/Education";
import Button from "../button/Button";
import PageHeader from "../page_header/PageHeader";
import avatar from '../../imgs/avatar_photo.jpg';
import AvatarImg from "../avatar_img/AvatarImg";
import file from '../../cv/cv.pdf';
import { useTranslation } from "react-i18next";

function AboutMe(props) {
  const {t} = useTranslation();

  const personalInfoArr = Object
    .entries(props.info)
    .map((item, i) => <li key={i}><span>{item[0]}: </span><span>{item[1]}</span></li>);

    return (
      <section className={c.aboutMe}>
        <PageHeader 
          className={c.sectionHeader} 
          whiteLetters={t('about.about')} 
          yellowLetters={t('about.me')} 
          shadowWord={t('about.resume')}/>
        
        <div className={c.info}>
          <div className={c.personalInfo}>
            <h3>
              {t('about.personal')}
            </h3>

            <div className={c.aboutImage}>
              <AvatarImg img={avatar}/>
            </div>

            <ul>
              {personalInfoArr}
            </ul>

            <div 
              className={c.buttonWrap}>
              <Button 
                title={t('about.download')}>
                <a href={file} download={true}>download cv</a>
              </Button>
            </div>
          </div>

          <div className={c.experience}>
            <div>
              <h3>2</h3>
              <p>{t('about.experience')}</p>
            </div>
            <div>
              <h3>5</h3>
              <p>{t('about.projects')}</p>
            </div>
          </div>
        </div>

        <hr className={c.separator}/>

        <Skills skillsCollection={props.skillsCollection} />

        <p className={c.smallPar}>* {t('about.percentage')}.</p>

        <hr className={c.separator}/>

        <Education educationArr={props.educationArr}/>

        <hr className={c.separator}/>
      </section>
  );
};

export default AboutMe;