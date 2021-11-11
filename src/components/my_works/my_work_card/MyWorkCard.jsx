import React from "react";

import c from './my_work_card.module.scss';

function MyWorkCard() {
    const onMouseEnterHandler = (e) => {
        // console.log(e);
    }; 

    return (
        <article className={c.myWorkCardWrap}>
            <a 
                className={c.imgLink} 
                href="#"
                onMouseEnter={(e) => onMouseEnterHandler(e)}></a>
        </article>
    );
};

export default MyWorkCard;