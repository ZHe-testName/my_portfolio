import React, { useEffect, useRef, useState } from "react";
import Curtain from "../curtain/Curtain";

import c from './my_work_card.module.scss';

function MyWorkCard() {
    const [isCurtainVisible, setCurtainVisibility] = useState(false);
    const [curtainStartPosition, setCurtainStartPosition] = useState('');
    const cardRef = useRef();

    const onMouseEnterHandler = (e) => {
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
            console.log('hi');
            setCurtainVisibility(true);
        };

        if (e.type === 'mouseleave'){
            setTimeout(() => {
                console.log('bye');
                setCurtainVisibility(false);
            }, 600)
            // console.log('bye');
            // setCurtainVisibility(false);
        };

        
    }; 

    return (
        <article 
            className={c.myWorkCardWrap}
            onMouseLeave={(e) => onMouseEnterHandler(e)}
            >
            <div 
                className={c.imgLink} 
                ref={cardRef}
                onMouseEnter={(e) => onMouseEnterHandler(e)}></div>

            {isCurtainVisible && <Curtain 
                                        title={'first title'} 
                                        classPosition={curtainStartPosition}/>}
        </article>
    );
};

export default MyWorkCard;