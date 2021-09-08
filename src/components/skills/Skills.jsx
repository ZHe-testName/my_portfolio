import React from "react";
import SkillsCard from "./skills_card/SkillsCard";

import c from './skills.module.css';

function Skills() {
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
            </div>
        </section>
    );
};

export default Skills;