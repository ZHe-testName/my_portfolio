import React from "react";

import c from './my_works.module.scss';
import MyWorkCard from "./my_work_card/MyWorkCard";

function MyWorks() {
    return (
        <section className={c.myWorks}>
            <div className={c.myWorksWrap}>
                <div className={c.header}>
                    <h1>МОИ
                        <span>Работы</span>
                    </h1>

                    <span className={c.shadow}>
                        Поптфолио
                    </span>
                </div>

                <div className={c.myWorksCollection}>
                    <MyWorkCard />
                    <MyWorkCard />
                    <MyWorkCard />
                    <MyWorkCard />
                    <MyWorkCard />
                    <MyWorkCard />
                    <MyWorkCard />
                    <MyWorkCard />
                    <MyWorkCard />
                </div>

                <div className={c.ghLink}>
                    <a href="https://github.com/ZHe-testName" target="_blank">
                        <h3>
                            GitHab
                        </h3>
                    </a>
                </div>
            </div>
        </section>
    );      
};

export default MyWorks;