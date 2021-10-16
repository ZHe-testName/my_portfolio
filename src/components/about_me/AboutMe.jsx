import React from "react";
import Skills from "./skills/Skills";

import c from './about_me.module.scss';
import Education from "./education/Education";
import Button from "../button/Button";

function AboutMe(props) {
    const personalInfoArr = Object.entries(props.info)
                                .map((item, i) => <li key={i}><span>{item[0]}: </span><span>{item[1]}</span></li>);

    return (
        <section className={c.aboutMe}>
            <div className={c.aboutMeTitle}>
                <h1>ОБО
                    <span>Мне</span>
                </h1>

                <span className={c.shadow}>
                    Резюме
                </span>
            </div>

            <div className={c.info}>
                <div className={c.personalInfo}>
                    <h3>
                        ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ
                    </h3>

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

            <Skills skillsCollection={props.skillsCollection}/>

            <hr className={c.separator}/>

            <Education educationArr={props.educationArr}/>

            <hr className={c.separator}/>
        </section>
    );
};

export default AboutMe;