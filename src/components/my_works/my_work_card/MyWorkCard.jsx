import React, { useEffect, useRef, useState } from "react";
import Curtain from "../curtain/Curtain";

import c from './my_work_card.module.scss';

function MyWorkCard({curtainTitle, link, image}) {
    const [curtainStartPosition, setCurtainStartPosition] = useState('');
    const [isOn, switchIsOn] = useState(false);
    const cardRef = useRef();

    const onMouseHandler = (e) => {
        const elemBounding = cardRef.current.getBoundingClientRect();
		
		const elementTopEdge = elemBounding.top;
		const elementRightEdge = elemBounding.right;
		const elementBottomEdge = elemBounding.bottom;
		const elementLeftEdge = elemBounding.left;

		const mouseX = e.clientX;
		const mouseY = e.clientY;

		const topEdgeDist = Math.abs(elementTopEdge - mouseY);
		const bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
		const leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
		const rightEdgeDist = Math.abs(elementRightEdge - mouseX);

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
            onMouseLeave={(e) => onMouseHandler(e)}
            >
            <div 
                className={c.imgLink + ' ' + c[image]} 
                ref={cardRef}
                onMouseEnter={(e) => onMouseHandler(e)}></div>

            <Curtain 
                    title={curtainTitle} 
                    classPosition={curtainStartPosition}
                    isOn={isOn}
                    link={link}/>
        </article>
    );
};

export default MyWorkCard;