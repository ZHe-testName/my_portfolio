import React from "react";

import c from './skill_prores_barr.module.scss';

function SkillProgrssBar(props) {
    const {progressPercent, description, r} = props;

    const circleLength = 2 * Math.PI * r;

    const strokeDasharray = `${circleLength} ${circleLength}`,
        strokeDashOffset = circleLength - progressPercent / 100 * circleLength;

    

    return (
       <li className={c.progressBarBlock} >
            <div 
                className={c.progressBarWrap}>
                    <div className={c.back}>

                    </div>

                    <span
                        className={c.scale}>
                            {progressPercent + '%'}
                    </span>

                    <svg>
                            <circle
                                className={c.circle}
                                cx='50%'
                                cy='50%'
                                r={r}
                                fill="transparent"
                                style={{
                                    strokeDasharray: strokeDasharray,
                                    strokeDashoffset: strokeDashOffset,
                                }}/>

                    </svg>
            </div>

           <h5>{description}</h5>
        </li>
    );
};

export default SkillProgrssBar;