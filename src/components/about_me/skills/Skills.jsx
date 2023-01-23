import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import c from './skills.module.scss';
import SkillProgressBar from "./skill_progress_bar/SkillProgressBar"

function Skills(props) {
  const {t} = useTranslation();

  //radius skill scale values for correct rendering on different screens 
  function compareWidth() {
      return (document.documentElement.clientWidth <= 562) ? '48' : '59';
  };

  //function for throttling pause between screen resizing
  //handler calls
  //used for reducing rerender func calls during
  //to mach screen resizing 
  function throttle(func, ms) {
    let isThrottled = false,
      savedArgs,
      savedThis;

    function wrapper(){
      if(isThrottled){
        savedArgs = arguments;
          savedThis = this;

          return;
      };

      func.apply(this, arguments);

      isThrottled = true;

      setTimeout(function() {
        isThrottled = false;
        
        if(savedArgs){
          wrapper.apply(savedThis, savedArgs);

          savedArgs = savedThis = null;
        }
      }, ms);
    };

    return wrapper;
  };

  let [r, setR] = useState(compareWidth());

  const setScaleRadius = () => {
    setR(compareWidth());
  };

  //To ask why useEffect have so strange behavior
  //and works only disabled input is include(look on top of the file) 
  useEffect(() => {
    window.addEventListener('resize', throttle(setScaleRadius, 800));

    return function cleanup(){
      window.removeEventListener('resize', throttle(setScaleRadius, 800));
    }
  }, []);

  const skillsList = props.skillsCollection.map((el, i) => {
    const settings = {
      progressPercent: el[0], 
      description: el[1],
      r: r,
    };

    return (
      <SkillProgressBar key={props.skillsCollection[i][1]} {...settings}/>
    );
  });

  return (
    <section className={c.skills} id='skills'>
      <div className={c.skillsWrap}>
        <div>
          <h3>
            {t('skill.my')}
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