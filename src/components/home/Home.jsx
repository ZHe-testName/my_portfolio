import React from "react";

import c from './home.module.css';

function Home() {
    return (
        <section className={c.myHome}>
            <div className={c.homeMeWrap}>
                <div className={c.homeMeImage}>
                </div>

                <div className={c.homeMeDescription}>
                    <h1>
                        Я ХОРУНЖИЙ ЕВГЕНИЙ
                    </h1>

                    <span>JS РАЗРАБОТЧИК</span>

                    <p>
                        Я веб-разработчик из Украины, специализирующийся на создании чистого и удобного интерфейса и приложений. 
                    </p>
                    <p>
                        Увлечен созданием отличного программного обеспечения, которое улучшит жизнь окружающих меня людей.
                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default Home;