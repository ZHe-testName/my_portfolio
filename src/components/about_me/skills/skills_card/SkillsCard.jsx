import React from "react";

import c from './skills_card.module.css';

function SkillsCard() {
    return (
        <article className={c.skillCardWrap}>
            <div>
                <div className={c.skillCardImage}>

                </div>

                <h4 className={c.skillCardTitle}>
                    React
                </h4>
            </div>

            <div>
                <div className={c.skillCardDescription}>
                    Подробное описание навыка
                </div>
            </div>
        </article>
    );
};

export default SkillsCard;