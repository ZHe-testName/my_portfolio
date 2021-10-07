import React from "react";
import Skills from "../skills/Skills";

import c from './about_me.module.css';

function AboutMe(props) {
    const personalInfoArr = Object.entries(props.info)
                                .map(item => <li><span>{item[0]}: </span><span>{item[1]}</span></li>);

    return (
        <section className={c.aboutMe}>
            <div className={c.aboutMeTitle}>
                <h1>ПРО
                    <span>Меня</span>
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

                    <div>
                        <ul>
                            {personalInfoArr}
                        </ul>

                        <button>
                            Загрузить CV
                        </button>
                    </div>
                </div>

                <div className={c.expirience}>
                    <div>
                        <h3>1</h3>
                        <p>ГОД ОПЫТА</p>
                    </div>
                    <div>
                        <h3>20</h3>
                        <p>ГОТОВЫХ ПРОЕКТОВ</p>
                    </div>
                    {/* <div>
                        <h3></h3>
                        <p></p>
                    </div>
                    <div>
                        <h3></h3>
                        <p></p>
                    </div> */}
                </div>
            </div>

            <Skills/>
        </section>
    );
};

export default AboutMe;