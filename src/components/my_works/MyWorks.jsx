import React from "react";
import PageHeader from "../page_header/PageHeader";

import c from './my_works.module.scss';
import MyWorkCard from "./my_work_card/MyWorkCard";

function MyWorks() {
    return (
        <section className={c.myWorks}>
            <div className={c.myWorksWrap}>
                <PageHeader whiteLetters="МОИ" yellowLetters="Работы" shadowWord="Портфолио"/>

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