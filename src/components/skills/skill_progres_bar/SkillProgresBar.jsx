import React from "react";

import c from './skill_prores_barr.module.css';

function SkillProgrssBar(props) {
    const {width, height, stroke, strokeWidth, progressPercent, percentNum, cx, cy, r} = props;

    const circumfrence = 2 * Math.PI * r;

    const strokeDasharray = `${circumfrence} ${circumfrence}`,
        strokeDashOffset = circumfrence - progressPercent / 100 * circumfrence;

    return (
        <div 
            className={c.progressBarWrap}>
            <div className={c.back}>

            </div>

            <span
                className={c.scale}>
                    {percentNum}
            </span>

            <svg 
                width={width}
                height={height}>
                    <circle
                        className={c.circle}
                        stroke={stroke}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill="transparent"
                        style={{
                            strokeDasharray: strokeDasharray,
                            strokeDashoffset: strokeDashOffset,
                        }}/>

            </svg>
        </div>
    );
};

export default SkillProgrssBar;