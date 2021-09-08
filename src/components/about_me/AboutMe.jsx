import React from "react";

import c from './about_me.module.css';

function AboutMe() {
    return (
        <section className={c.aboutMe}>
            <div className={c.aboutMeWrap}>
                <div className={c.aboutMeDescription}>
                    <p>Привет!</p>
                    <p>Меня зовут Хорунжий Евгений</p>
                    <p>Я Front-End разработчик</p>
                </div>

                <div className={c.aboutMeImage}>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutMe;