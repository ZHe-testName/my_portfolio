import React from "react";
import CustomNavLink from "../nav_bar/custom_nav_link/CustomNavLink";

import c from './home.module.scss';

function Home() {
    return (
        <section className={c.myHome}>
            <div className={c.homeMeWrap}>
                <div className={c.homeMeImage}>
                </div>

                <div className={c.homeMeDescription}>
                    <div className={c.homeTitle}>
                        <h1>
                            Я ХОРУНЖИЙ ЕВГЕНИЙ
                        </h1>

                        <span>JS РАЗРАБОТЧИК</span>
                    </div>

                    <p>
                        Я JS(React)-разработчик из Украины, специализирующийся на создании чистого и удобного интерфейса и приложений. 
                    </p>
                    <p>
                        Увлечен созданием отличного программного обеспечения, которое улучшит жизнь окружающих меня людей.
                    </p>

                    <div className={c.buttonwrap}>
                        <CustomNavLink href="about_me" description="Подробнее..."/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;