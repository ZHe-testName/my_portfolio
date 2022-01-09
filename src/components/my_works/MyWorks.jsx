import React, { useEffect, useState } from "react";
import PageHeader from "../page_header/PageHeader";

import c from './my_works.module.scss';
import MyWorkCard from "./my_work_card/MyWorkCard";

function MyWorks(props) {
    const [isDesktop, switchIsDesktop] = useState(true);

    useEffect(() => {
        if (document.documentElement.clientWidth <= 1025){
            switchIsDesktop(false)
        };
    }, []);

    return (
        <section className={c.myWorks}>
            <div className={c.myWorksWrap}>
                <PageHeader whiteLetters="МОИ" yellowLetters="Работы" shadowWord="Портфолио"/>

                <div className={c.myWorksCollection}>
                    {
                        props.myWorksData.map(item => <MyWorkCard key={item.curtainTitle} {...item} isDesktop={isDesktop}/>)
                    }
                </div>

                <div className={c.ghLink}>
                    <a href="https://github.com/ZHe-testName" target="_blank" rel="noreferrer">
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