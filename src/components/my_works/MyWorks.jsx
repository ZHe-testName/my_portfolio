import React from "react";

import c from './my_works.module.css';
import MyWorkCard from "./my_work_card/MyWorkCard";

function MyWorks() {
    return (
        <section className={c.myWorks} id='my_works'>
            <div className={c.myWorksWrap}>
                <div>
                    <h3>
                        Мои работы
                    </h3>
                </div>

                <div className={c.myWorksCollection}>
                    <MyWorkCard />
                    <MyWorkCard />
                </div>
            </div>
        </section>
    );      
};

export default MyWorks;