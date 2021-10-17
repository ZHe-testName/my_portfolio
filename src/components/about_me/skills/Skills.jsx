import React, { useState } from "react";

import c from './skills.module.scss';
import SkillProgrssBar from "./skill_progres_bar/SkillProgresBar"

function Skills(props) {
    function compareWidth() {
        if (document.documentElement.clientWidth <= 562){
            return '48'; 
        }

        return '59';
    };

    function throttle(func, ms) {
        let isThrottled = false,
            savedAargs,
            savedThis;

        function wrapper(){
            if(isThrottled){
                savedAargs = arguments;
                savedThis = this;

                return;
            };

            func.apply(this, arguments);

            isThrottled = true;

            setTimeout(function() {
                isThrottled = false;
console.log('in');
                if(savedAargs){
                    wrapper.apply(savedThis, savedAargs);

                    savedAargs = savedThis = null;
                }
            }, ms);
        };

        return wrapper;
    };

    let [r, setR] = useState(compareWidth());

    const setScaleRadius = () => {
        setR(compareWidth());
    }

    window.addEventListener('resize', throttle(setScaleRadius, 800));

    // window.addEventListener('resize', () => {
    //     window.removeEventListener('resize', () => {
    //         window.removeEventListener('resize')
    //         setTimeout(() => console.log('res'), 500)
    //     })
    //     setTimeout(() => {
    //         window.addEventListener('resize', () => {
    //             window.removeEventListener('resize')
    //             setTimeout(() => console.log('res'), 500)
    //         });

            
    //     }, 500)
    // });

    

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