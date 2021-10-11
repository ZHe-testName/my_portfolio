import React from "react";
import Skills from "../skills/Skills";

import c from './about_me.module.css';

function AboutMe(props) {
    const personalInfoArr = Object.entries(props.info)
                                .map((item, i) => <li key={i}><span>{item[0]}: </span><span>{item[1]}</span></li>);

    return (
        <section className={c.aboutMe}>
            <div className={c.aboutMeTitle}>
                <h1>ОБО
                    <span>Мне</span>
                </h1>

                <span>
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

                    <div className={c.buttonwrap}>
                        <button>
                            <h3>Загрузить CV</h3>
                        </button>
                    </div>
                </div>

                <div className={c.expirience}>
                    <div>
                        <h3>1</h3>
                        <p>ГОДОВ ОПЫТА</p>
                    </div>
                    <div>
                        <h3>20</h3>
                        <p>ГОТОВЫХ ПРОЕКТОВ</p>
                    </div>
                </div>
            </div>

            <hr className={c.separator}/>

            <Skills/>
        </section>
    );
};

export default AboutMe;