import React, { useRef, useState } from "react";
import Curtain from "../curtain/Curtain";

import c from './my_work_card.module.scss';

function MyWorkCard({curtainTitle, link, image, tec, isDesktop, isAdaptive}) {
  const [curtainStartPosition, setCurtainStartPosition] = useState('');
  const [isOn, switchIsOn] = useState(false);
  const cardRef = useRef();

  const onMouseHandler = (e) => {
    const elemBounding = cardRef.current.getBoundingClientRect();

    const topEdgeDist = Math.abs(elemBounding.top - e.clientY);
    const bottomEdgeDist = Math.abs(elemBounding.bottom - e.clientY);
    const leftEdgeDist = Math.abs(elemBounding.left - e.clientX);
    const rightEdgeDist = Math.abs(elemBounding.right - e.clientX);

    const min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);

    switch(min) {
      case leftEdgeDist: 
        setCurtainStartPosition('leftStart');
        break ;
      case rightEdgeDist: 
        setCurtainStartPosition('rightStart');
        break;
      case topEdgeDist: 
        setCurtainStartPosition('topStart');
        break;
      case bottomEdgeDist: 
        setCurtainStartPosition('bottomStart');
        break;
      default:
        break; 
    };

    if (e.type === 'mouseenter'){
        switchIsOn(true);
    };

    if (e.type === 'mouseleave'){
      switchIsOn(false);
      
      setTimeout(() => {
        setCurtainStartPosition('');
      }, 300);
    };   
  }; 
    
  return (
    <article 
      className={c.myWorkCardWrap}
      onMouseLeave={(e) => onMouseHandler(e)}>
      <div 
        className={c.imgLink + ' ' + c[image]} 
        ref={cardRef}
        onMouseEnter={(e) => onMouseHandler(e)}></div>

      <Curtain 
        tec={tec}
        title={curtainTitle} 
        classPosition={curtainStartPosition}
        isOn={isOn}
        link={link}
        isDesktop={isDesktop}
        isAdaptive={isAdaptive}/>
    </article>
  );
};

export default MyWorkCard;