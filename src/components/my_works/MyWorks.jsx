import React from "react";

import c from './my_works.module.css';
import MyWorkCard from "./my_work_card/MyWorkCard";

function MyWorks() {
    return (
        <section className={c.myWorks}>
            <div className={c.myWorksWrap}>
                <div className={c.header}>
                    <h1>МОИ
                        <span>Работы</span>
                    </h1>

                    <span>
                        Поптфолио
                    </span>
                </div>

                <div className={c.myWorksCollection}>
                    <MyWorkCard />
                    <MyWorkCard />
                    <MyWorkCard />
                </div>
            </div>
        </section>
    );      
};

export default MyWorks;