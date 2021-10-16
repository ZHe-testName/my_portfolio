import React from "react";
import Button from "../../button/Button";

import c from './my_work_card.module.scss';

function MyWorkCard() {
    const onMouseEnterHandler = (e) => {
        // console.log(e);
    }; 

    return (
        <article className={c.myWorkCardWrap}>
            <div 
                className={c.imgLink} 
                href="#"
                onMouseEnter={(e) => onMouseEnterHandler(e)}></div>
        </article>
    );
};

export default MyWorkCard;