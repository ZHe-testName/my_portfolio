import React from "react";
import SkillsCard from "./skills_card/SkillsCard";

import c from './skills.module.css';
import SkillProgrssBar from "./skill_progres_bar/SkillProgresBar"

function Skills() {
    const settings = {
        width: '140',
        height: '140',
        stroke: '#ffb400',
        strokeWidth: '12',
        progressPercent: 18,
        percentNum: '18%',
        cx: '70',
        cy: '70',
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
                    <SkillsCard />
                    <SkillsCard />
                    <SkillsCard />
                </div>

                <div>
                    <SkillProgrssBar {...settings}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;