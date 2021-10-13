import React from "react";
import SkillsCard from "./skills_card/SkillsCard";

import c from './skills.module.css';
import SkillProgrssBar from "./skill_progres_bar/SkillProgresBar"

function Skills() {
    const settings = {
        progressPercent: 45,
        description: 'JAVASCRIPT',
        cx: '50%',
        cy: '50%',
        r: '59',
    };

    return (
        <section className={c.skills} id='skills'>
            <div className={c.skillsWrap}>
                <div>
                    <h3>
                        Мои скиллы
                    </h3>
                </div>

                <div className={c.skillsCollection}>
                    {/* <SkillsCard />
                    <SkillsCard />
                    <SkillsCard /> */}
                    <SkillProgrssBar {...settings}/>
                    <SkillProgrssBar {...settings}/>
                    <SkillProgrssBar {...settings}/>
                    <SkillProgrssBar {...settings}/>
                    <SkillProgrssBar {...settings}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;