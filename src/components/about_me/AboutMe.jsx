import React from "react";
import Skills from "./skills/Skills";

import c from './about_me.module.scss';
import Education from "./education/Education";
import Button from "../button/Button";
import PageHeader from "../page_header/PageHeader";
import avatar from '../../imgs/AirBrush_20200203115910_LI.jpg';
import AvatarImg from "../avatar_img/AvatarImg";

function AboutMe(props) {
    const personalInfoArr = Object.entries(props.info)
                                .map((item, i) => <li key={i}><span>{item[0]}: </span><span>{item[1]}</span></li>);

    return (
        <section className={c.aboutMe}>
            <PageHeader className={c.sectionHeader} whiteLetters="ОБО" yellowLetters="Мне" shadowWord="Резюме"/>
            
            <div className={c.info}>
                <div className={c.personalInfo}>
                    <h3>
                        ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ
                    </h3>

                    <div className={c.aboutImage}>
                        <AvatarImg img={avatar}/>
                    </div>

                    <ul>
                        {personalInfoArr}
                    </ul>

                    <div className={c.buttonWrap}>
                        <Button title='Загрузить CV'/>
                    </div>
                </div>

                <div className={c.expirience}>
                    <div>
                        <h3>1</h3>
                        <p>ГОДА ОПЫТА</p>
                    </div>
                    <div>
                        <h3>20</h3>
                        <p>ГОТОВЫХ ПРОЕКТОВ</p>
                    </div>
                </div>
            </div>

            <hr className={c.separator}/>

            <Skills skillsCollection={props.skillsCollection} />

            <p className={c.smallPar}>* Процентные соотношения показаны исключительно для красоты.</p>

            <hr className={c.separator}/>

            <Education educationArr={props.educationArr}/>

            <hr className={c.separator}/>
        </section>
    );
};

export default AboutMe;