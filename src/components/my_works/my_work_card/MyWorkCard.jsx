import React, { useEffect, useRef, useState } from "react";
import Curtain from "../curtain/Curtain";

import c from './my_work_card.module.scss';

function MyWorkCard() {
    const positionsObj = {
          
    };
    const [isCurtainVisible, setCurtainVisibility] = useState(false);
    const [curtainStartPosition, setCurtainStartPosition] = useState({top: '0px', left: '0px'});
    const cardRef = useRef();

           
    // useEffect(() => {
    //     setCurtainStartPosition({top: '0px', left: '0px'});
    // }, [curtainStartPosition]);

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
                console.log("Лево");
                // setCurtainStartPosition({top: '0px', left: '-300px'});
                break ;
			case rightEdgeDist: 
                console.log('Право');
                break;
			case topEdgeDist: 
                console.log('Верх');
                break;
			case bottomEdgeDist:
                console.log('Низ'); 
                break;
			
		};

        if (e.type === 'mouseenter'){
            console.log('hi');
            setCurtainVisibility(true);
        };

        if (e.type === 'mouseleave'){
            console.log('bye');
            setCurtainVisibility(false);
        };

        
    }; 

    return (
        <article 
            className={c.myWorkCardWrap}
            onMouseLeave={() => setCurtainVisibility(false)}>
            <div 
                className={c.imgLink} 
                ref={cardRef}
                onMouseEnter={(e) => onMouseEnterHandler(e)}></div>

            {isCurtainVisible && <Curtain 
                                        title={'first title'} 
                                        startPosition={curtainStartPosition}/>}
        </article>
    );
};

export default MyWorkCard;