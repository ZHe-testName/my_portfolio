import React from "react";

import c from './home.module.css';

function Home() {
    return (
        <section className={c.aboutMe}>
            <div className={c.aboutMeWrap}>
                <div className={c.aboutMeDescription}>
                    <p>Привет!</p>
                    <p>Меня зовут Хорунжий Евгений</p>
                    <p>Я Front-End разработчик</p>
                </div>

                <div className={c.aboutMeImage}>
                    Я бла-бла-бла...
                </div>
            </div>
        </section>
    );
};

export default Home;