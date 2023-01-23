import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useWindowResize from "../../../hooks/useWindowResize";
import c from './skills.module.scss';
import SkillProgressBar from "./skill_progress_bar/SkillProgressBar"

function Skills(props) {
  const {t} = useTranslation();

  //radius skill scale values for correct rendering on different screens 
  function compareWidth() {
      return (document.documentElement.clientWidth <= 562) ? '48' : '59';
  };

  let [r, setR] = useState(compareWidth());

  const setScaleRadius = () => {
    setR(compareWidth());
  };

  useWindowResize(setScaleRadius, 800);

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