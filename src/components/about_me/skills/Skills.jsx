import React from "react";

import c from './skills.module.scss';
import SkillProgrssBar from "./skill_progres_bar/SkillProgresBar"

function Skills(props) {
    const r = '59';

    const skillsList = props.skillsCollection.map((el, i) => {
        const settings = {
            progressPercent: el[0], 
            description: el[1],
            r: r,
        };

        return (
            <SkillProgrssBar key={props.skillsCollection[i][1]} {...settings}/>
        );
    });

    return (
        <section className={c.skills} id='skills'>
            <div className={c.skillsWrap}>
                <div>
                    <h3>
                        Мои скиллы
                    </h3>
                </div>

                <ul className={c.skillsCollection}>
                    {skillsList}
                </ul>
            </div>
        </section>
    );
};

export default Skills;